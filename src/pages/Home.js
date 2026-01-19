import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center
      px-4 text-center
      bg-gray-100 dark:bg-gray-900
      text-black dark:text-white"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        Pragati Gadhave
      </h1>

      <p className="text-base sm:text-lg md:text-xl mb-6 max-w-xl">
      Software Developer | Full Stack Developer 
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        {/* Go to Projects page */}
        <Link
  to="/projects"
  className="px-6 py-3 bg-blue-600 text-white rounded text-sm sm:text-base hover:bg-blue-700 transition"
>
  View Projects
</Link>

{/*<a
  href="/resume.pdf"
  download
  className="px-6 py-3 border border-gray-600 rounded text-sm sm:text-base hover:bg-gray-200 dark:hover:bg-gray-700 transition"
>
  Download Resume
</a>*/}

      </div>
      
    </section>
  );
};

export default Home;
