import React from "react";

export default () => {
  const sayhello = () => {
    alert("hello world123");
  };
  return <button onClick={sayhello}>Remote Button</button>;
};
