import { useEffect, useState } from "react";

const links = [
  { label: "HOME", href: "#home" },
  { label: "PORTFOLIO", href: "#portfolio" },
  { label: "RESUME", href: "#resume" },
  { label: "CONTACTS", href: "#contact" },
];

const Nav = () => {
  const [show, setShow] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setMouse({ x: e.clientX, y: e.clientY });

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#ECF0F3]/95 backdrop-blur-md border-b border-gray-200">

      {/* Cursor */}

      <div
        className="hidden lg:block fixed w-3 h-3 rounded-full pointer-events-none"
        style={{
          top: mouse.y - 4,
          left: mouse.x - 4,
          border: "2px solid #FF014F",
          transition: "0.08s linear",
        }}
      />

      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Desktop */}

        <div className="hidden lg:flex items-center justify-between h-28">

          {/* Logo */}

          <div className="flex items-center gap-4">

            <div
              className="w-16 h-16 rounded-full overflow-hidden
              shadow-[5px_5px_15px_#c8d0e7,-5px_-5px_15px_#ffffff]"
            >
              <img
                src="/image/photo.png"
                alt="Jatin"
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="text-4xl font-bold tracking-wide text-[#1E2125]">
              JATIN
            </h1>

          </div>

          {/* Navigation */}

          <nav>
            <ul className="flex items-center gap-10">
              {links.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[15px] uppercase tracking-wide text-gray-700 hover:text-[#FF014F] transition duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

        </div>

        {/* Mobile */}

        <div className="lg:hidden flex items-center justify-between h-20">

          <div className="flex items-center gap-3">

            <div
              className="w-12 h-12 rounded-full overflow-hidden
              shadow-[4px_4px_12px_#c8d0e7,-4px_-4px_12px_#ffffff]"
            >
              <img
                src="/image/photo.png"
                alt="Jatin"
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="text-3xl font-bold text-[#1E2125]">
              JATIN
            </h1>

          </div>

          <button
            onClick={() => setShow(!show)}
            className="w-12 h-12 rounded-xl bg-[#ECF0F3]
            shadow-[4px_4px_12px_#c8d0e7,-4px_-4px_12px_#ffffff]"
          >
            <i className={`text-2xl ${show ? "ri-close-line" : "ri-menu-line"}`}></i>
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          show ? "max-h-96 py-5" : "max-h-0"
        } bg-[#ECF0F3] border-t border-gray-200`}
      >
        <div className="max-w-7xl mx-auto px-5">
          <ul className="space-y-2">
            {links.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setShow(false)}
                  className="block py-3 px-4 rounded-xl uppercase text-sm tracking-wide text-gray-700 hover:text-[#FF014F] hover:bg-white/40 transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </header>
  );
};

export default Nav;