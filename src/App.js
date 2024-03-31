import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AllRouter from "./router";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    console.log(AllRouter);
  });
  return (
    <Router>
      <AllRouter></AllRouter>
    </Router>
  );
}

export default App;
