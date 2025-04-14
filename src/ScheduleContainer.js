import React from 'react';
import TimeColumn from './TimeColumn';
import EventsColumn from './EventsColumn';

const ScheduleContainer = ({ scheduleStart, events }) => {
  const hours = Array.from({ length: 12 }, (_, i) => {
    const hour = i + scheduleStart;
    return hour < 12 ? `${hour} AM` : hour === 12 ? `${hour} PM` : `${hour - 12} PM`;
  });

  return (
    <div className="schedule-container">
      <TimeColumn hours={hours} />
      <EventsColumn events={events} scheduleStart={scheduleStart} />
    </div>
  );
};

export default ScheduleContainer;