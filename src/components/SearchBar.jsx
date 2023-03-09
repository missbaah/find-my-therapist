import "../assets/SearchBar.css";
import searchicon from "../images/search.png";
import line from "../images/Line 1.png";
import { regions } from "../data/regions";

const SearchBar = () => {
  const ListOfRegions = regions.map((region) => {
    return <option key={region.id}>{region.name}</option>;
  });

  // const region = document.querySelector("#region");
  // const regionValue = region.options[region.selectedIndex];
  // const regionText = regionValue.text;
  // console.log(region, regionValue, regionText);

  // var town = regions.filter((region) => {
  //   if (region.name === regionText) {
  //     return [region];
  //   }
  // });

  // console.log(town);

  // const ListOfTowns = town.cities.map((city) => {
  //   return <option key={region.id}>{city}</option>;
  // });

  // console.log(ListOfTowns);

  return (
    <section>
      <form className="form">
        <label className="item1">
          <img src={searchicon} alt="search-icon" id="search" />
          <input type="text" placeholder="Search by name or specialty" />
        </label>
        <img src={line} alt="line" />

        <label className="item2">
          <select name="Region" id="region" placeholder="Region">
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
            {/* {ListOfTowns} */}
          </select>
        </label>
        <button>Search</button>
      </form>
    </section>
  );
};

export default SearchBar;
