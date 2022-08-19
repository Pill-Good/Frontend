import React from 'react'
import styled from '@emotion/styled'

const NavBar = () => {
  return (
    <NavBarWrapper>
      <div className="nav-container">
        <img src="/Logo.svg" alt="logo" />
        <div className="menu-container">
          <button className="menu">홈</button>
          <button className="menu">분석하기</button>
          <button className="menu">정보</button>
          <div className="user-profile-container">
            <img src="/user_picture.svg" alt="user-profile" />
            <img src="/under_arrow.svg" alt="under-arrow" />
          </div>
        </div>
      </div>
    </NavBarWrapper>
  )
}

export default NavBar

const NavBarWrapper = styled.div`
  width: 100%;
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .nav-container {
    width: 75rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .menu-container {
    width: 31.25rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .menu {
      border: none;
      background-color: transparent;
      font-size: 1.125rem;
      font-weight: 500;
    }
    .user-profile-container {
      width: 3.125rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`
