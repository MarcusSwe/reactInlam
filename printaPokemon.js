import React, { useState, useEffect } from 'react'

let x = "";
let y = 'https://pokeapi.co/api/v2/pokemon/1/';
let i = 0;

export default function PrintaPokemon(props){

const [sida, setSida] = useState(false)

const [Xpokemons, XsetPokemons] = useState([])

useEffect(() => {
  async function XfetchPokemons(){
    const resp = await fetch(y)
    const pokemon = await resp.json()    
    const pokemon500 = [];
    pokemon500.push(pokemon.abilities)
    pokemon500.push(pokemon.sprites)
    pokemon500.push(pokemon.height)
    pokemon500.push(pokemon.moves)
    //const pokemon500 = pokemon.sprites.back_default;
    XsetPokemons(pokemon500);      
    console.log(Xpokemons)
    console.log("TEEEEEEEEEEEEEEEEEEEEST")
  }
  XfetchPokemons();        
},[sida]);



function PrintaPoks(props){  
  return (
    <div>
          {props.poke.map((p, index) => <div key={p.name}  index={index} className="test">
          <img className="test2" src={p.bildUrl} alt={p.name}/>
          <p>{p.name} </p>
          <button onClick={e => {setSida(true); x = p.name; y = p.url; i = index}}> info </button>
          <button onClick={e => {props.removePokemon(index)}}>remove</button>          
          </div>)}
    </div>
  )
}


function PrintaInfo(props){ 

//{Xpokemons}  
//

return <div>   
   <img src={Xpokemons[1].back_default} alt={x}/>
   <p><span className="titel">{x}</span></p>
   <p>Abilites: {Xpokemons[0].map((p) => <span className="ability">{p.ability.name}<>, </></span>)} </p>
   <p>Height: <span className="ability">{Xpokemons[2]}</span> </p>
   <p>Moves: {Xpokemons[3].map((p) => <span className="ability">{p.move.name}<>, </></span>)} </p>

   <button onClick={e => {setSida(false); props.addUrl(i, Xpokemons[1].back_default)}}> back </button>
   
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

