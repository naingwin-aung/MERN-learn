import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import DefaultLayout from './layouts/DefaultLayout';
import About from './pages/About';
import Book from './pages/Book/Book';

const router = createBrowserRouter([
  {
    element: <DefaultLayout/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books",
        element: <Book />,
      },
      {
        path: "/books/:slug",
        element: <Book />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ]
  },
]);

export default router;
