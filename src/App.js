import React from "react";
import "./App.css";
import axios from "axios";
import City from "./components/City/City";
import Weather from "./components/Weather/Weather";
import Movies from "./components/Movies/Movies";
import { Container, Alert } from "react-bootstrap";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      cityData: [],
      cityMap: "",
      weather: [],
      movie: [],
      error: false,
      errorMessage: "",
      weatherError: false,
      weatherErrorMessage: "",
      movieError: false,
      movieErrorMessage: "",
    };
  }
  handleInput = (event) => {
    this.setState({
      city: event.target.value,
    });
  };

  callApis = () => {
    this.getMap();
    this.getWeather();
    this.getMovie();
  };

  getCity = async (event) => {
    event.preventDefault();

    try {
      // Call API
      let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_API_KEY}&q=${this.state.city}&format=json&limit=1`;

      let cityDataFromAxios = await axios.get(url);
      // Set State
      this.setState(
        {
          cityData: cityDataFromAxios.data[0],
          error: false,
          errorMessage: "",
        },
        this.callApis
      );
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: error.message,
      });
    }
  };

  getWeather = async () => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/weather?searchQuery=${this.state.city}&lon=${this.state.cityData.lon}&lat=${this.state.cityData.lat}`;

      let weatherFromAxios = await axios.get(url);
      console.log(weatherFromAxios);
      this.setState({
        weather: weatherFromAxios.data,
        weatherError: false,
        weatherErrorMessage: "",
      });
    } catch (error) {
      this.setState({
        weatherError: true,
        weatherErrorMessage: error.message,
      });
    }
  };

  getMovie = async () => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/movies?searchQuery=${this.state.city}`;
      console.log(url);
      let movieFromAxios = await axios.get(url);
      console.log(movieFromAxios);
      this.setState({
        movie: movieFromAxios.data,
        movieError: false,
        movieErrorMessage: "",
      });
    } catch (error) {
      this.setState({
        movieError: true,
        movieErrorMessage: error.message,
      });
    }
  };

  getMap = async () => {
    try {
      let mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_API_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=12&size=500x500&format=jpeg`;

      this.setState({
        cityMap: mapUrl,
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
      <div>
        <header>
          <h1>Expore Our Cities</h1>
        </header>
        <form onSubmit={this.getCity}>
          <input type='text' onInput={this.handleInput} />
          <button type='submit'>Explore!</button>
        </form>
        {this.state.error ? (
          <Alert variant='warning'>
            <Alert.Heading>ERROR</Alert.Heading>
            <p>{this.state.errorMessage}</p>
          </Alert>
        ) : (
          <Container>
            <City cityData={this.state.cityData} cityMap={this.state.cityMap} />
            <Weather weather={this.state.weather} />
            <Movies movie={this.state.movie} />
          </Container>
        )}
      </div>
    );
  }
}

export default App;
