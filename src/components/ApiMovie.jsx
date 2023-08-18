import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  CircularProgress,
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";

const ApiMovie = () => {
  const [movie, setMovie] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=4287ad07&i=${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === "True") {
          setMovie(data);
        } else {
          console.error("Error al obtener los datos:", data.Error);
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, [params.id]);

  return (
    <Box>
      {movie ? (
        <Card
          maxWidth="300px"
          margin="2rem auto"
          padding="0"
          display="grid"
          bg="blackAlpha.400"
        >
          <CardHeader
            bg="blackAlpha.400"
            color="white"
            textAlign="center"
            fontSize="20px"
          >
            <h3>{movie.Title} </h3>
          </CardHeader>
          <CardBody
            padding="0"
            textAlign="center"
            bg="blackAlpha.400"
            color="white"
          >
            <img src={movie.Poster} alt={movie.Title} />
            <h4>{movie.Year}</h4>
          </CardBody>
          <CardFooter margin="0 auto" color="white" fontSize="20px">
            <h4>{movie.Type}</h4>
          </CardFooter>
        </Card>
      ) : (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <CircularProgress isIndeterminate color="green.300" />
        </Box>
      )}
    </Box>
  );
};

export default ApiMovie;
