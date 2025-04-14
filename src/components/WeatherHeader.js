import React from 'react';

const WeatherHeader = ({ city, temperature, date }) => {
  return (
    <header className="weather-header">
      <div className="header-content">
        <div className="city">{city}</div>
        <div className="temperature">{temperature}</div>
        <div className="fulldate">{date}</div>
      </div>
    </header>
  );
};

export default WeatherHeader;