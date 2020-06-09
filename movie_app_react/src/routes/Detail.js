import React from "react";

class Detail extends React.Component{
    componentDidMount(){
        const { location, history} = this.props;
        if(location.state === undefined){
            history.push("/");
        }
    }
    render(){
        const { location } = this.props;
        const { state } = location;

        if(state === undefined){
            return null;
        }else{
            return (
                <div className="movie-detail">
                    <img src={state.poster} alt={state.title} title={state.title} />
                    <h3 className="movie-title">{state.title}</h3>
                        <h5 className="movie-year">{state.year}</h5>
                        <p className="movie-rating">{state.rating}</p>
                        <ul className="movie-genres">
                            {state.genres.map((genre, index) => <li key={index} className="genres-genre">{genre}</li>)}
                        </ul>
                        <p className="movie-summary">{state.summary}</p>
                </div>        )
        }
    }
}
export default Detail;