import React from 'react'
import styled from '@emotion/styled'

const SignUp = () => {
  return (
    <SignUpWrapper>
      <div>
        <p className="text">hello</p>
      </div>
    </SignUpWrapper>
  )
}

export default SignUp

const SignUpWrapper = styled.div`
  div {
    width: 500px;
    height: 400px;
    background-color: red;
    .text {
      color: #fff;
    }
  }
`
