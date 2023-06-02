import {Route, Routes} from "react-router-dom";

import './App.css';
import Layout from "./Layout/Layout";
import ProductsComponent from "./components/ProductsComponent/ProductsComponent";
import BurgersComponent from "./components/BurgersComponent/BurgersComponent";
import PizzaComponent from "./components/PizzaComponent/PizzaComponent";
import DrinksComponent from "./components/DrinksComponent/DrinksComponent";
import SushiComponents from "./components/SushiComponents/SushiComponents";
import DesertsComponent from "./components/DesertsComponent/DesertsComponent";
import ShoppingCard from "./components/ShoppingCard/ShoppingCard";


function App() {

    return (
        <main className="App">
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<ProductsComponent/>}/>
                    <Route path={'1'} element={<ProductsComponent/>}/>
                    <Route path={'2'} element={<BurgersComponent/>}/>
                    <Route path={'3'} element={<PizzaComponent/>}/>
                    <Route path={'4'} element={<DrinksComponent/>}/>
                    <Route path={'5'} element={<SushiComponents/>}/>
                    <Route path={'6'} element={<DesertsComponent/>}/>
                    <Route path={'/card'} element={<ShoppingCard/>}/>
                </Route>
            </Routes>
        </main>
    );
}

export default App;
