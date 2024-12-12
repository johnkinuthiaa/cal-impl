import Body from "./pages/Body.jsx";
import { Route, Routes} from "react-router-dom";
import ProductPage from "./pages/ProductPage.jsx";

const App =()=>{
    return(
        <>
            <Routes>
                <Route path={"/"} element={<Body/>}/>
                <Route path={"/products/:name"} element={<ProductPage/>}/>
                <Route path={"/collections/all"} element={<Body title={"All products"}/>}/>
                <Route path={"/collections/all/:currency"} element={<Body title={"All products"}/>}/>
            </Routes>
        </>
    )
}
export default App