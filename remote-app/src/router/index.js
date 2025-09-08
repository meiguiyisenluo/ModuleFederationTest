import React from "react";
import { createBrowserRouter, Navigate, createHashRouter } from "react-router-dom";
import Find from "../views/Find";
import Article from "../views/Article";

const router = createHashRouter([
  { path: "/", element: <Navigate to="/find" replace /> },
  { path: "/find", element: <Find /> },
  { path: "/article", element: <Article /> },
]);

export default router;
