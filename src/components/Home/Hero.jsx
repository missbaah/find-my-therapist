import "../../assets/Hero.css";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <section className="hero-container">
      <section className="hero-info">
        <div>
          <h1>Empowering your mind, transforming your life.</h1>
          <p>Your mental health matters, let's work on it together.</p>
        </div>
        <SearchBar />
      </section>
    </section>
  );
};

export default Hero;
