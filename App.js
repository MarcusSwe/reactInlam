import React, { useEffect, useState } from 'react';
import './App.css';
import PrintaPokemon from './printaPokemon';

function App() {
  
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    async function fetchPokemons(){
      const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
      const pokemon = await resp.json()
      const pokemon50 = pokemon.results.slice(0,49)
      pokemon50.forEach(e => {e.bildUrl = '"#"';});
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

  function addUrl(i, Xpokemons){
    const changed = [...pokemons];
    changed[i].bildUrl = Xpokemons;
    setPokemons(changed);
  }


  return (
        <div>
        <PrintaPokemon 
        poke={pokemons}
        removePokemon = {removePokemon}
        addUrl = {addUrl}
        />        
      </div>  
  )
 
}



export default App;

