type TileProp = {
  tileData: {
    title: string;
    content: string;
    icon: string;
  };
  darkMode: boolean;
};

export const Tile = ({ tileData, darkMode }: TileProp) => {
  return (
    <div
      className={`${
        darkMode ? "myDark" : "border"
      } myBrad d-flex flex-column flex-lg-row align-items-center py-lg-4 py-2 shadow-lg myTileWidth p-lg-4 p-2 mb-3`}
    >
      <div className="me-3">
        {" "}
        <img src={tileData.icon} alt={tileData.title} />
      </div>
      <div className="mb-3">
        <h5 className="fw-bold my-3 fs-6 fs-lg-5">{tileData.title}</h5>
        <small>{tileData.content}</small>
      </div>
    </div>
  );
};
