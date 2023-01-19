import React from "react";
import Card from "react-bootstrap/Card";

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        {this.props.movieData.map((movie, idx) => (
          <Card style={{ width: "18rem" }} key={idx}>
            <Card.Body>
              {/* <Card.Img variant='top' src={movie.image_url} /> */}
              <Card.Title>Title: {movie.title}</Card.Title>
              <Card.Text>Release Date: {movie.release_date}</Card.Text>
              <Card.Text>Overview: {movie.overview}</Card.Text>
              <Card.Text>Average vote: {movie.vote_average}</Card.Text>
              <Card.Text>Number of Votes: {movie.vote_count}</Card.Text>
              <Card.Text>Popularity: {movie.popularity}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </>
    );
  }
}

export default Movies;
