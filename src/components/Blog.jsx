import { useEffect, useState } from "react";
import {
  X,
  ArrowUpRight,
  Calendar,
  Clock,
  CheckCircle2,
} from "lucide-react";

const blogs = [
  {
    id: 1,
    category: "Architecture",
    title: "Software Product Development",
    date: "Jan 2027",
    read: "6 min read",
    image: "/image/software.png",

    intro:
      "Software Product Development is the complete process of transforming an idea into a production-ready digital product. It combines strategy, design, engineering, testing and deployment into one continuous development lifecycle.",

    paragraphs: [
      "A successful software product starts with a clear understanding of business requirements and user needs. From there, teams design a scalable architecture that can support both current requirements and future growth.",
      "Modern development practices focus on maintainability, security, performance and developer experience. A well-structured application makes it easier to introduce new features without creating unnecessary technical debt.",
    ],

    points: [
      "Requirement analysis and technical planning",
      "UI/UX planning and responsive interface design",
      "Component-based frontend architecture",
      "Secure and scalable REST APIs",
      "Database design and optimization",
      "Automated CI/CD deployment",
      "Performance and application monitoring",
    ],

    technologies:
      "React, Next.js, Node.js and MongoDB are commonly used together to build modern, scalable web applications while keeping the codebase maintainable.",

    takeaway:
      "Great software products are not built only by writing code. They are built through thoughtful architecture, reliable engineering practices and continuous improvement.",
  },

  {
    id: 2,
    category: "Enterprise",
    title: "Enterprise Development",
    date: "Jan 2027",
    read: "7 min read",
    image: "/image/enterprise.png",

    intro:
      "Enterprise applications are designed to support large organizations, complex workflows and potentially thousands of users simultaneously. Reliability, security and scalability are fundamental requirements.",

    paragraphs: [
      "Enterprise systems must be designed around clear access control, reliable data management and predictable performance. Architecture decisions made early can have a significant impact as the organization grows.",
      "A production-ready enterprise application also requires observability. Logs, metrics, tracing and monitoring help development teams identify problems before they affect a large number of users.",
    ],

    points: [
      "Authentication and authorization",
      "Role-based access control",
      "Audit logs and activity tracking",
      "Redis caching",
      "Database optimization",
      "Application monitoring",
      "Containerized deployment",
      "Horizontal scaling",
    ],

    technologies:
      "React, Next.js, Node.js, PostgreSQL, Redis, Docker and AWS can be combined to create secure and scalable enterprise platforms.",

    takeaway:
      "Enterprise development is about designing systems that remain secure, reliable and maintainable as users, data and business complexity continue to grow.",
  },

  {
    id: 3,
    category: "Performance",
    title: "Server Scalability",
    date: "Jan 2027",
    read: "5 min read",
    image: "/image/server.png",

    intro:
      "Server scalability allows an application to handle increasing traffic and workloads without significantly reducing performance or reliability.",

    paragraphs: [
      "As traffic increases, simply adding more resources to a single server may eventually become expensive or insufficient. Scalable architectures distribute workloads across multiple services and machines.",
      "Heavy operations should also be separated from user-facing requests. Queue systems and background workers allow resource-intensive tasks to execute asynchronously without blocking the main application.",
    ],

    points: [
      "Load balancing",
      "Horizontal server scaling",
      "Redis caching",
      "Queue-based processing",
      "Database indexing",
      "Background workers",
      "Rate limiting",
      "Application monitoring",
    ],

    technologies:
      "Node.js, Redis, Docker, load balancers and queue systems can work together to create backend systems capable of handling growing workloads.",

    takeaway:
      "Scalability is not only about adding more servers. It is about designing the entire system so workloads can be distributed efficiently.",
  },

  {
    id: 4,
    category: "Cloud",
    title: "Cloud Infrastructure For Software",
    date: "Jan 2027",
    read: "8 min read",
    image: "/image/cloud.png",

    intro:
      "Cloud infrastructure provides the foundation required to deploy, operate and scale modern software applications across reliable and globally distributed environments.",

    paragraphs: [
      "Cloud platforms allow development teams to provision infrastructure without maintaining traditional physical servers. Resources can be scaled according to application requirements.",
      "Modern cloud architecture also combines containers, automated deployment, monitoring and managed services to create more consistent and reliable production environments.",
    ],

    points: [
      "EC2 for compute workloads",
      "S3 for object storage",
      "Lambda for serverless workloads",
      "CloudFront for global content delivery",
      "IAM for access management",
      "CloudWatch for monitoring",
      "Docker for containerization",
      "CI/CD for automated deployments",
    ],

    technologies:
      "AWS services combined with Docker and CI/CD pipelines provide a flexible foundation for deploying scalable web applications.",

    takeaway:
      "Good cloud architecture reduces operational complexity while giving applications the infrastructure required to scale safely.",
  },

  {
    id: 5,
    category: "AI",
    title: "AI and Machine Learning",
    date: "Jan 2027",
    read: "6 min read",
    image: "/image/aiandml.png",

    intro:
      "Artificial Intelligence is becoming an important part of modern software development, enabling applications to understand information, automate workflows and provide intelligent user experiences.",

    paragraphs: [
      "Developers can integrate AI capabilities into existing applications rather than building completely separate AI products. APIs, machine-learning models and automation services can extend traditional software systems.",
      "The most useful AI implementations focus on solving real user problems. Search, recommendations, content generation and intelligent automation are examples of areas where AI can add practical value.",
    ],

    points: [
      "AI chatbots and virtual assistants",
      "Content generation",
      "Semantic search",
      "Recommendation engines",
      "Workflow automation",
      "Predictive analytics",
      "Intelligent document processing",
    ],

    technologies:
      "AI APIs, machine-learning models and modern full-stack technologies can be combined to build intelligent applications that improve productivity and user experience.",

    takeaway:
      "The strongest AI applications combine intelligent models with reliable software architecture, useful user experiences and clearly defined business problems.",
  },
];

export default function Blog() {
  const [selected, setSelected] = useState(null);

  // Prevent background page scrolling when article is open
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <section id="blog" className="bg-[#ECF0F3] py-10">
      <div className="max-w-7xl mx-auto px-5">
        {/* ================= HEADING ================= */}

        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <p className="uppercase tracking-[5px] text-[#FF014F] text-xs md:text-sm font-bold">
            Insights & Articles
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#1E2125] mt-4">
            Latest Blog
          </h2>

          <p className="text-gray-500 mt-5 text-sm md:text-base leading-7">
            Technical insights about software architecture, cloud
            infrastructure, scalability, artificial intelligence and modern
            development practices.
          </p>
        </div>

        {/* ================= BLOG GRID ================= */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <button
              key={blog.id}
              onClick={() => setSelected(blog)}
              className="
                group
                text-left
                rounded-[30px]
                bg-[#ECF0F3]
                p-5
                shadow-[10px_10px_22px_#c8d0e7,-10px_-10px_22px_#ffffff]
                hover:-translate-y-3
                transition-all
                duration-500
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#FF014F]
              "
            >
              {/* Image */}

              <div className="relative overflow-hidden rounded-[22px] aspect-[16/10] bg-gray-200">
                <img
                  src={blog.image}
                  alt={blog.title}
                  loading="lazy"
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    object-center
                    group-hover:scale-105
                    transition-transform
                    duration-700
                  "
                />

                {/* Image overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Category */}

              <div className="mt-6 flex justify-between items-center">
                <span className="text-[11px] uppercase tracking-[3px] text-[#FF014F] font-bold">
                  {blog.category}
                </span>

                <span
                  className="
                    w-9
                    h-9
                    rounded-full
                    flex
                    items-center
                    justify-center
                    bg-[#ECF0F3]
                    shadow-[4px_4px_10px_#c8d0e7,-4px_-4px_10px_#ffffff]
                  "
                >
                  <ArrowUpRight
                    size={18}
                    className="
                      text-[#FF014F]
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                      transition
                    "
                  />
                </span>
              </div>

              {/* Title */}

              <h3
                className="
                  text-xl
                  md:text-2xl
                  font-bold
                  text-[#1E2125]
                  mt-4
                  leading-tight
                  group-hover:text-[#FF014F]
                  transition-colors
                "
              >
                {blog.title}
              </h3>

              {/* Meta */}

              <div className="flex items-center gap-5 mt-5 text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <Calendar size={15} />
                  {blog.date}
                </span>

                <span className="flex items-center gap-1.5">
                  <Clock size={15} />
                  {blog.read}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ================= ARTICLE MODAL ================= */}

      {selected && (
        <div
          className="
            fixed
            inset-0
            z-[9999]
            bg-black/60
            backdrop-blur-md
            flex
            items-center
            justify-center
            p-3
            sm:p-5
            md:p-8
          "
          onClick={() => setSelected(null)}
        >
          <article
            onClick={(e) => e.stopPropagation()}
            className="
              relative
              w-full
              max-w-5xl
              max-h-[94vh]
              overflow-y-auto
              rounded-[28px]
              md:rounded-[36px]
              bg-[#ECF0F3]
              shadow-[18px_18px_40px_#15182080,-12px_-12px_35px_#ffffff30]
              scrollbar-thin
            "
          >
            {/* ================= CLOSE BUTTON ================= */}

            <button
              onClick={() => setSelected(null)}
              aria-label="Close article"
              className="
                absolute
                right-4
                top-4
                md:right-6
                md:top-6
                z-30
                w-11
                h-11
                md:w-12
                md:h-12
                rounded-full
                flex
                items-center
                justify-center
                bg-[#ECF0F3]/95
                backdrop-blur
                shadow-[5px_5px_12px_#c8d0e7,-5px_-5px_12px_#ffffff]
                text-[#1E2125]
                hover:text-[#FF014F]
                hover:scale-105
                transition-all
              "
            >
              <X size={21} />
            </button>

            {/* ================= ARTICLE IMAGE ================= */}

            <div className="relative w-full aspect-[16/8] min-h-[230px] md:min-h-[350px] overflow-hidden rounded-t-[28px] md:rounded-t-[36px]">
              <img
                src={selected.image}
                alt={selected.title}
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  object-center
                "
              />

              {/* Dark gradient */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Image title */}

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <span className="inline-block text-white/90 uppercase tracking-[4px] text-[10px] md:text-xs font-bold">
                  {selected.category}
                </span>

                <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 max-w-3xl leading-tight">
                  {selected.title}
                </h2>
              </div>
            </div>

            {/* ================= ARTICLE CONTENT ================= */}

            <div className="p-6 sm:p-8 md:p-12">
              {/* Meta */}

              <div className="flex flex-wrap items-center gap-5 md:gap-7 text-gray-500 text-sm">
                <span className="flex items-center gap-2">
                  <Calendar size={16} />
                  {selected.date}
                </span>

                <span className="flex items-center gap-2">
                  <Clock size={16} />
                  {selected.read}
                </span>
              </div>

              {/* Divider */}

              <div className="w-20 h-1 rounded-full bg-[#FF014F] mt-7 mb-8" />

              {/* Intro */}

              <p className="text-lg md:text-xl text-[#1E2125] font-medium leading-8">
                {selected.intro}
              </p>

              {/* Paragraphs */}

              <div className="mt-8 space-y-6">
                {selected.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-gray-600 text-base md:text-lg leading-8"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* ================= KEY AREAS ================= */}

              <div className="mt-10">
                <h3 className="text-2xl font-bold text-[#1E2125] mb-5">
                  Key Areas
                </h3>

                <div className="grid sm:grid-cols-2 gap-3">
                  {selected.points.map((point, index) => (
                    <div
                      key={index}
                      className="
                        flex
                        items-start
                        gap-3
                        p-4
                        rounded-2xl
                        bg-[#ECF0F3]
                        shadow-[inset_4px_4px_9px_#d1d9e6,inset_-4px_-4px_9px_#ffffff]
                      "
                    >
                      <CheckCircle2
                        size={19}
                        className="text-[#FF014F] mt-0.5 shrink-0"
                      />

                      <span className="text-gray-600 text-sm md:text-base leading-6">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ================= TECHNOLOGIES ================= */}

              <div className="mt-10">
                <h3 className="text-2xl font-bold text-[#1E2125] mb-4">
                  Technology & Approach
                </h3>

                <p className="text-gray-600 text-base md:text-lg leading-8">
                  {selected.technologies}
                </p>
              </div>

              {/* ================= KEY TAKEAWAY ================= */}

              <div
                className="
                  mt-12
                  rounded-[24px]
                  bg-[#ECF0F3]
                  p-6
                  md:p-8
                  shadow-[inset_7px_7px_15px_#d1d9e6,inset_-7px_-7px_15px_#ffffff]
                "
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="
                      w-10
                      h-10
                      rounded-full
                      flex
                      items-center
                      justify-center
                      bg-[#ECF0F3]
                      shadow-[4px_4px_10px_#c8d0e7,-4px_-4px_10px_#ffffff]
                    "
                  >
                    <CheckCircle2
                      size={20}
                      className="text-[#FF014F]"
                    />
                  </div>

                  <h4 className="text-lg font-bold text-[#1E2125]">
                    Key Takeaway
                  </h4>
                </div>

                <p className="text-gray-600 leading-7">
                  {selected.takeaway}
                </p>
              </div>

              {/* ================= CLOSE ================= */}

              <div className="flex justify-center md:justify-start">
                <button
                  onClick={() => setSelected(null)}
                  className="
                    mt-10
                    px-7
                    py-3
                    rounded-full
                    bg-[#ECF0F3]
                    shadow-[6px_6px_14px_#c8d0e7,-6px_-6px_14px_#ffffff]
                    text-[#FF014F]
                    font-semibold
                    hover:-translate-y-1
                    hover:shadow-[8px_8px_16px_#c8d0e7,-8px_-8px_16px_#ffffff]
                    transition-all
                  "
                >
                  Back to Articles
                </button>
              </div>
            </div>
          </article>
        </div>
      )}
    </section>
  );
}