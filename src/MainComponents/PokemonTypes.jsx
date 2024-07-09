import { useEffect, useState, useRef } from "react";
import InfoComponent from "./InfoComponent";
import DeveloperNotes from "./DeveloperNotes";



export default function PokemonTypes() {
  const [pokemonType, setPokemonType] = useState([]);
  const [normalPokemon, setNormalPokemon] = useState([]);
  const [componentToRender, setComponentToRender] = useState(null)
  const [renderDevNotes, setRenderDevNotes] = useState(null)
  let mainCanvas = useRef();


  // Used for the main Menu
  // Fetches for the mainMenu pokemon and their respective types
  useEffect(() => {
    fetch("/api/pokemonTypes" || './json/pokemonTypes.json')
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "Fetched pokemon types for menu")
        setPokemonType(data)
      });
  }, []);

  
  function displayPokemon() {
    
    // this function is dependent on what appears after it is envoked
    let changeEnv = (type)=>{
       mainCanvas.current.classList.toggle('visibility')
       mainCanvas.current.classList.toggle('pokeTypes')
      
      // depending on what type you selected, that type will be rendered
      async function displayInfo(type){
        switch (type) {
          /* "normal" is just the type of pokemon it is fetching for*/
          case "Normal":
            try {
              let response = await fetch('/api/normalPokemon' || '/api/normalPokemon')
              let data = await response.json();
              console.table(data, "fetch data for normal types")

              // pokemon.type is the first type of the API
              setComponentToRender(<InfoComponent pokemonList={data} pokemonType={pokemonType[0].type}/>)
              setNormalPokemon(data)
    
            } catch (error) {
              console.error(error)
            }
          break;
          /* "Fire" is just the type of pokemon it is fetching for*/
          case "Fire":
            try {
              let response = await fetch('/api/firePokemon')
              let data = await response.json();
              console.log(data, "fetch data for fire types")

              // pokemon.type is the first type of the API
              setComponentToRender(<InfoComponent pokemonList={data} pokemonType={pokemonType[1].type}/>)
              setNormalPokemon(data)
    
            } catch (error) {
              console.error(error)
            }
          break;
          /* "Water" is just the type of pokemon it is fetching for*/
          case "Water":
            try {
              let response = await fetch('/api/waterPokemon')
              let data = await response.json();
              console.log(data, "fetch data for fire types")

              // pokemon.type is the first type of the API
              setComponentToRender(<InfoComponent pokemonList={data} pokemonType={pokemonType[2].type}/>)
              setNormalPokemon(data)
    
            } catch (error) {
              console.error(error)
            }
          break;
          /* "Grass" is just the type of pokemon it is fetching for*/
          case "Grass":
            try {
              let response = await fetch('/api/grassPokemon')
              let data = await response.json();
              console.log(data, "fetch data for grass types")

              // pokemon.type is the first type of the API
              setComponentToRender(<InfoComponent pokemonList={data} pokemonType={pokemonType[3].type}/>)
              setNormalPokemon(data)
    
            } catch (error) {
              console.error(error)
            }
          break;
          /* "electric" is just the type of pokemon it is fetching for*/
          case "Electric":
            try {
              let response = await fetch('/api/electricPokemon')
              let data = await response.json();
              console.log(data, "fetch data for electric types")

              // pokemon.type is the first type of the API
              setComponentToRender(<InfoComponent pokemonList={data} pokemonType={pokemonType[4].type}/>)
              setNormalPokemon(data)
    
            } catch (error) {
              console.error(error)
            }
          break;
          case "Ice":
            try {
              let response = await fetch('/api/icePokemon')
              let data = await response.json();
              console.log(data, "fetch data for ice types")

              // pokemon.type is the first type of the API
              setComponentToRender(<InfoComponent pokemonList={data} pokemonType={pokemonType[5].type}/>)
              setNormalPokemon(data)
    
            } catch (error) {
              console.error(error)
            }
          break;
          case "Fighting":
            try {
              let response = await fetch('/api/fightingPokemon')
              let data = await response.json();
              console.log(data, "fetch data for fighting types")

              // pokemon.type is the first type of the API
              setComponentToRender(<InfoComponent pokemonList={data} pokemonType={pokemonType[6].type}/>)
              setNormalPokemon(data)
    
            } catch (error) {
              console.error(error)
            }
          break;
          case "Poison":
            try {
              let response = await fetch('/api/poisonPokemon')
              let data = await response.json();
              console.log(data, "fetch data for poison types")

              // pokemon.type is the first type of the API
              setComponentToRender(<InfoComponent pokemonList={data} pokemonType={pokemonType[7].type}/>)
              setNormalPokemon(data)
    
            } catch (error) {
              console.error(error)
            }
          break;
          case "Ground":
            try {
              let response = await fetch('/api/groundPokemon')
              let data = await response.json();
              console.log(data, "fetch data for ground types")

              // pokemon.type is the first type of the API
              setComponentToRender(<InfoComponent pokemonList={data} pokemonType={pokemonType[8].type}/>)
              setNormalPokemon(data)
    
            } catch (error) {
              console.error(error)
            }
          break;
          case "Flying":
            try {
              let response = await fetch('/api/flyingPokemon')
              let data = await response.json();
              console.log(data, "fetch data for flying types")

              // pokemon.type is the first type of the API
              setComponentToRender(<InfoComponent pokemonList={data} pokemonType={pokemonType[9].type}/>)
              setNormalPokemon(data)
    
            } catch (error) {
              console.error(error)
            }
          break;
          case "Psychic":
            try {
              let response = await fetch('/api/psychicPokemon')
              let data = await response.json();
              console.log(data, "fetch data for psychic types")

              // pokemon.type is the first type of the API
              setComponentToRender(<InfoComponent pokemonList={data} pokemonType={pokemonType[10].type}/>)
              setNormalPokemon(data)
    
            } catch (error) {
              console.error(error)
            }
          break;
          case "Bug":
            try {
              let response = await fetch('/api/bugPokemon')
              let data = await response.json();
              console.log(data, "fetch data for bug types")

              // pokemon.type is the first type of the API
              setComponentToRender(<InfoComponent pokemonList={data} pokemonType={pokemonType[11].type}/>)
              setNormalPokemon(data)
    
            } catch (error) {
              console.error(error)
            }
          break;
          case "Rock":
            try {
              let response = await fetch('/api/rockPokemon')
              let data = await response.json();
              console.log(data, "fetch data for rock types")

              // pokemon.type is the first type of the API
              setComponentToRender(<InfoComponent pokemonList={data} pokemonType={pokemonType[12].type}/>)
              setNormalPokemon(data)
    
            } catch (error) {
              console.error(error)
            }
          break;
          case "Dragon":
            try {
              let response = await fetch('/api/dragonPokemon')
              let data = await response.json();
              console.log(data, "fetch data for dragon types")

              // pokemon.type is the first type of the API
              setComponentToRender(<InfoComponent pokemonList={data} pokemonType={pokemonType[13].type}/>)
              setNormalPokemon(data)
    
            } catch (error) {
              console.error(error)
            }
          break;
          case "Dark":
            try {
              let response = await fetch('/api/darkPokemon')
              let data = await response.json();
              console.log(data, "fetch data for dark types")

              // pokemon.type is the first type of the API
              setComponentToRender(<InfoComponent pokemonList={data} pokemonType={pokemonType[14].type}/>)
              setNormalPokemon(data)
    
            } catch (error) {
              console.error(error)
            }
          break;
          case "Steel":
            try {
              let response = await fetch('/api/steelPokemon')
              let data = await response.json();
              console.log(data, "fetch data for steel types")

              // pokemon.type is the first type of the API
              setComponentToRender(<InfoComponent pokemonList={data} pokemonType={pokemonType[15].type}/>)
              setNormalPokemon(data)
    
            } catch (error) {
              console.error(error)
            }
          break;
          case "Fairy":
            try {
              let response = await fetch('/api/fairyPokemon')
              let data = await response.json();
              console.log(data, "fetch data for fairy types")

              // pokemon.type is the first type of the API
              setComponentToRender(<InfoComponent pokemonList={data} pokemonType={pokemonType[16].type}/>)
              setNormalPokemon(data)
    
            } catch (error) {
              console.error(error)
            }
          break;
          default:
            return
        }
      }
      displayInfo(type)
    }
  
    return pokemonType.map((pokemon) => {
      return (
        <>
          <div key={pokemon.id} className="types">
            <img src={pokemon.image_url} alt="Pokemon Image" />
            <h3>{pokemon.type} Types</h3>
            <br />
            <button className="searchBtn" onClick={()=> changeEnv(pokemon.type)}>Search</button>
          </div>
        </>
      );
    });
  }

  return (
    <>
      <main ref={mainCanvas} className="pokeTypes">
        {displayPokemon()}
      </main>
      {componentToRender}
    </>
  );
}
