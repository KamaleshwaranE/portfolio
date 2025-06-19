import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FaNodeJs, FaReact, FaDocker, FaGithub } from "react-icons/fa";
import { SiMongodb, SiMysql, SiTypescript, SiAmazonaws } from "react-icons/si";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <section className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-2">Kamaleshwaran Elayaraja</h1>
        <p className="text-xl text-gray-600">
          Backend Developer | MERN Stack | TypeScript | Docker
        </p>
        <p className="text-md mt-1 text-gray-500">
          2.5+ Years of Experience | Open to Remote/On-Site Roles
        </p>
        <div className="flex justify-center gap-6 mt-4 text-3xl text-gray-700">
          <FaNodeJs /> <FaReact /> <SiMongodb /> <SiMysql /> <SiTypescript />{" "}
          <FaDocker /> <SiAmazonaws /> <FaGithub />
        </div>
      </section>

      <section className="mt-12 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700">
          Passionate backend developer with strong experience in building
          scalable server-side applications using Node.js, Express.js, MongoDB,
          and MySQL. Skilled in RESTful API design, authentication (JWT,
          bcrypt), and integration with frontend frameworks like React.
          Proficient in TypeScript and containerization using Docker.
        </p>
        <p className="mt-2 text-gray-700">
          Currently advancing DevOps skills (CI/CD, AWS, Docker Compose) and
          planning to transition into game development using Unity or React
          Native.
        </p>
      </section>

      <section className="mt-12 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold mb-2">MERN Stack CRUD App</h3>
              <p className="text-gray-600">MongoDB, Express, React, Node.js</p>
              <p className="mt-2 text-sm text-gray-700">
                Created a CRUD web app with protected APIs and JWT-based
                authentication.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold mb-2">Dockerized REST API</h3>
              <p className="text-gray-600">Node.js, Express, MongoDB, Docker</p>
              <p className="mt-2 text-sm text-gray-700">
                Built a REST API using Docker Compose with volumes and
                environment-based config.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mt-12 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-700">📞 +91-8300702695</p>
        <p className="text-gray-700">📧 kamaleshwaran893@gmail.com</p>
        <p className="text-gray-700">
          🔗{" "}
          <a
            href="https://www.linkedin.com/in/kamaleshwaran893"
            className="text-blue-600"
          >
            LinkedIn Profile
          </a>
        </p>
        <p className="text-gray-700">
          💼{" "}
          <a href="https://github.com/KamaleshwaranE" className="text-blue-600">
            GitHub Portfolio
          </a>
        </p>
      </section>
    </main>
  );
}
