import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ExternalLink,
  X,
  LayoutDashboard,
  Server,
  Database,
} from "lucide-react";

const projects = [
  {
    id: 1,
    category: "CRM",
    title: "TechSunset CRM",
    domain: "crm.techsunset.com",
    description:
      "CRM software used to manage customers, leads, sales, and customer interactions in one place.",
    skills: ["React", "Next.js", "Node.js", "Express", "MongoDB"],
    image: "/image/project1.webp",
    scrollImage: "/image/projectscroll1.webp",
    live: "https://crm.techsunset.com",

    frontend: [
      "Customer list and customer details",
      "Customer add and edit forms",
      "Lead management screens",
      "Search and filtering",
      "Dashboard and basic data display",
      "API integration with the backend",
      "Form validation and error handling",
    ],

    backend: [
      "CRUD APIs for customer data",
      "Lead management",
      "Searching customers and leads",
      "Updating customer status",
      "User authentication and authorization",
      "Request validation and error handling",
      "Connecting APIs with the database",
    ],

    database:
      "MongoDB was used for storing and managing customer, lead and related business data.",
  },

  {
    id: 2,
    category: "ACCOUNTING",
    title: "TechSunset Books",
    domain: "books.techsunset.com",
    description:
      "Accounting and invoicing software used to manage invoices, payments, expenses, customers, vendors, GST, and financial reports.",
    skills: ["React", "Next.js", "Node.js", "Express", "MongoDB"],
    image: "/image/project2.webp",
    scrollImage: "/image/projectscroll2.webp",
    live: "https://books.techsunset.com",

    frontend: [
      "Dashboard and financial summary",
      "Invoice list and invoice creation forms",
      "Customer and vendor management",
      "Expense tracking screens",
      "Payment tracking",
      "GST summary and reports",
      "API integration, form validation and error handling",
    ],

    backend: [
      "Creating, updating, deleting and getting invoices",
      "Customer and vendor management",
      "Expense management",
      "Payment tracking",
      "GST and financial report data",
      "Request validation and error handling",
      "Connecting APIs with the database",
    ],

    database:
      "MongoDB was used for storing and managing invoices, customers, expenses and other business data.",
  },

  {
    id: 3,
    category: "HUMAN RESOURCES",
    title: "TechSunset HR",
    domain: "hr.techsunset.com",
    description:
      "Human Resource management software used to manage employees, attendance, leaves, onboarding, departments, holidays, and HR reports.",
    skills: ["React", "Next.js", "Node.js", "Express", "MongoDB"],
    image: "/image/project3.webp",
    scrollImage: "/image/projectscroll3.webp",
    live: "https://hr.techsunset.com",

    frontend: [
      "Employee list and employee details",
      "Employee add and edit forms",
      "Attendance management screens",
      "Leave request and approval screens",
      "Department and holiday management",
      "Onboarding screens",
      "HR reports and dashboard",
      "API integration, form validation and error handling",
    ],

    backend: [
      "Employee CRUD operations",
      "Attendance management",
      "Leave management",
      "Department and holiday management",
      "Employee onboarding",
      "HR reports and data",
      "Authentication, validation and error handling",
      "Connecting APIs with the database",
    ],

    database:
      "MongoDB was used for storing and managing employee, attendance and leave data.",
  },

  {
    id: 4,
    category: "INVENTORY",
    title: "TechSunset Inventory",
    domain: "inventory.techsunset.com",
    description:
      "Inventory management software used to manage products, stock, orders, suppliers, warehouses, and fulfillment.",
    skills: ["React", "Next.js", "Node.js", "Express", "MongoDB"],
    image: "/image/project4.webp",
    scrollImage: "/image/projectscroll4.webp",
    live: "https://inventory.techsunset.com",

    frontend: [
      "Product list and product details",
      "Add and edit product forms",
      "Inventory and stock management",
      "Order management screens",
      "Supplier management",
      "Warehouse management",
      "Fulfillment and stock reports",
      "API integration, search and filtering",
    ],

    backend: [
      "Product CRUD operations",
      "Stock and inventory management",
      "Sales order management",
      "Supplier and purchase order management",
      "Warehouse management",
      "Stock reservation and stock updates",
      "Request validation and error handling",
      "Connecting APIs with the database",
    ],

    database:
      "MongoDB was used for storing and managing products, stock, orders and supplier data.",
  },

  {
    id: 5,
    category: "PROJECT MANAGEMENT",
    title: "TechSunset Project",
    domain: "project.techsunset.com",
    description:
      "Project and task management software used to manage projects, tasks, deadlines, milestones, team workload, and progress.",
    skills: ["React", "Next.js", "Node.js", "Express", "MongoDB"],
    image: "/image/project5.webp",
    scrollImage: "/image/projectscroll5.webp",
    live: "https://project.techsunset.com",

    frontend: [
      "Project list and project details",
      "Task creation and task management",
      "Kanban board",
      "Task status and priority",
      "Calendar and deadlines",
      "Milestone and project progress",
      "Team workload and reports",
      "API integration and form validation",
    ],

    backend: [
      "Project CRUD operations",
      "Task and subtask management",
      "Assigning tasks to team members",
      "Task status and priority management",
      "Milestone and deadline management",
      "Team workload and time tracking",
      "Request validation and error handling",
      "Connecting APIs with the database",
    ],

    database:
      "MongoDB was used for storing and managing projects, tasks, users and progress data.",
  },

  {
    id: 6,
    category: "EDUCATION",
    title: "TS Campus",
    domain: "tscampus.com",
    description:
      "School management system used to manage admissions, students, attendance, fees, exams, staff, communication, and school operations.",
    skills: ["React", "Next.js", "Node.js", "Express", "MongoDB"],
    image: "/image/project6.webp",
    scrollImage: "/image/projectscroll6.webp",
    live: "https://tscampus.com",

    frontend: [
      "Student list and student details",
      "Admission and student forms",
      "Attendance management",
      "Fee management and payment screens",
      "Class, section and subject management",
      "Exam and report card screens",
      "Staff and HR management",
      "Dashboard, reports and notifications",
      "API integration, form validation and error handling",
    ],

    backend: [
      "Student and admission management",
      "Attendance management",
      "Fee and payment management",
      "Class, section and subject management",
      "Exam and result management",
      "Staff and employee management",
      "Notifications and communication",
      "Authentication, validation and error handling",
      "Connecting APIs with the database",
    ],

    database:
      "MongoDB was used for storing and managing student, admission, fee, attendance and other school data.",
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openDetails = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      {/* ================= PORTFOLIO ================= */}
      <section
        id="portfolio"
        className="
          relative overflow-hidden
          bg-[#0D0B10]
          py-16 md:py-20
          before:absolute before:inset-0
          before:bg-[radial-gradient(ellipse_at_0%_50%,rgba(255,1,79,0.16),transparent_45%),radial-gradient(ellipse_at_100%_50%,rgba(255,1,79,0.10),transparent_45%),radial-gradient(ellipse_at_50%_100%,rgba(70,45,90,0.10),transparent_55%)]
          before:pointer-events-none
        "
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
          {/* ================= HEADING ================= */}
          <div className="text-center mb-12 md:mb-14">
            <p className="uppercase tracking-[4px] md:tracking-[5px] text-[#FF014F] text-[10px] sm:text-xs md:text-sm font-semibold">
              2+ Years of Remote Full-Stack Development Experience
            </p>

            <h2 className="text-4xl md:text-6xl font-bold text-[#F5F5F5] mt-3 md:mt-4">
              Featured Projects
            </h2>

            <p className="max-w-2xl mx-auto mt-4 text-[#9CA3AF] text-sm md:text-base leading-relaxed">
              A selection of business applications I worked on across CRM,
              accounting, HR, inventory, project management and education.
            </p>
          </div>

          {/* ================= PROJECT GRID ================= */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project) => (
              <article
                key={project.id}
                className="
                  group
                  bg-[#171A1D]
                  rounded-[26px]
                  p-4 md:p-5
                  border border-[#25292D]
                  shadow-[8px_8px_20px_#0a0c0e,-8px_-8px_20px_#1d2124]
                  hover:-translate-y-2
                  hover:border-[#FF014F]/30
                  hover:shadow-[8px_8px_20px_#0a0c0e,-8px_-8px_20px_#1d2124,0_0_30px_rgba(255,1,79,0.10)]
                  transition-all duration-500
                "
              >
                {/* Image */}
                {/* Image */}
<a
  href={project.live}
  target="_blank"
  rel="noopener noreferrer"
  className="relative block overflow-hidden rounded-[20px] h-52 md:h-56"
>
  {/* Main Image */}
  <img
    src={project.image}
    alt={project.title}
    className="
      absolute
      inset-0
      w-full
      h-full
      object-cover
      transition-opacity
      duration-300
      group-hover:opacity-0
    "
  />

  {/* Scroll Image */}
  <div
    className="
      absolute
      inset-0
      overflow-hidden
      opacity-0
      transition-opacity
      duration-300
      group-hover:opacity-100
    "
  >
    <img
      src={project.scrollImage}
      alt={`${project.title} preview`}
      className="
        absolute
        top-0
        left-0
        w-full
        h-auto
        min-h-full
        object-cover
        transition-transform
        duration-[8000ms]
        ease-in-out
        group-hover:-translate-y-[calc(100%-14rem)]
      "
    />
  </div>

  {/* Overlay */}
  <div
    className="
      absolute
      inset-0
      bg-gradient-to-t
      from-black/50
      via-transparent
      to-transparent
      opacity-70
      pointer-events-none
    "
  />

  {/* Live */}
  <div
    className="
      absolute
      top-3
      right-3
      flex
      items-center
      gap-1.5
      px-3
      py-1.5
      rounded-full
      bg-[#171A1D]/90
      backdrop-blur-sm
      text-[#F5F5F5]
      text-[10px]
      font-semibold
      shadow-lg
      z-10
    "
  >
    Live
    <ArrowUpRight size={13} />
  </div>
</a>

                {/* Content */}
                <div className="pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[2.5px] text-[#FF014F]">
                    {project.category}
                  </p>

                  <h3
                    className="
                      text-xl md:text-2xl
                      font-bold
                      text-[#F5F5F5]
                      mt-2
                      leading-tight
                    "
                  >
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="
                          px-2 py-1
                          rounded-md
                          bg-[#1D2124]
                          border border-[#2A2F34]
                          text-[11px]
                          font-semibold
                          text-[#9CA3AF]
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2.5 mt-5">
                    <button
                      type="button"
                      onClick={() => openDetails(project)}
                      className="
                        flex-1
                        h-10
                        rounded-xl
                        bg-[#F5F5F5]
                        text-[#111315]
                        text-xs md:text-sm
                        font-semibold
                        hover:bg-[#FF014F]
                        hover:text-white
                        transition-colors duration-300
                      "
                    >
                      View Details
                    </button>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        w-10 h-10
                        rounded-xl
                        bg-[#171A1D]
                        text-[#FF014F]
                        flex items-center justify-center
                        border border-[#2A2F34]
                        shadow-[4px_4px_9px_#0a0c0e,-4px_-4px_9px_#1d2124]
                        hover:scale-105
                        transition-transform
                      "
                      aria-label={`Visit ${project.title}`}
                    >
                      <ExternalLink size={17} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      {selectedProject && (
  <div
    className="
      fixed inset-0 z-[99999]
      flex items-center justify-center
      p-3 sm:p-5
      bg-black/80
      backdrop-blur-xl
      animate-in fade-in duration-300
    "
    onClick={closeDetails}
  >
    <div
      className="
        relative
        w-full max-w-6xl
        max-h-[94vh]
        overflow-y-auto
        overflow-x-hidden
        rounded-[28px] md:rounded-[34px]
        bg-[#0D0B10]
        border border-white/[0.10]
        shadow-[0_30px_100px_rgba(0,0,0,0.75),0_0_80px_rgba(255,1,79,0.08)]
      "
      onClick={(e) => e.stopPropagation()}
    >
      {/* BLURRED PROJECT IMAGE */}
      <div className="absolute inset-0 overflow-hidden rounded-[28px] md:rounded-[34px] pointer-events-none">
        <img
          src={selectedProject.scrollImage}
          alt=""
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            scale-110
            blur-3xl
            opacity-[0.12]
          "
        />

        <div
          className="
            absolute inset-0
            bg-[linear-gradient(180deg,rgba(13,11,16,0.82)_0%,rgba(13,11,16,0.94)_55%,rgba(13,11,16,0.98)_100%)]
          "
        />
      </div>

      {/* PINK AMBIENT LIGHT */}
      <div
        className="
          pointer-events-none
          absolute
          -top-32
          -left-32
          w-96
          h-96
          rounded-full
          bg-[#FF014F]/[0.10]
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          top-1/3
          w-96
          h-96
          rounded-full
          bg-[#FF014F]/[0.06]
          blur-[120px]
        "
      />

      {/* CLOSE */}
      <button
        type="button"
        onClick={closeDetails}
        className="
          sticky
          top-5
          float-right
          mr-5 md:mr-7
          z-50
          w-10
          h-10
          rounded-full
          bg-black/30
          backdrop-blur-xl
          text-white/60
          flex items-center justify-center
          border border-white/[0.10]
          shadow-[0_8px_25px_rgba(0,0,0,0.35)]
          hover:bg-[#FF014F]
          hover:text-white
          hover:border-[#FF014F]
          hover:rotate-90
          transition-all
          duration-300
        "
        aria-label="Close project details"
      >
        <X size={18} />
      </button>

      {/* CONTENT */}
      <div className="relative z-10 p-5 sm:p-8 md:p-10">

        {/* HEADER */}
        <div className="pr-12 max-w-4xl">
          <div className="flex items-center gap-3">
            <span
              className="
                inline-flex
                items-center
                px-3
                py-1.5
                rounded-full
                bg-[#FF014F]/[0.10]
                border border-[#FF014F]/25
                text-[#FF014F]
                text-[9px] md:text-[10px]
                font-bold
                uppercase
                tracking-[2.5px]
                shadow-[0_0_20px_rgba(255,1,79,0.08)]
              "
            >
              {selectedProject.category}
            </span>

            <span className="w-12 h-px bg-white/[0.12]" />
          </div>

          <h2
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-bold
              tracking-tight
              text-white
              mt-5
            "
          >
            {selectedProject.title}
          </h2>

          <a
            href={selectedProject.live}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-1.5
              mt-2.5
              text-xs md:text-sm
              text-white/45
              hover:text-[#FF014F]
              transition-colors
            "
          >
            {selectedProject.domain}
            <ArrowUpRight size={14} />
          </a>

          <p
            className="
              text-sm md:text-base
              text-white/55
              leading-7
              mt-5
              max-w-3xl
            "
          >
            {selectedProject.description}
          </p>
        </div>

        {/* TECHNOLOGIES */}
        <div className="mt-9">
          <div className="flex items-center gap-4 mb-4">
            <p
              className="
                text-[9px]
                uppercase
                tracking-[2.5px]
                font-bold
                text-white/35
              "
            >
              Technologies
            </p>

            <div className="h-px flex-1 bg-white/[0.07]" />
          </div>

          <div className="flex flex-wrap gap-2">
            {selectedProject.skills.map((skill) => (
              <span
                key={skill}
                className="
                  px-3.5
                  py-2
                  rounded-full
                  bg-white/[0.035]
                  backdrop-blur-xl
                  border border-white/[0.09]
                  text-xs
                  font-medium
                  text-white/70
                  hover:border-[#FF014F]/35
                  hover:text-white
                  hover:bg-[#FF014F]/[0.05]
                  transition-all
                  duration-300
                "
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* WORK CARDS */}
        <div className="grid md:grid-cols-2 gap-5 mt-9">

          {/* FRONTEND */}
          <div
            className="
              rounded-[22px]
              p-5 md:p-6
              bg-white/[0.025]
              backdrop-blur-2xl
              border border-white/[0.08]
              shadow-[0_20px_50px_rgba(0,0,0,0.20)]
              hover:border-[#FF014F]/25
              transition-all
              duration-300
            "
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="
                  w-11
                  h-11
                  rounded-xl
                  bg-[#FF014F]
                  text-white
                  flex
                  items-center
                  justify-center
                  shadow-[0_8px_30px_rgba(255,1,79,0.25)]
                "
              >
                <LayoutDashboard size={19} />
              </div>

              <div>
                <p
                  className="
                    text-[9px]
                    uppercase
                    tracking-[2px]
                    text-white/30
                    font-semibold
                  "
                >
                  Development
                </p>

                <h3 className="text-lg font-bold text-white">
                  Frontend Work
                </h3>
              </div>
            </div>

            <ul className="space-y-3.5">
              {selectedProject.frontend.map((item, index) => (
                <li
                  key={index}
                  className="
                    flex
                    gap-3
                    text-sm
                    text-white/50
                    leading-relaxed
                  "
                >
                  <span
                    className="
                      min-w-[24px]
                      text-[#FF014F]
                      font-bold
                      text-[10px]
                      pt-1
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* BACKEND */}
          <div
            className="
              rounded-[22px]
              p-5 md:p-6
              bg-white/[0.025]
              backdrop-blur-2xl
              border border-white/[0.08]
              shadow-[0_20px_50px_rgba(0,0,0,0.20)]
              hover:border-white/[0.15]
              transition-all
              duration-300
            "
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="
                  w-11
                  h-11
                  rounded-xl
                  bg-white
                  text-[#111315]
                  flex
                  items-center
                  justify-center
                  shadow-[0_8px_25px_rgba(255,255,255,0.08)]
                "
              >
                <Server size={19} />
              </div>

              <div>
                <p
                  className="
                    text-[9px]
                    uppercase
                    tracking-[2px]
                    text-white/30
                    font-semibold
                  "
                >
                  Development
                </p>

                <h3 className="text-lg font-bold text-white">
                  Backend Work
                </h3>
              </div>
            </div>

            <ul className="space-y-3.5">
              {selectedProject.backend.map((item, index) => (
                <li
                  key={index}
                  className="
                    flex
                    gap-3
                    text-sm
                    text-white/50
                    leading-relaxed
                  "
                >
                  <span
                    className="
                      min-w-[24px]
                      text-[#FF014F]
                      font-bold
                      text-[10px]
                      pt-1
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* DATABASE */}
        <div
          className="
            mt-5
            rounded-[22px]
            p-5
            bg-white/[0.025]
            backdrop-blur-2xl
            border border-white/[0.08]
            shadow-[0_20px_50px_rgba(0,0,0,0.20)]
          "
        >
          <div className="flex items-center gap-4">
            <div
              className="
                w-10
                h-10
                shrink-0
                rounded-xl
                bg-[#FF014F]/[0.08]
                flex
                items-center
                justify-center
                text-[#FF014F]
                border border-[#FF014F]/20
              "
            >
              <Database size={17} />
            </div>

            <div className="min-w-0">
              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[2px]
                  text-white/30
                  font-bold
                "
              >
                Database
              </p>

              <p className="text-sm text-white/55 mt-1 leading-relaxed">
                {selectedProject.database}
              </p>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex flex-col sm:flex-row gap-3 mt-8">

          <a
            href={selectedProject.live}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              relative
              overflow-hidden
              flex-1
              h-12
              rounded-xl
              bg-[#FF014F]
              text-white
              text-sm
              font-semibold
              flex
              items-center
              justify-center
              gap-2
              shadow-[0_10px_35px_rgba(255,1,79,0.22)]
              hover:-translate-y-0.5
              hover:shadow-[0_15px_40px_rgba(255,1,79,0.32)]
              transition-all
              duration-300
              py-4
            "
          >
            <span
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-transparent
                via-white/[0.15]
                to-transparent
                -translate-x-full
                group-hover:translate-x-full
                transition-transform
                duration-700
              "
            />

            <span className="relative z-10">
              Visit Live Project
            </span>

            <ArrowUpRight
              size={17}
              className="
                relative
                z-10
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </a>

          <button
            type="button"
            onClick={closeDetails}
            className="
              h-12
              px-8
              rounded-xl
              bg-white/[0.035]
              backdrop-blur-xl
              text-white/70
              text-sm
              font-semibold
              border border-white/[0.08]
              hover:bg-white/[0.07]
              hover:text-white
              hover:border-white/[0.16]
              transition-all
              duration-300
            "
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
)}
    </>
  );
}