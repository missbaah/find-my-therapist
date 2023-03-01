import "../assets/Hero.css";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <section className="hero-container">
      <div>
        <h1>Empowering your mind, transforming your life.</h1>
        <p>Your mental health matters, let's work on it together.</p>
      </div>
      <SearchBar />
    </section>
  );
};

export default Hero;
