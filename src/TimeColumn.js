
import React from 'react';

const TimeColumn = ({ hours }) => {
  return (
    <div className="time-column">
      {hours.map((hour, index) => (
        <div key={index} className="time-label">{hour}</div>
      ))}
    </div>
  );
};

export default TimeColumn;