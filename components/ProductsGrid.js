import styled from "styled-components";
import ProductBox from "./ProductBox";
import { RevealList, RevealWrapper } from "next-reveal";

const StyledProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  padding-top: 10px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 30px;
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 30px;
  }
`;

export default function ProductsGrid({ products }) {
  return (
    <StyledProductsGrid>
      {products?.length > 0 &&
        products.map((product, index) => (
          <RevealWrapper key={product._id} delay={index * 50}>
            <ProductBox {...product} />
          </RevealWrapper>
        ))}
    </StyledProductsGrid>
  );
}
