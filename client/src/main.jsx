import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Categories from "./pages/Categories.jsx";
import Profile from "./pages/Profile.jsx";
import Artist from "./pages/Artist.jsx";
import Event from "./pages/Event.jsx";
import EventList from "./pages/EventList.jsx";
import AddEvent from "./pages/AddEvent.jsx";
import ArtworkForm from "./pages/ArtworkForm.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Signup from "./pages/Signup.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        //Bring up artists page
        path: "/artist",
        element: <Artist />,
      },
      {
        //For logged in user's profile
        path: "/me",
        element: <Profile />,
      },
      {
        path: "/event",
        element: <Event />,
      },
      {
        path: "/eventlist",
        element: <EventList />,
      },
      {
        path: "/addevent",
        element: <AddEvent />,
      },
      {
        path: "/addArt",
        element: <ArtworkForm />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
