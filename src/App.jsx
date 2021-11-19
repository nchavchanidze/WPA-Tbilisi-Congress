import React, { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import Loader from "./Components/Loader";
import NotFound from "./Pages/NotFound";

const Home = React.lazy(() => import("./Pages/Home"));
const Login = React.lazy(() => import("./Pages/Login"));
const Register = React.lazy(() => import("./Pages/Register"));
const AbstractSubmission = React.lazy(() =>
  import("./Pages/AbstactSubmission")
);
const AbstractUpload = React.lazy(() => import("./Pages/AbstractUpload"));
const AbstractTopics = React.lazy(() => import("./Pages/AbstractTopics"));

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
        <Route
          exact
          path="/abstract-submission"
          element={<AbstractSubmission />}
        />
        <Route exact path="/abstract-upload" element={<AbstractUpload />} />
        <Route exact path="/abstract-topics" element={<AbstractTopics />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
