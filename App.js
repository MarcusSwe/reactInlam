import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    async function fetchPokemons(){
      const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
      const pokemon = await resp.json()
      const pokemon50 = pokemon.results.slice(0,49)
      setPokemons(pokemon50);      
      console.log(pokemon50)
    }
    fetchPokemons();        
  },[]);

  

 function removePokemon(x){
   const removed = [...pokemons];
   removed.splice(x,1);   
   setPokemons(removed);
  }



  return (
    <div>
    {pokemons.map((p, index) => <div key={p.name}  index={index} className="test">
      <img src="#" alt={p.name}/>
      <p>{p.name}</p>
      <button onClick={e => {removePokemon(index)}}>remove</button>
      </div>)}
  </div>  
  )
 
}



export default App;

