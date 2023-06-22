import React from 'react';
import classNames from "classnames";
const Button = ({className,cart,outline,add,children}) => {
   return (
      <button className={classNames('button',className,{
         'button--cart': cart,
         'button--outline': outline,
         'button--add': add,
      })}>
         {children}
      </button>
   );
};

export default Button;