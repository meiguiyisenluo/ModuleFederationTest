import React from "react";
import { useNavigate } from "react-router-dom";

export default () => {
  const navigate = useNavigate();
  const toFind = () => navigate("/find");
  return (
    <>
      <h1>Cloudphone.jsx</h1>
      <button onClick={toFind}>toFind</button>
    </>
  );
};
