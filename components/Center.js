import styled from "styled-components";

const StyledDiv = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  @media screen and (min-width: 768px) {
    max-width: 90%;
  }
`;

export default function Center({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}
