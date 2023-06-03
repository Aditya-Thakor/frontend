import { BrowserRouter as Router } from "react-router-dom";
import { ReactRoutes as Routes } from "./routes/ReactRoutes";
import "../src/App.css";
const App = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default App;
