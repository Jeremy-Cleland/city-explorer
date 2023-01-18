import React from "react";
import axios from "axios";
import Form from "./components/Form";
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
      weatherData: {},
    };
  }

  handleInput = (event) => {
    this.setState({
      city: event.target.value,
    });
  };

  getWeatherData = async (event) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/weather?city=${this.state.city}`;
      let weatherData = await axios.get(url);
      this.setState({
        weatherDate1: weatherData.data.dateTimeOne,
        weatherinfoDay1: weatherData.data.descriptionOne,
        weatherDate2: weatherData.data.dateTimeTwo,
        weatherinfoDay2: weatherData.data.descriptionTwo,
        weatherDate3: weatherData.data.dateTimeThree,
        weatherinfoDay3: weatherData.data.descriptionThree,
        error: false,
      });
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: `${error.message}`,
      });
    }
  };

  getCityData = async (event) => {
    event.preventDefault();

    try {
      let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_API_KEY}&q=${this.state.city}&format=json`;

      let axiosCityData = await axios.get(url);

      let cityMap = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_API_KEY}&center=${axiosCityData.data[0].lat},${axiosCityData.data[0].lon}&zoom=10`;

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

    this.getWeatherData();
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
          <Weather
            getWeatherData={this.getWeatherData}
            weatherData={this.state.weatherData}
            weatherDate1={this.state.weatherDate1}
            weatherinfoDay1={this.state.weatherinfoDay1}
            weatherDate2={this.state.weatherDate2}
            weatherinfoDay2={this.state.weatherinfoDay2}
            weatherDate3={this.state.weatherDate3}
            weatherinfoDay3={this.state.weatherinfoDay3}
          />
        )}
      </div>
    );
  }
}

export default App;
