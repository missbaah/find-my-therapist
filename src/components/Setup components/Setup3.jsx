import React from "react";
import { regions } from "../../data/regions";

function Setup3() {
  const ListOfRegions = regions.map((region) => {
    return <option key={region.id}>{region.name}</option>;
  });
  return (
    <section className="setup3">
      <div className="item ">
        <label>Region</label>
        <select>
          <option id="label" value="option1" disabled hidden>
            Region
          </option>
          {ListOfRegions}
        </select>
      </div>
      <div className="item address">
        <label>Town</label>
        <input type="text" placeholder="Amasaman" />
      </div>
    </section>
  );
}

export default Setup3;
