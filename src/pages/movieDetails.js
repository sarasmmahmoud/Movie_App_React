import { useEffect, useState } from "react";
import MyTitle from "../components/MyTitle";
import axios from "axios";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import MyCard from "../components/MyCard";

function MovieDetails(){

    const [list, setList] = useState([]);

    const id = useParams().id
    console.log(id)

    const [movie, setMovie] = useState({})


    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=29cf44b93ca83bf48d9356395476f7ad`).
        then((response) => {
            setList(response.data.results);
            setMovie(response.data); 
            console.log(response);
        })
        .catch((error) => console.log(error))

        console.log("movie", movie)
    },[])


    return (
        <div className="container"> 
           <MyTitle head="movie Details" />
            <MyCard img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} title={movie.title} desc={movie?.overview ? movie.overview.substring(0, 100) + '...' : 'No description available'}/>
        </div>
    );
}

export default MovieDetails;