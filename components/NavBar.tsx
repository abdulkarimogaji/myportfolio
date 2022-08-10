import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Resume",
    path: "/resume",
  },
  {
    title: "Links",
    path: "/links",
  },
];

const NavBar = () => {
  const router = useRouter();
  return (
    <header>
      <div className="progress"></div>
      <nav className="navbar duration-500">
        <Image src="/favicon.ico" width="20px" height="20px" alt="logo" />
        <ul>
          {navLinks.map((link) => (
            <li key={link.title}>
              <Link href={link.path} passHref>
                <a className={router.pathname === link.path ? "active" : ""}>
                  {link.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
