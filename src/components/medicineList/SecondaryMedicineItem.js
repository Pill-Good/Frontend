import React from 'react'
import styled from '@emotion/styled'

const SecondaryMedicineItem = ({ name, date, isBookmarkChecked }) => {
  return (
    <MedicineItemWrapper>
      <p className="name">{name}</p>
      <p className="date">{date}</p>
      <img className="more" src="/more.svg" alt="more" />
      <img
        className="bookmark"
        src={
          isBookmarkChecked ? '/bookmark_checked.svg' : '/bookmark_empty.svg'
        }
        alt="bookmark"
      />
    </MedicineItemWrapper>
  )
}

export default SecondaryMedicineItem

const MedicineItemWrapper = styled.div`
  width: 23.75rem;
  height: 6.25rem;
  border: solid 2.5px rgba(190, 177, 255, 1);
  border-radius: 1rem;
  padding: 1.2rem 2.25rem;
  position: relative;
  .name {
    font-weight: 500;
    font-size: 1.25rem;
    margin-bottom: 8px;
  }
  .date {
    font-weight: 300;
    font-size: 0.875rem;
  }
  .more {
    position: absolute;
    top: 12%;
    right: 6%;
  }
  .bookmark {
    position: absolute;
    bottom: 12%;
    right: 2.5%;
  }
`
