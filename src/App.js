import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import NavbarSection from "./components/Navbar.js";
import Home from "./pages";


function App() {
  return (
    <Router>
      <NavbarSection />
      <Switch>
        <Route path="/" element={<Home />} exact='true' />

      </Switch>
    </Router>
  );
}

export default App;
