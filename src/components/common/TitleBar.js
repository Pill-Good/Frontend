import React from 'react'
import styled from '@emotion/styled'

const TitleBar = ({ title, imgPath }) => {
  return (
    <TitleBarWrapper>
      <p>{title}</p>
      <img src={imgPath} alt="title" />
    </TitleBarWrapper>
  )
}

export default TitleBar

const TitleBarWrapper = styled.div`
  width: 75rem;
  height: 6.875rem;
  background-color: #f9f9f9;
  border-radius: 1.875rem;
  padding: 2.625rem 3.75rem;
  display: flex;
  align-items: center;
  p {
    font-weight: 600;
    font-size: 1.125rem;
    margin-right: 1rem;
  }
  img {
    width: 1.5rem;
  }
`
