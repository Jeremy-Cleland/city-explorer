import React from "react";
import Weather from "./Weather";

class Main extends React.Component {
  render() {
    return (
      <>
        {this.props.weatherData.map((cityForcast, idx) => {
          return (
            <Weather
              date={cityForcast.date}
              description={cityForcast.description}
              key={idx}
            />
          );
        })}
      </>
    );
  }
}

export default Main;
