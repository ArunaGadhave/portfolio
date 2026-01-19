const Experience = () => {
  return (
    <section
      className="px-4 sm:px-8 md:px-16 py-10
      bg-gray-100 dark:bg-gray-900
      text-black dark:text-white"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center sm:text-left">
        Experience
      </h2>

      <div className="space-y-8">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold">
          Software Developer – CodeRed Software’s Pvt Ltd
          </h3>
          <p className="text-sm italic mb-2">May 2024 – Present</p>
          <ul className="list-disc ml-5 text-sm sm:text-base space-y-1">
            <li>Developed applications using PHP, CodeIgniter & MySQL</li>
            <li>Frontend + backend development</li>
            <li>REST APIs, MVC, Git</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold">
            Java Developer Intern – Soft the Next
          </h3>
          <ul className="list-disc ml-5 text-sm sm:text-base space-y-1">
            <li>Restaurant Management System</li>
            <li>Orders, billing & inventory modules</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
