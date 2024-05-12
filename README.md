Name: Ilia Tokarev </b>

Video demonstration:  https://youtu.be/YMH_XtotVx8 </b>

This repository contains an implementation of the Movie Fans Web Application using the ReactJS library. </b>

### Features </b>

Feature 1 </b>

An ability to change the page of TVseries data. </b>

Feature 2 </b>

An ability to unfold/fold the data about actors and authors in the EpisodePage. </b>

### API endpoints </b>

/3/tv/popular?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&page=${page} - get list of popular tv series. </b>

/3/tv/${id}?api_key=${import.meta.env.VITE_TMDB_KEY} - get detailed data about tv series. </b>

/3/tv/${id}/season/${season_number}?api_key=${import.meta.env.VITE_TMDB_KEY} - get detailed data about season of tv series. </b>

### Routing </b>

/tv/popular - the page of list of popular tv serials. </b>

/tv/series/:id - the page to see detailed information about the chosen serial. </b>

/tv/series/:id/season/:season_number - the page to see all series of the chosen season of seriel. </b>

### Independent learning (If relevant) </b>

I use state as a snapshot (https://react.dev/learn/state-as-a-snapshot) to observe state and update ui. </b>
