import "../assets/SearchBar.css";
import searchicon from "../images/search.png";
import line from "../images/Line 1.png";
import { regions } from "../data/regions";
import { useState } from "react";

const SearchBar = () => {
  const ListOfRegions = regions.map((region) => {
    return <option key={region.id}>{region.name}</option>;
  });

  const [towns, setTowns] = useState([]);

  const handleRegionChange = (event) => {
    const selectedRegion = regions.find(
      (region) => region.name === event.target.value
    );
    if (selectedRegion) {
      setTowns(selectedRegion.cities);
    } else {
      setTowns([]);
    }
  };

  const ListOfTowns = towns.map((town) => {
    return <option key={town}>{town}</option>;
  });

  return (
    <section>
      <form className="form">
        <label className="item1">
          <img src={searchicon} alt="search-icon" id="search" />
          <input type="text" placeholder="Search by name or specialty" />
        </label>
        <img src={line} alt="line" />

        <label className="item2">
          <select
            name="Region"
            id="region"
            placeholder="Region"
            onChange={handleRegionChange}
          >
            <option id="label" value="" disabled selected hidden>
              Region
            </option>
            {ListOfRegions}
          </select>
        </label>

        <img src={line} alt="line" />
        <label className="item3">
          <select name="" id="">
            <option id="label" value="" disabled selected hidden>
              Town
            </option>
            {ListOfTowns}
          </select>
        </label>
        <button>Search</button>
      </form>
    </section>
  );
};

export default SearchBar;
