import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <ProjectCard
          title="Personal Portfolio Website"
          desc="React + Tailwind portfolio with animated dark mode."
        />
        <ProjectCard
          title="Property Solution Web App"
          desc="PHP + CodeIgniter based property management system."
        />
      </div>
    </div>
  );
};

export default Projects;
