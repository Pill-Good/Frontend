import React from 'react'
import styled from '@emotion/styled'

const MenuItem = ({ firstTitle, secondTitle, imgPath }) => {
  return (
    <MenuItemWrapper>
      <div role="button" className="text-container">
        <p>{firstTitle}</p>
        <p>{secondTitle}</p>
      </div>
      {!!imgPath && <img src={imgPath} alt="menu" />}
    </MenuItemWrapper>
  )
}

export default MenuItem

const MenuItemWrapper = styled.div`
  width: 15rem;
  height: 14rem;
  background-color: #f9f9f9;
  border: 3px solid #d8d8d8;
  border-radius: 1.875rem;
  position: relative;
  :hover {
    cursor: pointer;
  }
  .text-container {
    position: absolute;
    top: 20%;
    left: 10%;
    p {
      font-weight: 500;
      font-size: 1.125rem;
    }
  }
  img {
    position: absolute;
    bottom: 20%;
    right: 10%;
  }
`
