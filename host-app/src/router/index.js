import React from "react";
import {
  createBrowserRouter,
  Navigate,
  createHashRouter,
} from "react-router-dom";
import Cloudphone from "../views/Cloudphone";
import My from "../views/My";
// import Find from "../views/Find";

// const App = React.lazy(() => import("remoteApp/App"));
const Find = React.lazy(() => import("remoteApp/Find"));
const Article = React.lazy(() => import("remoteApp/Article"));

const router = createHashRouter([
  { path: "/", element: <Navigate to="/cloudphone" replace /> },
  { path: "/find", element: <Find /> },
  { path: "/cloudphone", element: <Cloudphone /> },
  { path: "/my", element: <My /> },
  { path: "/article", element: <Article /> },
]);

export default router;
