const Resume = () => {
  return (
    <div className="container">
      <div className="box">
        <div className="end">
          <a href="/CV_ABDULKARIMOGAJI.pdf" className="btn btn-download" download>
            Download pdf
          </a>
        </div>

        <div className="center">
          <h2 style={{ marginBottom: "1.4rem" }}>Abdulkarim Ogaji</h2>
          <div className="flex-wrap">
            <a className="links">+2348166629550</a>
            <a className="links">Email</a>
            <a className="links">LinkedIn</a>
            <a className="links">Github</a>
            <a className="links">Abdulkarim</a>
            <a className="links">Ogaji</a>
          </div>
        </div>
        <h3 style={{ marginTop: "4rem" }}>Work Experience</h3>
        <div>
          <h4>
            React Native Developer Intern at UIPRO | 3rd May - 5th August (2021)
            | Certificate
          </h4>
          <ul>
            <li>
              Made an Android application of an e-commerce app from scratch
              using React Native, an e-commerce application which also allows
              users to customize their product.
            </li>
            <li>
              Worked on a CRM application (A retailer and customer side
              application which allows users to directly interact with retailers
              for the service of the product), implemented and deployed to
              production.
            </li>
          </ul>
          <h3>Technical Skills</h3>
          <ul>
            <li>Languages: Java, JavaScript</li>
            <li>
              Frameworks: React.js, React Native, Next.js, Node.js, Express.js,
              Spring Boot
            </li>
            <li>
              Frameworks: React.js, React Native, Next.js, Node.js, Express.js,
              Spring Boot
            </li>
            <li>Familiar With: DBMS, Computer Networks, MySQL, Docker</li>
          </ul>
          <h3>Projects</h3>
          <h4>
            Finance Tracker | Hackathon at inOut7.0 | 27th Nov - 22nd Dec (2020)
          </h4>
          <ul>
            <li>
              An Android app that allows users to scan their bills and have all
              of their purchases added to their daily expenses.
            </li>

            <li>
              Techs Used : React Native, Node.js, mongoDB, Flask, Heroku,
              Tensorflow, Cloudinary, Google Cloud Vision API
            </li>
            <li>Project Links : GitHub | Playstore</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
