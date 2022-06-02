import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="container">
      <h1>
        Web and Android Developer creating thoughtful, intuitive interfaces.
      </h1>
      <p className="content">
        Hi, I am Abdulkarim Ogaji, an adaptable and passionate developer with
        quick learning capabilities. I&apos;m currently based in Lagos, Nigeria.
      </p>
      <p className="content">
        I am a self taught programmer. Through constant learning and creation, I
        produce aesthetic software to the highest standard. I enjoy competing in
        hackathons and working on software projects. I also like to work on my
        problem solving skills on{" "}
        <a className="links" target="_blank" href="">
          Leetcode
        </a>{" "}
        and {" "}
        <a className="links" href="" target="_blank">
        
           Hackerrank
        </a>
        . Here&apos;s my{" "}
        <a className="links" download href="/CV_ABDULKARIMOGAJI.pdf">
          resume
        </a>
        .
      </p>
      <div className="flex-wrap">
        <a className="btn round">
          <i className="bi bi-github"></i>
        </a>
        <a className="btn round">
          <i className="bi bi-twitter"></i>
        </a>
        <a className="btn round">
          <i className="bi bi-linkedin"></i>
        </a>
        <a className="btn pill projects--a" href="mailto: abdulkarimogaji002@gmail.com">Email me</a>
      </div>
      <div className="hr">
        <Image src="/line.png" alt="hr" layout="fill" />
      </div>
      <div>
        <h3>Skills</h3>
        <div className="skill">
          <p className="skill--type">Languages</p>
          <p className="skill--content">Golang, Javascript/Typescript, Python</p>
        </div>
        <div className="skill">
          <p className="skill--type">Frameworks</p>
          <p className="skill--content">React.js, Gin, Node.js, React Native</p>
        </div>
        <div className="skill">
          <p className="skill--type">Development Tools & Tech</p>
          <p className="skill--content">mongoDB, Vercel, Heroku, git, npm</p>
        </div>
        <div className="skill">
          <p className="skill--type">Familiar With</p>
          <p className="skill--content">
            RPC, Block Chain, MySQL, Docker
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
