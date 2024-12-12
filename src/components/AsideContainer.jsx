import "./styles/AsideContainer.css"
import {useState} from "react";
const AsideContainer =({img})=>{

    return(
        <div className={"aside__container"} >
            <div >
                <img src={img}/>
            </div>
            {/*<div onClick={() => {*/}
            {/*    setActive("https://imgproxy.fourthwall.com/ZOWfCKVLNMLkI1vRd5WvgiywgaX4LI1EAsyOur1S5kU/w:900/sm:1/enc/ZjczZWNjMTk4NDI3/ZmE0NFaK339BAGYT/mYMtG1jEOFsWs7rs/7sOz90YkqCMz7_lk/DvJPh0E5jeELQUH0/VaexQFQRhjfVLL6r/DF2nrZ3VqqOp73iy/sQZXxoNQGxxIO1Jy/wd946DsmSVgiSRYD/XQ8e6kHMMEySRdmi/SbuP6j2xlr0Q3Ryp/Ve3j6qc8AgN3Zye5/LxkMN_Ar1Lmz3he1/mnN14Mm-8kQ47X-5/4uK8cmO-UA4.webp")*/}
            {/*}}>*/}
            {/*    <img*/}
            {/*        src={"https://imgproxy.fourthwall.com/ZOWfCKVLNMLkI1vRd5WvgiywgaX4LI1EAsyOur1S5kU/w:900/sm:1/enc/ZjczZWNjMTk4NDI3/ZmE0NFaK339BAGYT/mYMtG1jEOFsWs7rs/7sOz90YkqCMz7_lk/DvJPh0E5jeELQUH0/VaexQFQRhjfVLL6r/DF2nrZ3VqqOp73iy/sQZXxoNQGxxIO1Jy/wd946DsmSVgiSRYD/XQ8e6kHMMEySRdmi/SbuP6j2xlr0Q3Ryp/Ve3j6qc8AgN3Zye5/LxkMN_Ar1Lmz3he1/mnN14Mm-8kQ47X-5/4uK8cmO-UA4.webp"}/>*/}
            {/*</div>*/}
        </div>
    )
}
export default AsideContainer