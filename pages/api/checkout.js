import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";
import { Product } from "@/models/Product";
import got from "got";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.json("should be a POST request");
    return;
  }
  const {
    name,
    email,
    city,
    postalCode,
    streetAddress,
    country,
    cartProducts,
  } = req.body;
  await mongooseConnect();
  const productsIds = cartProducts;
  const uniqueIds = [...new Set(productsIds)];
  const productsInfos = await Product.find({ _id: uniqueIds });

  let line_items = [];
  let totalAmount = 0;
  for (const productId of uniqueIds) {
    const productInfo = productsInfos.find(
      (p) => p._id.toString() === productId
    );
    const quantity = productsIds.filter((id) => id === productId)?.length || 0;
    if (quantity > 0 && productInfo) {
      line_items.push({
        quantity,
        price_data: {
          currency: "NGN",
          product_data: { name: productInfo.title },
          unit_amount: quantity * productInfo.price,
        },
      });
      totalAmount += quantity * productInfo.price;
    }
  }

  const orderDoc = await Order.create({
    line_items,
    name,
    email,
    city,
    postalCode,
    streetAddress,
    country,
    paid: false,
  });

  const response = await got
    .post("https://api.flutterwave.com/v3/payments", {
      headers: {
        Authorization: `Bearer ${process.env.FLW_SECRET_KEY}`,
      },
      json: {
        tx_ref: Date.now(),
        amount: totalAmount,
        currency: "NGN",
        payment_options: "card,mobilemoney,banktransfer",
        redirect_url: `${process.env.HOME_URL}/cart`,
        meta: {
          orderId: [orderDoc],
        },
        customer: {
          name: name,
          email: email,
        },
        customizations: {
          title: "Besac Payments",
          description: "Payment for items in cart",
          logo: "http://www.piedpiper.com/app/themes/joystick-v27/images/logo.png",
        },
      },
    })
    .json();

  res.json({
    url: response.data.link,
  });
}
