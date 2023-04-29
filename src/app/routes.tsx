import MainLayout from '../layouts/MainLayout';
import Home from '../features/home/Home';
import NotFoundPage from '../layouts/NotFoundPage';
import SignIn from '../features/authen/SignIn';
import SignUp from '../features/authen/SignUp';

interface Route {
   path: string;
   element: JSX.Element;
   children?: Route[];
}

const routes: Route[] = [
   {
      path: '/',
      element: <MainLayout />,
      children: [
         {
            path: '/',
            element: <Home />,
         },
         {
            path: '/home',
            element: <Home />,
         },
         { path: '*', element: <NotFoundPage /> },
      ],
   },
   {
      path: '/auth',
      element: <MainLayout />,
      children: [
         { path: 'login', element: <SignIn /> },
         { path: 'register', element: <SignUp /> },
         { path: '*', element: <NotFoundPage /> },
      ],
   },
];

export default routes;
