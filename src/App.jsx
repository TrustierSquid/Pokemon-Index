import { useState, useEffect } from "react";
import Navbar from "./MainComponents/Navbar";
import PokemonTypes from "./MainComponents/PokemonTypes";
import DeveloperNotes from "./MainComponents/DeveloperNotes";

export default function App(){

  return(
    <>
      <Navbar/>
      <PokemonTypes/>
      <DeveloperNotes/>
    </>
  )
}