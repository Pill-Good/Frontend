import React from 'react';
import styled from '@emotion/styled';

const EnterButton = styled.button`
    height: 40px;
    width: 300px;
    padding: 10px;
    border-radius: 10px;
    font-size: 12px;
    font-weight: bolder;
    border: 1px solid #969696;
    background-color: #8F7CEE;
    text-align: center;
    color: white;
    display: block;
    /* margin-top: 30px; */
`;
const Button = ({children}) => {
    return <EnterButton>{children}</EnterButton>;
}

export default Button;