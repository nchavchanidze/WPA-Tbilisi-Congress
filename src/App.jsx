import React, { Suspense, useEffect } from "react";
import { Routes, Route, } from "react-router-dom";
import AOS from "aos";
import Loader from "./Components/Loader";

const Home = React.lazy(() => import("./Pages/Home"));
const Login = React.lazy(() => import("./Pages/Login"));
const Register = React.lazy(() => import("./Pages/Register"));
const AbstractSubmission = React.lazy(() => import("./Pages/AbstactSubmission"))

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/abstract-submission" element={<AbstractSubmission />} />
      </Routes>
    </Suspense>
  );
};

export default App;
