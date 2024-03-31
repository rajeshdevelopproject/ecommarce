import React from "react";
import { Routes, Route } from "react-router-dom";
// import Home from "../views/home";
import UserRoute from "./userRoute";

const AllRouter = () => {
  return <Routes>{UserRoute()}</Routes>;
};

export default AllRouter;
