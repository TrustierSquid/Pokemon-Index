import { useRef, useState, useEffect } from "react";

// this component will appear based on what type the user selects 
export default function InfoComponent (props) {
  const infoCanvas = useRef();
  const [renderPokemon, setRenderPokemon] = useState(null)
  
  
  function DisplayRightSidePokemon(){
    return props.pokemonList.map((pokemon, index)=> {
      return (
        <>
          <div key={index} className="pokemonOption" onClick={()=> {setRenderPokemon(pokemon)}}>
            <h3>{pokemon.name}</h3>
            <img src={pokemon.image_url} alt="" />
          </div>
          <br />
        </>
      )
    })
  }
  
  function StatBarDisplay(pokemon){
    if (!pokemon) return null
    
    // console.log("you clicked", pokemon)
    return (
      <>
        <section  className="infoSection">
          <img id="mainImg" src={pokemon.image_url} alt="Pokemon Image could not be loaded.." />
          <div id="imgStats">
            <h1>{pokemon.name}</h1>
            <p><b>Attack: {pokemon.stats.attack}</b></p>
            <p><b>HP: {pokemon.stats.hp}</b></p>
            <p><b>Speed: {pokemon.stats.speed}</b></p>

            <br />
            <h2>Fact:</h2>
            <p>{`${pokemon.facts || pokemon.fact}`}</p>
          </div>
        </section>
      </>
    )
    
  }

  return (
    <>
      <div ref={infoCanvas} className="pokemonInfo">
        {StatBarDisplay(renderPokemon)}
        <section className="infoSection">
          <h1>{props.pokemonType} Pokemon</h1>
          <div id="pokemonMenu">
            <br />
            <DisplayRightSidePokemon/>
          </div>
        </section>
      </div>
    </>
  )
}