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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const move = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);

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

    const offset = window.innerWidth < 1024 ? 380 : 70;

    if (item.id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
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

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#ECF0F3]/90 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
            : "bg-[#ECF0F3]/80 backdrop-blur-lg"
        } border-b border-[#d9e0ea]`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          {/* Desktop */}
          <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center h-24">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <div className="relative group">
                <div className="w-14 h-14 rounded-full overflow-hidden border border-white/80 shadow-[6px_6px_16px_#c8d0e7,-6px_-6px_16px_#ffffff] group-hover:scale-105 transition duration-300">
                  <img
                    src="/image/photo.png"
                    alt="Jatin Mehra"
                    className="w-full h-full object-cover"
                  />
                </div>

                <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-[#25D366] border-2 border-[#ECF0F3]">
                  <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-60"></span>
                </span>
              </div>

              <div>
                <h1 className="text-[28px] font-bold tracking-wide text-[#1E2125]">
                  JATIN
                </h1>

                <p className="text-[11px] uppercase tracking-[3px] text-gray-500">
                  Full Stack Developer · 2+ Years
                </p>
              </div>
            </div>

            {/* Menu */}
            <nav className="justify-self-center">
              <ul className="flex items-center gap-9">
                {links.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item)}
                      className={`relative text-[13px] font-semibold tracking-[1.8px] uppercase transition-all duration-300 ${
                        active === item.id
                          ? "text-[#FF014F]"
                          : "text-[#545961] hover:text-[#FF014F]"
                      }`}
                    >
                      {item.label}

                      <span
                        className={`absolute left-1/2 -translate-x-1/2 -bottom-3 h-[3px] rounded-full bg-[#FF014F] transition-all duration-300 ${
                          active === item.id ? "w-7 shadow-[0_0_10px_#FF014F]" : "w-0"
                        }`}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA */}
            <div className="justify-self-end">
              <a
                href="https://wa.me/918130163436?text=Hi%20Jatin,%20I'm%20interested%20in%20working%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03]"
                style={{
                  background:
                    "linear-gradient(135deg,#25D366 0%,#16a34a 100%)",
                  boxShadow:
                    "0 0 15px rgba(37,211,102,.55),0 12px 28px rgba(22,163,74,.25)",
                }}
              >
                <i className="ri-whatsapp-line mr-2 text-base"></i>
                Hire Me
              </a>
            </div>
          </div>

          {/* Mobile */}
          <div className="lg:hidden flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-full overflow-hidden shadow-[5px_5px_12px_#c8d0e7,-5px_-5px_12px_#ffffff]">
                  <img
                    src="/image/photo.png"
                    alt="Jatin Mehra"
                    className="w-full h-full object-cover"
                  />
                </div>

                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-[#25D366] border-2 border-[#ECF0F3]">
                  <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-60"></span>
                </span>
              </div>

              <div>
                <h1 className="text-2xl font-bold text-[#1E2125]">JATIN</h1>

                <p className="text-[10px] uppercase tracking-[2px] text-gray-500">
                  Full Stack Developer
                </p>
              </div>
            </div>

            <button
              onClick={() => setShow(!show)}
              className="w-11 h-11 rounded-xl bg-[#ECF0F3] shadow-[5px_5px_12px_#c8d0e7,-5px_-5px_12px_#ffffff] active:scale-95 transition"
            >
              <i
                className={`text-2xl text-[#1E2125] ${
                  show ? "ri-close-line" : "ri-menu-line"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            show ? "max-h-[520px] py-5" : "max-h-0"
          } bg-[#ECF0F3] border-t border-[#d9e0ea]`}
        >
          <div className="max-w-7xl mx-auto px-5">
            <ul className="space-y-2">
              {links.map((item, i) => (
                <li
                  key={item.id}
                  className={`transition-all duration-300 ${
                    show
                      ? "translate-x-0 opacity-100"
                      : "translate-x-5 opacity-0"
                  }`}
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl uppercase text-sm font-semibold tracking-wide transition-all ${
                      active === item.id
                        ? "text-[#FF014F] bg-white/60 shadow-[4px_4px_10px_#d1d8e6,-4px_-4px_10px_#ffffff]"
                        : "text-gray-700 hover:text-[#FF014F] hover:bg-white/40"
                    }`}
                  >
                    {item.label}

                    {active === item.id && (
                      <span className="w-2 h-2 rounded-full bg-[#FF014F]" />
                    )}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/918130163436?text=Hi%20Jatin"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setShow(false)}
              className="mt-5 flex items-center justify-center gap-2 w-full py-3 rounded-full text-sm font-semibold uppercase tracking-wide text-white hover:-translate-y-1 transition-all duration-300"
              style={{
                background:
                  "linear-gradient(135deg,#25D366 0%,#16a34a 100%)",
                boxShadow:
                  "0 0 15px rgba(37,211,102,.55),0 10px 25px rgba(22,163,74,.25)",
              }}
            >
              <i className="ri-whatsapp-line text-lg"></i>
              Hire Me
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Nav;