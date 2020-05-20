import React from "react";
import "./Search.css";
import Carousel from "./carousel";

class Favorites extends React.Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    if (localStorage.getItem("favoriler")) {
      let favorites = JSON.parse(localStorage.getItem("favoriler"));
      this.setState({ movies: favorites });
    }
  }

  render() {
    return (
      <div>
        <div className="movieTable">
          <table className="table table-condensed">
            <thead>
              <tr>
                <th scope="col">Movie Title</th>
                <th scope="col"></th>
                <th scope="col">Short Description</th>
                <th scope="col">Time</th>
                <th scope="col">IMDB avarage</th>
                <th scope="col">votes</th>
              </tr>
            </thead>
            <tbody>
              {this.state.movies.map((movie, index) => {
                return (
                  <>
                    <tr
                      data-toggle="collapse"
                      data-target={`#c${index}`}
                      className="accordion-toggle"
                    >
                      <td>{movie.Title}</td>
                      <td>{movie.Released}</td>
                      <td>{movie.Plot}</td>
                      <td>{movie.Runtime}</td>
                      <td>{movie.imdbRating}</td>
                      <td>{movie.imdbVotes}</td>
                    </tr>
                    <tr>
                      <Carousel movie={movie} index={index} />
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Favorites;
