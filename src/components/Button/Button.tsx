import React from 'react';

interface ButtonProps {
    label: string;
}

export const Button = (props: ButtonProps) => {
    return (
        <button style={{background: "red"}}>
            {props.label}
        </button>
    );
}

// export default Button;