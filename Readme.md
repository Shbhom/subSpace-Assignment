# Blog Analytics and Search Tool

Welcome to the GitHub repository for your Blog Analytics and Search Tool assignment. In this project, you've created an Express.js-based tool that retrieves blog data from a third-party API, analyzes the data using Lodash, and provides insightful statistics to clients. Additionally, you've implemented a blog search functionality. Below, you'll find detailed information on how to set up and use your application.

## Table of Contents

1. [Introduction](#introduction)
2. [Data Retrieval](#data-retrieval)
3. [Data Analysis](#data-analysis)
4. [Response](#response)
5. [Blog Search Endpoint](#blog-search-endpoint)
6. [Bonus Challenge](#bonus-challenge)
7. [Usage](#usage)

## Introduction

In this project, I've created a REST API with 2 endpoints that performs the following tasks:

### Data Retrieval

- A middleware retrieves data from a third-party blog API using the provided curl request.

### Data Analysis

- After fetching the data, Lodash is used to perform various analytics on the blog data, which includes:
  - Calculating the total number of blogs fetched.
  - Finding the blog with the longest title.
  - Determining the number of blogs with titles containing the word "privacy."
  - Creating an array of unique blog titles (no duplicates).

### Response

- The application responds to client requests with JSON objects containing the calculated statistics:
  - Total number of blogs.
  - The title of the longest blog.
  - Number of blogs with "privacy" in the title.
  - An array of unique blog titles.

### Blog Search Endpoint

- An additional route at `/api/blog-search` is implemented.
- This route accepts a query parameter, e.g., `/api/blog-search?query=privacy`.
- Implements a search functionality that filters the blogs based on the provided query string (case-insensitive).

### Bonus Challenge (Optional)

- A caching mechanism using Lodash's `memoize` function is implemented.
- The caching mechanism stores the analytics results and search results for a certain period.
- If the same requests are made within the caching period, cached results are returned instead of re-fetching and re-analyzing the data.

## Usage

To use this application, follow these steps:

1. Clone this repository to your local machine:

   ```shell
   git clone https://github.com/Shbhom/subSpace-Assignment.git
   cd subSpace-Assignment
   ```

2. Install the required dependencies:

   ```shell
   npm install
   ```

3. Start the Express server:

   ```shell
   npm run dev
   ```

4. Access the following endpoints in your web browser or API client:

   - `/api/blog-stats` to retrieve blog statistics.
   - `/api/blog-search?query=your-query` to perform a blog search.
