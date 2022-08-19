import React from 'react'
import styled from '@emotion/styled'

const CalendarBlock = () => {
  return (
    <CalendarBlockWrapper>
      <div className="title-container">
        <img src="/calendar.svg" alt="calendar" />
        <p>My Calendar</p>
      </div>
      <img
        className="calendar-img"
        src="/calendar_screenshot.png"
        alt="calendar"
      />
    </CalendarBlockWrapper>
  )
}

export default CalendarBlock

const CalendarBlockWrapper = styled.div`
  width: 653px;
  height: 746px;
  border: solid 2px rgba(231, 231, 231, 1);
  border-radius: 1.875rem;
  padding: 3rem 1.5rem;
  .title-container {
    width: 100%;
    display: flex;
    gap: 0.75rem;
    p {
      font-weight: 500;
      font-size: 1.125rem;
    }
  }
  .calendar-img {
    width: 100%;
  }
`
