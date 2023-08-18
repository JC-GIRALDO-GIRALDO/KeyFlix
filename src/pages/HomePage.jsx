import ApiMovies from "../components/ApiMovies";

function HomePage() {
  return (
    <>
      <h2>Lista de Peliculas</h2>
      <div>
        <ApiMovies movie="naruto" />
        <ApiMovies movie="rambo" />
        <ApiMovies movie="avenger" />
      </div>
    </>
  );
}
export default HomePage;
