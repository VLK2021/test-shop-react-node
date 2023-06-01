import {Route, Routes} from "react-router-dom";

import './App.css';
import Layout from "./Layout/Layout";
import ProductsComponent from "./components/ProductsComponent/ProductsComponent";


function App() {

    return (
        <main className="App">
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<ProductsComponent/>}/>
                </Route>
            </Routes>
        </main>
    );
}

export default App;
