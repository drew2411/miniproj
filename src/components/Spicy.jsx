import { useEffect, useState} from "react";
import styled from "styled-components";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";
//process.env.SPOONACULAR_KEY

function Spicy() {

    

    
    const key="fc87ae95447748c8927afc170bbd04e9";
    const [spicy, setSpicy]= useState([]);
    useEffect(() =>{
        getSpicy();
    },[]);
    const getSpicy= async () => {
        const check= localStorage.getItem("spicy");
        
        if(!check){
            console.log("hi");
            const api= await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${key}&number=9&tags=chilli`);
              const data = await api.json();
              
              localStorage.setItem("spicy", JSON.stringify(data.recipes));
              setSpicy(data.recipes);
              console.log("BITCH");
              //console.log(typeof data.recipes);
              //console.log(data.recipes);
              
          }else{
            
            setSpicy(JSON.parse(check));
          }
        
    };
  return (
    <div>
        
        <Wrapper>
            <h3>Spicy Recipes</h3>
            <Splide options={
                {perPage:4,
                arrows : false,
                pagination: false,
                drag:  'free',
                gap: "5rem"}
            }>
            {spicy.map((recipe) =>{
                return (
                    <SplideSlide key={recipe.id}>
                    <Card>
                        <Link to={"/recipe/"+recipe.id}>
                        <p>{recipe.title}</p>
                        <img src={recipe.image} alt={recipe.title} />
                        </Link>
                    <Gradient />
                    </Card>
                    </SplideSlide>
                )
            })}
            </Splide>
        </Wrapper>
            
    </div>
  )
}

const Wrapper= styled.div`
    margin: 4rem 0rem    ;
    h3{
        font-weight:1200;
        margin-bottom:1rem;
    }
`;
const Card= styled.div`
    min-height : 25rem;
    border-radius : 2rem;
    overflow : hidden;
    position: relative;
    img{
        border-radius:2rem;
        position:absolute;
        left:0;
        wodth: 100%;
        height:100%;
        object-fit:cover;

    }
    p{
        position:absolute;
        z-index: 10;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%,0%);
        color: white;
        width: 100%;
        text-align:center;
        font-weight:600;
        font-size:1rem;
        height:40%;
        display: flex;
        justify-content: center;
        align-items:center;
    }
`;

const Gradient= styled.div`
    z-index:3;
    position:absolute;
    width:100%;
    height:100%;
    background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));

`;
export default Spicy