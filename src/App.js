import React from "react";
import './scss/app.scss'
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import {HomePage,CartPage} from "./pages";


function App() {
   return (
         <div className="App">
            <Routes>
               <Route path='/' element={<Layout/>}>
                  <Route index element={<HomePage/>}/>
                  <Route path='cart' element={<CartPage/>}/>
                  <Route path='*' element={<HomePage/>}/>
               </Route>
            </Routes>
         </div>

   );
}

export default App;
