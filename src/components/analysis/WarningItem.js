import React from 'react'
import styled from '@emotion/styled'

const WarningItem = () => {
  return (
    <WarningItemWrapper>
      <img src="/warning.svg" alt="warning" />
      <p>주의 알림 1번째입니다.</p>
    </WarningItemWrapper>
  )
}

export default WarningItem

const WarningItemWrapper = styled.div`
  border: solid 1px rgba(255, 165, 165, 1);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 15px;
  width: 45rem;
  height: 4rem;
  padding: 0 2rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  p {
    font-weight: 400;
    font-size: 0.875rem;
  }
`
