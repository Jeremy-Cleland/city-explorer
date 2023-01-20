import React from "react";

import WeatherDay from "../WeatherDay/WeatherDay";

export default class Weather extends React.Component {
  render() {
    return (
      <div>
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
