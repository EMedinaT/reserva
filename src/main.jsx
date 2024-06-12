import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/helpers/Navbar.jsx";
import Inicio from "./components/helpers/Inicio.jsx";
import Reserva from "./components/helpers/Reserva.jsx";
import Sesion from "./components/helpers/Sesion.jsx";
import Loguin from "./components/pages/auth/Loguin.jsx";
import Register from "./components/pages/auth/Register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />,
  },
  {
    path: "/navbar",
    element: <Navbar />,
  },
  {
    path: "/reserva",
    element: <Reserva />,
  },
  {
    path: "/sesion",
    element: <Sesion />,
  },
  {
    path: "/loguin",
    element: <Loguin />,
  },
  {
    path: "/registro",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
