import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Home from "./pages";
import NavbarHome from "./components/Navbar/NavbarSection";
import About from "./pages/about/AboutScreen";
import Footer from "./components/Footer";
import ServiceScreen from "./pages/services/ServiceScreen";
import BrokerScreen from "./pages/broker/BrokerScreen";
import FaqScreen from "./pages/faq/FaqScreen";
import ContactScreen from "./pages/contact/ContactScreen";
import BookScreen from "./pages/book/BookScreen";
import TestimonialScreen from "./pages/testimonial/TestimonialScreen";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ResetPassword from "./pages/auth/Reset";

function App() {
  return (
    <Router>
      <NavbarHome />
      <Switch>
        <Route path="/" exact="true">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/services">
          <ServiceScreen />
        </Route>
        <Route path="/broker">
          <BrokerScreen />
        </Route>
        <Route path="/faq">
          <FaqScreen />
        </Route>
        <Route path="/contact">
          <ContactScreen />
        </Route>
        <Route path="/sessions">
          <BookScreen />
        </Route>
        <Route path="/testimonials">
          <TestimonialScreen />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/forgot-password">
          <ResetPassword />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
