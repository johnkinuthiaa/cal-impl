import "./styles/card.css"
import {useNavigate} from "react-router-dom";
const Card =({currency,title})=>{
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
                <img src={"https://imgproxy.fourthwall.com/AaYuCWxNJFxLfSrkdXWys8FZUb9VeG8v1qPvAZ8rJjg/w:720/sm:1/enc/MjViNmNhMTRlYzQy/OTcyMQfhVevEs241/riUxLi1BF589nCmn/c1hhVWm1UvRltUTZ/iFyll9ZjQbyhFI_i/u0Ebu0QYjAfDxGG1/f05ZsqAk5jtKpblX/q3NTCqRwmI10-dA9/EgjD70cS-99ha7bX/FQ7vr8NPwmbIaMBu/XddEcB1AFpXCfnPl/W_oSFsyvLN6q4JAS/gjxjCeDIA1bkYwtP/eE9IZOq3-APh0_VP/is9TSDVdpSY.webp"}/>
            </div>
            <div className={"item__description"}>
                <h5>Champion Lightweight Jacket </h5>
                <p>{currency} 100.00</p>
            </div>
        </div>
    )
}
export default Card