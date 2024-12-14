import "./styles/AsideContainer.css"
import {useEffect, useState} from "react";
const AsideContainer =({img})=>{

    return(
        <div className={"aside__container"}>
            <div>
                <img src={img} onClick={()=>{
                    localStorage.setItem("image",img)

                }}/>
            </div>

        </div>
    )
}
export default AsideContainer