import App from "../App";
import Contact from "../Pages/Contact";
import RulesPage from "../Pages/Rules";
import ProblemStatements from "../Pages/ProblemStatements";
import Schedule from "../Pages/Schedule";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import HomeLoader from "../Loaders/HomeLoader";

const Routes = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
        element: <ProblemStatements />,
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
