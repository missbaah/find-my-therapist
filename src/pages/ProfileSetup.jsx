import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../assets/ProfileSetup.css";
import ProfileSetupContext from "../context/ProfileSetupContext";
import { Setup1, Setup2, Setup3, Setup4, Setup5 } from "../components";

const ProfileSetup = () => {
  const [num, setNum] = useState(0);
  const [user, setUser] = useState([]);
  const { profilesetup } = useParams();
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState("");
  const [profile, setProfile] = useState({
    bio: "",
    profilePic: "",
    gender: "",
    workAddress: "",
    experience: "",
    specialties: "",
    interestGroup: "",
    officeHourStart: "",
    officeHoursClose: "",
    region: "",
    town: "",
    website: "",
    facebook: "",
    instagram: "",
    linkedin: "",
  });

  // getting users name to render the profile setup ui

  useEffect(() => {
    fetch(`https://find-therapist-api.onrender.com/auth/user/${profilesetup}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        console.log("API response:", data);
        setUser([...user, data]);
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  }, []);

  // onClick of the done btn, the submit form is triggered

  function handleSubmit(e) {
    e.preventDefault();

    fetch("https://find-therapist-api.onrender.com/api/v1/profile", {
      method: "POST",
      body: JSON.stringify(profile),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("API response:", data);
        // set data id to the id state
        setId(data.user[0]["_id"]);

        // if data.status is success , move to the sucess page
        if (data.status == "success") {
          setNum(num + 1);
        }
        // else move to the failed status
        else if (data.status == "failed") {
          setNum(num + 2);
        }
      })
      .catch((error) => {
        console.error("API error:", error);
      });
    console.log(JSON.stringify(profile));
  }

  // redirecting to the users dashboard
  const handleProfileCheckout = (e) => {
    e.preventDefault();
    window.location.href = `/${id}`;
  };

  // handling next button
  const handleNext = (e) => {
    e.preventDefault();
    setNum(num + 1);
  };

  // handling back button
  const handleBack = (e) => {
    e.preventDefault();
    setNum(num - 1);
  };

  // Setup title names
  const SetupTitle = [
    "Personal Details",
    "Work Details",
    "Location",
    "Social links",
  ];

  const SetupBody = () => {
    if (num == 0) {
      return <Setup1 />;
    } else if (num == 1) {
      return <Setup2 />;
    } else if (num == 2) {
      return <Setup3 />;
    } else if (num == 3) {
      return <Setup4 />;
    } else if (num == 4) {
      return <Setup5 />;
    }
  };

  const disabled = () => {
    if (num < 0) {
      return true;
    }
  };

  return (
    <main>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <ProfileSetupContext.Provider value={{ profile, setProfile }}>
            <nav className="profile-nav">
              <Link className="profile-logo" to="/">
                LOGO
              </Link>
              <div>
                <img src="" alt="" />
                <p className="name">{user[0].data.name}</p>
              </div>
            </nav>
            <section className="profile-body">
              <form
                className="setup-card"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
                action="https://find-therapist-api.onrender.com//api/v1/profile"
              >
                <div
                  className="heading-content"
                  style={{ display: num == 4 ? "none" : "block" }}
                >
                  <p className="step">Step {num + 1}</p>
                  <div className="progress">
                    <div
                      className="setup-progress"
                      style={{ background: num == 0 ? "#3d7d57" : "#3d7d57" }}
                    ></div>
                    <div
                      className="setup-progress"
                      style={{
                        background: num == 0 ? "#D9D9D9" : "#3d7d57",
                      }}
                    ></div>
                    <div
                      className="setup-progress"
                      style={{
                        background:
                          num == 0 || num == 1 ? "#D9D9D9" : "#3d7d57",
                      }}
                    ></div>
                    <div
                      className="setup-progress"
                      style={{
                        background:
                          num == 0 || num == 1 || num == 2
                            ? "#D9D9D9"
                            : "#3d7d57",
                      }}
                    ></div>
                  </div>
                  <h3>{SetupTitle[num]}</h3>
                </div>
                <section className="body">
                  {SetupBody()}
                  <div style={{ display: num == 4 ? "none" : "block" }}>
                    <button
                      style={{ display: num == 3 ? "none" : "block" }}
                      onClick={handleNext}
                      disabled={num > 4}
                      className="login"
                    >
                      Next
                    </button>
                    <button
                      style={{
                        display:
                          num == 0 || num == 1 || num == 2 ? "none" : "block",
                      }}
                      disabled={num > 4}
                      className="login"
                      type="submit"
                    >
                      Done
                    </button>
                    <button
                      style={{ display: num == 0 ? "none" : "block" }}
                      onClick={handleBack}
                      disabled={num < 1}
                      className="back-btn"
                    >
                      Back
                    </button>
                  </div>
                  <button
                    style={{
                      display:
                        num == 0 || num == 1 || num == 2 || num == 3
                          ? "none"
                          : "block",
                    }}
                    disabled={num < 1}
                    className="login"
                    onClick={handleProfileCheckout}
                  >
                    Check out profile
                  </button>
                </section>
              </form>
            </section>
          </ProfileSetupContext.Provider>
        </>
      )}
    </main>
  );
};

export default ProfileSetup;
