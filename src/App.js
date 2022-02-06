import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Home from "./pages";
import NavbarHome from "./components/Navbar/NavbarSection";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <NavbarHome />
      <Switch>
        <Route path="/" element={<Home />} exact="true" />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
