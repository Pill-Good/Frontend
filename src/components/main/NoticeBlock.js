import React from 'react'
import styled from '@emotion/styled'
import { NoticeItem } from './NoticeItem'

const NoticeBlock = () => {
  return (
    <NoticeBlockWrapper>
      <div className="title-container">
        <img src="/notice_bell.svg" alt="notice-bell" />
        <p className="title">알림</p>
      </div>
      <div className="notice-container">
        <NoticeItem num={1} />
        <NoticeItem num={2} />
        <NoticeItem num={3} />
        <NoticeItem num={4} />
        <NoticeItem num={5} />
        <NoticeItem num={6} />
        <NoticeItem num={7} />
      </div>
    </NoticeBlockWrapper>
  )
}

export default NoticeBlock

const NoticeBlockWrapper = styled.div`
  width: 32.5rem;
  height: 30rem;
  border: 3px solid #d8d8d8;
  border-radius: 30px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px 15px;
  .title-container {
    width: 100%;
    height: 50px;
    display: flex;
    font-weight: 500;
    font-size: 1.125rem;
    display: flex;
    align-items: center;
    margin-bottom: 0.625rem;
    img {
      width: 24px;
      margin-right: 0.75rem;
    }
  }
  .notice-container {
    width: 100%;
    height: 20rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    overflow-y: scroll;
  }
`
