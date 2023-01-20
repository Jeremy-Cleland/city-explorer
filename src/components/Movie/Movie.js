/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Card } from "react-bootstrap";

export default class Movie extends React.Component {
  render() {
    return (
      <Card style={{ width: "60rem" }} key={this.props.idx}>
        <Card.Body>
          <img src={this.props.image_url} />
          <Card.Title>Title: {this.props.title}</Card.Title>
          <Card.Text>Release Date: {this.props.release_date}</Card.Text>
          <Card.Text>Overview: {this.props.overview}</Card.Text>
          <Card.Text>Average vote: {this.props.vote_average}</Card.Text>
          <Card.Text>Number of Votes: {this.props.vote_count}</Card.Text>
          <Card.Text>Popularity: {this.props.popularity}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
