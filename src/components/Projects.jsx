import stamp from "../assets/stamp.png";
import { motion } from "motion/react";
import rose from "../assets/rose.png";
import petals from "../assets/petals.png";
import moon from "../assets/moon.png";

const projectData = [
  {
    image: stamp,
    title: "To-Do List",
    description:
      "Created a simple react based To-Do List web app allowing user to add, update and delete tasks.",
    technologies: ["HTML"],
    githubLink: "https://github.com/mallratserf/to-do-list",
    vercelLink: "https://portfolio-ep.vercel.app/",
  },
  {
    image: rose,
    title: "Portfolio",
    description:
      "Created this Portfolio to display all my projects and technologies I work/have worked with.",
    technologies: ["React", "Tailwind", "JavaScript"],
    githubLink: "https://github.com/mallratserf/portfolio",
    vercelLink: "",
  },
  {
    image: petals,
    title: "Smart Utility Management Sysytem",
    description:
      "A team project as a part of my final year project at college. This is still a work in progress as of 10th January, 2024.",
    technologies: ["MongoDB", "React", "Tailwind", "JavaScript", "Swiper"],
    githubLink: "/",
    vercelLink: "/",
  },
  {
    image: moon,
    title: "QR Code Generator",
    description:
      "A simple little website that generates a downloadable QR code image from any given custom link. This one didnt really take so very long but was a nice venture into the qrcode library into react. I did't bother too much with the aesthetics on this one due to time constraints but it was certainly a nice learning experience.",
    technologies: ["React", "Tailwind", "JavaScript"],
    githubLink: "https://github.com/BeagleEagle21/QR-Code-Generator",
    vercelLink: "https://qr-code-generator-alpha-umber.vercel.app/",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row">
        {project.vercelLink ? (
          <a
            href={project.vercelLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-64 h-64 object-contain cursor-pointer"
            />
          </a>
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className="w-64 h-64 object-contain"
          />
        )}

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            {/* Make the title clickable to the GitHub link */}
            {project.githubLink ? (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold selection:bg-purple-300 selection:text-yellow-900 hover:underline"
              >
                {project.title}
              </a>
            ) : (
              <span className="text-xl font-semibold selection:bg-purple-300 selection:text-yellow-900">
                {project.title}
              </span>
            )}
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
