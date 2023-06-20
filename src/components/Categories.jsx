import React, {useState} from 'react';

const Categories = ({categories}) => {
   const [activeCategory,setActiveCategory] = useState(null);
   const onClickCategories = (index) =>{
      setActiveCategory(index)
   }

   return (
      <div className="categories">
         <ul>
            <li onClick={()=>setActiveCategory(null)} className={activeCategory == null ?   'active': ''}>All</li>
            {categories &&
               categories.map((category,index)=>
                  <li onClick={()=>onClickCategories(index)} className={activeCategory === index ? 'active' : ''} key={`${category}_${index}`}>{category}</li>
               )}
         </ul>
      </div>
   );
};

export default Categories;