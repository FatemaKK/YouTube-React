import React from "react";
import "./About.css";

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <div className="members">
          <section>
            <h3 className="name">Bryant</h3>
            <p className="whiteSpace">
              I'm a Full-Stack Web Developer.{" "}
              <img
                src="https://media-exp1.licdn.com/dms/image/C4D03AQGiiLa1GQ5xcQ/profile-displayphoto-shrink_800_800/0/1623965278407?e=1645056000&v=beta&t=BrxA2Jcai58gD-s9YFjYBXeqwTvV5lhbOYtjGY8Ms80"
                id="profile"
              />
              <a href={"https://github.com/BryantMercedes212"}>
                Follow me on GitHub
              </a>
              <br />
              <a href={"https://www.linkedin.com/in/bryant-mercedes/"}>
                Connect or Contact
              </a>
            </p>
          </section>
          <section>
            <h3 className="name">Fatema</h3>
            <p className="whiteSpace">
              Hi, I am Fatema, a Pursuit Fellow aiming to become a Full-Stack
              Web Developer.{" "}
              <img
                src="https://media-exp1.licdn.com/dms/image/C5603AQG88_xficbXdQ/profile-displayphoto-shrink_800_800/0/1628529788969?e=1645056000&v=beta&t=NwctHirdThJhxTClu3hw9iEPgLLi4zZxl64f6sDEzvo"
                id="profile"
              />
              <a href={"https://github.com/FatemaKK"}>Breaking and Learning</a>
              <br />
              <a href={"https://www.linkedin.com/in/fatema-kabir/"}>
                Connect or Contact
              </a>
            </p>
          </section>
          <section>
            <h3 className="name">Josh</h3>
            <p className="whiteSpace">
              Hi & welcome! My name is Joshua Ewuoso, but you can call me Josh.
              New to the tech field, I began my journey into Pursuit to grow
              into a Full-Stack Web Engineer.{" "}
              <img
                src="https://media-exp1.licdn.com/dms/image/C4D03AQG4kFdUF6ajTA/profile-displayphoto-shrink_800_800/0/1629825109715?e=1645056000&v=beta&t=TRfsM0J1woPxReuRpvBHgXwgCPMVUUc1Hi9J5ziq3wk"
                id="profile"
              />{" "}
              <a href={"https://github.com/JoshuaEwuoso"}>
                Follow me on GitHub
              </a>
              <br />
              <a href={"https://www.linkedin.com/in/joshua-ewuoso/"}>
                Connect or Contact
              </a>
            </p>
          </section>
          <section>
            <h3 className="name">Sev</h3>
            <p className="whiteSpace">
              I'm a Full-Stack Web Developer.{" "}
              <img
                src="https://media-exp1.licdn.com/dms/image/C4E03AQH2guVYVTMw1Q/profile-displayphoto-shrink_800_800/0/1628525482241?e=1645056000&v=beta&t=mR9WrmWsbhBLLGED0fn00xm8eAovylyBThb3P4zTKlo"
                id="profile"
              />
              <a href={"https://github.com/saraperkaj"}>Follow me on GitHub</a>
              <br />
              <a href={"https://www.linkedin.com/in/saraperkaj/"}>
                Connect or Contact
              </a>
            </p>
          </section>
        </div>
        <section className="project">
        <h3>Project Description</h3>
          <p className="description">
            This Project lets you search for YouTube videos using the YouTube
            API, then choose a video from a list to watch. In this project we
            use Trello Board to track the ToDo lists for this website like
            functionality, styling, and fetch. Furthermore, while we were
            working on this project we encountered several roadblocks. For
            example, we learned that some API's like Youtube have limited fetch
            quotas of 10,000 units.
          </p>
        </section>
        <section className="repo">
          <h4>
            Source Code :{" "}
            <a
              className="repo-link"
              href="https://github.com/BryantMercedes212/YouTube-React"
            >
              GitHub
            </a>
          </h4>
        </section>
      </div>
    );
  }
}

export default About;
