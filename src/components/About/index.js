import React from "react";
import profileImage from "../../assets/large/Profile/Profile_Pic.png";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
          Hey there! I'm a Junior Full Stack Web Developer passionate about building dynamic and user-friendly web applications. As a motivated newcomer to the world of web development, I'm excited to contribute my skills and grow within this dynamic field.
          </p>
          </div>
      </div>
    </section>
  );
}

export default About;
