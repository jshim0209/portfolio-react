import { useScrollPosition } from "../../hooks/useScrollPosition";

const { useState } = require("react");
const { Link } = require("react-router-dom");

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const NavbarDesktop = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollPosition = useScrollPosition();

  return (
    <div
      className={classNames(
        scrollPosition > 100 ? "shadow" : "shadow-none",
        `sticky top-0 bg-white z-50 w-full xmd:px-5 sm:px-0 `
      )}
    >
      <header
        className={`flex max-w-[62rem] px-5 sm:px-3 h-16 mx-auto justify-between items-center __className_f6433a `}
      >
        <Link to="/">
          <h1 className="font-bold cursor-pointer rounded-md __className_f6433a">
            JIWON SHIM
          </h1>
        </Link>
        <nav>
          <ul
            id="primary-navigation"
            className={`flex justify-center items-center gap-5 text-sm`}
          >
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li className="px-2 py-1 cursor-pointer rounded-md hover:bg-gray-200 transition-all duration-300">
              Contact
            </li>
            <li>Resume</li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavbarDesktop;
