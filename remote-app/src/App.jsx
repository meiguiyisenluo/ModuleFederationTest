import React from "react";

import { RouterProvider } from "react-router-dom";
import router from "./router";

export default () => (
  <>
    <h1>Remote App</h1>
    <RouterProvider router={router} />
  </>
);
