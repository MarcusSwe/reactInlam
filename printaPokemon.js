import React, { useState, useEffect } from 'react'

let x = "";
let y = 'https://pokeapi.co/api/v2/pokemon/1/';

export default function PrintaPokemon(props){

const [sida, setSida] = useState(false);

const [Xpokemons, XsetPokemons] = useState()

useEffect(() => {
  async function XfetchPokemons(){
    const resp = await fetch(y)
    const pokemon = await resp.json()    
    const pokemon500 = pokemon.sprites.back_default;
    XsetPokemons(pokemon500);      
    console.log(Xpokemons)
  }
  XfetchPokemons();        
},[y]);



function PrintaPoks(props){  
  return (
    <div>
          {props.poke.map((p, index) => <div key={p.name}  index={index} className="test">
          <img src={p.bildUrl} alt={p.name}/>
          <p>{p.name}</p>
          <button onClick={e => {props.removePokemon(index)}}>remove</button>
          <button onClick={e => {setSida(true); x = p.name; y = p.url}}> test </button>
          </div>)}
    </div>
  )
}


function PrintaInfo(props){

 

return <div>
   

   <p>{x}</p>
   <p>{y}</p>
   {Xpokemons}
   <button onClick={e => {setSida(false)}}> test </button>   
   </div>
}


function ChooseToPrint(){
  if(!sida) return PrintaPoks(props);
  else return PrintaInfo(props);
}


     return(
        <div>
         {ChooseToPrint()}
      </div>  
    )
}

