import axios from "axios"

export const getDataApiPopular = async() =>{
    const resp= await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=a25f4995bd78822f27da177f9b6ce03e&language=en-US')
    const popular = resp.data.results.map((movie)=>{
        return {
            id: movie.id,
            title: movie.title,
            image: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
        }

    })

    return popular
}