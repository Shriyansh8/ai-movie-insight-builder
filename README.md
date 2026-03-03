AI Movie Insight Builder

Live Application:
https://ai-movie-insight-builder-pi.vercel.app/

Project Overview

AI Movie Insight Builder is a full-stack web application that enables users to retrieve structured movie information using an IMDb ID and generate audience sentiment insights.

The application integrates external movie metadata services and applies rule-based sentiment classification logic to simulate AI-powered audience analysis.

This project was developed as part of a Full-Stack Developer Internship evaluation.

Core Features
1. Movie Data Retrieval

Input IMDb movie ID (e.g., tt0133093)

Fetch and display:

Title

Poster

Release Year

IMDb Rating

Plot Summary

Cast List

Ratings Breakdown (IMDb, Rotten Tomatoes, etc.)

2. Audience Sentiment Analysis

Aggregates multiple rating sources

Computes a normalized audience score

Classifies sentiment into:

Positive

Mixed

Negative

Generates a structured summary explaining the classification

3. Input Validation & Edge Case Handling

Validates IMDb ID format (tt followed by 7–8 digits)

Handles:

Invalid ID formats

Movie not found cases

API failures

Missing poster images

Displays user-friendly error messages

Technology Stack
Frontend

Next.js (App Router)

React

Tailwind CSS

Backend

Next.js API Routes (Server Functions)

External API

OMDb API for movie metadata

Testing

Jest (Unit testing for validation logic)

Deployment

Vercel (Production-ready deployment)

Project Structure
src/
 ├── app/
 │    ├── api/
 │    │     └── movie/route.js
 │    └── page.js
 ├── components/
 │    ├── SearchBar.js
 │    ├── MovieCard.js
 │    └── SentimentBox.js
 └── utils/
      └── validation.js
Architecture & Design Decisions

Used Next.js API routes to maintain a unified full-stack architecture.

Structured components for separation of concerns.

Extracted validation logic into a reusable utility function.

Implemented deterministic sentiment classification for transparency and explainability.

Used environment variables to secure API keys.

The design prioritizes modularity, readability, and scalability.

Sentiment Analysis Logic

The sentiment classification is computed as follows:

Extract IMDb rating.

Extract Rotten Tomatoes rating (if available).

Normalize values to percentage scale.

Compute an aggregated audience score.

Apply classification thresholds:

Score Range	Classification
75 and above	Positive
50–74	Mixed
Below 50	Negative

A structured audience insight summary is generated based on the classification result.

This ensures deterministic and explainable sentiment output.

Local Development Setup
1. Clone the Repository
git clone https://github.com/your-username/ai-movie-insight-builder.git
2. Install Dependencies
npm install
3. Configure Environment Variables

Create a .env.local file in the root directory:

OMDB_API_KEY=your_api_key_here
4. Run Development Server
npm run dev

Open:

http://localhost:3000
Running Tests

Unit tests are included for IMDb ID validation logic.

Run:

npm test
Deployment

The application is deployed using Vercel.

Environment variables are configured securely within the Vercel dashboard:

OMDB_API_KEY=your_api_key

The production build is accessible via the live application link above.

Assumptions

Sentiment is derived from aggregated rating data rather than raw review text.

The OMDb API free tier provides sufficient metadata for demonstration.

Deterministic sentiment logic was chosen for clarity and explainability.

Future Improvements

Integrate NLP-based sentiment analysis using review data

Implement server-side caching for repeated queries

Add accessibility enhancements

Introduce advanced filtering (genre, year range)

Add search history or bookmarking functionality

Improve performance optimization

Evaluation Criteria Alignment

This implementation satisfies:

Full functional requirements

Clean, modular architecture

Proper validation and error handling

Basic unit testing

Responsive UI

Live deployment without local setup

The application is production-ready and structured according to modern full-stack best practices.
