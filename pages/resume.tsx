import { useMemo } from "react";
import { useTransition, animated } from "react-spring";

const Resume = ({ previousPath, currentPath }: any) => {
  const currPath = useMemo(() => currentPath, []);
  const from =
    previousPath === "/" || previousPath === "/projects"
      ? { x: 1000 }
      : { x: -1000 };
  const transitions = useTransition(currPath == previousPath, {
    from,
    enter: { x: 0 },
  });
  return transitions(
    (style, item) =>
      item && (
        <animated.div className="container" style={style}>
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
                <button className="links">+2348166629550</button>
                <a
                  href="mailto: abdulkarimogaji002@gmail.com"
                  className="links"
                >
                  Email
                </a>
                <a
                  href="https://www.linkedin.com/in/abdulkarim-ogaji/"
                  target="_blank"
                  rel="noreferrer"
                  className="links"
                >
                  LinkedIn
                </a>
                <a
                  className="links"
                  href="https://github.com/AbdulkarimOgaji"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a className="links">Abdulkarim</a>
                <a className="links">Ogaji</a>
              </div>
            </div>
            <h3 style={{ marginTop: "4rem" }}>Work Experience</h3>
            <div>
              <h4>
                React Developer Intern at MEVSUITES | 3rd May - 5th June (2022)
                |{" "}
                <a className="link2" href="">
                  Certificate
                </a>
              </h4>
              <ul>
                <li>
                  Added a new feature to the main application that allow the
                  users to send bulk messages to international numbers
                </li>
                <li>
                  Worked in a team as part of the React front end developers
                </li>
              </ul>
              <h3>Technical Skills</h3>
              <ul>
                <li>Languages: Golang, JavaScript/Typescript</li>
                <li>Frameworks: React, Nestjs, Gin</li>
                <li>
                  Familiar With: React Native, React Query, Redux toolkit (+
                  RTKQ), Nextjs
                </li>
              </ul>
              <h3>Projects</h3>
              <h4>Blognado - Full Stack MERN Application</h4>
              <ul>
                <li>
                  A full-stack blogging application where users can read, write,
                  like, and share knowledge on various subjects built with react
                  + nestjs + MongoDB
                </li>

                <li>
                  Techs Used : Next js, Nest js, React Query, Tailwind css,
                  MongoDB, Vercel, Heroku.
                </li>
              </ul>
              <h4>Sunflower | 27th February - 20th Apr (2022)</h4>
              <ul>
                <li>
                  A decentralised platform for secure and transparent charity
                  donations Sunflower allows people to choose the best charities
                  to donate fund based on their purpose and mission.
                </li>

                <li>
                  Techs Used : Vue.js, Solidity, web3.js, Metamask API, Tailwind
                  css
                </li>
              </ul>
              <h4>AutoMart | 10th May - 20th May (2022)</h4>
              <ul>
                <li>
                  A MERN applicaion which is an online marketplace for
                  automobiles, with Auto Mart users posting their cars for sale.
                  (React + MongoDB + Express)
                </li>

                <li>
                  Techs Used : MongoDB, Express, React, Redux, Nodejs, Heroku
                </li>
              </ul>
              <h4>BlogNado-signup | 29th July - 30th July (2022)</h4>
              <ul>
                <li>
                  A progressive signup form for my blogging application
                  (BLOGNADO)
                </li>

                <li>Techs Used : React, Redux</li>
              </ul>
              <h3>Certifications</h3>
              <h4>
                Responsive Web Design|{" "}
                <a
                  className="link2"
                  target="_blank"
                  rel="noreferrer"
                  href="https://freecodecamp.org/certification/AbdulkarimOgaji/responsive-web-design"
                >
                  Certificate
                </a>
              </h4>
              <li>Free Code Camp</li>
              <h4>
                Javascript Structures and Algorithms|{" "}
                <a
                  className="link2"
                  target="_blank"
                  rel="noreferrer"
                  href="https://freecodecamp.org/certification/AbdulkarimOgaji/javascript-algorithms-and-data-structures"
                >
                  Certificate
                </a>
              </h4>
              <li>Free Code Camp</li>
              <h4>
                Frontend Developement Libraries{" "}
                <a
                  className="link2"
                  target="_blank"
                  rel="noreferrer"
                  href="https://freecodecamp.org/certification/AbdulkarimOgaji/front-end-development-libraries"
                >
                  Certificate
                </a>
              </h4>
              <li>Free Code Camp</li>
              <h3>Open Source Contributions</h3>
              <h4>
                Coding Resources API |{" "}
                <a
                  href="https://github.com/the-api-administration/coding-resources-api"
                  className="link2"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Github
                </a>{" "}
                |{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://coding-resources-api.herokuapp.com/ "
                  className="link2"
                >
                  Live Demo
                </a>
              </h4>
            </div>
          </div>
        </animated.div>
      )
  );
};

export default Resume;
