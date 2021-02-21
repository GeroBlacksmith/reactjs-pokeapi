import React, { useEffect, useState } from 'react';
import { Container } from "@material-ui/core";
import Page from "./page";


const List = (props:any) => {
  const [pokemonsters, setPokemonsters] = useState([]);
  const [page, setPage] = useState(1);
  const managePage = (mode:number)=>{
    if(mode===0){
      if(page>1){
        setPage(page-1);
      }
    }
    if(mode===1){
      setPage(page+1)
    }

  }
  const getPokemons = async ()=>{
  let url = `https://pokeapi.co/api/v2/pokemon/?offset=${(page-1)*5}&limit=${5}`;
    let request = await fetch(url);
    let list = await request.json();
    if(Array.isArray(list.results)){
      setPokemonsters(list.results);
    }
  }
  
  useEffect(() => {
    getPokemons();
  },[page])
  return (
    <Container  maxWidth="sm">
      <Page pokemonsters={pokemonsters} managePage={managePage} page={page} />
    </Container>
  )
}


export default List;
