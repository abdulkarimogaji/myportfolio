import Project from "../components/Project";
import projects from "../assets/projects.json";
import small_projects from "../assets/small_projects.json";
import Image from "next/image";
import Card from "../components/Card";
const Projects = () => {
  return (
    <div className="container">
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
      <br /><br />
      <h2>Other Projects</h2>
      <p className="content">
        During my learning and practicing phase, I have taken on some small
        projects. Some of which have been inspired from other people, some of
        which were not.
      </p>

      <section className="cards-section">
      {
        small_projects.map((proj) => (
          <Card data={proj} key={proj.title} />
        )) 
      }
      </section>
    </div>
  );
};

export default Projects;
