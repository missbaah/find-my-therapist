import "../assets/Professionals.css";
import { DisplayCard } from "../components";

const Professionals = () => {
  return (
    <section className="container">
      <section className="prof-container">
        <div className="top-section">
          <h1>Discover Ghana's best MHPs</h1>
          <p>
            We have the best MHPs available for a variety of mental health
            issues
          </p>
        </div>

        <DisplayCard />
      </section>
    </section>
  );
};

export default Professionals;
