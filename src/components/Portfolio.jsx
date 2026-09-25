import { useState } from "react";
import { Heart, ExternalLink, X } from "lucide-react";
import PropTypes from "prop-types";

const projects = [
  {
    id: 1,
    category: "E-COMMERCE",
    title: "E-Commerce Platform",
    likes: 1842,
    client: "Techsunset",
    date: "2026",
    services: "React, Next.js, Node.js, Express, MongoDB, Redis",
    budget: "Company Project",
    image: "/image/project1.jfif",
    description:
      "A modern e-commerce web application where I worked on responsive user interfaces, reusable React components, REST API integration, shopping cart functionality, and backend features using Node.js and MongoDB.",
    strategy:
      "Built reusable frontend components and optimized API integration for better performance and scalability.",
    design:
      "Developed a clean, responsive shopping interface with consistent UI components.",
    experience:
      "Focused on fast navigation, smooth interactions, and mobile-friendly responsiveness.",
    github: "#",
    live: "#",
  },

  {
    id: 2,
    category: "REAL ESTATE",
    title: "Property Listing Platform",
    likes: 1654,
    client: "Techsunset",
    date: "2026",
    services: "React, Node.js, Express, MongoDB, AWS",
    budget: "Company Project",
    image: "/image/project2.jfif",
    description:
      "A real estate platform where users can browse property listings and administrators manage properties through a dashboard. I contributed to frontend development, REST APIs, and cloud deployment support.",
    strategy:
      "Created scalable APIs and responsive interfaces for a smooth property browsing experience.",
    design:
      "Modern card-based layout with responsive components across devices.",
    experience:
      "Optimized performance and maintained a clean user experience on desktop and mobile.",
    github: "#",
    live: "#",
  },

  {
    id: 3,
    category: "HEALTHCARE",
    title: "Doctor & Clinic Website",
    likes: 1418,
    client: "Techsunset",
    date: "2025",
    services: "React, Node.js, Express",
    budget: "Company Project",
    image: "/image/project3.jfif",
    description:
      "A healthcare website for doctors and clinics featuring appointment-related pages, responsive UI, and backend API development for a better patient experience.",
    strategy:
      "Built user-friendly interfaces while keeping the backend architecture scalable.",
    design:
      "Professional healthcare-themed responsive design with clean layouts.",
    experience:
      "Delivered a smooth and accessible experience across desktop and mobile devices.",
    github: "#",
    live: "#",
  },
];

PortfolioModal.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    client: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    services: PropTypes.string.isRequired,
    budget: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    strategy: PropTypes.string.isRequired,
    design: PropTypes.string.isRequired,
    experience: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    live: PropTypes.string.isRequired,
  }).isRequired,

  onClose: PropTypes.func.isRequired,
};

export default function Portfolio() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section id="portfolio" className="bg-[#ECF0F3] pt-20 pb-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-center uppercase tracking-[5px] text-pink-500 text-sm px-5">
            2+ Years of Remote Full-Stack Development Experience
          </p>

          <h2 className="text-center text-5xl md:text-7xl font-bold text-gray-800 mt-4 mb-16 px-5">
            My Portfolio
          </h2>

          <div className="grid md:grid-cols-3 gap-10 px-3">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelected(project)}
                className="cursor-pointer rounded-[30px] bg-[#ECF0F3] p-7
                shadow-[10px_10px_20px_#c8d0e7,-10px_-10px_20px_#ffffff]
                hover:-translate-y-3 transition-all duration-300"
              >
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="flex justify-between mt-6 text-sm">
                  <span className="uppercase tracking-[2px] text-pink-500">
                    {project.category}
                  </span>

                  <span className="flex items-center gap-1 text-gray-600">
                    <Heart size={16} />
                    {project.likes}
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-gray-800 mt-5 leading-snug hover:text-pink-500 transition">
                  {project.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <PortfolioModal project={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}

function PortfolioModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm overflow-y-auto">
      <div className="max-w-7xl mx-auto my-10 px-4">
        <div
          className="relative rounded-[35px] bg-[#ECF0F3] p-8 md:p-12
        shadow-[15px_15px_30px_#c8d0e7,-15px_-15px_30px_#ffffff]"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-14 h-14 rounded-full
            bg-[#ECF0F3]
            shadow-[6px_6px_12px_#c8d0e7,-6px_-6px_12px_#ffffff]
            flex items-center justify-center hover:text-pink-500 transition"
          >
            <X />
          </button>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <p className="uppercase tracking-[3px] text-pink-500 text-sm">
                {project.category}
              </p>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-3 leading-tight">
                {project.title}
              </h2>

              <p className="text-gray-600 text-lg leading-8 mt-6">
                {project.description}
              </p>

              <div className="grid grid-cols-2 gap-y-6 mt-10 text-gray-700">
                <p>
                  <span className="font-bold">Client:</span>
                  <br />
                  {project.client}
                </p>

                <p>
                  <span className="font-bold">Date:</span>
                  <br />
                  {project.date}
                </p>

                <p>
                  <span className="font-bold">Services:</span>
                  <br />
                  {project.services}
                </p>

                <p>
                  <span className="font-bold">Budget:</span>
                  <br />
                  {project.budget}
                </p>
              </div>

              <div className="flex flex-wrap gap-5 mt-12">
                <button
                  className="flex items-center gap-2 px-7 py-4 rounded-xl
                  bg-[#ECF0F3]
                  shadow-[6px_6px_12px_#c8d0e7,-6px_-6px_12px_#ffffff]
                  text-pink-500 hover:-translate-y-1 transition"
                >
                  LIKE THIS
                  <Heart size={18} />
                  <span className="bg-pink-500 text-white px-2 rounded">
                    {project.likes}
                  </span>
                </button>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-7 py-4 rounded-xl
  bg-[#ECF0F3]
  shadow-[6px_6px_12px_#c8d0e7,-6px_-6px_12px_#ffffff]
  text-pink-500 hover:-translate-y-1 transition"
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                    alt="GitHub"
                    className="w-5 h-5"
                  />
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-7 py-4 rounded-xl
                  bg-[#ECF0F3]
                  shadow-[6px_6px_12px_#c8d0e7,-6px_-6px_12px_#ffffff]
                  text-pink-500 hover:-translate-y-1 transition"
                >
                  VIEW PROJECT
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>

          <hr className="my-14 border-gray-300" />

          <p className="text-gray-700 text-lg leading-9">
            These projects reflect my experience as a Full-Stack Developer at
            Techsunset, where I worked on service-based applications across
            multiple industries, including e-commerce, real estate, healthcare,
            and feedback platforms. My work involved building responsive React
            and Next.js interfaces, developing REST APIs with Node.js and
            Express, managing MongoDB and Redis databases, and working with AWS
            services such as EC2, S3, and Lambda to deliver scalable web
            applications.
          </p>

          <div className="grid md:grid-cols-3 gap-10 mt-14">
            <div>
              <h3 className="text-3xl font-bold mb-4">Strategy</h3>
              <p className="text-gray-600 leading-8">{project.strategy}</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-4">Design</h3>
              <p className="text-gray-600 leading-8">{project.design}</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-4">User Experience</h3>
              <p className="text-gray-600 leading-8">{project.experience}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
