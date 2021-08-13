import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
   
    <BrowserRouter>
    <div className="grid-container">
      <header className="bg-green-200 p-8">
       <h1>Heading bar</h1>
      </header>
      <main>
        <Route path="/" component={HomeScreen} exact></Route>
      </main>
      <footer className="bg-gray-300 text-white p-4 w-full">All right reserved</footer>
    </div>
  </BrowserRouter>
  );
}

export default App;
