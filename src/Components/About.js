import React from "react";

class About extends React.Component {
  render() {
    return (
      <div>
        <div>
          <section>
            <h1>About Josh</h1>
            <p>I'm a developing Full-Stack Web Developer</p>
          </section>
          <section>
            <h1>About Fatema</h1>
            <p>I'm a Pursuit Full-Stack Development Fellow</p>
          </section>
          <section>
            <a href="https://github.com/BryantMercedes212/YouTube-React">
              GitHub
            </a>
          </section>
        </div>
        <section>
          <h2>Project Description</h2>
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
      </div>
    );
  }
}

export default About;
