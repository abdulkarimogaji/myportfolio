import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  return (
    <header>
      <div className="progress"></div>
      <nav>
        <Image src="/favicon.ico" width="20px" height="20px" alt="logo" />
        <ul>
          <li>
            <Link href="/" className={router.pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className={router.pathname == "/projects" ? "active" : ""}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/links"
              className={router.pathname == "/links" ? "active" : ""}
            >
              Links
            </Link>
          </li>
          <li>
            <Link
              href="/resume"
              className={router.pathname == "/resume" ? "active" : ""}
            >
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
