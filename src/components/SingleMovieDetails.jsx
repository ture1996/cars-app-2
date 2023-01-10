export const SingleMovieDetails = ({title, director, imageURL, duration, releaseDate, genre})=>{

return (

    <div>
        title: {title}
        <br/>
        director: {director}
        <br/>
        imageUrl: {imageURL}
        <br/>
        Duration: {duration}
        <br/>
        Release Date: {releaseDate}
        <br/>
        Genres: {genre}
    </div>

)


}