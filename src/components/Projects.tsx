import { Project } from "./Project"

type ProjectsProps = {
  json: {
    name: string;
    img: string;
    description: string;
    link: string;
    start_time: string
    end_time: string
    technologies: {
      name: string;
      img: string;
    }[];
  }[];
  darkMode: boolean;
};

export const Projects = ({ json, darkMode }: ProjectsProps) => {
  return (
    <section className="ms-2 mt-5 mt-lg-3">
      <h1 className="h2 fw-bold">My Projects</h1>
      <div className="after"></div>
      {
          json.map((data, i) => <Project projectData={data} darkMode={darkMode} key={i}/>)
      }
    </section>
  );
};
