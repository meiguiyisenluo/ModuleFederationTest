import React from "react";
const RemoteButton = React.lazy(() => import("remoteApp/Button"));

export default () => (
  <div>
    <h1>Host App</h1>
    <RemoteButton />
  </div>
);
