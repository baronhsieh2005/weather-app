import React from 'react';

const WeatherEvent = ({ event, scheduleStart }) => {
  const topPosition = `calc((${event.startHour} - var(--schedule-start)) * var(--hour-height))`;

  return (
    <div className="event-component" style={{ top: topPosition }}>
      <div className="weather-component">
        <div className="cell left time-event">
          <div className="time">{event.time}</div>
          <div className="event">{event.event}</div>
        </div>
        <div className="cell uv-section">
          <div className="uv-label">UV Index</div>
          <div className="uv-bar-container">
            <div className="uv-pointer"></div>
            <div className="uv-value">{event.uvIndex}</div>
          </div>
        </div>
        <div className="cell bottom left precip-section">
          <div className="precip-label">Precipitation</div>
          <div className="precip-info">
            <img src="./water_icon.png" alt="Water Droplet" style={{ width: '60px' }} />
            <div>
              <div className="precip-amount">{event.precipitation.amount}</div>
              <div className="precip-time">{event.precipitation.time}</div>
            </div>
          </div>
        </div>
        <div className="cell bottom other-info">
          <div className="feels-like">
            <div className="feels-like-label">Feels Like</div>
            <div className="feels-like-value">{event.feelsLike}</div>
          </div>
          <div className="air-quality">
            <div className="air-quality-label">Air Quality</div>
            <div className="air-quality-value">{event.airQuality}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherEvent;