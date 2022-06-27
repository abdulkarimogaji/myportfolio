import Project from "../components/Project";
import projects from "../assets/projects.json";
import small_projects from "../assets/small_projects.json";
import open_source from "../assets/open_source.json";
import Image from "next/image";
import Card from "../components/Card";
import { useTransition, animated } from "react-spring";

const Projects = ({ previousPath, currentPath}: any) => {
  const from = previousPath === "/" ? {x: 1000} : {x:-1000}
  const transitions = useTransition(true, {
    from,
    enter: { x: 0 },
    reverse: true,
  })
  return transitions( (style, item) => item && 
    <animated.div className="container" style={style}>
      <h1>Projects</h1>
      <p className="content">
        I enjoy competing in hackathons and working on software projects.
        I&apos;m largely framework agnostic but technologies I love right now
        are Next.js, React.js, React Native, Gin and Node. Here are some of my
        personal projects and the projects I made during hackathons.
      </p>
      <div className="hr">
        <Image src="/line.png" alt="hr" layout="fill" />
      </div>

      {projects.map((proj) => (
        <Project data={proj} key={proj.title} />
      ))}
      <br />
      <br />
      <h2>Other Projects</h2>
      <p className="content">
        During my learning and practicing phase, I have taken on some small
        projects. Some of which have been inspired from other people, some of
        which were not.
      </p>

      <section className="cards-section">
        {small_projects.map((proj) => (
          <Card data={proj} key={proj.title} />
        ))}
      </section>
      <br />
      <br />
      <h2>Open Source Contributions</h2>
      <ul>
        {open_source.map((proj) => (
          <li key={proj.title}>
            <h4>
              {proj.title} | <a href={proj.github}>Github</a>
            </h4>
            <p className="content">{proj.description}</p>
          </li>
        ))}
      </ul>
    </animated.div>
  );
};

export default Projects;
