import { Tiles } from "./Tiles";
import skills from "../assets/skills.json";


export const Skills = ({
  darkMode,
}: { darkMode: boolean}) => {
  return (
    <section className="ms-2 mt-5 mt-lg-3">
      <h1 className="h2 fw-bold mb-5">My Skills</h1>

      {
        skills.map((skill, i) => <div key={i}>
          <h3 className="fw-bold my-lg-4 my-2 fs-lg-3 fs-5">{skill.name}</h3>
          <Tiles darkMode={darkMode} tileJson={skill.list} />
        </div>)
      }
    </section>
  );
};
