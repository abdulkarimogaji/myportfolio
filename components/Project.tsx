import Image from "next/image";

type Props = {
  data: {
    title: string;
    description: string;
    img_url: string;
    links: {
      text: string;
      url: string;
    }[];
  };
};
const Project = ({ data }: Props) => {
  return (
    <>
      <div className="projects--image">
        <Image
          src="/automart.png"
          alt="automart"
          layout="fill"
          className="contain"
        />
      </div>
      <div className="project--details">
        <h2>{data.title}</h2>
        <p className="content">{data.description}</p>
        <div>
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
    </>
  );
};

export default Project;
