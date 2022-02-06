import React from 'react';

interface ButtonProps {
    /** label for button */
    label: string;
}

/**
 * This is the description
 * @param {ButtonProps} props Takes label prop
 * @returns returns button component
 */
export const Button = (props: ButtonProps) => {
    return (
        <button style={{background: "red"}}>
            {props.label}
        </button>
    );
}