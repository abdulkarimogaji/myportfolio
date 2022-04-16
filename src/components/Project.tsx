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
      } mt-lg-5 mt-2 p-lg-5 p-2 rounded-3`}
    >
      <p className="text-center mb-lg-4 mt-2 mb-2 fs-lg-3 fs-6 fw-bold">{projectData.name}</p>
      <p className="text-center">
        <img src={projectData.img} alt="" style={{width:"3rem"}} />
      </p>
      <small className="">{projectData.description}</small>
      <div className="mt-lg-5 mt-3">
        <div className="d-flex flex-wrap">
          {projectData.technologies.map((t) => (
            <div className="myBrad d-flex py-lg-2 px-lg-3 border me-lg-2 mb-2 py-1 px-2 me-1">
              <small>{t.name}</small>
              <img src={t.img} className="d-none d-lg-block" style={{ width: "1rem", marginLeft:"7px" }} />
            </div>
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
