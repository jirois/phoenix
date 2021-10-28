import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import HomeScreen from './pages/HomeScreen'

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="header">
       <Navbar />
      </header>
    
      <main className="main">
       
          <Route path="/" exact={true} component={HomeScreen} />

      </main>
      <footer className="footer">
        <Footer />
  </footer>
    </div>
  </BrowserRouter>
  );
}

export default App;
