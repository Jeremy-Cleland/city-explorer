import React from "react";
import { Card } from "react-bootstrap";

class Weather extends React.Component {
  render() {
    return (
      <>
        <Card>
          style={{ width: "30%" }}
          <h1>{this.props.date} Forcast</h1>
          <p>{this.props.description}</p>
        </Card>
      </>
    );
  }
}

export default Weather;
