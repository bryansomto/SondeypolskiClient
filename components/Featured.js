import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import CartIcon from "./icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "@/lib/CartContext";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;
const Title = styled.h1`
  font-weight: normal;
`;
const Desc = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;
const ColumnsWrapper = styled.div`
  gap: 40px;
  img {
    max-width: 100%;
  }
`;

const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
`;

export default function Featured({ product }) {
  const { addProduct } = useContext(CartContext);
  function addFeaturedToCart() {
    addProduct(product._id);
  }
  return (
    <Bg>
      <Center>
        <ColumnsWrapper className="flex flex-col-reverse md:grid md:grid-flow-col md:auto-cols-[minmax(1,_2fr)]">
          <Column>
            <div className="space-y-3 text-center md:text-left">
              <Title className="text-2xl sm:text-3xl lg:text-5xl">
                {product.title}
              </Title>
              <Desc>{product.description}</Desc>
              <ButtonsWrapper className="justify-center md:justify-start">
                <ButtonLink
                  href={"/products/" + product._id}
                  outline="true"
                  white="true"
                >
                  Read more
                </ButtonLink>
                <Button white="true" onClick={addFeaturedToCart}>
                  <CartIcon />
                  Add to cart
                </Button>
              </ButtonsWrapper>
            </div>
          </Column>

          <Column>
            <img src={product.images[0]} alt={product.title} />
          </Column>
        </ColumnsWrapper>
      </Center>
    </Bg>
  );
}
