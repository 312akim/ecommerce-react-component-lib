import React from 'react';

interface CardProps {
    text: string;
}

export const Card = (props: CardProps) => {
    return (
        <div style={{background: "blue"}}>
            {props.text}
        </div>
    );
}

// export default Card;