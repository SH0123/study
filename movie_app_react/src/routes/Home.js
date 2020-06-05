import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    //data that will be changed
    isLoading: true,
    movies: []
  }; // redux를 사용하게 되면 state가 home화면에 갇혀있는게 아니라 screen 밖에 있기 때문에 계속해서 새로 로드 안해도 됨

  getMovies = async () => {
    const { data: { data: { movies } } } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false });// == this.setState({movies : movies, isLoading: false})
  }
  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>) : (
          <div className="movies">
            {movies.map(movie => {
             return <Movie key={movie.id} id={movie.id} title={movie.title} year={movie.year} summary={movie.summary} poster={movie.medium_cover_image} rating={movie.rating} genres={movie.genres}/>
          })}
          </div>
        )
        }</section>
    );
  }
}

export default Home;
