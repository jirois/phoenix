import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import AboutScreen from './pages/about/AboutScreen';
import BookScreen from './pages/book/BookScreen';
import BrokerScreen from './pages/broker/BrokerScreen';
import ContactScreen from './pages/contact/ContactScreen';
import FaqScreen from './pages/faq/FaqScreen';
import HomeScreen from './pages/home/HomeScreen'
import ServiceScreen from './pages/services/ServiceScreen';
import TestimonialScreen from './pages/testimonial/TestimonialScreen';

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="header">
       <Navbar />
      </header>
    
      <main className="main">
      <Switch>
          <Route path="/" exact={true} component={HomeScreen} />
          <Route path="/about" component={AboutScreen} />
          <Route path="/sessions" component={BookScreen} />
          <Route path="/services" component={ServiceScreen} />
          <Route path="/broker" component={BrokerScreen} />
          <Route path="/testimonials" component={TestimonialScreen} />
          <Route path="/contact" component={ContactScreen} />
          <Route path="/faq" component={FaqScreen} />
    </Switch>
      </main>
      <footer className="footer">
        <Footer />
  </footer>
    </div>
  </BrowserRouter>
  );
}

export default App;
