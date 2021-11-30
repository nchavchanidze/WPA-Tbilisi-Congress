import React, { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import Loader from "./Components/Loader";
import Contact from "./Pages/Contact";

const Home = React.lazy(() => import("./Pages/Home"));
const Login = React.lazy(() => import("./Pages/Login"));
const Register = React.lazy(() => import("./Pages/Register"));
const AbstractSubmission = React.lazy(() =>
  import("./Pages/AbstactSubmission")
);
const AbstractUpload = React.lazy(() => import("./Pages/AbstractUpload"));
const EposterUpload = React.lazy(() => import("./Pages/EposterUpload"));
const AbstractTopics = React.lazy(() => import("./Pages/AbstractTopics"));
const NotFound = React.lazy(() => import("./Pages/NotFound"));
const Dashboard = React.lazy(() => import("./Pages/Dashboard/Dashboard"))
const ScrollButton = React.lazy(() => import("./Components/ScrollButton"));

const App = () => {
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/abstract-submission",
      element: <AbstractSubmission />,
    },
    {
      path: "/abstract-upload",
      element: <AbstractUpload />,
    },
    {
      path: "/eposter-upload",
      element: <EposterUpload />,
    },
    {
      path: "/abstract-topics",
      element: <AbstractTopics />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ];
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {routes.map(({ path, element }, key) => (
          <Route exact path={path} element={element} key={key} />
        ))}
      </Routes>
      <ScrollButton />
    </Suspense>
  );
};

export default App;
