
import {FC, InputHTMLAttributes} from 'react'
import cn from 'classnames'
import { useField } from 'formik'
type InputProps={
name:string
} & InputHTMLAttributes<HTMLInputElement>

const Input:FC<InputProps> = ({type,name, ...rest}) =>{
    const [feild,meta]=useField(name)
    return(
        <div className='space-y-2'>
        <input
        {...feild}
        {...rest}
        name={name}
        type={'text' && type}
        className={cn('border border-gray-300 block  shadow-md rounded-md py-1 font-bold text-black pl-3 outline-none', 
        {'focus:ring focus:ring-yellow-400 w-full ring-offset-2 border-indigo-300':type!='checkbox'})} />
     <div className='h-4'>
     { meta.error && meta.touched && <p className='text-red-500'>{meta.error}</p>}
     </div>
   </div>
    )
}

export default Input;