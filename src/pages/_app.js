import GlobalStyles from "@/components/global-styles";
import NavbarHeader from "@/components/navbar-header";
import theme from "@/theme";
import fetcher from "@/utils/fetcher";
import { ThemeProvider } from "emotion-theming";
import { DefaultSeo } from "next-seo";
import getConfig from "next/config";
import { Fragment, useState, useEffect } from "react";
import useSWR from "swr";
import SEO from "../../next-seo.config";
import ContextWrapper from "@/components/context-wrapper";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

const { publicRuntimeConfig } = getConfig();
const { NEXT_PUBLIC_API_URL } = publicRuntimeConfig;

function MyApp({ Component, pageProps }) {
  const MyAppMarkup = () => (
    <Fragment>
      <DefaultSeo {...SEO} />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ContextWrapper navigation={navigation}>
          <NavbarHeader />
        </ContextWrapper>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </ThemeProvider>
    </Fragment>
  );

  const [navigation, setNavigation] = useState([]);
  const { data, error } = useSWR(`${NEXT_PUBLIC_API_URL}/navigations`, fetcher);
  useEffect(() => {
    if (!error && data) {
      setNavigation(data);
    }
  }, [navigation, data, error]);

  return <MyAppMarkup />;
}

export default MyApp;
