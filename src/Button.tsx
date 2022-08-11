import React, { ButtonHTMLAttributes, FC } from 'react';
import cn from 'classnames'
type ButtonProps = { 
  theme?:'primary' | 'secondry' | 'fixedSize' | 'fixedSizeYellow'
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button:FC<ButtonProps> = ({theme,children,...rest}) => {

 return(
    <button  
    {...rest}
    className={cn('block border   px-2 font-medium text-xl shadow-md  rounded-md',
    {'bg-indigo-500 hover:bg-yellow-500 text-white border-indigo-500 ':theme==='primary'},
    {'bg-white border-gray-300 text-black hover:bg-yellow-500':theme==='secondry'},
    {'w-4 h-4 border-gray-400':theme==='fixedSize'}
    )}>{children}</button>
  );
}
Button.defaultProps = {
theme:'primary'
}
export default Button;