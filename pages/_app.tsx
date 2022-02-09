import { ApolloProvider } from "@apollo/client";
import { client } from "../apollo";
import { CartProvider } from "../context/Fav";


function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </ApolloProvider>
  );
}

export default MyApp;
