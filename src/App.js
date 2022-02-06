import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Home from "./pages";
import NavbarHome from "./components/Navbar/NavbarSection";

function App() {
  return (
    <Router>
      <NavbarHome />
      <Switch>
        <Route path="/" element={<Home />} exact="true" />
      </Switch>
    </Router>
  );
}

export default App;
