AI Movie Insight Builder

Live Application:
https://ai-movie-insight-builder-pi.vercel.app/

1. Project Overview

AI Movie Insight Builder is a full-stack web application that allows users to retrieve detailed movie information using an IMDb ID and generate structured audience sentiment insights.

The application integrates external movie metadata services and applies rule-based sentiment classification to simulate AI-powered audience analysis.

This project was developed as part of a Full-Stack Developer Internship evaluation.

2. Core Features
2.1 Movie Data Retrieval

Input IMDb movie ID (e.g., tt0133093)

Fetch and display:

Title

Poster

Release Year

IMDb Rating

Plot Summary

Cast List

Ratings Breakdown (IMDb, Rotten Tomatoes, etc.)

2.2 Audience Sentiment Analysis

Aggregates rating sources

Calculates a normalized audience score

Classifies sentiment as:

Positive

Mixed

Negative

Generates a structured audience insight summary

2.3 Input Validation & Edge Case Handling

Validates IMDb ID format (tt followed by 7–8 digits)

Handles:

Invalid input formats

Missing movie results

API failures

Missing poster images

Displays clear, user-friendly error messages

3. Technical Architecture
3.1 Technology Stack

Frontend

Next.js (App Router)

React

Tailwind CSS

Backend

Next.js API Routes (Server Functions)

External Integration

OMDb API for movie metadata

Testing

Jest (Unit testing for validation logic)

Deployment

Vercel (Production-ready deployment)

3.2 Project Structure
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
3.3 Design Principles

Modular component-based architecture

Separation of concerns

Reusable utility functions

Clean API abstraction layer

Defensive error handling

Environment-based configuration

4. Sentiment Analysis Logic

The application computes sentiment through a rating aggregation strategy:

Extract IMDb rating.

Extract Rotten Tomatoes rating (if available).

Normalize both values to a percentage scale.

Compute a combined audience score.

Apply classification thresholds:

Score Range	Classification
75 and above	Positive
50–74	Mixed
Below 50	Negative

A structured summary is generated based on classification.

This approach ensures deterministic, explainable sentiment output.

5. Deployment

The application is deployed using Vercel.

Environment variables are configured securely via the Vercel dashboard.

Production Environment Variable
OMDB_API_KEY=your_api_key
6. Local Development Setup
6.1 Clone Repository
git clone https://github.com/your-username/ai-movie-insight-builder.git
6.2 Install Dependencies
npm install
6.3 Configure Environment Variables

Create a .env.local file in the root directory:

OMDB_API_KEY=your_api_key_here
6.4 Run Development Server
npm run dev

Open:

http://localhost:3000
7. Running Tests

Unit tests are included for IMDb ID validation logic.

Run:

npm test
8. Code Quality & Best Practices

Modular file structure

Reusable components

Utility-based validation

Clean naming conventions

Error handling for edge cases

Production-ready environment configuration

Deployed live application for review

9. Assumptions

Audience sentiment is derived from aggregated rating sources rather than direct review scraping.

The OMDb API free tier provides sufficient metadata for demonstration purposes.

Deterministic sentiment logic is used in place of large language model inference for simplicity and scalability.

10. Future Enhancements

Real review scraping and NLP-based sentiment analysis

Caching layer for repeated queries

Improved accessibility support

Advanced filtering (genre, year range)

Save/search history functionality

Performance optimization with caching strategies

11. Evaluation Criteria Alignment

This implementation satisfies:

Functional Requirements

Clean Code & Modular Architecture

Edge Case Handling

Basic Unit Testing

Live Deployment

Modern Responsive UI

The application is fully functional, production-ready, and accessible via the provided live link.
