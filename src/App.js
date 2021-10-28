import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
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
        All right reserved.
  </footer>
    </div>
  </BrowserRouter>
  );
}

export default App;
