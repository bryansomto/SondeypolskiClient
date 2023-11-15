import { StyleSheetManager, createGlobalStyle } from "styled-components";
import { CartContextProvider } from "../lib/CartContext";
import isPropValid from "@emotion/is-prop-valid";
// import { Helmet, HelmetProvider } from "react-helmet-async";

const GlobalStyles = createGlobalStyle`
    body{
      background-color: #eee;
        padding: 0;
        margin: 0;
        font-family: 'Poppins', sans-serif;
    }
`;

export default function App({ Component, pageProps }) {
  // const helmetContext = {};
  return (
    <>
      {/* <HelmetProvider context={helmetContext}>
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossorigin
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          ></link>
        </Helmet> */}
      <StyleSheetManager
        shouldForwardProp={isPropValid}
        disableVendorPrefixes={false}
      >
        <GlobalStyles />
        <CartContextProvider>
          <Component {...pageProps} />
        </CartContextProvider>
      </StyleSheetManager>
      {/* </HelmetProvider> */}
    </>
  );
}
