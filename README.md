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

### Independent learning </b>

I use state as a snapshot (https://react.dev/learn/state-as-a-snapshot) to observe state and update ui. </b>

### Pictures </b>

![image](https://github.com/Tokarev-IP/frontend/assets/61622665/c21c31bb-46cd-4ee8-ae4f-f3666bbffcdf)

![image](https://github.com/Tokarev-IP/frontend/assets/61622665/e4f8a9d3-a483-494b-94b1-b7673dc7ee41)

![image](https://github.com/Tokarev-IP/frontend/assets/61622665/cd728da6-943d-4630-b986-2f4ed8ecc7c6)

![image](https://github.com/Tokarev-IP/frontend/assets/61622665/3eaa7bfb-ef0e-481c-9260-275f80d06225)

