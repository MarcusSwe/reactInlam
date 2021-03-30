import React from 'react'

export default function PrintaPokemon(props){

     return(
        <div>
        {props.poke.map((p, index) => <div key={p.name}  index={index} className="test">
          <img src={p.bildUrl} alt={p.name}/>
          <p>{p.name}</p>
          <button onClick={e => {props.removePokemon(index)}}>remove</button>
          </div>)}
      </div>  
    )
}

