import App from "../App";
import Contact from "../Pages/Contact";
import RulesPage from "../Pages/Rules";
import ProblemStatements from "../Pages/ProblemStatements";
import Schedule from "../Pages/Schedule";

export const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
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
  }
];
