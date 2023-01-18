import React from "react";
import { Card } from "react-bootstrap";

class City extends React.Component {
  render() {
    return (
      <>
        <Card className='card'>
          <Card.Title>{this.props.cityData.display_name}</Card.Title>
          <Card.Body>
            <p>Latitude: {this.props.cityData.lat}</p>
            <p>Longitude: {this.props.cityData.lon}</p>
            <div>
              <img
                src={this.props.cityMap}
                alt={this.props.cityData.display_name}
              />
            </div>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default City;
