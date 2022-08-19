import React from 'react'
import styled from '@emotion/styled'
import Hello from '../components/signUp/Hello'
import Button from '../components/signUp/Enter'
import DotDot from '../components/common/dot'

const SignUpInput = () => {
  const arr = [20, 21, 22, 23, 24];
  return (
    <SignUpWrapper>
      <div>
        <Title>회원가입</Title>
        <LineBox>
          <Text>이름</Text>
          <DotDot />
        </LineBox>
        <Hello hint="홍길동"/>
        <br />
        <LineBox>
          <Text>아이디</Text>
          <DotDot />
        </LineBox>
        <Hello hint="영문, 숫자 5-11자"/>
        <br />
        <LineBox>
          <Text>비밀번호</Text>
          <DotDot />
        </LineBox>
        <Hello hint="영문, 숫자 조합 최소 8자"/>
        <br />
        <LineBox>
          <Text>나이</Text>
          <DotDot />
        </LineBox>
        <Select name="age">
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
	    	</Select>
        <Button>가입하기</Button>
      </div>
    </SignUpWrapper>
  )
}

export default SignUpInput;

const SignUpWrapper = styled.div`
`;

const Select = styled.select`
  height: 40px;
  width: 50px;
  border-radius: 10px;
  font-size: 10px;
  border: 1px solid #969696;
  display: block;
  padding-left: 10px;
  color: #b4b4b4;
`;

const Title = styled.p`
  color: #8F7CEE;
  font-size: 18px;
  margin: 30px;
  text-align: center;
  font-weight: bold;
`;

const Text = styled.p`
  margin: 10px;
  font-weight: bold;
  display: inline-block;
`;

const LineBox = styled.div`
  display: flex;
  align-items: center;
`;
