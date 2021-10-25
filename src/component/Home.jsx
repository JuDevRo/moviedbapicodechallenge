import React, {useState, useEffect} from 'react'
import { getPopMovies, getRateMovies } from '../data/api';
import {Link} from 'react-router-dom'
import ReactStars from "react-rating-stars-component"
import '../styles/Home.css'


const Home = () => {
    const [popMovies, setPopMovies] = useState([]);
    const [rateMovies, setRateMovies] = useState([]);
    const [status1, setStatus1] = useState(false)
    const [status2, setStatus2] = useState(false)
    const [status3, setStatus3] = useState(false)
    const [status4, setStatus4] = useState(false)
    const [status5, setStatus5] = useState(false)


    useEffect(() => {
      const fetchAPI = async () => {
        setPopMovies(await getPopMovies())
        setRateMovies(await getRateMovies())
      };
      fetchAPI();
    }, []);

    console.log(popMovies.sort((a, b) => a.popularity > b.popularity))

    const popMoviesAsc = popMovies.sort((a, b) => a.popularity > b.popularity)

    const topPopMovies = popMoviesAsc.slice(0, 20).map((m, index) => {
        const rating = m.rating / 2
        return (
          <div className="container" key={index}>
            <div className="contenedor">
                <Link to={`/movie/${m.id}`}>
                    <img className="container-img" src={m.poster} alt="" />
                </Link>
                <ReactStars
                    value={rating}
                    edit={false}
                    count={5}
                    size={20}
                    color1={"#f4c10f"}
                ></ReactStars>
                <p className="container-div2_popularity">Rated: {m.popularity}</p>
            </div>
          </div>
        );
    });

    const recentlyAdded = popMovies.slice(6, 10).map((m, index) => {
        const rating = m.rating / 2
        return (
            <div className="container" key={index}>
                <div>
                    <Link to={`/movie/${m.id}`}>
                        <img className="container-img" src={m.poster} alt="" />
                    </Link>
                </div>
                <ReactStars
                    value={rating}
                    edit={false}
                    count={5}
                    size={20}
                    color1={"#f4c10f"}
                ></ReactStars>
            </div>
        )
    })
     

    //const filtroRate1 = rateMovies.slice(0, 20).map((m, index) => {
    //    const valor = m.rating / 2
    //    if(valor <=  1) {
    //            return (
    //                <div className="container" key={index}>
    //                    <p>Venom</p>
    //                </div>
    //            )
    //        } else {
    //            return false
    //        }
    //})
    //const filtroRate2 = rateMovies.slice(0, 20).map((m, index) => {
    //    const valor = m.rating / 2
    //    console.log(valor)
    //    if(valor <=  2) {
    //            return (
    //                <div className="container" key={index}>
    //                    <p>Venom</p>
    //                </div>
    //            )
    //        } else {
    //            return false
    //        }
    //})
    //const filtroRate3 = rateMovies.slice(0, 20).map((m, index) => {
    //    const valor = m.rating / 2
    //    const title = m.title
    //    console.log(title)
    //    if(valor <=  3) {
    //            return (
    //                <div className="container" key={index}>
    //                    <p>{m.title}</p>
    //                </div>
    //            )
    //        } else {
    //            return false
    //        }
    //})
    //const filtroRate4 = rateMovies.slice(0, 20).map((m, index) => {
    //    const valor = m.rating / 2
    //    const title = m.title
    //    if(valor <=  4) {
    //            return (
    //                <div className="container" key={index}>
    //                    <p>{title}</p>
    //                </div>
    //            )
    //        } else {
    //            return false
    //        }
    //})
    //const filtroRate5 = rateMovies.slice(0, 20).map((m, index) => {
    //    const valor = m.rating / 2
    //    const title = m.title
    //    console.log(valor)
    //    if(valor <=  5) {
    //            return (
    //                <div className="container" key={index}>
    //                    <p>{title}</p>
    //                </div>
    //            )
    //        } else {
    //            return false
    //        }
    //})

    //<div>
    //            <button id="1" onClick={e => {setStatus1(!status1); setStatus2(false); setStatus3(false); setStatus4(false); setStatus5(false);}} value="1">1</button>
    //            <button id="2" onClick={e => {setStatus2(!status2); setStatus1(false); setStatus3(false); setStatus4(false); setStatus5(false);}} value="2">2</button>
    //            <button id="3" onClick={e => {setStatus3(!status3); setStatus1(false); setStatus2(false); setStatus4(false); setStatus5(false);}} value="3">3</button>
    //            <button id="4" onClick={e => {setStatus4(!status4); setStatus1(false); setStatus2(false); setStatus3(false); setStatus5(false);}} value="4">4</button>
    //            <button id="5" onClick={e => {setStatus5(!status5); setStatus1(false); setStatus2(false); setStatus3(false); setStatus4(false);}} value="5">5</button>
    //            <div>
    //                {status1 && <div>{filtroRate1}</div>}
    //            </div>
    //            <div>
    //                {status2 && <div>{filtroRate2}</div>}
    //            </div>
    //            <div>
    //                  {status3 ? <div>{filtroRate3}</div> : <div></div>}
   //            </div>
    ////            <div>
    //                {status4 ? <div>{filtroRate4}</div> : <div></div>}
    //              </div>
    //             <div>
    //                {status5 && <div>{filtroRate5}</div>}
    //            </div>
    //        </div>
return (
    <div>
        <div>
            <h2>Populares</h2>
        </div>
        <div>{topPopMovies}</div>
        <div>
            <h3>Recently Added</h3>
        </div>
        <div>{recentlyAdded}</div>
    </div>
    )
}

export default Home