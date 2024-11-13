import App from "../App";
import Contact from "../Pages/Contact";
import RulesPage from "../Pages/Rules";
import ProblemStatements from "../Pages/ProblemStatements";
import Schedule from "../Pages/Schedule";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import HomeLoader from "../Loaders/HomeLoader";
import ComingSoon from "../Pages/ComingSoon";

const Routes = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.backgroundImage = `linear-gradient(to right, rgba(0, 0, 0, 0.336), rgba(0, 0, 0, 0.74), rgba(0, 0, 0, 0.856)), url("https://res.cloudinary.com/dogqbjx8a/image/upload/futuristic-view-high-tech-earth-planet_1_giivvh.webp")`;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return loading ? <HomeLoader /> : <Outlet />;
};

export const routes = [
  {
    element: <Routes />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/schedule",
        element: <Schedule />,
      },
      {
        path: "/problem-statements",
        element: <ComingSoon />,
      },
      {
        path: "/problem-statements/:setActiveTheme",
        element: <ComingSoon />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/rules",
        element: <RulesPage />,
      },
    ],
  },
];
