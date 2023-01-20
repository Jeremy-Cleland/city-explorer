import React from "react";
import "./Weather.css";

import WeatherDay from "../WeatherDay/WeatherDay";

export default class Weather extends React.Component {
  render() {
    return (
      <div className='weather-container'>
        {this.props.weather.map((day, idx) => (
          <WeatherDay
            key={idx}
            date={day.date}
            description={day.description}
            high_temp={day.high_temp}
            low_temp={day.low_temp}
          />
        ))}
      </div>
    );
  }
}
