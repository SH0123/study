import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

function Movie({ id, title, year, summary, poster, rating, genres }) {
    return (
        <Link
            to={{
                pathname: `/movie/${id}`,
                state: {
                    title,
                    year,
                    summary,
                    poster,
                    rating,
                    genres
                }
            }}>
            <div className="movie">
                <img src={poster} alt={title} title={title} />
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <p className="movie__rating">{rating}</p>
                    <ul className="genres">
                        {genres.map((genre, index) => <li key={index} className="genres__genre">{genre}</li>)}
                    </ul>
                    <p className="movie__summary">{summary.slice(0, 180)}...</p>
                </div>
            </div>
        </Link>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;