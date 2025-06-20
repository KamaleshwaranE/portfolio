import React, { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import {
  FaNodeJs,
  FaReact,
  FaDocker,
  FaGithub,
  FaAws,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import { SiMongodb, SiMysql, SiTypescript, SiGmail } from "react-icons/si";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main
      className={`relative min-h-screen p-6 transition-all duration-500 ${
        darkMode ? "text-white" : "text-white"
      }`}
      style={{
        backgroundImage: darkMode
          ? "url('/assets/bg-dark-tech.jpg')" // 📌 use actual public folder path
          : "url('/assets/bg-light-tech.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Overlay to improve text readability */}
      <div
        className={`absolute inset-0 z-0 ${
          darkMode ? "bg-black bg-opacity-60" : "bg-black bg-opacity-[0.01]"
        } backdrop-blur-sm`}
      ></div>

      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Theme Toggle */}
        <div className="max-w-5xl mx-auto flex justify-end mb-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        {/* Header */}
        <section className="max-w-5xl mx-auto text-center">
          <motion.h1
            className="text-5xl font-bold mb-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Kamaleshwaran Elayaraja
          </motion.h1>
          <motion.p
            className="text-xl text-purple-700 dark:text-purple-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Backend Developer | MERN Stack | TypeScript | Docker
          </motion.p>
          <p className="text-md mt-1 text-gray-600 dark:text-gray-300">
            2.5+ Years of Experience | Open to Remote/On-Site Roles
          </p>
          <motion.div
            className="flex justify-center gap-6 mt-6 text-3xl text-pink-600 dark:text-pink-300 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <FaNodeJs /> <FaReact /> <SiMongodb /> <SiMysql /> <SiTypescript />{" "}
            <FaDocker /> <FaAws /> <FaGithub />
          </motion.div>
        </section>

        {/* Separator */}
        <div className="w-full h-12 bg-gradient-to-r from-purple-300 via-indigo-300 to-pink-300 my-16 rounded-full opacity-50"></div>

        {/* About Section */}
        <section className="max-w-5xl mx-auto">
          <motion.h2
            className="text-3xl font-semibold mb-4 text-indigo-700 dark:text-indigo-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-gray-700 dark:text-gray-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Passionate backend developer with strong experience in building
            scalable server-side applications using Node.js, Express.js,
            MongoDB, and MySQL. Skilled in RESTful API design, authentication
            (JWT, bcrypt), and integration with frontend frameworks like React.
            Proficient in TypeScript and containerization using Docker.
          </motion.p>
          <motion.p
            className="mt-2 text-gray-700 dark:text-gray-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Currently advancing DevOps skills (CI/CD, AWS, Docker Compose) and
            planning to transition into game development using Unity or React
            Native.
          </motion.p>
        </section>

        {/* Separator */}
        <div className="w-full h-12 bg-gradient-to-r from-purple-300 via-indigo-300 to-pink-300 my-16 rounded-full opacity-50"></div>

        {/* Projects Section */}
        <section className="max-w-5xl mx-auto">
          <motion.h2
            className="text-3xl font-semibold mb-4 text-indigo-700 dark:text-indigo-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div whileHover={{ scale: 1.03 }}>
              <Card
                className={`${
                  darkMode ? "bg-gray-800" : "bg-white"
                } shadow-lg hover:shadow-xl transition-shadow`}
              >
                <CardContent className="p-4 mt-1">
                  <h3 className="text-xl font-bold mb-2 text-purple-800 dark:text-purple-300">
                    MERN Stack CRUD App
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    MongoDB, Express, React, Node.js
                  </p>
                  <p className="mt-2 text-sm text-gray-800 dark:text-gray-200">
                    Created a CRUD web app with protected APIs and JWT-based
                    authentication.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }}>
              <Card
                className={`${
                  darkMode ? "bg-gray-800" : "bg-white"
                } shadow-lg hover:shadow-xl transition-shadow`}
              >
                <CardContent className="p-4 mt-1">
                  <h3 className="text-xl font-bold mb-2 text-purple-800 dark:text-purple-300">
                    Dockerized REST API
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Node.js, Express, MongoDB, Docker
                  </p>
                  <p className="mt-2 text-sm text-gray-800 dark:text-gray-200">
                    Built a REST API using Docker Compose with volumes and
                    environment-based config.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Separator */}
        <div className="w-full h-12 bg-gradient-to-r from-purple-300 via-indigo-300 to-pink-300 my-16 rounded-full opacity-50"></div>

        {/* Contact Section */}
        <section className="max-w-5xl mx-auto">
          <motion.h2
            className="text-3xl font-semibold mb-4 text-indigo-700 dark:text-indigo-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Contact
          </motion.h2>
          <div className="space-y-1 text-pink-600 dark:text-pink-300">
            <p className="flex space-x-2">
              <FaPhoneAlt className="mt-1" />{" "}
              <span className="text-gray-800 dark:text-pink-300">
                +91-8300702695
              </span>
            </p>
            <p className="flex space-x-2">
              <SiGmail className="mt-1" />{" "}
              <span className="text-gray-800 dark:text-pink-300">
                kamaleshwaran893@gmail.com
              </span>
            </p>
            <p className="flex space-x-2">
              <FaLinkedinIn className="mt-1" />{" "}
              <a
                href="https://www.linkedin.com/in/kamaleshwaran893"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                LinkedIn Profile
              </a>
            </p>
            <p className="flex space-x-2">
              <FaGithub className="mt-1 " />{" "}
              <a
                href="https://github.com/KamaleshwaranE"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                GitHub Portfolio
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
