import { Tile } from "./Tile";

type TilesProps = {
  tileJson: {
    title: string;
    content: string;
    icon: string;
  }[];
};
export const Tiles = ({ tileJson }: TilesProps) => {
  return (
    <section className="container p-3 d-flex justify-content-between flex-wrap">
      {tileJson.map((tileData, i) => (
        <Tile key={i} tileData={tileData} />
      ))}
    </section>
  );
};
