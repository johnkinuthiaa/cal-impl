import {useEffect, useState} from "react";
import "./ProductPage.css"
import {Link} from "react-router-dom";
import {Add} from "@mui/icons-material";
import AccordionTransition from "../components/Accordion.jsx";

const ProductPage =()=>{

    const url =window.location.href
    const title =url.match(/[^/]+$/)

    const[quantity,setQuantity] =useState(1)
    const [selectedImage, setSelectedImage] = useState('');

    const [dataFetched,setDataFetched] =useState([])

    useEffect(()=>{
        fetchDataByName()
    },[])
    const fetchDataByName =(async ()=>{
        const response =await fetch(`https://ecs-shop.onrender.com/api/v1/shop/find/name?name=${title}`)
        const data =await response.json()
        setDataFetched(data.shopItemList)

    })
    const [color,setColor] =useState("black")
    return(
        <div>
            {dataFetched?.length>0?(
                dataFetched.map((item,key)=> (
                    <div className={"products__page"} key={key}>
                        <div className={"products__page__container__images"}>
                            <div className={"aside__container__main"}>
                                {item.images.map((image) => (
                                    <div className={"aside__container"}>
                                        <div>
                                            <img src={image} onClick={() => {
                                                setSelectedImage(image)
                                            }}/>
                                        </div>

                                    </div>
                                ))}

                            </div>
                            <div className={"products__page__image__container"}>
                                <img src={selectedImage ? selectedImage : item.images[0]}/>

                            </div>
                        </div>

                        <div className={"products__page__description"}>
                            <h1>{item.name}</h1>
                            <h3>$ {(item.price * quantity)}</h3>
                            <div>
                                <p>{item.description}</p>
                                <p>select color: <span className={"color"}
                                                       style={{color: color, fontWeight: "600"}}>{color}</span></p>
                                <div className={"color__available"}>
                                    <div className={"black"} onClick={() => setColor("black")}>

                                    </div>
                                    <div className={"grey"} onClick={() => setColor("grey")}></div>
                                    <div className={"blue"} onClick={() => setColor("blue")}></div>
                                </div>
                                <p>Select Size <span><Link>Size guide</Link></span></p>
                                <div className={"sizes"}>
                                    <div className={"small"}>s</div>
                                    <div className={"small"}>M</div>
                                    <div className={"small"}>L</div>
                                    <div className={"small"}>XL</div>
                                    <div className={"small"}>2XL</div>
                                </div>
                                <div className={"hr"}></div>
                                <div className={"quantity"}>
                                    <input type={"number"} min={1} defaultValue={1} onChange={(e)=>{
                                        setQuantity(e.target.value)
                                    }}/>
                                    <button>Add to cart</button>
                                </div>
                                <div className={"more__details"}>
                                    <AccordionTransition title={"more info"}
                                                         description={item.moreDetails}/>
                                    <AccordionTransition title={" Quality Guarantee"} description={item.qualityGuarantee}/>

                                </div>
                            </div>


                        </div>
                    </div>
                ))
            ) : (
                <div></div>
            )}

        </div>
    )
}
export default ProductPage