import { FC } from 'react';
import InputCSS from './Input.module.css';

type InputProps = {
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};


const Input : FC<InputProps> = ({placeholder, onChange}) => {

    return (
        <input className={InputCSS.input} onChange={onChange} placeholder={placeholder} type="text" />
    );
};
export default Input;