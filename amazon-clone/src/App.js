
import './App.css';
import Header from './Header.js';
import Home from './Home.js';

import {BrowserRouter,Routes , Route}
from "react-router-dom";
import Checkout from './Checkout';
function App() {
  return (
    //BEM convention App->app
    <BrowserRouter>

    <div className="app">
        <Header/>
    <Routes>
      <Route path="/checkout"
      element={
        <Checkout/>
      }
      />
      <Route path="/"

      element={
      <Home/>
      }
      />

    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
