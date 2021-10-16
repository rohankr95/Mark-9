import React, { useState } from "react";
import "./styles.css";
var moviesDB = {
  Action: [
    { name: "Tenet", rating: "4.5/5",Description: "A fantastic Scifi movie" },
    { name: "The Dark Knight", rating: "4.3/5", Description: "Directed by Christopher Nolan" },
    { name: "Avengers", rating: "4.7/5", Description: "American superhero film based on the Marvel Comics superhero" }
  ],
  Romance: [
    { name: "La La Land", rating: "4.4/5", Description: "La La Land is a 2016 American musical romantic comedy-drama film" },
    { name: "Twilight", rating: "4.5/5", Description: "The Twilight Saga is a series of five vampire-themed romance fantasy" },
    { name: "Titanic", rating: "4.6/5", Description: "The film that broke every box office record" }
  ],
  Thriller: [
    { name: "Shutter Island", rating: "4.4/5", Description: "Directed by Martin Scorsese"  },
    { name: "Inception", rating: "4.7/5", Description: "Directed by Christopher Nolan" },
    { name: "Now you see mee", rating: "4.5/5" , Description: "A 2013 American heist thriller film directed by Louis Leterrier"}
  ]
};
var movieGenre = Object.keys(moviesDB);
export default function App() {
  var [selectedGenre, setGenre] = useState("Action");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1 style={{ paddingRight: "10rem", color: "#DC2626" }}>
        <span role="img" aria-label="movie-emoji">
          📺
        </span>{" "}
        Movie Recommendor
      </h1>
      <h3
        style={{
          fontFamily: "sans-serif",
          color: "#4B5563",
          margin: "1.5rem",
          paddingLeft: "13rem"
        }}
      >
        Choose your genre and know the top rated recommended movies from that
        genre!!
      </h3>
      <div style={{ paddingRight: "15rem" }}>
        {movieGenre.map((genre) => {
          return (
            <button
              onClick={() => genreClickHandler(genre)}
              className="genre-btn"
            >
              {genre}
            </button>
          );
        })}
      </div>

      <hr align="right" width="70%" />

      <div style={{ paddingRight: "10rem" }}>
        <ul>
          {moviesDB[selectedGenre].map((genre) => {
            return (
              <li
                key={genre.name}
                style={{
                  listStyle: "none",
                  padding: "0.5rem 0rem",
                  border: "1px solid black",
                  width: "50%",
                  margin: "1rem 22rem",
                  borderRadius: "0.5rem"
                }}
              >
                <div style={{ fontSize: "larger", color: "#111827" }}>
                  {genre.name}
                </div>
                <div style={{ fontSize: "larger", color: "#1F2937" }}>
                  {genre.rating}
                </div>
                <div style={{ fontSize: "larger", color: "#1F2937" }}>
                  {genre.Description}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
