import { useRouter } from 'next/router';
import { useEffect } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined' && !router.asPath.startsWith(`/${router.locale}`)) {
      router.push(`/${router.locale}${router.asPath}`);
    }
  }, [router]);

  return <Component {...pageProps} />;
}

export default MyApp;