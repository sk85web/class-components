import CustomProvider from '../redux/provider';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CustomProvider>
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </CustomProvider>
  );
}

export default MyApp;
