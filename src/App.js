import React from "react";
import "./App.css";
import axios from "axios";
import { Card } from "react-bootstrap";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      cityData: [],
    };
  }

  handleInput = (event) => {
    this.setState({
      city: event.target.value,
    });
  };

  getCityData = async (event) => {
    event.preventDefault();

    let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_API_KEY}&q=${this.state.city}&format=json`;

    let axiosCityData = await axios.get(url);
    this.setState({
      cityData: axiosCityData.data[0],
    });
  };

  render() {
    return (
      <>
        <header>
          <h1>Expore Our Cities</h1>
        </header>
        <form onSubmit={this.getCityData}>
          <label htmlFor=''>Explore New City</label>
          <input
            placeholder='Enter a City'
            type='text'
            onInput={this.handleInput}
          />
          <button type='submit'>Explore!</button>
        </form>

        <Card>
          <Card.Title>{this.state.cityData.display_name}</Card.Title>
          <Card.Body>
            <Card.Text>{this.state.cityData.lat}</Card.Text>
            <Card.Text>{this.state.cityData.lon}</Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}
export default App;
