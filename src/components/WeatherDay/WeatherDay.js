import React from "react";
import { Card } from "react-bootstrap";

export default class WeatherDay extends React.Component {
  render() {
    return (
      <Card style={{ width: "60rem" }} key={this.props.idx}>
        <Card.Body>
          <Card.Title>Weather For:{this.props.date}</Card.Title>
          <Card.Text>
            Today will be {this.props.description} with a high temp of
            {this.props.high_temp} and of low of {this.props.low_temp}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
