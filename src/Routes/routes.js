import App from "../App";
import Contact from "../Pages/Contact";
import RulesPage from "../Pages/Rules";
import { Schedule } from "../Pages/Schedule";

export const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/schedule",
    element: <Schedule />,
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
