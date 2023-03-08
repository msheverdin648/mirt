import { HTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

interface ButtonProps  extends HTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: string;
}

export const Button: React.FC<ButtonProps> = (props) => {
    const { 
        className,
        children, 
        theme,
        ...otherProps 
    } = props;

    return (
        <button 
            className={classNames(cls.button, {}, ['btn', `btn-${theme}`, className])} 
            {...otherProps}
        > 
            {children}
        </button>


 );
}