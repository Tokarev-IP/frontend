import React, { useState } from "react";
import { ListedMovie, MovieT, Review } from "../types/interfaces";

interface MovieContextInterface {
    favourites: number[];
    addToFavourites: ((movie: ListedMovie) => void);
    removeFromFavourites: ((movie: ListedMovie) => void);
}
const initialContextState = {
    favourites: [],
    addToFavourites: (movie: ListedMovie) => { movie.id },
    removeFromFavourites: (movie: ListedMovie) => { movie.id }
};

export const MoviesContext = React.createContext<MovieContextInterface>(initialContextState);;

const MoviesContextProvider: React.FC<React.PropsWithChildren> = (props) => {

    const [myReviews, setMyReviews] = useState<Review[]>([])
    const [favourites, setFavourites] = useState<number[]>([]);

    const addReview = (movie, review) => { 
        setMyReviews({ ...myReviews, [movie.id]: review })
    };

    const addToFavourites = (movie: ListedMovie) => {
        let updatedFavourites = [...favourites];
        if (!favourites.includes(movie.id)) {
            updatedFavourites.push(movie.id);
        }
        setFavourites(updatedFavourites);
    };

    const removeFromFavourites = (movie: ListedMovie) => {
        setFavourites(favourites.filter((mId) => mId !== movie.id));
    };

    return (
        <MoviesContext.Provider
            value={{
                favourites,
                addToFavourites,
                removeFromFavourites,
                addReview, 
            }}
        >
            {props.children}
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;