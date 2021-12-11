import React from "react";
import "./About.css";

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <div className="members">
          <section>
            <h3 className="Bryant">Bryant</h3>
            <p className="whiteSpace">I'm a Full-Stack Web Developer</p>
          </section>
          <section>
            <h3 className="Fatema">Fatema</h3>
            <p className="whiteSpace">
              Hi, I am Fatema, a Pursuit Fellow aiming to become a Full-Stack Web Developer.
            </p>
          </section>
          <section>
            <h3 className="Josh">Josh</h3>
            <p className="whiteSpace">Hi & welcome! My name is Joshua Ewuoso, but you can call me Josh. New to the tech field, I began my journey into Pursuit to grow into a Full-Stack Web Engineer.</p>
          </section>
          <section>
            <h3 className="Sev">Sev</h3>
            <p className="whiteSpace">I'm a Full-Stack Web Developer</p>
          </section>
        </div>
        <section className="project">
          <h3>Project Description</h3>
          <p className="description">
            This Project lets you search for YouTube videos using the YouTube
            API, then choose a video from a list to watch. In this project we
            use Trello Board to track the ToDo lists for this website like
            functionality, styling, and fetch. Furthermore, while we were working
            on this project we encountered several roadblocks. For example, we
            learned that some API's like Youtube have limited fetch quotas of
            10,000 units.
          </p>
        </section>
        <section className="repo">
          <h4>
            Source Code :{" "}
            <a className="repo-link" href="https://github.com/BryantMercedes212/YouTube-React">
              GitHub
            </a>
          </h4>

        </section>
      </div>
    );
  }
}

export default About;
