import React, {useEffect, useState} from 'react';
import {Categories, PizzaBlock, Sort} from "../components";
import {content} from "../content/content";
import axios from "axios";


const HomePage = () => {
   const [allPizzas, setAllPizzas] = useState([]);

   useEffect(() => {
      axios.get('http://localhost:3004/db.json').then((response) => setAllPizzas(response.data.pizzas))
   }, [])
   return (
      <div className="content">
         <div className="container">
            <div className="content__top">
               <Categories categories={content.categories}/>
               <Sort sortItems={content.sortItems}/>
            </div>
            <h2 className="content__title">All pizzas</h2>
            <div className="content__items">
               {allPizzas &&
                  allPizzas.map(item=>(
                     <PizzaBlock key={item.id} {...item}/>
                  ))}
            </div>
         </div>
      </div>
   );
};

export default HomePage;