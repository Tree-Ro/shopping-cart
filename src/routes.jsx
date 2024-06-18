import App from './App/App';
import { ErrorPage, Home, Shop, Checkout } from './components';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
       {index: true, element: <Home /> }, //Default
       {path: '/shop', element: <Shop />},
       {path: '/checkout', element: <Checkout />}
    ]
  },
];

export default routes;
