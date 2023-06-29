import React, {memo, useState} from 'react';
import {Button} from "../index";
import {content} from "../../content/content";
import classNames from "classnames";

const PizzaBlock = memo(
   ({id, imageUrl, name, price, types, sizes, addOrderPizza,addedPizzas}) => {
      const [activeTypes, setTypesActive] = useState(types[0])
      const [activeSizes, setSizesActive] = useState(sizes[0])
      const setTypesItem = (index) => {
         setTypesActive(index)
      }
      const setSizesItem = (index) => {
         setSizesActive(index)
      }

      const addPizza = () => {
         addOrderPizza({id,imageUrl,name,price,types:content.availableTypes[activeTypes],sizes:activeSizes})
      }

      return (
         <div className="pizza-block">
            <img
               className="pizza-block__image"
               src={imageUrl}
               alt="Pizza"
            />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
               <ul>
                  {content.availableTypes.map((type, index) => (
                     <li
                        onClick={() => {
                           setTypesItem(index)
                        }}
                        key={type}
                        className={classNames({
                           'active': index === activeTypes,
                           'disabled': !types.includes(index)

                        })}>
                        {type}
                     </li>
                  ))}
               </ul>

               <ul>
                  {content.availableSizes.map((size, index) => (
                     <li
                        onClick={() => {
                           setSizesItem(size)
                        }}
                        key={size}
                        className={classNames({
                           'active': size === activeSizes ,
                           'disabled': !sizes.includes(size)
                        })}>
                        {size} sm.
                     </li>
                  ))}
               </ul>
            </div>
            <div className="pizza-block__bottom">
               <div className="pizza-block__price">from {price} $</div>
               <Button onClick={addPizza} outline add>
                  <svg
                     width="12"
                     height="12"
                     viewBox="0 0 12 12"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                     />
                  </svg>
                  <span >Add</span>
                  {addedPizzas && <i>{addedPizzas}</i>}
               </Button>
            </div>
         </div>
      );
   }
)

export default PizzaBlock;