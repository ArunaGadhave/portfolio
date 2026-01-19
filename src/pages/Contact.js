import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-32 py-12 bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center sm:text-left">
        Get in Touch
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info Card */}
        <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg space-y-5">
          <h3 className="text-xl font-semibold mb-4">Contact Info</h3>

          <div className="flex items-center space-x-3 hover:text-blue-500 transition cursor-pointer">
            <FaEnvelope className="text-blue-600 dark:text-blue-400" />
            <a href="mailto:pragatigadhave26@gmail.com" className="underline">
              pragatigadhave26@gmail.com
            </a>
          </div>

          <div className="flex items-center space-x-3 hover:text-green-500 transition cursor-pointer">
            <FaPhone className="text-green-600 dark:text-green-400" />
            <a href="tel:+919356043959" className="underline">
              +91 9356043959
            </a>
          </div>

          <div className="flex items-center space-x-3 hover:text-blue-700 transition cursor-pointer">
            <FaLinkedin className="text-blue-700 dark:text-blue-500" />
            <a
              href="https://www.linkedin.com/in/pragati-gadhave-111a1122a"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              pragati-gadhave-111a1122a
            </a>
          </div>

          <div className="flex items-center space-x-3 hover:text-gray-700 dark:hover:text-gray-300 transition cursor-pointer">
            <FaGithub className="text-gray-800 dark:text-gray-200" />
            <a
              href="https://github.com/pragatigadhave"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              pragatigadhave
            </a>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
