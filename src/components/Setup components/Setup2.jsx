import React, { useContext } from "react";
import ProfileSetupContext from "../../context/ProfileSetupContext";

const Setup2 = () => {
  const { profile, setProfile } = useContext(ProfileSetupContext);
  const handleOfficeHoursStart = (e) => {
    setProfile({ ...profile, officeHourStart: e.target.value });
  };
  const handleOfficeHoursClose = (e) => {
    setProfile({ ...profile, officeHoursClose: e.target.value });
  };
  const handleWorkAddress = (e) => {
    setProfile({ ...profile, workAddress: e.target.value });
  };
  const handleExperience = (e) => {
    setProfile({ ...profile, experience: e.target.value });
  };
  const handleSpecialties = (e) => {
    setProfile({ ...profile, specialties: e.target.value });
  };
  const handleInterestGroups = (e) => {
    setProfile({ ...profile, interestGroup: e.target.value });
  };

  return (
    <section className="setup2">
      <div className="item office-hrs">
        <label>Office Hours</label>
        <div>
          <input
            type="time"
            placeholder="8:00am"
            onChange={handleOfficeHoursStart}
          />
          <input
            type="time"
            placeholder="5:00am"
            onChange={handleOfficeHoursClose}
          />
        </div>
      </div>
      <div className="item address">
        <label>Work Address</label>
        <input
          type="text"
          placeholder="Amasamam, Staduim"
          onChange={handleWorkAddress}
        />
      </div>
      <div className="item address ">
        <label>Years of Experience</label>
        <input type="text" placeholder="eg. 1 year 3 months" />
      </div>
      <div className="item ">
        <label>Specialities</label>
        <select onChange={handleSpecialties}>
          <option value="0-1 years">Depression</option>
          <option value="0-1 years">CBT</option>
          <option value="0-1 years">DBT</option>
          <option value="0-1 years">5-10 years</option>
        </select>
      </div>
      <div className="item ">
        <label>Interest Group(s)</label>
        <select onChange={handleInterestGroups}>
          <option value="Everyone">Everyone</option>
          <option value="Women">Women</option>
          <option value="Men">Men</option>
          <option value="Children and Teens">Children and Teens</option>
          <option value="Couples">Couples</option>
          <option value="Queer People">Queer People</option>
        </select>
      </div>
    </section>
  );
};

export default Setup2;
