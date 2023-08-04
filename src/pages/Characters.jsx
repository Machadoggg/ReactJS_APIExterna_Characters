import React, { useEffect, useState } from "react";
import { fetchCharacters } from "../api/fetchCharacters";

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
        <div>
            {characters ? (
                <ul>
                {characters.map((character) => (
                    //<li>Tengo un personaje</li>
                  <li key={character.id}>
                    <img src={character.image} alt="" height="200px" width="200px" />
                    <div>
                        {character.firstName} {character.age}
                    </div>
                  </li>
                ))}
              </ul>

             ) : (

                <p>Loading characters</p>
            )}
        </div>
    );
};

export default Characters;