import React, { useState } from 'react'

export default function PrintaPokemon(props){

const [sida, setSida] = useState(false);


function PrintaPoks(props){  
  return (
    <div>
          {props.poke.map((p, index) => <div key={p.name}  index={index} className="test">
          <img src={p.bildUrl} alt={p.name}/>
          <p>{p.name}</p>
          <button onClick={e => {props.removePokemon(index)}}>remove</button>
          <button onClick={e => {setSida(true)}}> test </button>
          </div>)}
    </div>
  )
}

function PrintaInfo(props){
return <div> OMEGA <button onClick={e => {setSida(false)}}> test </button></div>
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

