const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh]
      text-center text-black dark:text-white">
      <h1 className="text-5xl font-bold mb-4">
        Hi, I'm Pragati Gadhave
      </h1>
      <p className="text-xl mb-6">
       Software Developer / Full Stack Developer
      </p>
      <a
        href="/projects"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg"
      >
        View Projects
      </a>
    </div>
  );
};

export default Home;
