import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const showHeader = router.pathname === '/login' ? false : true;
  return (
  <>
    { showHeader && <Navbar /> }
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
