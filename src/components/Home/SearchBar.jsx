import "../../assets/SearchBar.css";
import searchicon from "../../images/search.png";
import line from "../../images/Line 1.png";
import { regions } from "../../data/regions";
import { useState } from "react";
import { SearchRounded } from "@mui/icons-material";

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

  const handleSearchClick = (e) => {
    e.preventDefault();
    window.location.href = "./search";
  };

  return (
    <section>
      <form className="form">
        <SearchRounded fontSize="large" id="search" />
        <label className="item1">
          <input type="text" placeholder="Search by name or specialty" />
        </label>
        <img src={line} alt="line" />

        <label className="item2">
          <select
            name="Region"
            id="region"
            placeholder="Region"
            defaultValue="option1"
            onChange={handleRegionChange}
          >
            <option id="label" value="option1" disabled hidden>
              Region
            </option>
            {ListOfRegions}
          </select>
        </label>
        <img src={line} alt="line" />
        <label className="item3">
          <select name="Town" id="town" defaultValue="option2">
            <option id="label" value="option2" disabled hidden>
              Town
            </option>
            {ListOfTowns}
          </select>
        </label>
        <button onClick={handleSearchClick}>Search</button>
      </form>
    </section>
  );
};

export default SearchBar;
