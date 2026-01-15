import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4
      bg-white dark:bg-gray-800 text-black dark:text-white shadow">
      <h1 className="text-xl font-bold">Pragati.dev</h1>
      <div className="flex gap-6 items-center">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
