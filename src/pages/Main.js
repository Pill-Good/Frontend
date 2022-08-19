import React from 'react'
import styled from '@emotion/styled'
import NavBar from '../components/common/NavBar'
import NoticeBlock from '../components/main/NoticeBlock'
import MenuItem from '../components/main/MenuItem'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <>
      <NavBar />
      <MainWrapper>
        <div className="notice-and-menu-container">
          <NoticeBlock />
          <div className="menu-container">
            <Link to="/login">
              <MenuItem
                firstTitle="복용 중인 약"
                secondTitle="추가하기 +"
                imgPath="/pill_icon.svg"
              />
            </Link>
            <Link to="/login">
              <MenuItem
                firstTitle="복용 중인 약"
                secondTitle="리스트"
                imgPath="/list_icon.svg"
              />
            </Link>
            <Link to="/login">
              <MenuItem
                firstTitle="가족"
                secondTitle="관리하기"
                imgPath={null}
              />
            </Link>
          </div>
        </div>
        <div className="calendar-container"></div>
      </MainWrapper>
    </>
  )
}

export default Main

const MainWrapper = styled.div`
  width: 100%;
  padding: 0 10rem;
  .notice-and-menu-container {
    width: 32.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    .menu-container {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      padding: 0.5rem;
      width: 100%;
      min-height: 300px;
    }
  }
`
