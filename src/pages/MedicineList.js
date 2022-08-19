import React from 'react'
import NavBar from '../components/common/NavBar'
import styled from '@emotion/styled'
import TitleBar from '../components/common/TitleBar'
import MedicineItem from '../components/medicineList/MedicineItem'

const MedicineList = () => {
  return (
    <>
      <NavBar />
      <MedicineListWrapper>
        <TitleBar title="복용중인 약 리스트" imgPath="/list_icon.svg" />
        <div className="search-container"></div>
        <div className="item-container">
          <MedicineItem
            name="두통약"
            date="7월 21일"
            isBookmarkChecked={true}
          />
          <MedicineItem
            name="감기약"
            date="7월 21일"
            isBookmarkChecked={true}
          />
          <MedicineItem
            name="비타민"
            date="7월 21일"
            isBookmarkChecked={false}
          />
        </div>
      </MedicineListWrapper>
    </>
  )
}

export default MedicineList

const MedicineListWrapper = styled.div`
  width: 100%;
  padding: 0 10rem;
  .search-container {
    width: 100%;
    height: 100px;
    margin-bottom: 1.25rem;
  }
  .item-container {
    display: flex;
    justify-content: space-between;
  }
`
