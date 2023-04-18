import React from "react";
import { NavBarDark, SearchBarDark, SearchCard } from "../components";
import "../assets/SearchPage.css";

const SearchPage = () => {
  return (
    <main>
      <NavBarDark />
      <section className="search-body">
        <div className="search-flex">
          <section className="search-sec">
            <h3>Find a mental health personnel now!</h3>
            <SearchBarDark />
            <div className="line"></div>
          </section>
          <section className="search-results">
            <h4>Available Mental Health Personnels</h4>
            <section className="cards-display">
              <SearchCard />
            </section>
          </section>
        </div>
      </section>
    </main>
  );
};

export default SearchPage;
