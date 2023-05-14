import React from "react";

const AnotherComponent = ({ data }) => {
  return <div>Hello different thing! {data[0].color} </div>;
};

export default AnotherComponent;
