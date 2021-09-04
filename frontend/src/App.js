import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import Hero from './components/carousel/Hero'
import LandingSplash from './components/splash/LandingSplash';
import HomeScreen from './screens/HomeScreen';
import ServiceScreen from './screens/ServiceScreen';

function App() {
  return (
   <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact component={HomeScreen} />
    </Switch>
   </BrowserRouter>
 
  );
}

export default App;
