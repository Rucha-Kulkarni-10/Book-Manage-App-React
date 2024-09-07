import React, { Children } from 'react'
import { createRoot } from 'react-dom/client'
import filterBook from './App.jsx';
import './index.css';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Error from './components/Error.jsx';
import BookList from './components/BookList.jsx';


const appRouter = createBrowserRouter([
  // {
  //     path: '/',
  //     element: <App />,
  //     errorElement: <Error />
  // },

  // {
  //     path: '/about',
  //     element: <About />
  // },
  // {
  //     path: '/contact',
  //     element: <Contact />
  // },

  // Children routes

  {
      path: '/',
      element: <BookList/>,
      children: [
        {
            path: '/about',
            element: <About />
        },

        {
            path: '/contact',
            element: <Contact />
        },
      ],

  }
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>,
)
