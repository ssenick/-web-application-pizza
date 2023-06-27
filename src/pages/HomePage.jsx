import React, {useCallback, useEffect} from 'react';
import {Categories, PizzaBlock, PizzaSkeleton, Sort} from "../components";
import {content} from "../content/content";
import {useDispatch, useSelector} from "react-redux";
import {AllPizzasAction} from "../store/pizzasReduser";
import PizzasServices from "../API/pizzasServices";
import {useFetching} from "../hooks/useFetching";
import {setByCategory, setSortBy} from "../store/filtersReducer";


const HomePage = () => {
   const dispatch = useDispatch();
   const pizzasItems = useSelector(state => state.pizzas.items);
   const filterSelectCategory = useSelector(state => state.filters.category);
   const filterSelectSort = useSelector(state => state.filters.sortBy);

   const [fetchPizzas, isLoadedPizzas, errorPizzas] = useFetching(async (filterSelectCategory) => {
      const {data} = await PizzasServices.getAll(filterSelectCategory)
      dispatch(AllPizzasAction(data))
   });
   useEffect(() => {
      fetchPizzas(filterSelectCategory)
      console.log(filterSelectCategory)
   }, [filterSelectCategory]);


   const onSelectCategory = useCallback(index =>{
      dispatch(setByCategory(index));
   },[])
   const onSelectSort = useCallback((index) =>{
      dispatch(setSortBy(index));

   },[])


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
               {isLoadedPizzas && Array(8).fill(0).map((item,index )=> <PizzaSkeleton key={index}/>)}
               {!isLoadedPizzas &&
                  pizzasItems &&
                  pizzasItems.map(item => (
                     <PizzaBlock key={item.id} {...item}/>
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