import React from "react";
import Movie from "../Movie/Movie";

export default class Movies extends React.Component {
  render() {
    return (
      <div>
        {this.props.movie.map((movie, idx) => (
          <Movie
            key={idx}
            src={movie.image_url}
            title={movie.title}
            release_date={movie.release_date}
            overview={movie.overview}
            vote_average={movie.vote_average}
            vote_count={movie.vote_count}
            popularity={movie.popularity}
          />
        ))}
      </div>
    );
  }
}
