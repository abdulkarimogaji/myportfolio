import Image from "next/image";

const Links = () => {
  return (
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
      <strong>Neel Bavarva</strong>
      <strong>Full Stack Web & Android Developer</strong>
      <div className="links--hr">Development / Competitive</div>
      <div className="grid-center">
        <a className="links--a">
          <i className="bi bi-github"></i>
          <span>Github</span>
        </a>
        <a className="links--a">
          <i className="bi bi-github"></i>
          <span>Github</span>
        </a>
        <a className="links--a">
          <i className="bi bi-github"></i>
          <span>Github</span>
        </a>
        <a className="links--a">
          <i className="bi bi-github"></i>
          <span>Github</span>
        </a>
      </div>

      <div className="links--hr">Development / Competitive</div>
      <div className="grid-center">
        <a className="links--a">
          <i className="bi bi-github"></i>
          <span>Github</span>
        </a>
        <a className="links--a">
          <i className="bi bi-github"></i>
          <span>Github</span>
        </a>
        <a className="links--a">
          <i className="bi bi-github"></i>
          <span>Github</span>
        </a>
        <a className="links--a">
          <i className="bi bi-github"></i>
          <span>Github</span>
        </a>
      </div>
    </div>
  );
};

export default Links;
