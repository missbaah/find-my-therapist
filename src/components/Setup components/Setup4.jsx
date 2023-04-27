import React, { useContext } from "react";
import ProfileSetupContext from "../../context/ProfileSetupContext";

const Setup4 = () => {
  const { profile, setProfile } = useContext(ProfileSetupContext);

  const handleWebsite = (e) => {
    setProfile({ ...profile, website: e.target.value });
  };
  const handleFacebook = (e) => {
    setProfile({ ...profile, facebook: e.target.value });
  };
  const handleInstagram = (e) => {
    setProfile({ ...profile, instagram: e.target.value });
  };
  const handleLinkedIn = (e) => {
    setProfile({ ...profile, linkedin: e.target.value });
  };

  return (
    <section className="setup4">
      <div className="item address ">
        <label>Website</label>
        <input
          type="text"
          placeholder="https://www.yourwebsite.com"
          onChange={handleWebsite}
        />
      </div>
      <div className="item address">
        <label>Facebook</label>
        <input
          type="text"
          placeholder="https://web.facebook.com/username/"
          onChange={handleFacebook}
        />
      </div>
      <div className="item address">
        <label>Instagram</label>
        <input
          type="text"
          placeholder="https://www.instagram.com/username/"
          onChange={handleInstagram}
        />
      </div>
      <div className="item address">
        <label>LinkedIn</label>
        <input
          type="text"
          placeholder="https://www.linkedin.com/username/"
          onChange={handleLinkedIn}
        />
      </div>
    </section>
  );
};

export default Setup4;
