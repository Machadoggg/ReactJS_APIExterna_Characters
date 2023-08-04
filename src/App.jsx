// import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

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

  // const [count, setCount] = useState(0)
  // // console.log(count);

  // useEffect(() => {
    
  
  //   return () => {
  //     console.log("useEffect is orking also when count is changing!!!")

  //     //TODO: fetch de super api

  //   }
  // }, [count])
  

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
      {/* <Title />
      <Title text="texto componente 2" />
      <Title text="texto componente 3" />
      <Button onClick={() => alert("primer boton")} />
      <Button onClick={() => alert("segundo boton")} text = "see more"/>
      <Button text = "no function"/>

      
      <Button 
        onClick={() => setCount(count + 1)}  
        text="+1" />
      <Title text={`number of clicks: ${count}`} /> */}

    </div>

    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  );
}



function Layout(){

  return(
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/characters">Characters</Link>
      </nav>

      <Outlet />

    </>
  );

}



export default App;
