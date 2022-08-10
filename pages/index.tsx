import type { NextPage } from "next";
import Image from "next/image";
import Script from "next/script";
import { useTransition, animated } from "react-spring";
import SkillCube from "../components/SkillCube";

const Home: NextPage = () => {
  const transitions = useTransition(true, {
    from: { x: -1000 },
    enter: { x: 0 },
  });
  return transitions(
    (styles, item) =>
      item && (
        <>
          <animated.div className="container relative" style={styles}>
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
            <SkillCube />

            <div className="hr">
              <Image src="/line.png" alt="hr" layout="fill" />
            </div>
            <section id="home-skills">
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
              <ul className="flex flex-col gap-8">
                <li>
                  <strong>Languages</strong>: JavaScript/Typescript, Golang
                </li>
                <li>
                  <strong>Frameworks</strong>: React, Nextjs, Express, Nestjs,
                  Gin
                </li>
                <li>
                  <strong>Familiar With</strong>: React Native, React Query,
                  Redux toolkit (+ RTKQ), React Story Book, Docker
                </li>
              </ul>
            </section>
          </animated.div>
        </>
      )
  );
};

export default Home;
