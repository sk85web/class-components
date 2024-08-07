import CustomProvider from '../redux/provider';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CustomProvider>
      <Component {...pageProps} />
    </CustomProvider>
  );
}

export default MyApp;
