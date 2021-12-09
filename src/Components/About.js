import React from "react";
import "./About.css";

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <div className="members">
          <section>
            <h5>Bryant</h5>
            <p>I'm a Full-Stack Web Developer</p>
          </section>
          <section>
            <h5>Fatema</h5>
            <p>
              I'm a Pursuit Fellow aiming to become a Full-Stack Web Developer
            </p>
          </section>
          <section>
            <h5>Josh</h5>
            <p>I'm a developing Full-Stack Web Developer</p>
          </section>
          <section>
            <h5>Sev</h5>
            <p>I'm a Full-Stack Web Developer</p>
          </section>
        </div>
        <section className="description">
          <h4>Project Description</h4>
          <p>
            This Project lets you search for YouTube videos using the YouTube
            API, then choose a video from a list to watch. In this project we
            use Trello Board to track the ToDo lists for this website like
            functionality, styling, and etch. Furthermore, while we were working
            on this project we encountered several roadblocks. For example, we
            learned that some API's like Youtube have limited fetch quotas of
            10,000 units.
          </p>
        </section>
        <section className="repo">
          <p>
            Source Code :{" "}
            <a href="https://github.com/BryantMercedes212/YouTube-React">
              GitHub
            </a>
          </p>
        </section>
      </div>
    );
  }
}

export default About;
