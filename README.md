Name: Ilia Tokarev

Video demonstration:  https://youtu.be/YMH_XtotVx8

This repository contains an implementation of the Movie Fans Web Application using the ReactJS library. 

### Features
Feature 1
An ability to change the page of TVseries data.  
Feature 2
An ability to unfold/fold the data about actors and authors in the EpisodePage.  

### API endpoints

https://api.themoviedb.org/3/tv/popular?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&page=${page} - get list of popular tv series.
https://api.themoviedb.org/3/tv/${id}?api_key=${import.meta.env.VITE_TMDB_KEY} - get detailed data about tv series.
https://api.themoviedb.org/3/tv/${id}/season/${season_number}?api_key=${import.meta.env.VITE_TMDB_KEY} - get detailed data about season of tv series.

### Routing

/tv/popular - the page of list of popular tv serials.
/tv/series/:id - the page to see detailed information about the chosen serial.
/tv/series/:id/season/:season_number - the page to see all series of the chosen season of seriel.

### Independent learning (If relevant)

I use state as a snapshot (https://react.dev/learn/state-as-a-snapshot) to observe state and update ui.
