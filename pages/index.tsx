import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="home">
      <h1 className="big-header">
        Web and Android Developer creating thoughtful, intuitive interfaces.
      </h1>
      <p className="content">
        Hi, I am Neel Bavarva, a pre-final year electronics and communications
        engineering undergraduate pursuing my bachelor&apos;s degree from NIT
        Surat, India.
      </p>
      <p className="content">
        I am a self taught programmer. Through constant learning and creation, I
        produce aesthetic software to the highest standard. I enjoy competing in
        hackathons and working on software projects. I also like to work on my
        problem solving skills on <a className="links">Leetcode</a> and CodeChef. Here&apos;s my resume.
      </p>
      <div>
        <a className="btn round"><i className="bi bi-github"></i></a>
        <a className="btn round"><i className="bi bi-twitter"></i></a>
        <a className="btn round"><i className="bi bi-linkedin"></i></a>
        <a className="btn pill">Email me</a>
      </div>
      <div className="hr">
        <Image src="/line.png" alt="hr" layout="fill" />
      </div>
      <div>
        <h3>Skills</h3>
        <div className="skill">
          <p className="skill--type">Languages</p>
          <p className="skill--content">Golang, Javascript, Python</p>
        </div>
        <div className="skill">
          <p className="skill--type">Frameworks</p>
          <p className="skill--content">React.js, Gin, Node.js, React Native</p>
        </div>
        <div className="skill">
          <p className="skill--type">Development Tools & Tech</p>
          <p className="skill--content">mongoDB, Vercel, Linux, git, npm</p>
        </div>
        <div className="skill">
          <p className="skill--type">Familiar With</p>
          <p className="skill--content">DBMS, Computer Networks, MySQL, Docker</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
