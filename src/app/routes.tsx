import MainLayout from '../layouts/MainLayout';
import Home from '../features/home/Home';
import NotFoundPage from '../layouts/NotFoundPage';

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
];

export default routes;
