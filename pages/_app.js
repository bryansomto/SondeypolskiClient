import "@/styles/globals.css";
import { StyleSheetManager, createGlobalStyle } from "styled-components";
import { CartContextProvider } from "../lib/CartContext";
import isPropValid from "@emotion/is-prop-valid";
import { SessionProvider } from "next-auth/react";

const GlobalStyles = createGlobalStyle`
    body{
      background-color: #eee;
        padding: 0;
        margin: 0;
        font-family: 'Poppins', sans-serif;
    }
    hr{
      display: block;
      border: 0;
      border-top: 1px solid #ccc;
    }
`;

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <StyleSheetManager
        shouldForwardProp={isPropValid}
        disableVendorPrefixes={false}
      >
        <GlobalStyles />
        <SessionProvider session={session}>
          <CartContextProvider>
            <Component {...pageProps} />
          </CartContextProvider>
        </SessionProvider>
      </StyleSheetManager>
    </>
  );
}
