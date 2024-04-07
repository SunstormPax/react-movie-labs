# react-movie-labs

Sunny Keenan 20097973

Web App Development Assignment 1

This project contains the entire, completed web application from the React Movie Labs. All functions work, including the home page, filter card, movie cards, static APIs, favourites page, details page and caching.

Added to the web application are the following: Upcoming page, Reccommended page, Reccommended buttons, Now Playing page, Popular page, Top-Rated Page, and a pagination function.

The Upcoming, Now Playing, Top-Rated and Popular pages all work the same way. All work off of static TMDB API's, which they call from functions in the tmdb-api.js file. They call the Page Template function from the templatemoviepagelist.index file and add the information from their API's into the template, displaying the movie's title, thumbnail, release date and rating. The movies shown on each page will change daily as TMDB updates their APIs. All of these pages can be accessed by the toolbar at the top of every page. These pages have also had their caching fixed, calling the useQuery and Spinner functions.

 The reccommended page can be accessed by clicking on a new reccommended button that now appears at the bottom of every movie card, alongside the thumbs-up button and the more details button. The reccommended page functions similarly to the other pages, however it uses a parameterised API, requiring the unique ID of the movie that was clicked to be called in order to function. Unfortunately, I have not been able to get this working properly, and continuously get error 404 messages whenever it attempts to load. I cannot tell if this is a problem with my code, the API itself or just internet issues, but so far, all that is displayed are loading spinners. The page has had it's caching properly handled however.

  The final addition is a pagination function. Initially, the pages would load around 20 cards in rows of 6, all of which would have to be scrolled through. The pagination function has been added to the templateMovieListPage/index.js file. In addition, the grid size has been modified, so that the page now only displays 5 cards at a time, each of which can be scrolled through with the pagination feature.
