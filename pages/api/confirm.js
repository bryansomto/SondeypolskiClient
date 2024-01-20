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
        productId,
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

  res.json({
    url: "/cart?status=confirm",
  });
}
