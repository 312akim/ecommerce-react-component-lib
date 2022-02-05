import React from 'react';

interface Card2Props {
    text: string;
}

export const Card2 = (props: Card2Props) => {
    return (
        <div style={{background: "blue"}}>
            {props.text}
        </div>
    );
}

// export default Card2;