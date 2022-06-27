import Image from "next/image";
import { useTransition, animated } from "react-spring";


const Links = () => {
  const transitions = useTransition(true, {
    from: { x: +1000 },
    enter: { x: 0 },
    leave: { x: -1000 },
    to: {x: -1000},
    reverse: false,
  })
  return transitions( (style, item) => item &&
    <animated.div className="container" style={style}>
      <div className="links-page">
        <div className="profile-img">
          <Image
            src="/profile.jpg"
            alt="profile"
            height={80}
            width={80}
            className="round"
          />
        </div>
        <strong>Abdulkarim Ogaji</strong>
        <strong>Full Stack Web & Android Developer</strong>
        <div className="links--hr">Development / Competitive</div>
        <div className="grid-center">
          <a
            className="links--a"
            href="https://github.com/AbdulkarimOgaji"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-github"></i>
            <span>Github</span>
          </a>
        </div>

        <div className="links--hr">Social / Connect</div>
        <div className="grid-center">
          <a className="links--a" href="mailto: abdulkarimogaji002@gmail.com">
            <i className="bi bi-envelope-fill"></i>
            <span>Email</span>
          </a>
          <a
            className="links--a"
            href="https://www.linkedin.com/in/abdulkarim-ogaji/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-linkedin"></i>
            <span>LinkedIn</span>
          </a>
          <a
            className="links--a"
            href="https://twitter.com/abdoolkareem_"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-twitter"></i>
            <span>Twitter</span>
          </a>
        </div>
      </div>
    </animated.div>
  );
};

export default Links;
