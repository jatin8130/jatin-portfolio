import { useEffect, useState } from "react";

const links = [
  { label: "HOME", href: "#home", id: "home" },
  { label: "PORTFOLIO", href: "#portfolio", id: "portfolio" },
  { label: "RESUME", href: "#resume", id: "resume" },
  { label: "BLOG", href: "#blog", id: "blog" },
  { label: "CONTACT", href: "#contact", id: "contact" },
];

const Nav = () => {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState("home");
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;

      links.forEach((item) => {
        const section = document.getElementById(item.id);

        if (
          section &&
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActive(item.id);
        }
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, item) => {
    e.preventDefault();

    const offset = window.innerWidth < 1024 ? 400 : 25;

    if (item.id === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const section = document.getElementById(item.id);

      if (!section) return;

      window.scrollTo({
        top: section.offsetTop - offset,
        behavior: "smooth",
      });
    }

    setActive(item.id);
    setShow(false);
  };

  return (
    <>
      {/* Premium Cursor */}
      <div
        className="hidden lg:block fixed w-3 h-3 rounded-full pointer-events-none z-[999]"
        style={{
          top: mouse.y - 6,
          left: mouse.x - 6,
          border: "2px solid #FF014F",
          transition: "0.08s linear",
        }}
      />

      {/* NAVBAR */}
      <header
        className="
  sticky
  top-0
  z-50
  bg-[linear-gradient(180deg,#0D0B10_0%,#0D0B10_100%)]
  border-b
  border-white/[0.06]
"
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8">

          {/* ================= DESKTOP ================= */}
          <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center h-24">

            {/* LOGO */}
            <div className="flex items-center gap-4">
              <div className="relative group">
                <div
                  className="
                    w-14
                    h-14
                    rounded-full
                    overflow-hidden
                    bg-[#17191F]
                    border
                    border-white/10
                    shadow-[0_8px_20px_rgba(0,0,0,0.6)]
                    group-hover:scale-105
                    transition
                    duration-300
                  "
                >
                  <img
                    src="/image/photo.webp"
                    alt="Jatin Mehra"
                    className="w-full h-full object-cover"
                  />
                </div>

                <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-[#25D366] border-2 border-[#0F1115]">
                  <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-60" />
                </span>
              </div>

              <div>
                <h1 className="text-[28px] font-bold tracking-wide text-[#F5F5F5]">
                  JATIN
                </h1>

                <p className="text-[11px] uppercase tracking-[3px] text-[#9CA3AF]">
                  Full Stack Developer · 2+ Years
                </p>
              </div>
            </div>

            {/* MENU */}
            <nav className="justify-self-center">
              <ul className="flex items-center gap-9">
                {links.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item)}
                      className={`relative text-[13px] font-semibold tracking-[1.8px] uppercase transition-colors duration-300 ${active === item.id
                          ? "text-[#FF014F]"
                          : "text-[#9CA3AF] hover:text-[#FF014F]"
                        }`}
                    >
                      {item.label}

                      <span
                        className={`absolute left-1/2 -translate-x-1/2 -bottom-3 h-[3px] rounded-full bg-[#FF014F] transition-all duration-300 ${active === item.id
                            ? "w-7 shadow-[0_0_10px_rgba(255,1,79,0.8)]"
                            : "w-0"
                          }`}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* DESKTOP HIRE ME */}
            <div className="justify-self-end">
              <a
                href="https://wa.me/918130163436?text=Hi%20Jatin,%20I'm%20interested%20in%20working%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  relative
                  inline-flex
                  items-center
                  gap-2.5
                  px-6
                  py-3
                  rounded-full
                  overflow-hidden
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[1px]
                  text-white
                  border
                  border-white/[0.12]
                  bg-[radial-gradient(circle_at_20%_20%,rgba(255,1,79,0.18),transparent_45%),radial-gradient(circle_at_85%_80%,rgba(37,211,102,0.12),transparent_45%),linear-gradient(135deg,#090909,#161616_55%,#080808)]
                  shadow-[0_8px_25px_rgba(0,0,0,0.45),0_0_15px_rgba(255,1,79,0.08)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:scale-[1.03]
                  hover:border-[#FF014F]/40
                  hover:shadow-[0_10px_30px_rgba(0,0,0,0.6),0_0_22px_rgba(255,1,79,0.22)]
                  active:scale-95
                "
              >
                <span className="absolute -top-8 -left-8 w-20 h-20 rounded-full bg-[#FF014F]/10 blur-2xl transition-all duration-500 group-hover:bg-[#FF014F]/25 group-hover:scale-150" />

                <span className="absolute -bottom-8 -right-8 w-20 h-20 rounded-full bg-[#25D366]/10 blur-2xl transition-all duration-500 group-hover:bg-[#25D366]/20 group-hover:scale-150" />

                <span className="absolute inset-y-0 -left-full w-1/2 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent skew-x-[-20deg] transition-all duration-700 group-hover:left-[130%]" />

                <i className="relative z-10 ri-whatsapp-line text-[17px] text-[#25D366] transition-all duration-300 group-hover:scale-110 group-hover:text-[#4ade80]" />

                <span className="relative z-10">
                  Hire Me
                </span>

                <i className="relative z-10 ri-arrow-right-up-line text-[16px] text-white/50 transition-all duration-300 group-hover:text-[#FF014F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* ================= MOBILE HEADER ================= */}
          <div className="lg:hidden flex items-center justify-between h-20">

            {/* LOGO */}
            <div className="flex items-center gap-3">
              <div className="relative group">
                <div
                  className="
                    w-12
                    h-12
                    rounded-full
                    overflow-hidden
                    bg-[#17191F]
                    border
                    border-white/10
                    shadow-[0_8px_18px_rgba(0,0,0,0.6)]
                    group-hover:scale-105
                    transition
                    duration-300
                  "
                >
                  <img
                    src="/image/photo.webp"
                    alt="Jatin Mehra"
                    className="w-full h-full object-cover"
                  />
                </div>

                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-[#25D366] border-2 border-[#0F1115]">
                  <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-60" />
                </span>
              </div>

              <div>
                <h1 className="text-2xl font-bold text-[#F5F5F5]">
                  JATIN
                </h1>

                <p className="text-[10px] uppercase tracking-[2px] text-[#9CA3AF]">
                  Full Stack Developer
                </p>
              </div>
            </div>

            {/* MENU BUTTON */}
            <button
              onClick={() => setShow(!show)}
              className="
                w-11
                h-11
                rounded-xl
                bg-[radial-gradient(circle_at_30%_20%,rgba(255,1,79,0.12),transparent_45%),linear-gradient(135deg,#090909,#171717,#080808)]
                border
                border-white/[0.12]
                shadow-[0_8px_18px_rgba(0,0,0,0.6)]
                active:scale-95
                transition-all
                duration-300
                hover:border-[#FF014F]/40
                hover:shadow-[0_0_15px_rgba(255,1,79,0.18)]
              "
            >
              <i
                className={`text-2xl transition-all duration-300 ${show
                    ? "ri-close-line text-[#FF014F]"
                    : "ri-menu-line text-[#F5F5F5]"
                  }`}
              />
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${show ? "max-h-[520px] py-5" : "max-h-0"
            } bg-[radial-gradient(circle_at_18%_28%,rgba(255,1,79,0.12),transparent_30%),radial-gradient(circle_at_82%_72%,rgba(255,1,79,0.08),transparent_30%),linear-gradient(135deg,#050505,#0d0d0d_50%,#050505)] border-t border-white/[0.06]`}
        >
          <div className="max-w-7xl mx-auto px-5">

            <ul className="space-y-2">
              {links.map((item, i) => (
                <li
                  key={item.id}
                  className={`transition-all duration-300 ${show
                      ? "translate-x-0 opacity-100"
                      : "translate-x-5 opacity-0"
                    }`}
                  style={{
                    transitionDelay: `${i * 40}ms`,
                  }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl uppercase text-sm font-semibold tracking-wide transition-all ${active === item.id
                        ? "text-[#FF014F] bg-[#17191F] border border-[#FF014F]/20"
                        : "text-[#9CA3AF] border border-transparent hover:text-[#FF014F] hover:bg-[#17191F]"
                      }`}
                  >
                    {item.label}

                    {active === item.id && (
                      <span className="w-2 h-2 rounded-full bg-[#FF014F] shadow-[0_0_10px_rgba(255,1,79,0.8)]" />
                    )}
                  </a>
                </li>
              ))}
            </ul>

            {/* MOBILE HIRE ME */}
            <a
              href="https://wa.me/918130163436?text=Hi%20Jatin"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setShow(false)}
              className="
        group
        mt-5
        flex
        items-center
        justify-center
        gap-2
        w-full
        py-3
        rounded-full
        text-sm
        font-semibold
        uppercase
        tracking-wide
        text-white
        border
        border-white/10
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#25D366]/50
        hover:shadow-[0_0_20px_rgba(37,211,102,0.25)]
      "
              style={{
                background:
                  "linear-gradient(135deg,#090909,#161616 55%,#080808)",
                boxShadow:
                  "0 8px 20px rgba(0,0,0,0.5), 0 0 10px rgba(255,1,79,0.08)",
              }}
            >
              <i
                className="
          ri-whatsapp-line
          text-lg
          text-[#25D366]
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:text-[#4ade80]
          group-hover:drop-shadow-[0_0_6px_rgba(37,211,102,0.7)]
        "
              />

              Hire Me
            </a>

          </div>
        </div>
      </header>
    </>
  );
};

export default Nav;