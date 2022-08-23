import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Home from "./pages";
import About from "./pages/about/AboutScreen";
import ServiceScreen from "./pages/services/ServiceScreen";
import BrokerScreen from "./pages/broker/BrokerScreen";
import FaqScreen from "./pages/faq/FaqScreen";
import ContactScreen from "./pages/contact/ContactScreen";
import BookScreen from "./pages/book";
import TestimonialScreen from "./pages/testimonial/TestimonialScreen";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ResetPassword from "./pages/auth/Reset";
import VerifyEmail from "./pages/auth/VerifyEmail";
import Error from "./pages/Error";
import ForgotPassword from "./pages/auth/ForgotPassword";

function App() {
  return (
    <Router>
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
        <Route path="/signin" exact>
          <Login />
        </Route>
        <Route path="/signup" exact>
          <Register />
        </Route>
        <Route path="/verify-email">
          <VerifyEmail />
        </Route>

        <Route path="/reset-password" exact>
          <ResetPassword />
        </Route>
        <Route path="/forgot-password" exact>
          <ForgotPassword />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
