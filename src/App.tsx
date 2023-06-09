import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { ReactRoutes as Routes } from "./routes/ReactRoutes";

import "bootstrap/dist/css/bootstrap.min.css";
import "../src/App.css";

import AuthGuard from "./guard/AuthGuard";
import { getTokenDetails } from "./utils/helper";

const App = () => {
  const { role } = getTokenDetails();

  return (
    <>
      <Router>
        <Routes />
      </Router>
      <Router>
        <AuthGuard />
      </Router>
    </>
  );
};

export default App;
