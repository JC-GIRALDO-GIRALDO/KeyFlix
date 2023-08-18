import { FaSearch } from "../../node_modules/react-icons/fa";

function InputMovie() {
  return (
    <>
      <form action="">
        <input type="text" placeholder="Buscar..." />
        <button>
          <FaSearch />
        </button>
      </form>
    </>
  );
}

export default InputMovie;
