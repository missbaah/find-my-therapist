import "../assets/SearchBar.css";
import searchicon from "../images/search.png";
import line from "../images/Line 1.png";
import { regions } from "../data/regions";

const SearchBar = () => {
  const ListOfRegions = regions.map((region, id) => {
    return <option key={region.id}>{region.name}</option>;
  });

  const ListOfTowns = () => {
    if (re) {
    }
  };
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
          <select name="Region" id="" placeholder="Region">
            {ListOfRegions}
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
