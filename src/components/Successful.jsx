import "../assets/Forms.css";

const Successful = () => {
  return (
    <section className="success-container">
      <div className="congrats">
        {" "}
        <span>🎉</span>{" "}
      </div>
      <div className="success-info">
        <h4>Registration Successful</h4>
        <p>Now let's setup your profile</p>
      </div>
      <button className="login">Set up profile</button>
    </section>
  );
};

export default Successful;
