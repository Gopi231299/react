import React, { useEffect, useState } from "react";
import ReactDom from "react-dom/client";
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { Divider } from "./shared/Divider";
import { DELHI } from "./utils/constants";

const First = () => {
  return (
    <div className="">
      <Header />
      <Card />
      <Divider />
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<First />);
