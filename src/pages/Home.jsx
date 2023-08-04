import React from "react";
import Title from "../Components/Title";
import reactLogo from '../assets/react.svg'
 import viteLogo from '../assets/vite.svg'

const Home = () => {

    return (
        <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <Title text="No hay nada aquí, ve a ver en la pestaña Characters!!!" />
      </div>
    )

};
export default Home;