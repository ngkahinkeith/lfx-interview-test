import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListContact from "../containers/Contact/List";
import ListDetail from "../containers/Contact/Detail";
import ContactError from "../containers/Contact/Error";

const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <ListContact />,
      errorElement: <ContactError />
    },
    {
      path: "/contact/:id",
      element: <ListDetail />,
      errorElement: <ContactError />
    }
  ]
);

const Routes = (): JSX.Element => {
  return (
    <RouterProvider router={routes} />
  );
};

export default Routes;
