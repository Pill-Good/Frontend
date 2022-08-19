import React from 'react';
import styled from '@emotion/styled';

const EnterButton = styled.button`
    height: 40px;
    width: ${props => props.size === "sm" ? "100px" : "300px"};
    padding: 10px;
    border-radius: 15px;
    font-size: 12px;
    font-weight: bolder;
    border: 1px solid #969696;
    background-color: ${props => props.color === "basic" ? "white" : "#8F7CEE"};
    text-align: center;
    color: ${props => props.color === "basic" ? "black" : "white"};;
    display: block;
    /* margin-top: 30px; */
`;
const Button = ({children, color, size}) => {
    return <EnterButton color={color} size={size}>{children}</EnterButton>;
}

export default Button;