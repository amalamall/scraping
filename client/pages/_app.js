import '../styles/global.css';
import { ChakraProvider, extendTheme, Flex } from '@chakra-ui/react';
import Head from 'next/head';
import Layout from '../components/layout/layout';
import store from '../store/store';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';

const colors = {
  brand: {
    100: '#1a365d',
    200: '#153e75',
    300: '#2a69ac',
  },
};
const theme = extendTheme({ colors });

const ViewPort = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

const App = (props) => {
  return (
    <Provider store={store}>
    <ChakraProvider theme={theme}>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="Boilareplate" />
        <meta name="keywords" content="insurance" />
        <link rel="stylesheet" href="//cdn.jsdelivr.net/gh/dmhendricks/bootstrap-grid-css@4.1.3/dist/css/bootstrap-grid.min.css" />
        <title>Phone Website</title>
      </Head>
      <ViewPort {...props} />
    </ChakraProvider>
    </Provider>

  );
};

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(App);
