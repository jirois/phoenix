import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Home from "./pages";
import NavbarHome from "./components/Navbar/NavbarSection";
import About from "./pages/about/AboutScreen";
import Footer from "./components/Footer";
import ServiceScreen from "./pages/services/ServiceScreen";
import BrokerScreen from "./pages/broker/BrokerScreen";
import FaqScreen from "./pages/faq/FaqScreen";
import ContactScreen from "./pages/contact/ContactScreen";
import BookScreen from "./pages/book/BookScreen";

function App() {
  return (
    <Router>
      <NavbarHome />
      <Switch>
        <Route path="/" element={<Home />} exact="true" />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServiceScreen />} />
        <Route path="/broker" element={<BrokerScreen />} />
        <Route path="/faq" element={<FaqScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/sessions" element={<BookScreen />} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
