import React from "react";
import axios from "axios";
import Form from "./components/Form";
import { Card } from "react-bootstrap";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      cityData: [],
      error: false,
      errorMessage: "",
      cityMap: "",
    };
  }

  handleInput = (event) => {
    this.setState({
      city: event.target.value,
    });
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
  };

  render() {
    return (
      <div className='app'>
        <header className='header'>
          <h1>Expore Our Cities</h1>
        </header>
        <Form getCityData={this.getCityData} handleInput={this.handleInput} />

        <Card className='card'>
          <Card.Title>{this.state.cityData.display_name}</Card.Title>
          <Card.Body>
            <Card.Text>{this.state.cityData.lat}</Card.Text>
            <Card.Text>{this.state.cityData.lon}</Card.Text>
          </Card.Body>
        </Card>
        <img src={this.state.cityMap} alt={this.state.cityData.display_name} />
      </div>
    );
  }
}
export default App;

// {
//   this.state.error ? (
//     <Alert variant='warning'>{this.state.errorMessage}</Alert>
//   ) : (
//     <Container>
//       <ListGroup as='list-group'>
//         <ListGroup.Item>
//           City: {this.state.cityData.display_name}
//         </ListGroup.Item>
//         <ListGroup.Item>
//           Latitude: {this.state.cityData.lat}
//         </ListGroup.Item>
//         <ListGroup.Item>
//           Longitude: {this.state.cityData.lon}
//         </ListGroup.Item>
//       </ListGroup>
//       <Image src={this.state.cityMap}></Image>
//     </Container>
//   );
// }
