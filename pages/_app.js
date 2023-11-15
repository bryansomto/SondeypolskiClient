import { StyleSheetManager, createGlobalStyle } from "styled-components";
import { CartContextProvider } from "../lib/CartContext";
import isPropValid from "@emotion/is-prop-valid";

const GlobalStyles = createGlobalStyle`
    body{
      background-color: #eee;
        padding: 0;
        margin: 0;
        font-family: 'Poppins', sans-serif;
    }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <StyleSheetManager
        shouldForwardProp={isPropValid}
        disableVendorPrefixes={false}
      >
        <GlobalStyles />
        <CartContextProvider>
          <Component {...pageProps} />
        </CartContextProvider>
      </StyleSheetManager>
    </>
  );
}
