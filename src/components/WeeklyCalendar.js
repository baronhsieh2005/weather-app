import React from 'react';
import WeatherIcon from '../WeatherIcon';

const WeeklyCalendar = ({ weekForecast }) => {
  return (
    <footer className="weekly-calendar">
      {weekForecast.map((day, index) => (
        <div key={index} className="day">
          <div className="day-name">{day.day}</div>
          <div className="date">{day.date}</div>
          <WeatherIcon iconType={day.icon} />
        </div>
      ))}
    </footer>
  );
};

export default WeeklyCalendar;