import React from "react";
import { useNavigate } from "react-router-dom";

export default () => {
  const navigate = useNavigate();
  const goback = () => navigate(-1);
  return (
    <>
      <h1>Find</h1>
      <button onClick={goback}>goback</button>
    </>
  );
};
