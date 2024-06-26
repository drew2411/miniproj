import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { NavLink, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Cuisine() {
  const [cuisine,setCuisine]= useState([]);
  let params= useParams();

  const key="a18f657b8f8a494fb904963367c60adf";
  const getCuisine= async(name)=>{
    // const check= localStorage.getItem(`${name}`);
    // if(check){
    //   setCuisine(JSON.parse(check));
    // }else{
      const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&number=9&cuisine=${name}`);
      const data= await api.json();
      //localStorage.setItem(`${name}`, JSON.stringify(data.results));
      setCuisine(data.results)
    //}
    
  }
  useEffect(()=>{
    getCuisine(params.type)
    console.log(params.type);
  },[params.type]);
  return (
    <Grid
      animate={{opacity:1}}
      initial={{opacity:0}}  
      exit={{opacity:0}}
      transition={{duration:0.5}}
    >
      {cuisine.map((item) =>{
        return(
          <Card key={item.id}>
            <Link to={"/recipe/"+item.id}>
            <img src={item.image} alt="item.title"  />
            <h4>{item.title}</h4>
            </Link>
          </Card>
      )
      })}
    </Grid>
  )
}

const Grid= styled(motion.div)`
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

export default Cuisine