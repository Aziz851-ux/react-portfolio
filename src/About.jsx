import aboutPic from "./assets/user.jpg";
function About() {
  return (
    <>
      <div id="about" className="about-section">
        <div className="pic">
          <img src={aboutPic} alt="" />
        </div>

        <div className="about-text">
          <div className="about-header-text">
            <h1>About Me</h1>
            <p>About Me from the Words of the People</p>
            <p>
              the last website that you have designed for me was really amazing
              and so great and fully Responsive with much more functionalities,
              thank you so much for doing that, my message for others is to
              choose you for we development and the other services that you have
              mentioned bellow, because you develope websites on less cost. take
              care dear and just continue your way.
            </p>
          </div>

          <div className="about-text-options">
            <p className="active">Skills</p>
            <p>Experience</p>
            <p>Education</p>
          </div>

          <div className="skills-text">
            <div className="p1">
              <p>
                <span>UI/UX</span> <br />
                Designing Web/App interface
              </p>
            </div>

            <div className="p2">
              <p>
                <span>Web Development</span> <br />
                Web App Development
              </p>
            </div>

            <div className="p3">
              <p>
                <span>App Development</span> <br />
                Building Android/IOS Apps
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
