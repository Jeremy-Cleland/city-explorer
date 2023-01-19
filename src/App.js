import React from "react";
import axios from "axios";

import City from "./components/City";
import Weather from "./components/Weather";
import Movies from "./components/Movies";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      cityData: [],
      error: false,
      errorMessage: "",
      cityMap: "",
      weatherData: [],
      movieData: [],
    };
  }
  handleInput = (event) => {
    this.setState({
      city: event.target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_API_KEY}&q=${this.state.city}&format=json`;

      let axiosCityData = await axios.get(url);

      let lon = axiosCityData.data[0].lon;
      let lat = axiosCityData.data[0].lat;

      this.getWeatherData(lat, lon);

      let cityMap = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_API_KEY}&center=${lat},${lon}&zoom=10`;

      this.setState({
        cityData: axiosCityData.data[0],
        cityMap: cityMap,
        error: false,
      });
    } catch (error) {
      console.log(error.message);
      this.setState({
        error: true,
        errorMessage: error.message,
      });
    }
  };

  getWeatherData = async (lat, lon) => {
    try {
      let weatherData = await axios.get(
        `${process.env.REACT_APP_SERVER}/weather?lat=${lat}&lon=${lon}`
      );
      this.setState({
        weatherData: weatherData.data,
        error: false,
      });
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: error.message,
      });
    }
  };

  handleMovie = async (city) => {
    try {
      let movieData = await axios.get(
        `${process.env.REACT_APP_SERVER}/movies?city=${city}`
      );
      this.setState({
        movieData: movieData.data,
      });
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: error.message,
      });
    }
  };

  render() {
    return (
      <div className='app'>
        <h1>Expore Our Cities</h1>
        <form className='form' onSubmit={this.handleSubmit}>
          <input className='input' type='text' onInput={this.handleInput} />
          <button type='submit'>Explore!</button>
        </form>

        {this.state.error ? (
          <p>{this.state.errorMessage}</p>
        ) : (
          <>
            <City cityData={this.state.cityData} cityMap={this.state.cityMap} />
            <Weather weatherData={this.state.weatherData} />
            <Movies movieData={this.state.movieData} />
          </>
        )}
      </div>
    );
  }
}

export default App;
