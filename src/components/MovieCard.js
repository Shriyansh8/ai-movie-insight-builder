import SentimentBox from "./SentimentBox";

export default function MovieCard({ movie }) {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-24 transition-opacity duration-700">
      <div className="bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-2xl p-10 border border-gray-700">

        <div className="flex flex-col md:flex-row gap-10">
          <img
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/300x450?text=No+Image"
            }
            alt={movie.Title}
            className="w-80 rounded-xl shadow-lg mx-auto md:mx-0"
          />

          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-6">
              {movie.Title}
            </h2>

            <div className="grid grid-cols-2 gap-4 text-gray-300 mb-6">
              <p><strong>Year:</strong> {movie.Year}</p>
              <p><strong>IMDb Rating:</strong> {movie.imdbRating}</p>
              <p className="col-span-2">
                <strong>Cast:</strong> {movie.Actors}
              </p>
            </div>

            <p className="text-gray-200 leading-relaxed mb-8">
              {movie.Plot}
            </p>

            {/* Ratings Breakdown */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">
                Rating Breakdown
              </h3>
              <div className="space-y-2 text-gray-300">
                {movie.Ratings?.map((rating, index) => (
                  <p key={index}>
                    <strong>{rating.Source}:</strong> {rating.Value}
                  </p>
                ))}
              </div>
            </div>

            <SentimentBox
              sentiment={movie.sentiment}
              sentimentSummary={movie.sentimentSummary}
            />
          </div>
        </div>
      </div>
    </section>
  );
}