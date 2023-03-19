import "../assets/CrisisBanner.css";

const CrisisBanner = () => {
  return (
    <section className="crisis-banner">
      <div className="crisis-box">
        <div className="crisis-text">
          <h2>Suicide Crisis</h2>
          <p>
            According to the World Health Organization (WHO), suicide is the
            17th leading cause of death globally and the second leading cause of
            death among individuals aged 15-29 years.
          </p>
        </div>
        <button>Find a therapist now</button>
      </div>
    </section>
  );
};

export default CrisisBanner;
