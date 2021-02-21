import Page from "./page";
import React, { useEffect, useState } from 'react';
import { Container } from "@material-ui/core";
const Detail =(props: any) => {
  const [detail, setDetails] = useState<null|any>();
  const [abilities, setAbilities] = useState<null|undefined|any[]>();

  const getDetails = async () => {
    let request = await fetch(props.location.state.pUrl);
    let response = await request.json();
    setDetails(response);
  }

  const getAbilities= async () => {
    const abilitiesBuild:any[] = [];
    if(detail){
    detail.abilities.map(async (ab:any)=>{
      let request = await fetch(ab.ability.url);
      let response = await request.json();
      abilitiesBuild.push(response);
    });
    abilitiesBuild.filter((value, index, self)=>{
      return self.indexOf({id:value.id})===index
    });}
    setAbilities(abilitiesBuild);
  }

  useEffect(() => {
    getDetails();
  }, [])
  useEffect(() => {
    getAbilities()
  }, [detail])
  return (
  <Container  maxWidth="sm">
    <Page detail={detail} abilities={abilities}/>
  </Container>)
}
export default Detail;