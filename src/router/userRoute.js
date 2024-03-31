import { Route } from "react-router-dom";
import Home from "../views/home";
import Login from "../views/login";
const UserRoute = () => {
  return (
    <>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </>
  );
};

export default UserRoute;
