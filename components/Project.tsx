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

      <div className="project--details">
        <h2>{data.title}</h2>
        <p className="content">{data.description}</p>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
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
      {
        data.img_url && <div className="projects--image">
          <Image src={data.img_url} layout="fill" alt={data.title} />
        </div>
      }
    </>
  );
};

export default Project;
