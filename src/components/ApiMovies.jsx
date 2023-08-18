import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

function ApiMovies({ movie }) {
  const navigate = useNavigate();
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=4287ad07&s=${movie}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === "True") {
          setMovieData(data.Search);
        } else if (
          data.Response === "False" &&
          data.Error === "Movie not found!"
        ) {
          console.error("¡Película no encontrada!");
        } else {
          console.error("Error al obtener los datos:", data.Error);
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, [movie]);

  return (
    <>
      <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={4}>
        {movieData.map((movieItem) => (
          <Card
            key={movieItem.imdbID}
            maxWidth="300px"
            margin="0.5rem auto"
            bg="blackAlpha.400"
            display="grid"
            gridAutoRows="auto auto auto"
          >
            <div key={movieItem.imdbID} className="movieStyle">
              <CardHeader color="white" margin="0 auto" fontSize="15px">
                <h3>{movieItem.Title} </h3>
              </CardHeader>
              <CardBody padding="0">
                <img src={movieItem.Poster} alt={movieItem.Title} />
              </CardBody>
              <CardFooter
                display="grid"
                fontSize="22px"
                color="white"
                padding="0"
                margin="0 auto"
                _hover={{ color: "darkred", fontSize: "20px" }}
              >
                <button
                  onClick={() =>
                    navigate(
                      `/ApiMovie/${movieItem.imdbID}/${encodeURIComponent(
                        movieItem.Title
                      )}`
                    )
                  }
                >
                  Ver
                </button>
              </CardFooter>
            </div>
          </Card>
        ))}
      </Grid>
    </>
  );
}

export default ApiMovies;
