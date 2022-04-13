type TileProp = {
  tileData: {
    title: string;
    content: string;
    icon: string;
  };
};

export const Tile = ({ tileData }: TileProp) => {
  return (
    <div className="myBrad myDark d-flex py-4 align-items-center shadow-lg myTileWidth p-4 mb-3">
      <i className={tileData.icon + " fs-1 myAlternate me-4"}></i>
      <div className="mb-3">
        <h5 className="fw-bold my-3">{tileData.title}</h5>
        <small>{tileData.content}</small>
      </div>
    </div>
  );
};
