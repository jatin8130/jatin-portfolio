import { useState } from "react";
import { X, ArrowUpRight, Calendar, Clock } from "lucide-react";

const blogs = [
  {
    id: 1,
    category: "Architecture",
    title: "Software Product Development",
    date: "Jan 2027",
    read: "6 min read",
    image: "/image/software.png",
    content: `
Software Product Development is the complete process of transforming an idea into a production-ready application.

A successful product requires careful planning, clean architecture, scalable backend systems, responsive frontend development and continuous deployment.

Key practices include:
• Requirement analysis
• UI/UX planning
• Component-based frontend architecture
• Secure REST APIs
• Database optimization
• Automated deployment
• Performance monitoring

Modern stacks such as React, Next.js, Node.js and MongoDB help teams deliver faster while maintaining maintainable codebases.
`,
  },
  {
    id: 2,
    category: "Enterprise",
    title: "Enterprise Development",
    date: "Jan 2027",
    read: "7 min read",
    image: "/image/enterprise.png",
    content: `
Enterprise applications serve thousands of users simultaneously and require reliability above everything.

Important areas include authentication, role-based access control, audit logs, caching, monitoring and scalable infrastructure.

Core technologies:
• React & Next.js
• Node.js APIs
• PostgreSQL
• Redis
• Docker
• AWS

Building enterprise software means designing systems that continue working even as traffic grows dramatically.
`,
  },
  {
    id: 3,
    category: "Performance",
    title: "Server Scalability",
    date: "Jan 2027",
    read: "5 min read",
    image: "/image/server.png",
    content: `
Scalable servers allow applications to handle increasing traffic without degrading performance.

Common techniques include:
• Load balancing
• Horizontal scaling
• Redis caching
• Queue systems
• Database indexing
• Background workers
• Rate limiting

Instead of making users wait, heavy tasks should run asynchronously using queue systems.
`,
  },
  {
    id: 4,
    category: "Cloud",
    title: "Cloud Infrastructure For Software",
    date: "Jan 2027",
    read: "8 min read",
    image: "/image/cloud.png",
    content: `
Cloud infrastructure enables modern applications to scale globally while reducing operational complexity.

Essential AWS services:
• EC2
• S3
• Lambda
• CloudFront
• IAM
• CloudWatch

Using Docker containers and CI/CD pipelines makes deployments safer and more consistent.
`,
  },
  {
    id: 5,
    category: "AI",
    title: "AI and Machine Learning",
    date: "Jan 2027",
    read: "6 min read",
    image: "/image/aiandml.png",
    content: `
Artificial Intelligence is becoming an essential part of modern software development.

Developers now integrate AI into applications for:
• Chatbots
• Content generation
• Search assistants
• Recommendation engines
• Automation

Combining AI with full-stack development creates smarter applications while improving user productivity.
`,
  },
];

export default function Blog() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="blog" className="bg-[#ECF0F3] pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}

        <div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-[#FF014F] text-sm font-semibold">
            Insights & Articles
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-[#1E2125] mt-3">
            Latest Blog
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Technical insights about software architecture, cloud infrastructure,
            scalability and modern development practices.
          </p>
        </div>

        {/* Blog Grid */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <button
              key={blog.id}
              onClick={() => setSelected(blog)}
              className="group text-left rounded-[30px] bg-[#ECF0F3] p-5
              shadow-[10px_10px_22px_#c8d0e7,-10px_-10px_22px_#ffffff]
              hover:-translate-y-3 transition-all duration-500"
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="mt-6 flex justify-between items-center">
                <span className="text-xs uppercase tracking-[3px] text-[#FF014F] font-semibold">
                  {blog.category}
                </span>

                <ArrowUpRight
                  size={20}
                  className="text-[#FF014F] group-hover:translate-x-1 group-hover:-translate-y-1 transition"
                />
              </div>

              <h3 className="text-2xl font-bold text-[#1E2125] mt-4 group-hover:text-[#FF014F] transition">
                {blog.title}
              </h3>

              <div className="flex items-center gap-4 mt-5 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar size={15} />
                  {blog.date}
                </span>

                <span className="flex items-center gap-1">
                  <Clock size={15} />
                  {blog.read}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Premium Modal */}

      {selected && (
        <div
          className="fixed inset-0 z-[9999] bg-black/45 backdrop-blur-sm
          flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto
            rounded-[34px] bg-[#ECF0F3]
            shadow-[18px_18px_40px_#bfc8de,-18px_-18px_40px_#ffffff]"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute right-6 top-6 z-20 w-12 h-12 rounded-full
              bg-[#ECF0F3]
              shadow-[5px_5px_12px_#c8d0e7,-5px_-5px_12px_#ffffff]
              hover:text-[#FF014F] transition"
            >
              <X className="mx-auto" />
            </button>

            <div className="overflow-hidden rounded-t-[34px]">
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-72 object-cover"
              />
            </div>

            <div className="p-8 md:p-10">
              <span className="uppercase tracking-[4px] text-xs font-semibold text-[#FF014F]">
                {selected.category}
              </span>

              <h2 className="text-3xl md:text-5xl font-bold text-[#1E2125] mt-4 leading-tight">
                {selected.title}
              </h2>

              <div className="flex flex-wrap gap-6 mt-6 text-gray-500 text-sm">
                <span className="flex items-center gap-2">
                  <Calendar size={16} />
                  {selected.date}
                </span>

                <span className="flex items-center gap-2">
                  <Clock size={16} />
                  {selected.read}
                </span>
              </div>

              <div className="w-20 h-1 rounded-full bg-[#FF014F] mt-8 mb-8"></div>

              <div className="prose prose-lg max-w-none text-gray-700 leading-8 whitespace-pre-line">
                {selected.content}
              </div>

              <div className="mt-10 rounded-2xl bg-[#ECF0F3] p-6
              shadow-[inset_6px_6px_12px_#d1d9e6,inset_-6px_-6px_12px_#ffffff]">
                <h4 className="font-bold text-[#1E2125] mb-3">
                  Key Takeaway
                </h4>

                <p className="text-gray-600">
                  Building modern software requires scalable architecture,
                  efficient infrastructure and continuous learning to deliver
                  reliable products.
                </p>
              </div>

              <button
                onClick={() => setSelected(null)}
                className="mt-10 px-7 py-3 rounded-full bg-[#ECF0F3]
                shadow-[6px_6px_14px_#c8d0e7,-6px_-6px_14px_#ffffff]
                text-[#FF014F] font-semibold hover:-translate-y-1 transition"
              >
                Back to Articles
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}