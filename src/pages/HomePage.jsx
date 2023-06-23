import React, {useEffect, useState} from 'react';
import {Categories, PizzaBlock, Sort} from "../components";
import {content} from "../content/content";
import {useDispatch, useSelector} from "react-redux";
import {AllPizzasAction} from "../store/pizzasReduser";
import PizzasServices from "../API/pizzasServices";
import {useFetching} from "../hooks/useFetching";


const HomePage = () => {
   const dispatch = useDispatch();
   const pizzasItems = useSelector(state => state.pizzas.items)
   const [fetchPizzas, isLoadedPizzas, errorPizzas] =  useFetching(async () => {
      const {data} = await PizzasServices.getAll()
      dispatch(AllPizzasAction(data.pizzas))
   });
   useEffect(() => {
      fetchPizzas()
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
               {isLoadedPizzas && <h2 style={{fontSize:'50px'}}>Loading......</h2>}
               {!isLoadedPizzas && pizzasItems &&
                  pizzasItems.map(item => (
                     <PizzaBlock key={item.id} {...item}/>
                  ))
               }
               {errorPizzas && <h2 style={{color:'red', fontSize:'50px'}}>Ups.... Error: <span style={{fontWeight:'900'}}>{errorPizzas}</span></h2>}

            </div>
         </div>
      </div>
   );
};

export default HomePage;