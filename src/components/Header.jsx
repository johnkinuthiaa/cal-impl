import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import "./styles/header.css"
import {Link, useNavigate} from "react-router-dom";

const Header =()=>{
    const navigate =useNavigate()
    const headerStyles ={
        display: "block",
        marginTop:"30px",
    }
    const headerRight={
        display:"flex",
        alignItems:"center",
        padding:"2px",
    }
    const selectionStyles ={
        backgroundColor:"none",

    }
    const headerContainer ={
        display:"flex",
    }

    return(
        <div className={"header"} style={headerStyles}>
            <div className={"header__container"} style={headerContainer}>
                <div className={"heading"} onClick={()=>navigate("/")}>
                    <img src={"https://imgproxy.fourthwall.com/bdscT9uSD7SEXiQnK0886J2lcxOd9gPrG5lw6sWp7oQ/w:85/sm:1/enc/YmIzM2M5ZTM0YzUy/NzIwN2gyBryTkAcg/sRmYnHEfv2l1D8Q7/ENxNLwGw-EUTXi4z/3C-0DObbAN7K88oV/gs_h9Kf2N1M7sdON/Eq0UqBko-6Vzw3TK/ekT99Lxzf1cw-40T/Wjo0eEA0kyhlmiWs/DhiaVrF3BMo6p5b7/E5DzJ6sRTrliNjD_/34kEnKJU_lSmeyMh/XdQSUVImr9z3MnSC/A7BaIg.webp"} alt={"logo"}/>
                </div>
                <div className={"header__right"} style={headerRight}>
                    <div className={"selection"} style={selectionStyles} >
                        <select onChange={(e)=>{

                            navigate(`/collections/all/${e.target.value.trim()}`)
                        }}>
                            <option >USD</option>
                            <option >EUR</option>
                            <option >CAD</option>
                            <option >GBP</option>
                            <option >AUD</option>
                            <option >NZD</option>
                            <option >SEK</option>
                            <option >NOK</option>
                            <option >DKK</option>
                            <option >PLN</option>
                            <option >INR</option>
                            <option >JPY</option>

                        </select>
                    </div>
                    <div className={"shopping_cart"}>
                        <button>
                            <ShoppingBagIcon/>
                        </button>

                    </div>
                </div>
            </div>
            <div className={"navigation"}>
                <nav>
                    <div>
                        <Link to={"/"}>Home</Link>
                    </div>
                    <div>
                        <Link to={"/collections/all"}>All products</Link>

                    </div>
                    <div>
                        <Link to={"/home"}>Cal.com</Link>

                    </div>
                </nav>
            </div>
        </div>
    )
}
export default Header