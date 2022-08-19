import React from 'react'
import styled from '@emotion/styled'
import Button from '../components/signUp/Enter'
import NavBar from '../components/common/NavBar'

const Landing = () => {
    return(
        <>
        <NavBar />
        <LandingBox>
            <LandingTopBox>
                <Left>
                    <FontColor>
                        복용중인 <Span>약의 갯수가 많고 용법이 달라</Span> 헷갈린다면?
                    </FontColor>
                </Left>
                <Right>
                  <Img src="/pill_logo.svg" alt="logo" />
                </Right>
            </LandingTopBox>
            <LandingBottomBox>
                <Start>지금 로그인해보세요.</Start>
                <ButtonBox>
                <Button size="sm" color="basic">로그인</Button>
                <Button size="sm">회원가입</Button>
                </ButtonBox>
            </LandingBottomBox>
        </LandingBox>
        </>
    )
}

export default Landing;

const LandingBox = styled.div`
    margin-top: 30px;
`;

const LandingTopBox = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
`;

const FontColor = styled.div`
    color: #969696;
    font-weight: bold; 
`;

const Left = styled.div`
    display: flex;
    align-items: center;
    width: 200px;
    font-size: 18px;
    letter-spacing: 1px;
    margin-right: 200px;
`;

const Span = styled.span`
    color: #8F7CEE;
`;


const Right = styled.div`
    padding-top: 50px;
`;

const Img = styled.img`
    width: 350px;
    object-fit: cover;
`;

const LandingBottomBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Start = styled.p`
    padding-top: 50px;
    padding-bottom: 10px;
    font-size: 13px;
    font-weight: bold; 
    color:  #b4b4b4;
`;

const ButtonBox = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 15px;
`;

