// src/router/router.js
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import LandingPage from '../screens/LandingPage/LandingPage';
import LoginForm from '../LoginForm';
import Dictionary from '../screens/Dictionary/Dictionary'; // Importa el nuevo componente

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "forms",
        element: <LoginForm />,
      },
      {
        path: "dictionary",
        element: <Dictionary />, // Agrega la nueva ruta para Dictionary
      },
    ],
  },
]);

export default router;
