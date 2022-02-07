import React from 'react';
import './Button.css';
import styled from "styled-components"

interface ButtonProps {
    /** label for button */
    label: string;
}

/**
 * This is the description
 * @param {ButtonProps} props Takes label prop
 * @returns returns button component
 */
const Button = (props: ButtonProps) => {
    return (
        <StyledButton style={{background: "red"}}>
            {props.label}
        </StyledButton>
    );
}

const StyledButton = styled.button`
    background: blue;
`

export default Button;