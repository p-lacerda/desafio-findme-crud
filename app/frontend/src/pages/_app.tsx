import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const showHeader = router.pathname !== '/login';
  return (
    <div className="md:flex md:flex-row">
      { showHeader && <Navbar /> }
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
