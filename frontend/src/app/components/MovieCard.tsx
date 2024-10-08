import React from "react";
import { Movie } from "@/app/models/Movie";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="border p-2">
      {/* Movie Poster */}
      <img src={movie.posterUrl} alt={movie.title} className="w-full" />

      {/* Movie Title */}
      <h3 className="mt-2 text-xl">{movie.title}</h3>

      {/* Embed YouTube Trailer */}
      <div className="mt-2">
        <iframe
          width="100%"
          height="200"
          src={`https://youtube.com/embed/${movie.trailerId}`}
          title={`${movie.title} Trailer`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      {/* Book Tickets Button (conditionally rendered) */}
      {movie.isRunning && (
        <button className="mt-3 bg-blue-500 text-white py-2 px-4 rounded">
          Book Tickets
        </button>
      )}
    </div>
  );
};

export default MovieCard;
