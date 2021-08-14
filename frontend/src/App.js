import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ServiceScreen from './screens/ServiceScreen';

function App() {
  return (
   
    <BrowserRouter>
    <div className="grid grid-areas-layout grid-cols-layout grid-rows-layout h-full">
      <header className="grid-in-header row-start-header row-end-header bg-green-200 p-8">
       <h1>Heading bar</h1>
      </header>
      <main className="grid-in-main row-start-main row-end-main">
        <Route path="/product" component={ServiceScreen} />
        <Route path="/" component={HomeScreen} exact></Route>
      </main>
      <footer className="grid-in-footer bg-gray-100">All right reserved</footer>
    </div>
  </BrowserRouter>
  );
}

export default App;
