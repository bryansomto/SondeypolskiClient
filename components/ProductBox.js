import styled from "styled-components";
import CartIcon from "./icons/CartIcon";
import Link from "next/link";
import FlyingButton from "./FlyingButton";

const ProductWrapper = styled.div``;
const WhiteBox = styled(Link)`
  background-color: #fff;
  padding: 20px;
  height: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img {
    max-width: 100%;
    max-height: 80px;
  }
`;

const Title = styled(Link)`
  font-weight: normal;
  /* font-size: 0.9rem; */
  margin: 0;
  color: inherit;
  text-decoration: none;
`;

const ProductInfoBox = styled.div`
  margin-top: 5px;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
`;

const Price = styled.div`
  font-size: 1rem;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export default function ProductBox({ _id, title, description, price, images }) {
  const url = "/product/" + _id;
  return (
    <ProductWrapper>
      <WhiteBox href={url}>
        <div>
          <img src={images?.[0]} alt="" />
        </div>
      </WhiteBox>
      <ProductInfoBox>
        <Title href={url} className="text-xs sm:text-sm lg:text-base">
          {title}
        </Title>
        <PriceRow>
          <Price>₦{price}</Price>
          <FlyingButton _id={_id} src={images?.[0]}>
            <p className="hidden md:flex text-sm">Add to cart</p>
            <CartIcon className="flex md:hidden w-4 h-4 sm:w-6 sm:h-6" />
          </FlyingButton>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
}
