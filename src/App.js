//eslint-disable-next-line
import React, { useEffect, useState } from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "./Config";
import MainImage from "./MainImage";
import GridCards from "./GridCards";
import { Row } from "antd";
import Test from "./Test";

function App() {
  const [Movies, setMovies] = useState([]);
  const [MainMovieImage, setMainMovieImage] = useState(null);

  useEffect(() => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=ko-US&page=1`;

    fetch(endpoint)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.results);
        setMovies([...Movies, ...response.results]);
        setMainMovieImage(response.results[1]);
      });
  }, []);

  return (
    <div className="App">
      <div style={{ width: "100%", margin: "0" }}>
        <div>하이</div>
        {Movies && (
          <React.Fragment>
            <Test
              image={
                Movies.poster_path
                  ? `${IMAGE_BASE_URL}w500${Movies.poster_path}`
                  : null
              }
              movieId={Movies.id}
              movieName={Movies.original_title}
            />
          </React.Fragment>
        )}
        {MainMovieImage && (
          <MainImage
            image={`${IMAGE_BASE_URL}w1280${MainMovieImage.backdrop_path}`}
            title={MainMovieImage.original_title}
            text={MainMovieImage.overview}
          />
        )}
        <div style={{ width: "85%", margin: "1rem auto" }}>
          <h2>Movies by lastest</h2>
          <hr />

          <Row gutter={[16, 16]}>
            {Movies &&
              Movies.map((movie, index) => (
                <React.Fragment key={index}>
                  <GridCards
                    image={
                      movie.poster_path
                        ? `${IMAGE_BASE_URL}w500${movie.poster_path}`
                        : null
                    }
                    movieId={movie.id}
                    movieName={movie.original_title}
                  />
                </React.Fragment>
              ))}
          </Row>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <button> Load More</button>
        </div>
      </div>
    </div>
  );
}

export default App;
