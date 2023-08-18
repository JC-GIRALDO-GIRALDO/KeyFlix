import React, { Suspense, lazy } from "react";

import { Link, Route, Routes } from "react-router-dom";
import InputMovie from "../InputMovie";
import { Heading, CircularProgress, Box } from "@chakra-ui/react";

const HomePage = lazy(() => import("../../pages/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage"));
const TVSeriesPage = lazy(() => import("../../pages/TVSeriesPage"));
const ApiMovie = lazy(() => import("../ApiMovie"));

function Header() {
  return (
    <>
      <div className="header">
        <div>
          <Heading color={"red"} fontSize={"70px"}>
            KEYFLIX
          </Heading>
        </div>
        <div className="menuRoutes">
          <nav>
            <h2>
              <Link to="/">Home</Link>
            </h2>

            <h2>
              <Link to="/TVSeriesPage">TV Series</Link>
            </h2>

            <h2>
              <Link to="/MoviesPage">Movies</Link>
            </h2>
          </nav>
        </div>
        <div className="inputMovie">
          <InputMovie />
        </div>
      </div>
      <hr />

      <Suspense
        fallback={
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
          >
            <CircularProgress isIndeterminate color="green.300" />
          </Box>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/TvSeriesPage" element={<TVSeriesPage />} />
          <Route path="/MoviesPage" element={<MoviesPage />} />
          <Route path="/ApiMovie/:id/:title" element={<ApiMovie />} />
          <Route path="*" element={<h2>404 - page not found</h2>} />
        </Routes>
      </Suspense>
    </>
  );
}

export default Header;
