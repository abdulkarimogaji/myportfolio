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
      } myBrad d-flex align-items-center py-4 shadow-lg myTileWidth p-4 mb-3`}
    >
      <div className="me-3">
        {" "}
        <img src={tileData.icon} alt={tileData.title} />
      </div>
      <div className="mb-3">
        <h5 className="fw-bold my-3">{tileData.title}</h5>
        <small>{tileData.content}</small>
      </div>
    </div>
  );
};
