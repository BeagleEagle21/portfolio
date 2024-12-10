import stamp from "../assets/stamp.png";
import { motion } from "motion/react";

const projectData = [
  {
    image: stamp,
    title: "To-Do List",
    description: "Created a simple react based To-Do List web app allowing user to add, update and delete tasks.",
    technologies: ["HTML"],
    githubLink: "https://github.com/mallratserf/to-do-list", 
  },
];

const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row">
        {/* Make the image clickable */}
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
          <img
            src={project.image}
            alt={project.title}
            className="w-full cursor-pointer"
          />
        </a>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            {/* Make the title clickable */}
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold selection:bg-purple-300 selection:text-yellow-900 hover:underline"
            >
              {project.title}
            </a>
            <p className="selection:bg-purple-300 selection:text-yellow-900">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-5">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="rounded-lg bg-red-700 text-white p-3 selection:bg-yellow-500 selection:text-yellow-900"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col min-h-screen w-full items-center justify-center gap-16 p-4"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-light selection:bg-purple-300 selection:text-yellow-900 border-b-2 border-red-700">
          My Projects
        </h1>
      </ScrollReveal>

      <div className="flex w-full max-w-[1000px] flex-col gap-16">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
