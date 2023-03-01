import "../assets/SearchBar.css";
import searchicon from "../images/search.png";
import line from "../images/Line 1.png";

const SearchBar = () => {
  return (
    <section>
      <form className="form">
        <label className="item1">
          <img src={searchicon} alt="search-icon" id="search" />
          <input type="text" placeholder="Search by name or specialty" />
        </label>
        <img src={line} alt="line" />
        <label className="item2">
          Region
          <select name="Region" id="">
            <option value=""></option>
          </select>
        </label>
        <img src={line} alt="line" />
        <label className="item3">
          {" "}
          Town
          <select name="" id="">
            <option value=""></option>
          </select>
        </label>
        <button>Search</button>
      </form>
    </section>
  );
};

export default SearchBar;
