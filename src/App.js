import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import HomeScreen from './pages/HomeScreen'
import Hero from './components/carousel/Hero'

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="header">
       <Navbar />
      </header>
    
      <main className="main">
        <Hero />
        <div className="content">
          <Route path="/" exact={true} component={HomeScreen} />
        </div>
      </main>
      <footer className="footer">
        All right reserved.
  </footer>
    </div>
  </BrowserRouter>
  );
}

export default App;
