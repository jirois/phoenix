import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages";
import About from "./pages/about/AboutScreen";
import ServiceScreen from "./pages/services";
import BrokerScreen from "./pages/broker/BrokerScreen";
import FaqScreen from "./pages/faq/FaqScreen";
import ContactScreen from "./pages/contact/ContactScreen";
import BookScreen from "./pages/book";
import TestimonialScreen from "./pages/testimonial/TestimonialScreen";
import ResetPassword from "./pages/auth/Reset";
import VerifyEmail from "./pages/auth/VerifyEmail";
import Error from "./pages/Error";
import ForgotPassword from "./pages/auth/ForgotPassword";
import RedirectPage from "./pages/RedirectPage";
import DashboardScreen from "./pages/dashboard/Home";
import Signup from "./pages/auth/Signup";
import Signin from "./pages/auth/Signin";
import "./App.css";
import Setting from "./pages/dashboard/pages/Setting";
import Students from "./pages/dashboard/pages/Students";
import Sessions from "./pages/dashboard/pages/Sessions";
import DashboardHome from "./pages/dashboard/pages/Home";
import Services from "./pages/dashboard/pages/Services";
import CartScreen from "./pages/CartScreen";
import VerifyOtp from "./pages/auth/VerifyOtp";
import VerifyCode from "./pages/auth/VerifyCode";
import ProtectedRoute from "./pages/auth/ProtectRoute";
import SingleService from "./pages/services/SingleService";
import Payment from "./pages/Payment";
import PlaceOrder from "./pages/PlaceOrderScreen";
import OrderScreen from "./pages/Order";
import Profile from "./pages/profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServiceScreen />} />

        <Route path="/services/:id" element={<SingleService />} />

        <Route path="/broker" element={<BrokerScreen />} />

        <Route path="/faq" element={<FaqScreen />} />

        <Route path="/contact" element={<ContactScreen />} />

        <Route path="/sessions" element={<BookScreen />} />

        <Route path="/testimonials" element={<TestimonialScreen />} />
        <Route path="/placeorder" element={<PlaceOrder />} />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              {" "}
              <DashboardScreen />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<DashboardHome />} />
          <Route path="settings" element={<Setting />} />
          <Route path="students" element={<Students />} />
          <Route path="sessions" element={<Sessions />} />
          <Route path="services" element={<Services />} />
        </Route>

        <Route path="/cart" element={<CartScreen />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/order/:id" element={<OrderScreen />} />

        <Route path="/success-page" element={<RedirectPage />} />
        <Route path="/verifyEmail/:id" element={<VerifyOtp />} />

        <Route path="/signin" element={<Signin />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/user/verify-email" element={<VerifyEmail />} />

        <Route path="user/reset-password" element={<ResetPassword />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verifyCode" element={<VerifyCode />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
