import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import PizzasServices from "../API/pizzasServices";
import {content} from "../content/content";
import {Categories, PizzaBlock, PizzaSkeleton, Sort} from "../components";
import {AllPizzasAction} from "../store/pizzasReduser";
import {useFetching} from "../hooks/useFetching";
import {setByCategory, setSortBy} from "../store/filtersReducer";
import {setCart} from "../store/cartReducer";


const HomePage = () => {
   const dispatch = useDispatch();
   const pizzasItems = useSelector(state => state.pizzas.items);
   const {filterSelectCategory, filterSelectSort} = useSelector(({filters}) => ({
      filterSelectCategory: filters.category,
      filterSelectSort: filters.sortBy
   }));
   // const filterSelectCategory = useSelector(({filters}) => filters.category);
   // const filterSelectSort = useSelector(({filters}) => filters.sortBy);
   const cartItems = useSelector(({cart}) => cart.items);

   const [fetchPizzas, isLoadedPizzas, errorPizzas] = useFetching(async (filterSelectCategory, filterSelectSort) => {
      const {data} = await PizzasServices.getAll(filterSelectCategory, filterSelectSort)
      dispatch(AllPizzasAction(data))
   });

   useEffect(() => {
      fetchPizzas(filterSelectCategory, filterSelectSort)
   }, [filterSelectCategory, filterSelectSort]);


   const onSelectCategory = useCallback(index => {
      dispatch(setByCategory(index));
   }, [])

   const onSelectSort = useCallback((item) => {
      dispatch(setSortBy(item));
   }, [])

   const addOrderPizza = useCallback((arr) => {
      dispatch(setCart(arr))
   }, [])

   return (
      <div className="content">
         <div className="container">
            <div className="content__top">
               <Categories filterSelectCategory={filterSelectCategory}
                           onClickItem={onSelectCategory}
                           categories={content.categories}
               />
               <Sort filterSelectSort={filterSelectSort}
                     onSelectSort={onSelectSort}
                     sortItems={content.sortItems}/>
            </div>
            <h2 className="content__title">All pizzas</h2>
            <div className="content__items">
               {isLoadedPizzas && Array(8).fill(0).map((item, index) => <PizzaSkeleton key={index}/>)}
               {!isLoadedPizzas &&
                  pizzasItems &&
                  pizzasItems.map(item => (
                     <PizzaBlock addOrderPizza={addOrderPizza}
                                 key={item.id}
                                 addedPizzas={cartItems[item.id]?.items && cartItems[item.id].items.length}
                                 {...item}/>
                  ))
               }
               {errorPizzas &&
                  <h2 style={{color: 'red', fontSize: '50px'}}>Ups.... Error: <span
                     style={{fontWeight: '900'}}>{errorPizzas}</span></h2>
               }
            </div>
         </div>
      </div>
   );
};

export default HomePage;