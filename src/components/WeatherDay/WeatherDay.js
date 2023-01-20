import React from "react";
import { Card } from "react-bootstrap";
import "./WeatherDay.css";

export default class WeatherDay extends React.Component {
  render() {
    return (
      <Card classname='weatherday-card' key={this.props.idx}>
        <Card.Body>
          <Card.Title>{this.props.date}</Card.Title>
          <Card.Text>
            {this.props.description}
            <hr />
            High Temp: {this.props.high_temp} <hr />
            Low Temp: {this.props.low_temp}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
