import { RouteObject, createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from './Home';

type Route = RouteObject & {
  name?: string;
};

export const routes: Route[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        //name: 'Főoldal',
        index: true,
        element: <Home />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
