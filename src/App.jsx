// import { useEffect, useState } from 'react'
//  import reactLogo from './assets/react.svg'
//  import viteLogo from '/vite.svg'

import {BrowserRouter as Router, 
  Link, 
  Outlet, 
  Route, 
  Routes
} from "react-router-dom";

import './App.scss'
// import Title from './Components/Title'
// import Button from './Components/Button'
import Home from './pages/Home';
import Characters from './pages/Characters';

function App() {
  

  return (

    <div className='App'>
      <Router>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<Characters />} />
          </Route>
        </Routes>

      </Router> 
    </div>

  );
}


function Layout(){

  return(
    <div>
      <nav style={{ backgroundColor: 'blue', padding: '10px', textAlign: 'center', marginTop:'-51px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
          Home
        </Link>
        <Link to="/characters" style={{ color: 'white', textDecoration: 'none' }}>
          Characters
        </Link>
      </nav>

      <Outlet />

    </div>
  );
}

export default App;
