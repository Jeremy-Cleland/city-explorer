import React from "react";
import { Card } from "react-bootstrap";

class Weather extends React.Component {
  render() {
    return (
      <>
        {this.props.weatherData.map((day, idx) => {
          return (
            <Card style={{ width: "30rem" }} key={idx}>
              <Card.Body>
                <Card.Title>Date: {day.date}</Card.Title>
                <Card.Text>Weather: {day.description}</Card.Text>
                <Card.Text>High Temp: {day.high_temp}</Card.Text>
                <Card.Text>Low Temp: {day.low_temp}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </>
    );
  }
}

export default Weather;
