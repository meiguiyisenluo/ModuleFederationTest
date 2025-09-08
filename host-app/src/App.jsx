import React from "react";

import { RouterProvider } from "react-router-dom";
import router from "./router";

export default () => (
  <div>
    <h1>Host App</h1>
    <RouterProvider router={router} />
  </div>
);
