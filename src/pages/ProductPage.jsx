import {useState} from "react";
import "./ProductPage.css"
import {Link} from "react-router-dom";
import {Add} from "@mui/icons-material";
import AccordionTransition from "../components/Accordion.jsx";
const ProductPage =()=>{
    const[active,setActive] =useState("https://imgproxy.fourthwall.com/SQDXqAiAVN0VJnsNEyufb4aJjDXN-zJ1I0xalEhmjiE/w:900/sm:1/enc/NjI3MmVjMjM1N2Y4/ZDU3OQv2JQGo4v3D/S97y85DLtNw7oGj1/hFMRhhukovTbrbJt/w9-y1zuRiffqjdzS/jA63vCNRqXoWoB3-/5wVrmpbdTYzYoLEG/LW8EyC-9ega709gs/igWt3-HW89f-l1iO/uihpMdPzoEHEC-7R/WEOEIOXZpW4xthxD/6isfZkJE95pAYEA0/OSTU2TUyMb3OCZCQ/WdgrlITGSiBhs3rL/FSu1szsaHRg.webp")
    return(
        <div className={"products__page"}>
            <div className={"aside__container"}>
                <div onClick={()=>
                    setActive("https://imgproxy.fourthwall.com/SQDXqAiAVN0VJnsNEyufb4aJjDXN-zJ1I0xalEhmjiE/w:900/sm:1/enc/NjI3MmVjMjM1N2Y4/ZDU3OQv2JQGo4v3D/S97y85DLtNw7oGj1/hFMRhhukovTbrbJt/w9-y1zuRiffqjdzS/jA63vCNRqXoWoB3-/5wVrmpbdTYzYoLEG/LW8EyC-9ega709gs/igWt3-HW89f-l1iO/uihpMdPzoEHEC-7R/WEOEIOXZpW4xthxD/6isfZkJE95pAYEA0/OSTU2TUyMb3OCZCQ/WdgrlITGSiBhs3rL/FSu1szsaHRg.webp")}>
                    <img src={"https://imgproxy.fourthwall.com/SQDXqAiAVN0VJnsNEyufb4aJjDXN-zJ1I0xalEhmjiE/w:900/sm:1/enc/NjI3MmVjMjM1N2Y4/ZDU3OQv2JQGo4v3D/S97y85DLtNw7oGj1/hFMRhhukovTbrbJt/w9-y1zuRiffqjdzS/jA63vCNRqXoWoB3-/5wVrmpbdTYzYoLEG/LW8EyC-9ega709gs/igWt3-HW89f-l1iO/uihpMdPzoEHEC-7R/WEOEIOXZpW4xthxD/6isfZkJE95pAYEA0/OSTU2TUyMb3OCZCQ/WdgrlITGSiBhs3rL/FSu1szsaHRg.webp"}/>
                </div>
                <div onClick={()=>{
                    setActive("https://imgproxy.fourthwall.com/ZOWfCKVLNMLkI1vRd5WvgiywgaX4LI1EAsyOur1S5kU/w:900/sm:1/enc/ZjczZWNjMTk4NDI3/ZmE0NFaK339BAGYT/mYMtG1jEOFsWs7rs/7sOz90YkqCMz7_lk/DvJPh0E5jeELQUH0/VaexQFQRhjfVLL6r/DF2nrZ3VqqOp73iy/sQZXxoNQGxxIO1Jy/wd946DsmSVgiSRYD/XQ8e6kHMMEySRdmi/SbuP6j2xlr0Q3Ryp/Ve3j6qc8AgN3Zye5/LxkMN_Ar1Lmz3he1/mnN14Mm-8kQ47X-5/4uK8cmO-UA4.webp")
                }}>
                    <img src={"https://imgproxy.fourthwall.com/ZOWfCKVLNMLkI1vRd5WvgiywgaX4LI1EAsyOur1S5kU/w:900/sm:1/enc/ZjczZWNjMTk4NDI3/ZmE0NFaK339BAGYT/mYMtG1jEOFsWs7rs/7sOz90YkqCMz7_lk/DvJPh0E5jeELQUH0/VaexQFQRhjfVLL6r/DF2nrZ3VqqOp73iy/sQZXxoNQGxxIO1Jy/wd946DsmSVgiSRYD/XQ8e6kHMMEySRdmi/SbuP6j2xlr0Q3Ryp/Ve3j6qc8AgN3Zye5/LxkMN_Ar1Lmz3he1/mnN14Mm-8kQ47X-5/4uK8cmO-UA4.webp"}/>
                </div>
            </div>
            <div className={"products__page__image__container"}>
                <img src={active}/>

            </div>
            <div className={"products__page__description"}>
                <h1>Champion LightWeight Jacket</h1>
                <h3>43.70</h3>
                <p>The perfect windbreaker for when you cant decide whether or not to trust the weatherman</p>
                <p>select color: <span>black</span></p>
                <div className={"color__available"}>
                    <div className={"black"}></div>
                    <div className={"grey"}></div>
                    <div className={"blue"}></div>
                </div>
                <p>Select Size <span><Link>Size guide</Link></span></p>
                <div className={"sizes"}>
                    <div className={"small"}>s</div>
                    <div className={"small"}>M</div>
                    <div className={"small"}>L</div>
                    <div className={"small"}>XL</div>
                    <div className={"small"}>2XL</div>
                </div>
                <hr className={"hr"}/>
                <div className={"quantity"}>
                    <input type={"number"} min={1}/>
                    <button>Add to cart</button>
                </div>
                <div className={"more__details"}>
                    <AccordionTransition  title={"more info"} description={"lorem ubdfh bdfgh  bgeskij uibrg usbdgs vbdsfbnd  y y"}/>
                    <AccordionTransition/>
                    <AccordionTransition/>
                </div>

            </div>
        </div>
    )
}
export default ProductPage