import React, {useState, useEffect} from 'react'
import { fetchMovieDetail } from '../data/api';
import "../styles/MovieDetail.css"

const MovieDetail = ({match}) => {
    let params = match.params;
    const img_url = `https://image.tmdb.org/t/p/w500/`
    const [detail, setDetail] = useState({});

    useEffect(() => {
        const fetchAPI = async () => {
          setDetail(await fetchMovieDetail(params.id));
        };
        fetchAPI();
    }, [params.id]);

    console.log(detail)
    const title = detail.title
    const popularity = detail.popularity
    const prom = detail.vote_average
    const count = detail.vote_count
    const img = img_url + detail.poster_path
    const over = detail.overview
      
    return(
        <div>
            <div>
                <h1>{title}</h1>
            </div>
            <img src={img} alt="" />
            <div>
                <p className="data">Titulo: {title}</p>
                <p className="data">Popularidad: {popularity}</p>
                <p className="data">Promedio de votos: {prom}</p>
                <p className="data">Cantidad de votos: {count}</p>
                <div className="container">
                    <p>Resumen: {over}</p>
                </div>
            </div>
        </div>
    )
}



export default MovieDetail