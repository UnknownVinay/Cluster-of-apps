import React from "react";
import CardComponent from "../components/card-component";

const Home = () => {
  return (
    <div>
      <h1 className="header" style={{ position: "relative", left: "40%" }}>
        Welcome to React App
      </h1>
      <CardComponent />
    </div>
  );
};

export default Home;
