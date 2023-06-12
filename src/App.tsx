import { BrowserRouter as Router } from "react-router-dom";
import { ReactRoutes as Routes } from "./routes/ReactRoutes";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/App.css";
import AuthGuard from "./guard/AuthGuard";
import MainDashBoard from "./pages/dashboard/MainDashBoard";

const App = () => {
  return (
    <Router>
      <MainDashBoard>
        {/* <AuthGuard /> */}
        <Routes />
      </MainDashBoard>
    </Router>
  );
};

export default App;
