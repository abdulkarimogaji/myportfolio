import { Tiles } from "./Tiles";

type BodyContentProps = {
  json: {
    tiles: { title: string; content: string; icon: string }[];
    subcontent1: string;
    subcontent2: string;
  };
  darkMode: boolean;
  pageContent: { pageName: string; subHeader: string };
};

export const BodyContent = ({
  pageContent,
  json,
  darkMode,
}: BodyContentProps) => {
  return (
    <section className="ms-2 mt-5 mt-lg-3">
      <h1 className="h2 fw-bold">{pageContent.pageName}</h1>
      <div className="after rounded-3 mb-5"></div>
      {json.subcontent1 ? (
        <p className="text-center">
          <img
            src="/images/mainpic.jpg"
            style={{ width: "30rem", borderRadius: "100%" }}
          />
        </p>
      ) : (
        ""
      )}
      <p>{json.subcontent1}</p>
      <br />
      <p>{json.subcontent2}</p>
      <h3 className="fw-bold my-4">{pageContent.subHeader}</h3>
      <Tiles darkMode={darkMode} tileJson={json} />
    </section>
  );
};
