import { FC } from 'react';
import ButtonCSS from './Button.module.css';

type ButtonProps = {
    onClick: () => void;
};

const Button : FC<ButtonProps> = ({onClick}) => {

    return (
        <button className={ButtonCSS.button} onClick={onClick}>Find Pokemon</button>
    );
};
export default Button;