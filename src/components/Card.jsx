import "./styles/card.css"
import {useNavigate} from "react-router-dom";
const Card =({currency,title,image})=>{
    const navigate =useNavigate()
    const cardStyles ={
        borderRadius:"15px",
    }
    const card ={
        alignItems:"center",
        display:"flex",
        flexDirection:"column",
        width: "370px",
        height: "650.217px",
        cursor:"pointer",
        margin:"5px"

    }


    return(
        <div className={"card"} style={card} onClick={()=>{
            navigate(`/products/${title}`)
        }}>
            <div style={cardStyles} className={"image__container"}>
                <img src={image[0]}/>
            </div>
            <div className={"item__description"}>
                <h5>{title}</h5>
                <p>{currency} 100.00</p>
            </div>
        </div>
    )
}
export default Card