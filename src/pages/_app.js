import { ThemeProvider } from "@emotion/react";
import GlobalStyles from "@/components/global-styles";
import NavbarHeader from "@/components/navbar-header";

const theme = {
  colors: {
    primary: "#ff0000",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NavbarHeader />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
