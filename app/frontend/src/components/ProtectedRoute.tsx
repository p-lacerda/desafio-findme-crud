// check if you are on the client (browser) or server
const isBrowser = () => { return typeof window !== 'undefined'; };

const ProtectedRoutes = ({ router, children }: any) => {
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
    '/cliente/novo/:id',
    '/cliente/editar/:id',
    '/cliente/deletar/:id',
    '/colaborador',
    '/colaborador/novo/:id',
    '/colaborador/editar/:id',
    '/colaborador/deletar/:id',
    '/os/novo',
    '/os/editar',
    '/os/deletar/:id',
  ];

  const pathIsProtected = unprotectedRoutes.indexOf(router.pathname) !== -1;
  isAuthenticated();

  if (isBrowser() && isAuthenticated() === true && pathIsProtected) {
    router.push('/login');
  }

  return children;
};

export default ProtectedRoutes;
