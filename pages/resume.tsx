const Resume = () => {
  return (
    <div className="container">
      <div className="box">
        <div className="end">
          <a
            href="/CV_ABDULKARIMOGAJI.pdf"
            className="btn btn-download"
            download
          >
            Download pdf
          </a>
        </div>

        <div className="center">
          <h2 style={{ marginBottom: "1.4rem" }}>Abdulkarim Ogaji</h2>
          <div className="flex-wrap" style={{ justifyContent: "center" }}>
            <a className="links">+2348166629550</a>
            <a className="links">Email</a>
            <a className="links">LinkedIn</a>
            <a className="links">Github</a>
            <a className="links">Abdulkarim</a>
            <a className="links">Ogaji</a>
          </div>
        </div>
        <h3 style={{ marginTop: "4rem" }}>Work Experience</h3>
        <div>
          <h4>
            React Developer Intern at MEVSUITES | 3rd May - 5th June (2022) |{" "}
            <a className="link2" href="">
              Certificate
            </a>
          </h4>
          <ul>
            <li>
              Added a new feature to the main application that allow the users
              to send bulk messages to international numbers
            </li>
            <li>Worked in a team as part of the React front end developers</li>
          </ul>
          <h3>Technical Skills</h3>
          <ul>
            <li>Languages: Golang, JavaScript/Typescript, Python</li>
            <li>
              Frameworks: React.js, React Native, Next.js, Node.js, Express.js,
              Gin
            </li>
            <li>Familiar With: DBMS, Computer Networks, MySQL, Docker</li>
          </ul>
          <h3>Projects</h3>
          <h4>Sunflower | 27th February - 20th Apr (2022)</h4>
          <ul>
            <li>
              A decentralised platform for secure and transparent charity
              donations Sunflower allows people to choose the best charities to
              donate fund based on their purpose and mission.
            </li>

            <li>Techs Used : Vue.js, Solidity, web3.js, Metamask API, Tailwind css</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
