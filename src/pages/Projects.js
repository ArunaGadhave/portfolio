const Projects = () => {
  return (
    <section
      id="projects"
      className="px-4 sm:px-8 md:px-16 py-10
      bg-gray-100 dark:bg-gray-900
      text-black dark:text-white"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center sm:text-left">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            title: "Personal Portfolio Website",
            tech: "React, Tailwind CSS",
            desc: "Animated dark mode, responsive UI, deployed on Vercel",
          },
          {
            title: "Property Solution Web App",
            tech: "PHP, CodeIgniter, MySQL",
            desc: "Property listings, admin panel, MVC architecture",
          },
          {
            title: "Lokpratinidhi Mantrimandal App",
            tech: "PHP, CodeIgniter",
            desc: "Role-based login, admin panel",
          },
          {
            title: "Virtual Tourist Guide",
            tech: "Java, Android",
            desc: "Tourist info, search & images",
          },
        ].map((p, i) => (
          <div
            key={i}
            className="p-6 bg-white dark:bg-gray-800 rounded shadow"
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-1">
              {p.title}
            </h3>
            <p className="text-sm italic mb-2">{p.tech}</p>
            <p className="text-sm sm:text-base">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
