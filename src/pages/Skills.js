const Skills = () => {
  return (
    <section
      className="px-4 sm:px-8 md:px-16 py-10
      bg-white dark:bg-gray-800
      text-black dark:text-white"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center sm:text-left">
        Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-semibold">Frontend</h3>
          <p className="text-sm sm:text-base">
            React, JavaScript, HTML5, CSS3, Tailwind CSS
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Backend</h3>
          <p className="text-sm sm:text-base">
            PHP, CodeIgniter, Java
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Database & Tools</h3>
          <p className="text-sm sm:text-base">
            MySQL, Git, GitHub, VS Code, Linux
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
