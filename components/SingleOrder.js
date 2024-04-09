import styled from "styled-components";

const StyledOrder = styled.div`
  margin: 10px 0;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  display: flex;
  gap: 20px;
  /* align-items: center; */
  time {
    font-size: 1rem;
    font-weight: bold;
    color: #555;
  }
`;

const ProductRow = styled.div`
  span {
    color: #aaa;
  }
`;

const Address = styled.div`
  font-size: 0.8rem;
  line-height: 1rem;
  margin-top: 5px;
  color: #888;
`;

export default function SingleOrder({ line_items, createdAt, ...rest }) {
  // const options = {
  //   weekday: "long",
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  //   hour: "numeric",
  //   minute: "numeric",
  //   second: "numeric",
  // };
  return (
    <StyledOrder>
      <div>
        <time>{new Date(createdAt).toLocaleString("en-GB")}</time>
        <Address>
          {rest.name}
          <br />
          {rest.email}
          <br />
          {rest.streetAddress}
          <br />
          {rest.postalCode} {rest.city}, {rest.country}
        </Address>
      </div>
      <div>
        {line_items.map((item, i) => (
          <ProductRow key={i}>
            <span> {item.quantity} x </span> {item.price_data.product_data.name}
          </ProductRow>
        ))}
      </div>
    </StyledOrder>
  );
}
