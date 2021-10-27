import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import HomeScreen from './pages/HomeScreen'

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="header">
       <h1>Header</h1>
      </header>
    
      <main className="main">
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
