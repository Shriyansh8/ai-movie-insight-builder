AI Movie Insight Builder

Live Demo:
https://ai-movie-insight-builder-pi.vercel.app/

Overview

AI Movie Insight Builder is a full-stack web application that allows users to enter an IMDb movie ID and retrieve structured movie data along with an AI-generated audience sentiment analysis.

The application integrates external movie metadata APIs and applies rule-based sentiment classification logic to generate insights about audience reception.

This project was developed as part of a Full-Stack Developer Internship assignment.

Features
Core Functionality

Input IMDb movie ID (e.g., tt0133093)

Fetch movie details including:

Title

Poster

Release Year

IMDb Rating

Plot Summary

Cast List

Display rating breakdown (IMDb, Rotten Tomatoes, etc.)

AI-style sentiment summary

Overall sentiment classification (Positive / Mixed / Negative)

Edge Case Handling

Validation for correct IMDb ID format (tt followed by 7–8 digits)

Handles missing or invalid IDs

Gracefully handles movies not found

Fallback poster for missing images

Error messages for API failures

UI and UX

Responsive layout (desktop and mobile)

Clean, modern design

Loading spinner for API calls

Modular component-based architecture

Tech Stack
Frontend

Next.js (App Router)

React

Tailwind CSS

Backend

Next.js API Routes (Server Functions)

External API

OMDb API (for movie metadata)

Testing

Jest (basic unit tests for validation logic)

Deployment

Vercel (with environment variable configuration)

Architecture

The application follows a modular and maintainable structure:

src/
 ├── app/
 │    ├── api/movie/route.js
 │    └── page.js
 ├── components/
 │    ├── SearchBar.js
 │    ├── MovieCard.js
 │    └── SentimentBox.js
 └── utils/
      └── validation.js
Design Decisions

Used Next.js API routes instead of a separate backend server to keep the architecture simple and scalable.

Extracted validation logic into a utility function for testability.

Separated UI into reusable components to improve maintainability.

Implemented sentiment classification using rating aggregation logic.

Sentiment Logic

The application computes audience sentiment by:

Extracting IMDb rating.

Extracting Rotten Tomatoes rating (if available).

Calculating an aggregated score.

Classifying sentiment into:

Positive (>= 75)

Mixed (50–74)

Negative (< 50)

A structured summary is then generated based on classification.

Setup Instructions (Local Development)

Clone the repository:

git clone https://github.com/your-username/ai-movie-insight-builder.git

Navigate into the project:

cd ai-movie-insight-builder

Install dependencies:

npm install

Create a .env.local file in the root directory:

OMDB_API_KEY=your_api_key_here

Run the development server:

npm run dev

Open in browser:

http://localhost:3000
Running Tests
npm test

Includes basic unit tests for IMDb ID validation logic.
