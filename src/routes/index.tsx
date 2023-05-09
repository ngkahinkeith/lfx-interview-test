import * as React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import ListContact from "../containers/Contact/List";
import ListDetail from "../containers/Contact/Detail";

const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <ListContact />,
    },
    {
      path: "/contact/:id",
      element: <ListDetail />,
    }
  ]
);

const Routes = (): JSX.Element => {
  return (
    <RouterProvider router={routes} />
  );
};

export default Routes;
