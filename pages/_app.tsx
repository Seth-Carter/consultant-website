import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component
        /* eslint-disable-line react/jsx-props-no-spreading */ {...pageProps}
      />
    </Layout>
  );
}
