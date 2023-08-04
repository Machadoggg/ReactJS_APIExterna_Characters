import React, { useEffect, useState } from "react";
import { fetchCharacters } from "../api/fetchCharacters";
import reactLogo from '../assets/react.svg';
 import viteLogo from '../assets/vite.svg';

const Characters = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
    
            const getCharacters = async () => {
                const data = await fetchCharacters();             
                //console.log(data);
                setCharacters(data);
            };
            
        getCharacters();
      }, []);
    
    return (
        <>
        {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <Title text="No hay nada aquí, ve a ver en la pestaña Characters!!!" />
      </div> */}

        <div>
            <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logoChar" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logoChar react" alt="React logo" />
            </a>

            {characters ? (
                <ul>
                {characters.map((character) => (
                    //<li>Tengo un personaje</li>
                  <li key={character.id} style={{ border: '3px solid blue', padding: '10px', margin: '10px', background: 'black', borderRadius:'50px' }}>
                    <div>
                        <h3>{character.firstName} {character.lastName}</h3>
                    </div>
                    <img src={character.image} alt="" height="200px" width="200px" />
                    
                    <div>
                        GENDER: {character.gender} 
                    </div>
                    <div>
                        AGE: {character.age}
                    </div>
                  </li>
                ))}
              </ul>

             ) : (

                <p>Loading characters</p>
            )}
        </div>
        </>
    );
};

export default Characters;