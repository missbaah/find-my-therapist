import React, { useContext } from "react";
import { regions } from "../../data/regions";
import ProfileSetupContext from "../../context/ProfileSetupContext";

function Setup3() {
  const { profile, setProfile } = useContext(ProfileSetupContext);

  const handleRegion = (e) => {
    setProfile({ ...profile, region: e.target.value });
  };

  const handleTown = (e) => {
    setProfile({ ...profile, town: e.target.value });
  };

  const ListOfRegions = regions.map((region) => {
    return <option key={region.id}>{region.name}</option>;
  });
  return (
    <section className="setup3">
      <div className="item ">
        <label>Region</label>
        <select onChange={handleRegion}>
          <option id="label" value="option1" disabled hidden>
            Region
          </option>
          {ListOfRegions}
        </select>
      </div>
      <div className="item address">
        <label>Town</label>
        <input type="text" placeholder="Amasaman" onChange={handleTown} />
      </div>
    </section>
  );
}

export default Setup3;
