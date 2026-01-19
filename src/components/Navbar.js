import { useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Active link style
  const activeClass =
    "text-blue-600 dark:text-blue-400 font-semibold border-b-2 border-blue-600";

  const normalClass =
    "hover:text-blue-600 transition";

  return (
    <nav className="bg-white dark:bg-gray-800 text-black dark:text-white shadow fixed w-full z-50">
      <div className="flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <h1 className="text-xl font-bold">Pragati.dev</h1>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6 items-center">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? activeClass : normalClass
            }
          >
            Home
          </NavLink>

          <NavLink to="/about" className={({ isActive }) =>
            isActive ? activeClass : normalClass
          }>
            About
          </NavLink>

          <NavLink to="/education" className={({ isActive }) =>
            isActive ? activeClass : normalClass
          }>
            Education
          </NavLink>

          <NavLink to="/skills" className={({ isActive }) =>
            isActive ? activeClass : normalClass
          }>
            Skills
          </NavLink>

          <NavLink to="/experience" className={({ isActive }) =>
            isActive ? activeClass : normalClass
          }>
            Experience
          </NavLink>

          <NavLink to="/projects" className={({ isActive }) =>
            isActive ? activeClass : normalClass
          }>
            Projects
          </NavLink>

          <NavLink to="/contact" className={({ isActive }) =>
            isActive ? activeClass : normalClass
          }>
            Contact
          </NavLink>

          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white dark:bg-gray-800 px-6 pb-4">
          <div className="flex flex-col gap-4">
            {[
              { to: "/", label: "Home", end: true },
              { to: "/about", label: "About" },
              { to: "/education", label: "Education" },
              { to: "/skills", label: "Skills" },
              { to: "/experience", label: "Experience" },
              { to: "/projects", label: "Projects" },
              { to: "/contact", label: "Contact" },
            ].map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive ? activeClass : normalClass
                }
              >
                {item.label}
              </NavLink>
            ))}

            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
