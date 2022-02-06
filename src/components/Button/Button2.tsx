import React from 'react';

interface Button2Props {
    label: string;
}

export const Button2 = (props: Button2Props) => {
    return (
        <button style={{background: "blue"}}>
            {props.label}
        </button>
    );
}