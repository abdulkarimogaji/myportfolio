const Card = ({ data }: { data: { title: string; github: string } }) => {
  return (
    <a className="card" href={data.github} target="_blank" rel="noreferrer">
      <strong>{data.title}</strong>
      <div className="card--icons">
        <i className="bi bi-arrow-right-short"></i>
        <i className="bi bi-arrow-right-short"></i>
      </div>
    </a>
  );
};

export default Card;
