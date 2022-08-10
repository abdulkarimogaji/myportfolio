import ProjectImage from "./ProjectImage";

type Props = {
  data: {
    title: string;
    description: string;
    images: string[];
    links: {
      text: string;
      url: string;
    }[];
  };
};
const Project = ({ data }: Props) => {
  return (
    <>
      <div className="project--details">
        <h2>{data.title}</h2>
        <p className="content">{data.description}</p>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {data.links.map((link) => (
            <a
              className="btn pill projects--a"
              href={link.url}
              target="_blank"
              rel="noreferrer"
              key={link.text}
            >
              {" "}
              {link.text}
            </a>
          ))}
        </div>
      </div>
      {data.images.length && (
        <div className="flex flex-wrap gap-4 my-16 p-4 bg-gray-100 rounded-3xl justify-center">
          {data.images.map((src) => (
            <ProjectImage key={src} src={src} />
          ))}
        </div>
      )}
    </>
  );
};

export default Project;
