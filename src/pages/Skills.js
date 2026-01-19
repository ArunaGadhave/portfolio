const Skills = () => {
  const skills = [
    {
      title: "Frontend",
      items: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS","BootSrap","JQuery","Ajax"]
    },
    {
      title: "Backend",
      items: ["PHP", "CodeIgniter", "Java"]
    },
    {
      title: "Database & Tools",
      items: ["SQL","MySQL", "Git", "GitHub", "VS Code", "Codelobster","Ecllipce"]
    }
  ];

  return (
    <section
      id="skills"
      className="px-4 sm:px-8 md:px-16 py-10
      bg-white dark:bg-gray-800
      text-black dark:text-white"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center sm:text-left">
        Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((group, index) => (
          <div
            key={index}
            className="p-6 bg-gray-100 dark:bg-gray-900 rounded shadow"
          >
            <h3 className="font-semibold text-lg mb-4">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.items.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm rounded-full
                  bg-blue-100 text-blue-700
                  dark:bg-blue-900 dark:text-blue-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
