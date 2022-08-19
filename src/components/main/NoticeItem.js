import React from 'react'
import styled from '@emotion/styled'

export const NoticeItem = ({ num }) => {
  return (
    <NoticeItemWrapper>
      <p>알림 {num}번째입니다.</p>
    </NoticeItemWrapper>
  )
}

const NoticeItemWrapper = styled.div`
  width: 30rem;
  min-height: 3.5rem;
  background-color: #f7f7f7;
  border-radius: 1.25rem;
  display: flex;
  align-items: center;
  padding: 1.25rem 30px;
`
