import styled from "styled-components";
import Center from "./Center";
import ProductBox from "./ProductBox";
// import tw from "twin.macro";

const ProductsGrid = styled.div`
  gap: 30px;
  padding-top: 10px;
`;

const Title = styled.h2`
  margin: 30px 0 20px;
  font-weight: 400;
`;

export default function NewProducts({ products }) {
  return (
    <Center>
      <Title className="text-2xl sm:text-4xl">New Arrivals</Title>
      <ProductsGrid className="grid grid-cols-3 sm:grid-cols-4">
        {products?.length > 0 &&
          products.map((product) => (
            <ProductBox key={product._id} {...product} />
          ))}
      </ProductsGrid>
    </Center>
  );
}
