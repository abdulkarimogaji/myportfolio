import type { NextPage } from "next";
import Image from "next/image";
import Script from "next/script";
import { useTransition, animated } from "react-spring";

const Home: NextPage = () => {
  const transitions = useTransition(true, {
    from: { x: -1000 },
    enter: { x: 0 },
  });
  return transitions(
    (styles, item) =>
      item && (
        <>
          <Script id="analytics-script">
            {`// for links
              document.querySelectorAll("a").forEach((tag) => {
                tag.addEventListener("click", () => {
                  try {
                    fetch(
                      "https://abdulkarim-analytics.herokuapp.com/analytics",
                      {
                        headers: [["Content-Type", "application/json"]],
                        method: "POST",
                        body: JSON.stringify({
                          type: "[link clicked]",
                          source: "portfolio page",
                          description: "The link -"+  tag.href +"- was clicked",
                        }),
                      }
                    );
                  } catch (err) {
                    console.log(err);
                  }
                });
              })`}
          </Script>
          <animated.div className="container" style={styles}>
            <h1>Full-Stack Developer</h1>
            <p className="content">
              Hi, I am <strong>Abdulkarim Ogaji</strong>, an adaptable and
              passionate developer with quick learning capabilities. I&apos;m
              currently based in Lagos, Nigeria. Here are my{" "}
              <strong>
                <a className="links" href="#home-skills">
                  skills
                </a>{" "}
              </strong>
            </p>
            <p className="content">
              I am a self taught programmer. Through constant learning and
              practice, I produce aesthetic software to the highest standard. .
              Here&apos;s my{" "}
              <strong>
                <a className="links" download href="/CV_ABDULKARIMOGAJI.pdf">
                  resume
                </a>
              </strong>
              .
            </p>
            <div className="flex-wrap">
              <a
                className="btn round"
                href="https://github.com/AbdulkarimOgaji"
                target="_blank"
                rel="noreferrer"
                style={{ color: "hsl(0, 0%, 27%)" }}
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                className="btn round"
                href="https://twitter.com/abdoolkareem_"
                target="_blank"
                rel="noreferrer"
                style={{ color: "hsl(0, 0%, 27%)" }}
              >
                <i className="bi bi-twitter"></i>
              </a>
              <a
                className="btn round"
                href="https://www.linkedin.com/in/abdulkarim-ogaji/"
                target="_blank"
                rel="noreferrer"
                style={{ color: "hsl(0, 0%, 27%)" }}
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                className="btn pill projects--a"
                href="mailto: abdulkarimogaji002@gmail.com"
              >
                Email me
              </a>
            </div>
            <div className="hr">
              <Image src="/line.png" alt="hr" layout="fill" />
            </div>
            <section id="home-skills"></section>
            <div>
              <h3 style={{ textAlign: "center" }}>Skills</h3>
              <div className="skill-icon-container">
                <div className="pad">
                  <div className="skill-icon">
                    <Image
                      src="/react.png"
                      layout="fill"
                      className="icon-image"
                    />
                  </div>
                </div>
                <div className="pad">
                  <div className="skill-icon">
                    <Image src="/go.png" layout="fill" className="icon-image" />
                  </div>
                </div>
                <div className="pad">
                  <div className="skill-icon">
                    <Image
                      src="/nodejs.png"
                      layout="fill"
                      className="icon-image"
                    />
                  </div>
                </div>
                <div className="pad">
                  <div className="skill-icon">
                    <Image
                      src="/mongodb.png"
                      layout="fill"
                      className="icon-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </animated.div>
        </>
      )
  );
};

export default Home;
