import bioData from "../assets/bio.json"

export const About = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <section className="ms-2 mt-5 mt-lg-3 mb-5">
      <h1 className="h2 fw-bold mb-5">About Me</h1>
      <p className="text-center pt-2 mb-3">
        <img
          src="/images/subpic.jpg"
          style={{ borderRadius: "100%" }}
          className="jombimg"
        />
      </p>
      <h5 className="text-center mb-5">ABDULKARIM OGAJI</h5>
      <p className="">
        Mature and stable personality, good interpersonal relations, good
        communication and coordination skills, good sense of responsibility,
        good team spirit, never afraid of difficulties, dare to meet challenges,
        for new things to accept the ability to be strong, life and work
        attitude positive, hope to improve their own continuous progress.
      </p>
      <section className="d-flex flex-wrap">
        {
            bioData.map((bio, i) => <div
            key={i}
            className={`${
              darkMode ? "myDark" : "border"
            } myBrad d-flex flex-column flex-lg-row align-items-center py-lg-4 py-2 shadow-lg myTileWidth p-lg-4 p-2 mb-3 me-3`}
          >
            <div className="me-3">
              <img src={bio.image} alt="" />
            </div>
            <div className="mb-3">
                {
                    bio.fields.map((field) => <>
                        <h5 className="fw-bold my-3 fs-6 fs-lg-5">{field.name}</h5>
              <p>{field.value}</p>
                    </>)
                }
              <a href={bio.link.url} className="text-primary" target="_blank" rel="noreferrer" >{bio.link.text}</a>
              
            </div>
          </div>)
        }
      </section>
    </section>
  );
};
