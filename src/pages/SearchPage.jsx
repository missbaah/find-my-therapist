import React from "react";
import { NavBarDark, SearchBarDark } from "../components";
import "../assets/SearchPage.css";

const SearchPage = () => {
  return (
    <main>
      <NavBarDark />
      <section className="search-body">
        <div>
          <section className="search-sec">
            <h3>Find a mental health personnel now!</h3>
            <SearchBarDark />
          </section>
          <section className="search-results">
            <h4>Available Mental Health Personnels</h4>
            <div className="cards-display"></div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default SearchPage;
