import React from "react";
import "../../assets/ProfileDashBoard.css";

const EditProfile = ({ showEdit }) => {
  return <div className={showEdit ? "show-edit" : ""}>EditProfile</div>;
};

export default EditProfile;
