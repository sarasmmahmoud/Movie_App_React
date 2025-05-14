import { useEffect, useState } from "react";
import MyTitle from "../components/MyTitle"
import axios from "axios";
import MyCard from "../components/MyCard";

function MovieList(){

    const [list, setList] = useState([])

    // call API 
    useEffect(( ) => {
        // call API 
        // use axios 
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=29cf44b93ca83bf48d9356395476f7ad")
            .then((response) => setList(response.data.results))
            .catch((error) => console.log(error))
            
        // console.log("list", list)
        
    }, [])
    
    

    return (
        <div>
            <MyTitle head="Movies List" />
            {
                <div className="container">
                <div className="row">
                    
                    <div className="col-12 d-flex flex-wrap justify-content-center mt-5 mb-5">
                        {
                            list.map(movie => {
                                return <MyCard img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} title={movie.title} desc={movie.overview.substring(0, 100) + "..."} page={`movie/${movie.id}`}/>
                            })
                        }
                    </div>
                </div>
                </div>
                // list.map(movie => {
                //     return <MyCard img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} title={movie.title} desc={movie.overview.substring(0, 100) + "..."} page={`movie/${movie.id}`}/>
                // //   return  <li> {movie.name} </li>
                // })
            }


        </div>
    );
}

export default MovieList;