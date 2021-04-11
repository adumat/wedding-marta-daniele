import { Component, ReactPropTypes } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import '../styles/styles.css';

function MyApp({ Component, pageProps }: {Component: Component; pageProps: ReactPropTypes }) {
  return (
    <Component {...pageProps} />
  );
}

export default MyApp;
