import { Heart, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    category: "E-COMMERCE",
    title: "E-Commerce Platform",
    likes: 1842,
    image: "/image/project1.jfif",
    live: "#", // Add your live URL
  },
  {
    id: 2,
    category: "REAL ESTATE",
    title: "Property Listing Platform",
    likes: 1654,
    image: "/image/project2.jfif",
    live: "#",
  },
  {
    id: 3,
    category: "HEALTHCARE",
    title: "Doctor & Clinic Website",
    likes: 1418,
    image: "/image/project3.jfif",
    live: "#",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-[#ECF0F3] py-20">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Heading */}
        <p className="text-center uppercase tracking-[5px] text-[#FF014F] text-sm font-semibold">
          2+ Years of Remote Full-Stack Development Experience
        </p>

        <h2 className="text-center text-4xl md:text-6xl font-bold text-[#1E2125] mt-4 mb-14">
          Featured Projects
        </h2>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-[30px] bg-[#ECF0F3] p-5
              shadow-[10px_10px_22px_#c8d0e7,-10px_-10px_22px_#ffffff]
              hover:-translate-y-3 transition-all duration-500"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Category */}
              <div className="flex justify-between items-center mt-6">
                <span className="text-xs font-semibold uppercase tracking-[3px] text-[#FF014F]">
                  {project.category}
                </span>

                <span className="flex items-center gap-1 text-gray-500 text-sm">
                  <Heart size={15} />
                  {project.likes}
                </span>
              </div>

              {/* Title + Arrow */}
              <div className="flex justify-between items-center mt-5 gap-4">
                <h3 className="text-2xl font-bold leading-tight text-[#1E2125] group-hover:text-[#FF014F] transition-colors">
                  {project.title}
                </h3>

                <div
                  className="w-12 h-12 rounded-full bg-[#ECF0F3]
                  shadow-[6px_6px_12px_#c8d0e7,-6px_-6px_12px_#ffffff]
                  flex items-center justify-center text-[#FF014F]
                  group-hover:bg-[#FF014F] group-hover:text-white
                  group-hover:rotate-45 transition-all duration-500"
                >
                  <ExternalLink size={20} />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center mt-16">
          <a
            href="#contact"
            className="px-8 py-4 rounded-full bg-[#ECF0F3]
            shadow-[8px_8px_18px_#c8d0e7,-8px_-8px_18px_#ffffff]
            text-[#FF014F] font-semibold hover:-translate-y-1 transition"
          >
            {`Let's Work Together`}
          </a>
        </div>
      </div>
    </section>
  );
}