import Card from "../components/Card.jsx";
import {useEffect, useState} from "react";

const Body =({title})=>{
    const[currency,setCurrency] =useState("")
    const cardContainer={
        display:"flex",
        flexWrap:"wrap",
        marginTop:"20px"
    }
    // useEffect(()=>{
    //     const url =window.location.href
    //     const end =url.match(/[^/]+$/);
    //    console.log(end)
    //
    // },[currency])



    const titleTag =title?title:"Featured Products"
    const currencyPresent =currency?currency:"$"
    return(
        <div className={"cal__body"} style={{marginTop:"30px"}}>
            <div className={"body__heading"}>
                <h1 style={title&&{textAlign:"center"}}>{titleTag}</h1>
            </div>
            <div className={"card__container"} style={cardContainer}>
                <Card currency={currencyPresent} title={"Champion Lightweight Jacket"}/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}
export default Body