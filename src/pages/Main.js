import React from 'react'
import styled from '@emotion/styled'
import NavBar from '../components/common/NavBar'
import NoticeBlock from '../components/main/NoticeBlock'

const Main = () => {
  return (
    <MainWrapper>
      <NavBar />
      <NoticeBlock />
    </MainWrapper>
  )
}

export default Main

const MainWrapper = styled.div``
