import React, { Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import AOS from "aos";
import Loader from "./Components/Loader";
import Contact from "./Pages/Contact";
import AbstractEdit from "./Components/Abstract/AbstractEdit";
import Symposium from "./Pages/Symposium/Symposium";
import SymposiumUpload from "./Pages/Symposium/SymposiumUpload";
import AbstractTopics from "./Pages/AbstractTopics";
import Registration from "./Pages/Registration/Registration";
import PrivateRoute from "./Components/PrivateRoute";
import ogImage from './Assets/Images/linkbanner.png'


const Home = React.lazy(() => import("./Pages/Home"));

const About = React.lazy(() => import("./Pages/About/About"));

// About
const Welcome = React.lazy(() => import("./Pages/About/Welcome/Welcome"));
const GeneralInformation = React.lazy(() =>
  import("./Pages/About/General Information/GeneralInformation")
);
const Committees = React.lazy(() =>
  import("./Pages/About/Congress Committees/Committees")
);
const Sponsorship = React.lazy(() =>
  import("./Pages/About/Sponsorship/Sponsorship")
);
const FAQ = React.lazy(() => import("./Pages/About/FAQ/FAQ"));

// Program
const Scientific = React.lazy(() =>
  import("./Pages/Program/Scientific Program/Scientific")
);
const Speakers = React.lazy(() => import("./Pages/Program/Speakers/Speakers"));
const PreCongress = React.lazy(() =>
  import("./Pages/Program/Pre-Congress Workshop/PreCongress")
);
const IndustrySymposia = React.lazy(() =>
  import("./Pages/Program/Industry Symposia/IndustrySymposia")
);
const Courses = React.lazy(() => import("./Pages/Program/Courses/Courses"));
const CME = React.lazy(() => import("./Pages/Program/CME/CME"));

// Submissions
const AbstractUpload = React.lazy(() => import("./Pages/AbstractUpload"));
const EposterUpload = React.lazy(() => import("./Pages/EposterUpload"));
const Instructions = React.lazy(() =>
  import("./Pages/Submissions/Instructions/Instructions")
);
const AbstractsBook = React.lazy(() =>
  import("./Pages/Submissions/Abstracts Book/AbstractsBook")
);

// Register
const Onsite = React.lazy(() =>
  import("./Pages/Registration/Onsite-Online/Onsite")
);
const Venue = React.lazy(() => import("./Pages/Registration/Venue/Venue"));
const Covid = React.lazy(() => import("./Pages/Registration/Covid-19/Covid"));

// Auth
const Login = React.lazy(() => import("./Pages/Login"));
const Register = React.lazy(() => import("./Pages/Register"));
const ForgotPassword = React.lazy(() => import("./Pages/Auth/ForgotPassword"));
const NewPassword = React.lazy(() => import("./Pages/Auth/NewPassword"));

const AbstractSubmission = React.lazy(() =>
  import("./Pages/AbstactSubmission")
);

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
      path: "/sponsorship",
      element: <Sponsorship />,
    },
    {
      path: "/faq",
      element: <FAQ />,
    },
    {
      path: "/scientific-program",
      element: <Scientific />,
    },
    {
      path: "/speakers",
      element: <Speakers />,
    },
    {
      path: "/pre-congress-workshop",
      element: <PreCongress />,
    },
    {
      path: "/industry-symposia",
      element: <IndustrySymposia />,
    },
    {
      path: "/courses",
      element: <Courses />,
    },
    {
      path: "/cme-accreditation",
      element: <CME />,
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
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
    {
      path: "/new-password/:token",
      element: <NewPassword />,
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
      path: "/instructions",
      element: <Instructions />,
    },
    {
      path: "/abstracts-book",
      element: <AbstractsBook />,
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
      element: (
        <PrivateRoute>
          <SymposiumUpload />
        </PrivateRoute>
      ),
    },
    {
      path: "/registration",
      element: <Registration />,
    },
    {
      path: "/onsite-online",
      element: <Onsite />,
    },
    {
      path: "/venue",
      element: <Venue />,
    },
    {
      path: "/covid-19",
      element: <Covid />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ];

  const location = useLocation();

  console.log(location);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Suspense fallback={<Loader />}>
      <Helmet>
        <meta
          name="description"
          content="WPA Thematic Congress “Treatment and Management of Mental Disorders in a Post-Pandemic Era” will be hed in a hybrid format on 14-16 October 2022 in Tbilisi, Georgia."
        />
        <meta
          name="keywords"
          content="Marketing, Social Media, Content Crafting, Business Consultation, Branding, Photo-video Shooting, Website"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://wpatbilisicongress.com${location.pathname}`}
        />
        <meta property="og:title" content="Home - WPA Tbilisi Congress 2022" />
        <meta
          property="og:description"
          content="WPA Thematic Congress “Treatment and Management of Mental Disorders in a Post-Pandemic Era” will be hed in a hybrid format on 14-16 October 2022 in Tbilisi, Georgia."
        />
        <meta property="og:image" content={ogImage} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://wpatbilisicongress.com${location.pathname}`}
        />
        <meta
          property="twitter:title"
          content="Home - WPA Tbilisi Congress 2022"
        />
        <meta
          property="twitter:description"
          content="WPA Thematic Congress “Treatment and Management of Mental Disorders in a Post-Pandemic Era” will be hed in a hybrid format on 14-16 October 2022 in Tbilisi, Georgia."
        />
        <meta property="twitter:image" content={ogImage} />
      </Helmet>
      <Routes>
        {routes.map(({ path, element }, key) => (
          <Route exact path={path} element={element} key={key} />
        ))}
        {/* <Route
            exact
            path="/symposium-upload"
            element={
              <PrivateRoute>
                <SymposiumUpload />
              </PrivateRoute>
            }
          /> */}
      </Routes>
      <ScrollButton />
    </Suspense>
  );
};

export default App;
