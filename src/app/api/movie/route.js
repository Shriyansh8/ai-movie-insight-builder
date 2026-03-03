export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const imdbID = searchParams.get("id");

    if (!imdbID) {
      return Response.json(
        { error: "IMDb ID is required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.OMDB_API_KEY;

    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`
    );

    const data = await response.json();

    if (data.Response === "False") {
      return Response.json(
        { error: "Movie not found" },
        { status: 404 }
      );
    }

    const imdbRating = parseFloat(data.imdbRating);
    const rotten = data.Ratings.find(
      (r) => r.Source === "Rotten Tomatoes"
    );

    const rottenValue = rotten
      ? parseInt(rotten.Value)
      : null;

    const avgScore = rottenValue
      ? (imdbRating * 10 + rottenValue) / 2
      : imdbRating * 10;

    let sentiment = "Mixed";
    let sentimentSummary = "";

    if (avgScore >= 75) {
      sentiment = "Positive";
      sentimentSummary =
        "Audience reactions are strongly positive, with high praise for performances, storytelling, and overall execution.";
    } else if (avgScore >= 50) {
      sentiment = "Mixed";
      sentimentSummary =
        "Audience reception is mixed, with appreciation for certain elements but criticism in others.";
    } else {
      sentiment = "Negative";
      sentimentSummary =
        "Audience feedback trends negative, highlighting issues in pacing, narrative structure, or execution.";
    }

    return Response.json({
      ...data,
      sentiment,
      sentimentSummary,
    });
  } catch (error) {
    return Response.json(
      { error: "Server error occurred" },
      { status: 500 }
    );
  }
}