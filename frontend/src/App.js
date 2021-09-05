import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import HomeScreen from './screens/HomeScreen';
import Footer from './components/footer/Footer';

function App() {
  return (
   <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact component={HomeScreen} />
    </Switch>
    <Footer />
   </BrowserRouter>

 
  );
}

export default App;
