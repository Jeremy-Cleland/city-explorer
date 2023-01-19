import React from "react";
import { Card } from "react-bootstrap";

class Weather extends React.Component {
  render() {
    return (
      <div>
        {this.props.weatherData.map((day, index) => {
          return (
            <Card className='card' key={index}>
              <Card.Title>{day.datetime}</Card.Title>
              <Card.Body>
                <p>Description: {day.weather.description}</p>
                <p>Low Temp: {day.low_temp}</p>
                <p>High Temp: {day.high_temp}</p>
                <hr />
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default Weather;
