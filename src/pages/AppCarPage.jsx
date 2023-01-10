import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SingleMovieDetails } from "../components/SingleMovieDetails";
import { carService } from "../services/CarService";

export const CarPage = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState({});

  const handleSetMovie = async () => {
    const { data } = await carService.get(id);
    setMovie(data);
  };

  useEffect(() => {
    handleSetMovie();
  }, []);

  return (
    <SingleMovieDetails
      title={movie.title}
      director={movie.director}
      imageURL={movie.imageURL}
      duration={movie.duration}
      releaseDate={movie.releaseDate}
      genre={movie.genre}
    />
  );
};
