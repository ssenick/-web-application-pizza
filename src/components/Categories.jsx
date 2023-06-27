import React, {memo, useEffect, useState} from 'react';

const Categories = memo(
   ({categories,onClickItem,filterSelectCategory}) => {

      const onClickCategories = (index) =>{
         onClickItem(index)
      }

      return (
         <div className="categories">
            <ul>
               <li onClick={()=>onClickCategories(null)}
                   className={filterSelectCategory == null ?   'active': ''}>
                  All
               </li>
               {categories &&
                  categories.map((category,index)=>
                     <li onClick={()=>onClickCategories(index)}
                         className={filterSelectCategory === index ? 'active' : ''}
                         key={`${category}_${index}`}>
                        {category}
                     </li>
                  )}
            </ul>
         </div>
      );
   }
)

export default Categories;