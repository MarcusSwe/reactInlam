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
          </div>)}
    </div>
  )
}

function PrintaInfo(props){

}

function ChooseToPrint(){
  if(!sida) return PrintaPoks(props);
  else return <div>OMEGA</div>
}


     return(
        <div>
         {ChooseToPrint()}
      </div>  
    )
}

