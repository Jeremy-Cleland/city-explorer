import React from "react";
import { Card } from "react-bootstrap";

class Form extends React.Component {
  render() {
    return (
      <>
        <form className='form' onSubmit={this.props.getCityData}>
          <input
            className='input'
            type='text'
            onInput={this.props.handleInput}
          />
          <button type='submit'>Explore!</button>
        </form>
        <Card className='card'>
          <Card.Title>{this.props.cityData.display_name}</Card.Title>
          <Card.Body>
            <Card.Text>{this.props.cityData.lat}</Card.Text>
            <Card.Text>{this.props.cityData.lon}</Card.Text>
            <img
              src={this.props.cityMap}
              alt={this.props.cityData.display_name}
            />
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default Form;
