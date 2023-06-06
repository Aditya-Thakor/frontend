import { BrowserRouter as Router } from "react-router-dom";
import { ReactRoutes as Routes } from "./routes/ReactRoutes";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/App.css";
const App = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default App;
