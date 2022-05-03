import '../styles/globals.css';
import type { AppProps } from 'next/app';
import ProtectedRoutes from '../components/ProtectedRoute';
import Navbar from '../components/Navbar';

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  const showHeader = router.pathname !== '/login';
  return (
    <ProtectedRoutes router={router}>
      <div className={`${showHeader ? 'md:flex md:flex-row' : null}`}>
        { showHeader && <Navbar /> }
        <Component {...pageProps} />
      </div>
    </ProtectedRoutes>
  );
};

export default MyApp;
