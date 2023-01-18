import React from "react";
import axios from "axios";
import Form from "./components/Form";
import Main from "./components/Main";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      cityData: [],
      error: false,
      errorMessage: "",
      cityMap: "",
      weatherError: false,
      weatherData: [],
    };
  }

  getCityData = async (event) => {
    event.preventDefault();

    try {
      let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_API_KEY}&q=${this.state.city}&format=json`;

      let axiosCityData = await axios.get(url);

      let lon = axiosCityData.data[0].lon;
      let lat = axiosCityData.data[0].lat;

      let cityMap = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_API_KEY}&center=${lat},${lon}&zoom=10`;

      this.setState({
        cityData: axiosCityData.data[0],
        cityMap: cityMap,
        error: false,
      });
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: `${error.message}`,
      });
    }
  };

  getWeatherData = async (lat, lon) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/weather?lat=${lat}&lon=${lon}searchQuery=${this.state.city}`;
      let axiosWeatherData = await axios.get(url);

      this.setState({
        weatherData: axiosWeatherData.data,
        weatherError: false,
      });
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: `${error.message}`,
      });
    }
  };

  render() {
    return (
      <div className='app'>
        <header className='header'>
          <h1>Expore Our Cities</h1>
        </header>
        <Form
          getCityData={this.getCityData}
          handleInput={this.handleInput}
          cityData={this.state.cityData}
          cityMap={this.state.cityMap}
        />
        {this.state.error ? (
          <alert>{this.state.errorMessage}</alert>
        ) : (
          <Main weatherData={this.state.weatherData} />
        )}
      </div>
    );
  }
}

export default App;
