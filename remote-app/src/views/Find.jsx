import React from "react";
import { useNavigate } from "react-router-dom";

export default () => {
  const navigate = useNavigate();
  const toArticle = () => navigate("/article");
  return (
    <>
      <h1>Find</h1>
      <button onClick={toArticle}>toArticle</button>
    </>
  );
};
