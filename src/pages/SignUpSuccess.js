import React from 'react'
import styled from '@emotion/styled'
import Button from '../components/signUp/Enter'
import NavBar from '../components/common/NavBar'

const SignUpSuccess = () => {
    return(
        <>
        <NavBar />
        <MainBox>
            <img src="/Logo.svg" alt="logo" />
            <Text>회원가입을 축하드립니다 !</Text>
            <Img src="/pill_logo.svg" alt="logo" />
            <Start>지금 로그인해보세요.</Start>
            <Button>로그인</Button>
        </MainBox>
        </>
    )
}
const MainBox = styled.div`
    width: 100%;
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Text = styled.p`
    padding-top: 8px;
    font-size: 13px;
    font-weight: bold;
`;

const Img = styled.img` 
    padding-top: 50px;
    width: 200px;
    object-fit: cover;
`;

const Start = styled.p`
    padding-top: 50px;
    padding-bottom: 10px;
    font-size: 13px;
    font-weight: bold; 
    color:  #b4b4b4;
`;
export default SignUpSuccess;