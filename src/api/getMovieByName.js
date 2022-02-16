import axios from "axios";



export const getMovieByName= async(name) =>{
    
    const movies= await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a25f4995bd78822f27da177f9b6ce03e&query=${name}`)

    const moviesSearch= movies.data.results.map((movie)=>{
        return {
            id: movie.id,
            title: movie.title,
            image: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
        }
    })
   
    return moviesSearch
}