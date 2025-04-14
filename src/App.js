import React, { useState } from 'react';
import './App.css';
import WeatherHeader from './components/WeatherHeader';
import ScheduleContainer from './ScheduleContainer';
import WeeklyCalendar from './components/WeeklyCalendar';
import FABContainer from './components/FABContainer';
import ShareDialog from './components/ShareDialog';

function App() {
  const [showShareDialog, setShowShareDialog] = useState(false);
  
  const weatherData = {
    city: "PHILADELPHIA",
    temperature: "35°F",
    date: "FEBRUARY 2, 2025",
    scheduleStart: 6, 
    events: [
      {
        id: 1,
        time: "7:00 - 10:00am",
        event: "PICNIC",
        startHour: 8,
        uvIndex: 1,
        precipitation: {
          amount: "0mm",
          time: "In The Last 180min"
        },
        feelsLike: "33°",
        airQuality: "30 AQI"
      },
      {
        id: 2,
        time: "12:00 - 2:45pm",
        event: "BIKING",
        startHour: 13,
        uvIndex: 1,
        precipitation: {
          amount: "40mm",
          time: "In The Last 165min"
        },
        feelsLike: "40°",
        airQuality: "20 AQI"
      }
    ],
    weekForecast: [
      { day: "Sun", date: "1", icon: "sunday-sunny" },
      { day: "Mon", date: "2", icon: "monday-cloudy" },
      { day: "Tue", date: "3", icon: "tuesday-rainy" },
      { day: "Wed", date: "4", icon: "wednesday-sunny" },
      { day: "Thu", date: "5", icon: "thursday-windy" },
      { day: "Fri", date: "6", icon: "friday-sunny" },
      { day: "Sat", date: "7", icon: "saturday-cloudy" }
    ]
  };

  const friends = [
    "Alex Johnson",
    "Maria Garcia",
    "James Smith",
    "Sarah Lee",
    "Robert Chen"
  ];

  const handleShareClick = () => {
    setShowShareDialog(!showShareDialog);
  };

  const handleMapClick = () => {
    alert("Map View would be implemented after I escape the trenches of CIS 5480 :(");
  };

  const handleShareWithFriend = (friend) => {
    alert(`Weather schedule shared with ${friend}!`);
    setShowShareDialog(false);
  };

  return (
    <div className="container">
      <WeatherHeader city={weatherData.city} temperature={weatherData.temperature} date={weatherData.date} />
      <ScheduleContainer scheduleStart={weatherData.scheduleStart} events={weatherData.events} />
      <div className="week-header">
        <button className="arrow left">&larr;</button>
        <span className="week-label">This Week</span>
        <button className="arrow right">&rarr;</button>
      </div>
      <WeeklyCalendar weekForecast={weatherData.weekForecast} />
      <FABContainer onShareClick={handleShareClick} onMapClick={handleMapClick} />
      
      {showShareDialog && (
        <ShareDialog 
          friends={friends} 
          onShareWithFriend={handleShareWithFriend}
          onClose={() => setShowShareDialog(false)}
        />
      )}
    </div>
  );
}

export default App;