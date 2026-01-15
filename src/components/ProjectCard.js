const ProjectCard = ({ title, desc }) => {
  return (
    <div className="border p-6 rounded-lg shadow
      bg-white dark:bg-gray-800 text-black dark:text-white">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default ProjectCard;
