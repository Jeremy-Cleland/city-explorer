import React from "react";
import axios from "axios";
import City from "./components/City";
import Weather from "./components/Weather";

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
      weatherError: false,
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
    let weatherUrl = `http://api.weatherbit.io/v2.0/forecast/daily?key=0b159dd21b944db5bf40ec870d8f67c5&lat=${lat}&lon=${lon}&days=5&units=I`;

    let weatherData = await axios.get(weatherUrl);
    this.setState({
      weatherData: weatherData.data.data,
    });
    console.log(weatherData.data);
    try {
    } catch (error) {
      console.log(error.message);
      this.setState({
        weatherError: true,
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
          </>
        )}
      </div>
    );
  }
}

export default App;
