import React from "react";
import { Card } from "react-bootstrap";

class City extends React.Component {
  render() {
    return (
      <>
        <Card className='card'>
          <Card.Title>{this.props.cityData.display_name}</Card.Title>
          <Card.Body>
            <Card.Text>Latitude: {this.props.cityData.lat}</Card.Text>
            <Card.Text>Longitude: {this.props.cityData.lon}</Card.Text>
          </Card.Body>
          <Card.Img
            src={this.props.cityMap}
            alt={this.props.cityData.display_name}
          />
        </Card>
      </>
    );
  }
}

export default City;
