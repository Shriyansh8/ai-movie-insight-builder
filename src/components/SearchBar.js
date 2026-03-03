"use client";

export default function SearchBar({
  imdbID,
  setImdbID,
  fetchMovie,
  loading,
  error,
}) {
  return (
    <section className="text-center pt-24 pb-16 px-6">
      <h1 className="text-6xl font-extrabold tracking-tight mb-6">
        Movie Intelligence.
        <br />
        Powered by AI.
      </h1>

      <p className="text-gray-400 max-w-3xl mx-auto text-xl leading-relaxed mb-10">
        Enter any IMDb ID to retrieve detailed movie information,
        including cast, ratings, and an AI-generated audience
        sentiment analysis.
      </p>

      <div className="flex justify-center">
        <div className="flex items-center bg-gray-800/70 backdrop-blur-lg border border-gray-700 rounded-full px-6 py-3 w-full max-w-2xl shadow-2xl">
          <input
            type="text"
            placeholder="Enter IMDb ID (e.g., tt0133093)"
            value={imdbID}
            onChange={(e) => setImdbID(e.target.value)}
            className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none text-lg"
          />

          <button
            onClick={fetchMovie}
            className="bg-blue-600 hover:bg-blue-700 transition px-6 py-2 rounded-full font-semibold flex items-center justify-center"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Analyze"
            )}
          </button>
        </div>
      </div>

      {error && (
        <p className="text-red-400 mt-4 font-medium">{error}</p>
      )}
    </section>
  );
}