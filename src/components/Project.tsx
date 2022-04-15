type ProjectProps = {
  projectData: {
    name: string;
    img: string;
    description: string;
    link: string;
    technologies: {
      name: string;
      img: string;
    }[];
  };
  darkMode: boolean;
};

export const Project = ({ projectData, darkMode }: ProjectProps) => {
  return (
    <div
      className={`${
        darkMode ? "myDark" : "myAlternate-light"
      } mt-5 p-5 rounded-3`}
    >
      <h5 className="text-center mb-4">{projectData.name}</h5>
      <p className="text-center">
        <img src={projectData.img} alt="" style={{width:"4rem"}} />
      </p>
      <br />
      <small className="">{projectData.description}</small>
      <div className="d-flex justify-content-between mt-5">
        <p>Technologies Used: </p>
        <div className="d-flex flex-wrap">
          {projectData.technologies.map((t) => (
            <span className="myBrad py-2 px-3 border me-2 mb-2">
              {t.name}
              <img src={t.img} alt="" style={{ width: "1rem", marginLeft:"7px" }} />
            </span>
          ))}
        </div>
      </div>
      <p className="text-end mt-3 me-3">
        <a
          href={projectData.link}
          className={darkMode ? "myAlternate" : "text-dark"}
        >
          <i className="bi bi-github fs-4"></i>
        </a>
      </p>
    </div>
  );
};
