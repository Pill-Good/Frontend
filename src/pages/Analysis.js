import React from 'react'
import NavBar from '../components/common/NavBar'
import styled from '@emotion/styled'
import TitleBar from '../components/common/TitleBar'
import WarningItem from '../components/analysis/WarningItem'
import SecondaryMedicineItem from '../components/medicineList/SecondaryMedicineItem'

const Analysis = () => {
  return (
    <>
      <NavBar />
      <AnalysisWrapper>
        <TitleBar
          title="복용중인 약 분석 리스트"
          imgPath="/pill_analysis.svg"
        />
        <div className="divider" />
        <div className="analysis-container">
          <div className="relation-container">
            <div className="title-container">
              <img src="/alarm.svg" alt="alarm" />
              <p className="title">복용 중인 약들 간의 상호 관계</p>
            </div>
            <div className="warning-item-container">
              <WarningItem />
              <WarningItem />
              <WarningItem />
            </div>
          </div>

          <div className="medicine-list-container">
            <SecondaryMedicineItem
              name="두통약"
              date="2월 13일"
              isBookmarkChecked={true}
            />
            <SecondaryMedicineItem
              name="감기약"
              date="5월 3일"
              isBookmarkChecked={false}
            />
            <SecondaryMedicineItem
              name="비타민"
              date="8월 31일"
              isBookmarkChecked={true}
            />
          </div>
        </div>
      </AnalysisWrapper>
    </>
  )
}

export default Analysis

const AnalysisWrapper = styled.div`
  width: 100%;
  padding: 0 10rem;
  .analysis-container {
    display: flex;
    justify-content: space-between;
  }
  .divider {
    width: 100%;
    height: 3.5rem;
  }
  .relation-container {
    background-color: rgba(255, 237, 237, 1);
    width: 49.375rem;
    height: 27.5rem;
    border-radius: 1.25rem;
    padding: 3.5rem 2.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title-container {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 0.625rem;
      margin-bottom: 1.5rem;
      p {
        font-weight: 500;
        font-size: 1.125rem;
      }
    }
    .warning-item-container {
      display: flex;
      flex-direction: column;
      gap: 0.625rem;
    }
  }
  .medicine-list-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`
