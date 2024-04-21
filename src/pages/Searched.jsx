import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
function Searched() {

    const [searchedRecipes,setSearchedRecipes]= useState([]);
    let  params= useParams();
    const key="a18f657b8f8a494fb904963367c60adf";

    const getSearched= async(name)=>{
        // const check= localStorage.getItem(`${name}`);
        // if(check){
        //   setSearched(JSON.parse(check));
        // }else{
          const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&number=9&query=${name}`);
          const data= await api.json();
          //localStorage.setItem(`${name}`, JSON.stringify(data.results));
          setSearchedRecipes(data.results)
        //}
        
      };

    useEffect(()=>{
        getSearched(params.search);
    },[params.search])
  return (
    <Grid>
        {searchedRecipes.map((item) =>{
            return(
                <Card key={item.id}>
                  <Link to={"/recipe/"+item.id}>
                    <img src={item.image} alt="" />
                    <h4>{item.title}</h4>
                    </Link>
                </Card>
            )
        })}
    </Grid>
  )
}

const Grid= styled.div`
display: grid;
grid-template-columns: repeat(auto-fit,minmax(20rem,1fr));
grid-gap:3rem;
`;
const Card= styled.div`
img{
  border-radius:2rem;
  
  
  width: 80%;
}
a{
  text-decoration:none;

}
h4{
  text-align:center;
  padding:1rem;
}
`;
export default Searched