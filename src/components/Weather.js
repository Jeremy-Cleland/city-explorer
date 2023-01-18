import React from "react";
import { Card } from "react-bootstrap";

class Weather extends React.Component {
  render() {
    return (
      <>
        <Card>
          <p>{this.props.weatherDate1}</p>
          <p>{this.props.weatherinfoDay1}</p>
        </Card>
        <Card>
          <p>{this.props.weatherDate2}</p>
          <p>{this.props.weatherinfoDay2}</p>
        </Card>
        <Card>
          <p>{this.props.weatherDate3}</p>
          <p>{this.props.weatherinfoDay3}</p>
        </Card>
      </>
    );
  }
}

export default Weather;
