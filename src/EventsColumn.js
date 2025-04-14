import React from 'react';
import WeatherEvent from './WeatherEvent';

const EventsColumn = ({ events, scheduleStart }) => {
  return (
    <div className="events-column">
      {events.map((event) => (
        <WeatherEvent 
          key={event.id} 
          event={event} 
          scheduleStart={scheduleStart} 
        />
      ))}
    </div>
  );
};

export default EventsColumn;