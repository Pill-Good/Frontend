import React from 'react'
import NavBar from '../components/common/NavBar'
import styled from '@emotion/styled'
import TitleBar from '../components/common/TitleBar'

const Information = () => {
  return (
    <>
      <NavBar />
      <InformationWrapper>
        <TitleBar
          title="현재 증상을 체크해주세요"
          imgPath="/checklist_icon.svg"
        />
      </InformationWrapper>
    </>
  )
}

export default Information

const InformationWrapper = styled.div`
  width: 100%;
  padding: 0 10rem;
`
