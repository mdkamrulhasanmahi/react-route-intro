import { Component, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import Mobiles from "./components/Modiles/Mobiles.jsx";
import Laftop from "./components/Laftop/Laftop.jsx";
import Users from "./components/Users/Users.jsx";
import Users2 from "./components/Users2/Users2.jsx";
import Userdut from "./components/UsersDut/Userdut.jsx";

const usepromuse= fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json());

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "Mobiles", Component: Mobiles },
      { path: "Laftop", Component: Laftop },

      {
        path: "users",

        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),

        Component: Users,
      },

      {
        path: "Users2",
        element: <Suspense fallback={<span>...lode</span>}>
      <Users2 usepromuse={usepromuse}></Users2>
        </Suspense>
        
      },

      {
        path: "Users/:UserId",
        Component: Userdut
      }
    ],
  },
  {
    path: "about",
    element: <div>about me</div>,
  },
  {
    path: "app",
    element: <App></App>,
  },
  {
    path: "app2",
    Component: App,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
