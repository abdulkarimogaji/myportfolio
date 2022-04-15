import { Tile } from "./Tile";

type TilesProps = {
  tileJson: {
    tiles: { title: string; content: string; icon: string }[];
    subcontent1: string;
    subcontent2: string;
    
  };
  darkMode: boolean;
};
export const Tiles = ({ tileJson, darkMode }: TilesProps) => {
  return (
    <section className="container p-3 d-flex justify-content-between flex-wrap">
      {tileJson.tiles.map((tileData, i) => (
        <Tile key={i} tileData={tileData} darkMode={darkMode} />
      ))}
    </section>
  );
};
