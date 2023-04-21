import "../assets/FAQS.css";
import open from "../images/open.png";
// import close from "../images/close.png";

const FAQs = () => {
  const qtns = document.querySelectorAll(".qtn-item");

  const handleClick = (e) => {
    const question = e.currentTarget.parentElement.parentElement;
    question.classList.toggle("show-text");
    const arrow = question.querySelector(".arrow");
    arrow.classList.toggle("show-text");
    const answer = question.querySelector(".answers");
    answer.classList.toggle("show-text");
    qtns.forEach((qtn) => {
      if (qtn !== question) {
        element.classList.remove("show-text");
      }
    });
  };

  return (
    <section className="qtns-container" id="faqs">
      <section className="qtns-title">
        <h2>Frequently asked Questions</h2>
        <p>We answered questions so you don't have to ask them. </p>
      </section>
      <section className="qtns">
        <div className="qtn-item">
          <section className="qtn">
            <h3>Is there a booking fee?</h3>
            <span className="arrow" onClick={handleClick}>
              <img src={open} alt="arrow" />
            </span>
          </section>

          <p className="answers">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type{" "}
          </p>
        </div>
        <div className="qtn-item">
          <section className="qtn">
            <h3>Is there a booking fee?</h3>
            <span className="arrow" onClick={handleClick}>
              <img src={open} alt="arrow" />
            </span>
          </section>
          <p className="answers">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type{" "}
          </p>
        </div>
        <div className="qtn-item">
          <section className="qtn">
            <h3>Is there a booking fee?</h3>
            <span className="arrow" onClick={handleClick}>
              <img src={open} alt="arrow" />
            </span>
          </section>
          <p className="answers">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type{" "}
          </p>
        </div>
        <div className="qtn-item">
          <section className="qtn">
            <h3>Is there a booking fee?</h3>
            <span className="arrow" onClick={handleClick}>
              <img src={open} alt="arrow" />
            </span>
          </section>
          <p className="answers">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type{" "}
          </p>
        </div>
        <div className="qtn-item">
          <section className="qtn">
            <h3>Is there a booking fee?</h3>
            <span className="arrow" onClick={handleClick}>
              <img src={open} alt="arrow" />
            </span>
          </section>
          <p className="answers">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type{" "}
          </p>
        </div>
      </section>
    </section>
  );
};

export default FAQs;
