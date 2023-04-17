import React, { useState } from "react";
import "../../assets/ProfileDashBoard.css";
import Setup1 from "../Setup components/Setup1";
import Setup2 from "../Setup components/Setup2";
import Setup3 from "../Setup components/Setup3";
import Setup4 from "../Setup components/Setup4";

const EditProfile = ({ showEdit }) => {
  const [name, setName] = useState("Personal");

  const FormBody = () => {
    if (name === "Personal") {
      return <Setup1 />;
    } else if (name === "Work") {
      return <Setup2 />;
    } else if (name === "Location") {
      return <Setup3 />;
    } else if (name === "Social") {
      return <Setup4 />;
    }
  };
  const handleUpdateSection = (title) => {
    setName(title);
  };

  console.log(name);

  return (
    <main className={`${showEdit ? "show-edit" : ""} cover-blanket`}>
      <form>
        <h3>Update your profile</h3>
        <section className="edit-links">
          <p
            className="sec-title"
            onClick={() => handleUpdateSection("Personal")}
          >
            Personal Details
          </p>
          <p className="sec-title" onClick={() => handleUpdateSection("Work")}>
            Work Details
          </p>
          <p
            className="sec-title"
            onClick={() => handleUpdateSection("Location")}
          >
            Location
          </p>
          <p
            className="sec-title"
            onClick={() => handleUpdateSection("Social")}
          >
            Social Links
          </p>
        </section>
        <section>{FormBody()}</section>
        <button className="login">Update</button>
      </form>
    </main>
  );
};

export default EditProfile;
