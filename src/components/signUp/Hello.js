import React from 'react';
import styled from '@emotion/styled';

const SignUpInputWrapper = styled.input`
    height: 40px;
    width: 300px;
    padding: 10px;
    border-radius: 10px;
    font-size: 10px;
    border: 1px solid #969696;
`;
const SignUpInput = (props) => {
    return <SignUpInputWrapper placeholder={`${props.hint}`} type= {props.hint} />;
}

export default SignUpInput;