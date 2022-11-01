import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Setting from "./pages/dashboard/pages/Setting";
import Students from "./pages/dashboard/pages/Students";
import Sessions from "./pages/dashboard/pages/Sessions";
import DashboardHome from "./pages/dashboard/pages/Home";
import Services from "./pages/dashboard/pages/Services";
import ProtectedRoute from "./pages/auth/ProtectRoute";
import { Provider } from "react-redux";
import { store } from "./store";
import { Suspense } from "react";
import { Loading } from "./components/Styles";

const Home = React.lazy(() => import("./pages"));
const BookScreen = React.lazy(() => import("./pages/book"));
const ServiceScreen = React.lazy(() => import("./pages/services"));
const BrokerScreen = React.lazy(() => import("./pages/broker"));
const TestimonialScreen = React.lazy(() => import("./pages/testimonial"));
const FaqScreen = React.lazy(() => import("./pages/faq"));
const ContactScreen = React.lazy(() => import("./pages/contact"));
const About = React.lazy(() => import("./pages/about"));
const Signin = React.lazy(() => import("./pages/auth/Signin"));
const Signup = React.lazy(() => import("./pages/auth/Signup"));
const CartScreen = React.lazy(() => import("./pages/CartScreen"));
const OrderScreen = React.lazy(() => import("./pages/auth/VerifyCode"));
const VerifyCode = React.lazy(() => import("./pages/contact"));
const DashboardScreen = React.lazy(() => import("./pages/dashboard/Home"));
const SingleService = React.lazy(() =>
  import("./pages/services/ServiceScreen")
);
const Profile = React.lazy(() => import("./pages/profile"));
const ResetPassword = React.lazy(() => import("./pages/auth/Reset"));
const ForgotPassword = React.lazy(() => import("./pages/auth/ForgotPassword"));
const NotFound = React.lazy(() => import("./pages/Error"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/broker" element={<BrokerScreen />} />

          <Route path="/faq" element={<FaqScreen />} />

          <Route path="/contact" element={<ContactScreen />} />

          <Route path="/sessions" element={<BookScreen />} />

          <Route path="/testimonials" element={<TestimonialScreen />} />

          <Route path="/services" element={<ServiceScreen />} />

          <Route path="services/:id" element={<SingleService />} />
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
            <Route path="service" element={<Services />} />
          </Route>

          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <CartScreen />
              </ProtectedRoute>
            }
          />

          <Route
            path="/order/:id"
            element={
              <ProtectedRoute>
                <OrderScreen />
              </ProtectedRoute>
            }
          />

          <Route path="/signin" element={<Signin />} />

          <Route path="/signup" element={<Signup />} />

          <Route path="user/reset-password" element={<ResetPassword />} />

          <Route
            path="/forgot-password"
            element={
              <Provider store={store}>
                <ForgotPassword />
              </Provider>
            }
          />
          <Route path="/verifyCode" element={<VerifyCode />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
