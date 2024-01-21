import Center from "@/components/Center";
import FlyingButton from "@/components/FlyingButton";
import Header from "@/components/Header";
import ProductImages from "@/components/ProductImages";
import Title from "@/components/Title";
import WhiteBox from "@/components/WhiteBox";
import CartIcon from "@/components/icons/CartIcon";
import { CartContext } from "@/lib/CartContext";
import { primary } from "@/lib/colors";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { useContext } from "react";
import styled from "styled-components";

const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: 0.8fr 1.2fr;
    gap: 40px;
  }
  margin-top: 40px;
`;

const PriceRow = styled.div`
  gap: 20px;
  display: flex;
  align-items: center;
`;

const Price = styled.span`
  color: ${primary};
  font-size: 1.7rem;
  font-weight: 600;
`;

export default function ProductPage({ product }) {
  const { addProduct } = useContext(CartContext);
  return (
    <>
      <Header />
      <Center>
        <ColWrapper>
          <WhiteBox>
            <ProductImages images={product.images} />
          </WhiteBox>
          <div className="space-y-4">
            <Title>{product.title}</Title>
            <p>{product.description}</p>
            <PriceRow>
              <div>
                <Price>₦{product.price + ".00"}</Price>
              </div>
              <div>
                <FlyingButton
                  black="true"
                  _id={product._id}
                  src={product.images?.[0]}
                >
                  <CartIcon /> Add to cart
                </FlyingButton>
              </div>
            </PriceRow>
          </div>
        </ColWrapper>
      </Center>
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const product = await Product.findById(id);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}
