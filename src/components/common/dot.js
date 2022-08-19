import React from 'react';
import styled from '@emotion/styled';

const DotBox = styled.div`
    height: 10px;
    width: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Dot = styled.div`
    width: 4px;
    height: 4px;
    margin-bottom: 3px;
    background-color: red;
    border-radius: 50%;
`;
const DotDot = () => {
    return <DotBox><Dot /></DotBox>
}

export default DotDot;