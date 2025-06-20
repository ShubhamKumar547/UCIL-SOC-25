import { useRouter } from 'next/router';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  
  if (typeof window !== 'undefined' && !router.asPath.startsWith(`/${router.locale}`)) {
    router.push(`/${router.locale}${router.asPath}`);
  }
  return <Component {...pageProps} />;
}

export default MyApp;