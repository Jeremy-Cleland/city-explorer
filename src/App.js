import React from "react";
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
      <div className='app'>
        <header className='header'>
          <h1>Expore Our Cities</h1>
        </header>
        <form className='form' onSubmit={this.getCityData}>
          <input className='input' type='text' onInput={this.handleInput} />
          <button type='submit'>Explore!</button>
        </form>

        <Card className='card'>
          <Card.Title>{this.state.cityData.display_name}</Card.Title>
          <Card.Body>
            <Card.Text>{this.state.cityData.lat}</Card.Text>
            <Card.Text>{this.state.cityData.lon}</Card.Text>
          </Card.Body>
        </Card>
        <img
          src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_API_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=10&size=600x600&format=png`}
          alt={"imagemapjkd"}
        />
      </div>
    );
  }
}
export default App;
