import Project from "../components/Project";
import projects from "../assets/projects.json"
import Image from "next/image";
const Projects = () => {
  return (
    <div className="container">
      <h1>Projects</h1>
      <p className="content">
        I enjoy competing in hackathons and working on software projects.
        I&apos;m largely framework agnostic but technologies I love right now
        are Next.js, React Native and Node. Here are some of my personal
        projects and the projects I made during hackathons.
      </p>
      <div className="hr">
      <Image src="/line.png" alt="hr" layout="fill"/>
      </div>
      
      {
        projects.map(proj => <Project data={proj} key={proj.title} />)
      }
    </div>
  );
};

export default Projects;
