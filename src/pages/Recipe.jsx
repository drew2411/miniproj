import { useEffect,useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import React from 'react'
import { motion } from "framer-motion";

function Recipe() {
    let params= useParams();
    const [details,setDetails]=useState({});
    const [activeTab, setActiveTab]= useState("instructions");
    const key="a18f657b8f8a494fb904963367c60adf";
    const fetchDetails= async()=>{
        const data= await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${key}`);
        const detailData= await data.json();
        setDetails(detailData);
        console.log(detailData);
    };

    useEffect(()=>{
        fetchDetails();
    },[params.name]);
  return (
    <DetailWrapper
    animate={{opacity:1}}
    initial={{opacity:0}}  
    exit={{opacity:0}}
    transition={{duration:0.5}}
    >
        <div>
            <h2>{details.title}</h2>
            <img src={details.image} alt="" />
        </div>
        <Info>
            <Button className={activeTab==="instructions"? "active" : ""} onClick={()=>setActiveTab("instructions")}> Instructions </Button>
            <Button className={activeTab==="ingredients"? "active" : ""} onClick={()=>setActiveTab("ingredients")}> Ingredients </Button>
            {activeTab==="instructions" && (
                <div>
                    <h3 dangerouslySetInnerHTML={{__html:details.summary}}></h3><br />
                    <h3 dangerouslySetInnerHTML={{__html:details.instructions}}></h3>
                </div>

            )}
            {activeTab==="ingredients" &&(
                <ul>
                    {details.extendedIngredients.map((ingredient) =>(
                        <li key={ingredient.id}><b>{ingredient.original}</b></li>

                    ))}
                </ul>
            )}
        </Info>
    </DetailWrapper>
  )
}

const DetailWrapper= styled(motion.div)`
    margin-top:10rem;
    margin-bottom:5rem;
    display:flex;
    transition: background-color 0.3s ease;
    .active{
        transition:3s;
        background: linear-gradient(90deg,black,grey);
        color:white;
    }
    
    
    h2{
        margin-bottom:2rem;
    }
    // h3{
    //     font-weight:200;
    // }
    li{
        font-size:1.2rem;
        line-height:2.5rem;
    }
    ul{
        // margin-top:2rem;
    }
`;

const Button=styled.button`
    padding:1rem 2rem;
    color: #313131;
    background:white;
    border:2px solid black;
    margin-right:2rem;
    font-weight:600;
    margin-bottom:1rem;
    cursor:pointer;
    transition: background-color 0.3s ease;
    .hover{
        background_color:grey;
    }

`;

const Info= styled.div`
    margin-left:10rem;
`
export default Recipe