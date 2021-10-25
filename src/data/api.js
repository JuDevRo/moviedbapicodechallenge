import axios from 'axios'

const apikey = '6f863230e60005e2c949340549e76417'
const url = 'https://api.themoviedb.org/3'
const img_url = 'https://image.tmdb.org/t/p/w500/'
        
const getUrl = (path) => {
    const enlace = `${url}${path}?api_key=${apikey}`;
    return enlace;
    };

export const getPopMovies = async() => {
    try{
        const path = '/movie/popular';
        const link = `${getUrl(path)}`;
        const data = await axios.get(link)
            .then(response => {
                const resultados = (response.data.results)
                return resultados
            }).catch(error => {
                console.log(error)
            })
        const modifiedData = data.map((m) => ({
            id: m['id'],
            adult:  m['adult'],
            popularity: m['popularity'],
            title: m['title'],
            poster: img_url + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
        }))
    console.log(modifiedData)
    return modifiedData
    }catch(error){
        console.log(error)
    }
        
}

export const fetchMovieDetail = async (id) => {
    try {
        const path = `/movie/${id}`;
        const link = `${getUrl(path)}`;
        const data = await axios.get(link).then(response => {
            const resultado = (response.data)
            return resultado
        }).catch(error => {
            console.log(error)
        })
    return data
    } catch (error) { }
}

export const getRateMovies = async() => {
    try{
        const path = '/movie/popular';
        const link = `${getUrl(path)}`;
        const data = await axios.get(link)
            .then(response => {
                const resultados = (response.data.results)
                return resultados
            }).catch(error => {
                console.log(error)
            })
        const modifiedData = data.map((m) => ({
            rating: m['vote_average'],
            title: m['title'],
        }))
    console.log(modifiedData)
    return modifiedData
    }catch(error){
        console.log(error)
    }
        
}

//export const fetchMovieDetail = async (id) => {
//    try {
//        const path = `/movie/${id}`;
//        const link = `${getUrl(path)}`;
//        const data = await axios.get(link, {
//            
//        });
//        return data
//    } catch (error) { }
//}