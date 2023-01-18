import React from "react";

class Weather extends React.Component {
  render() {
    return (
      <>
        {this.props.weatherData.map((day, indx) => {
          return (
            <Weather
              weatherData={this.props.weatherData}
              date={day.date}
              description={day.description}
              key={indx}
            />
          );
        })}
      </>
    );
  }
}

export default Weather;
