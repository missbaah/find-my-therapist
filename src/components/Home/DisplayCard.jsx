import profilepic from "../../images/profilepic.png";
import previous from "../../images/Previous.png";
import next from "../../images/Next.png";

import "../../assets/Professionals.css";

const DisplayCard = () => {
  const profiles = [
    {
      id: 1,
      name: "Beebs",
    },
    {
      id: 2,
      name: "Beebs",
    },
    {
      id: 3,
      name: "Beebs",
    },
    {
      id: 4,
      name: "Beebs",
    },
  ];

  const ListofProfiles = profiles.map((profile) => {
    return (
      <div key={profile.id} className="card">
        {/* <img src={profilepic} /> */}
        <p>{profile.name}</p>
      </div>
    );
  });

  return (
    <section>
      <div className="control-btns">
        <button className="find-more-btn">Find more</button>
        <div className="controls">
          <button>
            <img src={previous} alt="previous" />
          </button>
          <button>
            <img src={next} alt="next" />
          </button>
        </div>
      </div>
      <div className="cards">{ListofProfiles}</div>
    </section>
  );
};

export default DisplayCard;
