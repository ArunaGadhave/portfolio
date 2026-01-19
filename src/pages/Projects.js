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
            points: [
              "Developed a fully responsive personal portfolio website using React and Tailwind CSS.",
              "Implemented dark/light mode with smooth UI animations and reusable components.",
              "Structured sections for About, Skills, Experience, Projects, and Contact.",
              "Optimized performance with mobile-first design principles.",
              "Deployed the application on Vercel for live access and updates."
            ],
            gitlive: "https://github.com/ArunaGadhave/portfolio",
            live: "https://portfolio-iota-sepia-ntm52jccg8.vercel.app",
          },
          {
            title: "Property Solution Web App",
            tech: "PHP, CodeIgniter, MySQL",
            points: [
              "Built a dynamic property solution web application using MVC architecture.",
              "Implemented property listings with full CRUD functionality.",
              "Developed admin panel for managing properties and users.",
              "Integrated MySQL database for secure data storage.",
              "Focused on scalability and clean backend logic."
            ],
          },
          {
            title: "Lokpratinidhi Mantrimandal App",
            tech: "PHP, CodeIgniter",
            points: [
              "Developed a role-based web application with secure authentication.",
              "Implemented admin panel for managing Lokpratinidhi and Mantrimandal data.",
              "Handled session management and access control.",
              "Designed structured backend logic using CodeIgniter.",
              "Improved administrative workflow efficiency."
            ],
            live: "https://lokpratinidhi.co.in",
          },
          {
            title: "Import Export Website",
            tech: "HTML, CSS, Bootstrap, JavaScript, jQuery, CodeIgniter",
            points: [
              "Designed and developed a responsive import-export business website.",
              "Created user-friendly UI using HTML, CSS, and Bootstrap.",
              "Added interactivity using JavaScript and jQuery.",
              "Used CodeIgniter framework for backend structure.",
              "Enhanced online visibility for business users."
            ],
          live:"https://exportwingssenterprises.com",
          },
        ].map((p, i) => (
          <div
            key={i}
            className="p-6 bg-white dark:bg-gray-800 rounded shadow"
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-1">
              {p.title}
            </h3>

            <p className="text-sm italic mb-3">{p.tech}</p>

            <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
              {p.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>

            {/* Links */}
            <div className="flex gap-4 mt-4 flex-wrap">
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  🔗 Live Demo
                </a>
              )}

              {p.gitlive && (
                <a
                  href={p.gitlive}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 text-sm border border-blue-600 text-blue-600 rounded hover:bg-blue-50 dark:hover:bg-gray-700"
                >
                  💻 GitHub Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
