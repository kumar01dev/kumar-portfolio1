import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "Html",
    "CSS",
    "React",
    "TailwindCSS",
    "Javascript",
  ];

  const backendSkills = ["Node.js", "Express.js", "MongoDB"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-16"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-200 mb-2 font-medium">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                      hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all my-4">
            <h1 className="text-xl mb-6 font-semibold">💼 Work Experience</h1>
            <div>
              <h4 className="font-semibold text-lg">
                {" "}Self-Taught MERN Stack Developer (2024 - Present){" "}
              </h4>
              <p className="text-sm text-gray-400">
                As a passionate MERN Stack Developer, I learned my skills through building and developing various full-stack applications. Below are some of the key projects I've worked on, each demonstrating my ability to design, develop, and deploy complete web applications:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-lg font-medium my-2"> E-commerce Web App</h3>
                  <div className="flex flex-wrap gap-2">
                    <ul 
                      className="text-sm text-gray-400 ml-2"
                      style={{ listStyleType: 'circle' }}
                    >
                      <li>
                        Developed a fully functional E-commerce platform with product category pages, products listing and user authentication.
                      </li>
                      <li>
                        Responsive front-end using React, TailwindCSS and styled-components.
                      </li>
                      <li>
                        Integrated MongoDB for data storage and efficient querying of user and product information.
                      </li>
                      <li>
                        Implemented JWT-based authentication for secure user login and registration.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-lg font-medium my-2">To-Do List App</h3>
                  <div className="flex flex-wrap gap-2">
                    <ul 
                      className="text-sm text-gray-400 ml-2"
                      style={{ listStyleType: 'circle' }}
                    >
                      <li>
                        Created a simple yet functional to-do list app with full CRUD (Create, Read, Update, Delete) capabilities. Users can add, edit, and delete tasks and mark them as completed.
                      </li>
                      <li>
                        Built the front-end using React to create a user-friendly interface.
                      </li>
                      <li>
                        Integrated state management using React's useState and useEffect hooks.
                      </li>
                      <li>
                        Applied CSS for styling and created a smooth, responsive design.
                      </li>
                    </ul>
                  </div>
                </div>
              <div>

            </div>
          </div>
          
          </div>
        </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};
