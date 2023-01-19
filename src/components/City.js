import React from 'react';
import { Card } from 'react-bootstrap';

class City extends React.Component {
  render() {
    return (
      <>
        <Card style={{ width: '60rem' }}>
          <Card.Title>{this.props.cityData.display_name}</Card.Title>
          <Card.Body>
            <Card.Img src={this.props.cityMap} alt={this.props.cityData.display_name} />
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default City;
