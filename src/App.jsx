import React, { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import Loader from "./Components/Loader";
import Contact from "./Pages/Contact";
import AbstractEdit from "./Components/Abstract/AbstractEdit";
import Symposium from "./Pages/Symposium/Symposium";
import SymposiumUpload from "./Pages/Symposium/SymposiumUpload";
import AbstractTopics from "./Pages/AbstractTopics";
import Registration from "./Pages/Registration/Registration";

const Home = React.lazy(() => import("./Pages/Home"));
const About = React.lazy(() => import("./Pages/About/About"));
const Welcome = React.lazy(() => import("./Pages/About/Welcome/Welcome"));
const GeneralInformation = React.lazy(() =>
  import("./Pages/About/General Information/GeneralInformation")
);
const Committees = React.lazy(() =>
  import("./Pages/About/Congress Committees/Committees")
);
const Login = React.lazy(() => import("./Pages/Login"));
const Register = React.lazy(() => import("./Pages/Register"));
const AbstractSubmission = React.lazy(() =>
  import("./Pages/AbstactSubmission")
);
const AbstractUpload = React.lazy(() => import("./Pages/AbstractUpload"));
const EposterUpload = React.lazy(() => import("./Pages/EposterUpload"));
// const AbstractTopics = React.lazy(() => import("./Pages/AbstractTopics"));
const NotFound = React.lazy(() => import("./Pages/NotFound"));
const Dashboard = React.lazy(() => import("./Pages/Dashboard/Dashboard"));
const Profile = React.lazy(() => import("./Pages/Profile/Profile"));
const Abstracts = React.lazy(() => import("./Pages/Abstracts/Abstracts"));
const ScrollButton = React.lazy(() => import("./Components/ScrollButton"));

const App = () => {
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/welcome",
      element: <Welcome />,
    },
    {
      path: "/general-information",
      element: <GeneralInformation />,
    },
    {
      path: "/congress-committees",
      element: <Committees />,
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
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/abstracts",
      element: <Abstracts />,
    },
    {
      path: "/abstracts/:id",
      element: <AbstractEdit />,
    },
    {
      path: "/symposium",
      element: <Symposium />,
    },
    {
      path: "/symposium-upload",
      element: <SymposiumUpload />,
    },
    {
      path: "/registration",
      element: <Registration />,
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
