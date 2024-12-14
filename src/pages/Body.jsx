import Card from "../components/Card.jsx";
import {useEffect, useState} from "react";

const Body =({title})=>{
    const[currency,setCurrency] =useState("")
    const[dataFetched,setData] =useState([])
    const cardContainer={
        display:"flex",
        flexWrap:"wrap",
        marginTop:"20px"
    }
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData =(async ()=>{
        const response =await fetch("http://localhost:8080/api/v1/shop/get/all")
        if (response.ok){
            const data =await response.json()
            setData(data.shopItemList)
        }else{
            throw new Error("error fetching data")
        }

    })


    const titleTag =title?title:"Featured Products"
    const currencyPresent =currency?currency:"$"
    return(
        <div className={"cal__body"} style={{marginTop:"30px"}}>
            <div className={"body__heading"}>
                <h1 style={title&&{textAlign:"center"}}>{titleTag}</h1>
            </div>
            <div className={"card__container"} style={cardContainer}>
                {
                    dataFetched.map((item,key)=>(
                        <Card currency={currencyPresent} title={item.name.trim()} image={item.images} key={key}/>
                    ))
                }


            </div>
        </div>
    )
}
export default Body