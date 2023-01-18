import React from "react";

class Weather extends React.Component {
  render() {
    return (
      <>
        {this.props.weatherData.map((day, indx) => {
          return (
            <>
              <h3>Forcaast</h3>
              <p>Date: {day.date}</p>
              <p>Description: {day.description}</p>
            </>
          );
        })}
      </>
    );
  }
}

export default Weather;
