import React from "react";

interface MovieCardProps {
  title: string;
  description: string;
  posterUrl: string;
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  description,
  posterUrl,
}) => {
  return (
    <div className="movie-card">
      <img src={posterUrl} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default MovieCard;
