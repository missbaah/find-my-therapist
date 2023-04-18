import React from "react";
import { NavBar, SearchBar } from "../components";
import "../assets/SearchPage.css";

const SearchPage = () => {
  return (
    <main>
      <NavBar />
      <section className="search-sec">
        <h3>Find a mental health personnel now!</h3>
        <SearchBar />
      </section>
      <section>
        <h4>Available Mental Health Personnels</h4>
      </section>
    </main>
  );
};

export default SearchPage;
