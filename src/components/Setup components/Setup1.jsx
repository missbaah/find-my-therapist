import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import ProfileSetupContext from "../../context/ProfileSetupContext";

const Setup1 = () => {
  const { profile, setProfile } = useContext(ProfileSetupContext);

  const handleProfilePhoto = (e) => {
    setProfile({ ...profile, profilePic: e.target.value });
  };
  const handleBio = (e) => {
    setProfile({ ...profile, bio: e.target.value });
  };
  const handleGender = (e) => {
    setProfile({ ...profile, gender: e.target.value });
  };

  return (
    <div className="setup1">
      <section>
        <p className="profile-title">Upload profile photo</p>
        <div className="upload">
          <label className="photo">
            <input type="file" required onInput={handleProfilePhoto} />
            <FontAwesomeIcon icon={faUser} size="2xl" />
          </label>
          <aside>
            <p className="header">Choose a file</p>
            <p>File should be less than 2mb</p>
          </aside>
        </div>
      </section>
      <div className="item 1">
        <label>Bio</label>
        <input type="text" className="bio" onChange={handleBio} />
      </div>
      <div className="item 2">
        <label>Gender</label>
        <select required onChange={handleGender}>
          <option value="">Prefer not to say</option>
          <option value="">Female</option>
          <option value="">Male</option>
          <option value="">Non Binary</option>
          <option value="">Intersex</option>
        </select>
      </div>
    </div>
  );
};

export default Setup1;
