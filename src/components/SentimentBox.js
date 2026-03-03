export default function SentimentBox({ sentiment, sentimentSummary }) {
  return (
    <div className="bg-gray-700/70 p-6 rounded-xl border border-gray-600">
      <h3 className="text-2xl font-semibold mb-3">
        Audience Sentiment Analysis
      </h3>

      <p className="mb-2">
        <strong>Overall Classification:</strong>{" "}
        <span
          className={
            sentiment === "Positive"
              ? "text-green-400"
              : sentiment === "Negative"
              ? "text-red-400"
              : "text-yellow-400"
          }
        >
          {sentiment}
        </span>
      </p>

      <p className="text-gray-200 leading-relaxed">
        {sentimentSummary}
      </p>
    </div>
  );
}