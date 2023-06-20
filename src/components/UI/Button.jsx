import React from 'react';
import classNames from "classnames";
const Button = ({className,cart,children}) => {
   return (
      <button className={classNames('button',className,{
         'button--cart': cart,
      })}>
         {children}
      </button>
   );
};

export default Button;