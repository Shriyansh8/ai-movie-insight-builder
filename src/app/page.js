"use client";

import { useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import { isValidImdbID } from "../utils/validation";

export default function Home() {
  const [imdbID, setImdbID] = useState("");
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchMovie = async () => {
    setError("");
    setMovie(null);

    if (!isValidImdbID(imdbID)) {
      setError(
        "IMDb ID must follow format: tt followed by 7–8 digits (e.g., tt0133093)"
      );
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`/api/movie?id=${imdbID}`);
      const data = await res.json();

      if (!res.ok) {
        setError(data.error);
      } else {
        setMovie(data);
      }
    } catch (err) {
      setError("Unexpected error occurred");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white">
      <SearchBar
        imdbID={imdbID}
        setImdbID={setImdbID}
        fetchMovie={fetchMovie}
        loading={loading}
        error={error}
      />

      {movie && <MovieCard movie={movie} />}

      <footer className="text-center text-gray-600 pb-12 text-sm">
        Full-Stack Developer Internship Assignment • Built with Next.js
      </footer>
    </div>
  );
}