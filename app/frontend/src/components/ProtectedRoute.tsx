// check if you are on the client (browser) or server
const isBrowser = () => { return typeof window !== 'undefined'; };

const ProtectedRoutes = ({ router, children }) => {
  // Identify authenticated user
  const isAuthenticated = () => {
    if (isBrowser()) {
      const userLocalStorage = JSON.parse(localStorage.getItem('user') || '{}');

      if (Object.keys(userLocalStorage).length === 0) {
        localStorage.setItem('user', '{}');
      }

      return Object.keys(userLocalStorage).length === 0;
    }
    return false;
  };

  const unprotectedRoutes = [
    '/',
    '/cliente',
    '/cliente/novo',
    '/cliente/editar',
    '/colaborador',
    '/colaborador/novo',
    '/colaborador/editar',
    '/os/novo',
    '/os/editar',
  ];

  const pathIsProtected = unprotectedRoutes.indexOf(router.pathname) !== -1;
  isAuthenticated();

  if (isBrowser() && isAuthenticated() === true && pathIsProtected) {
    router.push('/login');
  }

  return children;
};

export default ProtectedRoutes;
