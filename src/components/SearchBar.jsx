import "../assets/SearchBar.css";
import searchicon from "../images/search.png";
import line from "../images/Line 1.png";
import { useEffect, useState } from "react";

const SearchBar = () => {
  const [regions, setRegions] = useState("");

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "e650f41705mshd9e7d891659ceb1p10a2ebjsn6f7bb0c7d83c",
        "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
      },
    };

    fetch(
      "https://wft-geo-db.p.rapidapi.com/v1/geo/countries/GH/regions?limit=10",
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }, []);

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
