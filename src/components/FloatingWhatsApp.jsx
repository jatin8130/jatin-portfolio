const FloatingWhatsApp = () => {
  return (
    <>
      <a
        href="https://wa.me/918130163436?text=Hi%20Jatin"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-7 right-7 z-[9999] group"
      >
        {/* Outer Ripple */}
        <span className="absolute inset-0 rounded-full border-2 border-[#25D366]/40 animate-[ping_2.5s_infinite]"></span>

        {/* Glass Button */}
        <div
          className="relative w-[68px] h-[68px] rounded-full flex items-center justify-center
          backdrop-blur-xl border border-white/20
          transition-all duration-300 hover:scale-110 hover:rotate-6"
          style={{
            background: "linear-gradient(145deg,#25D366,#16A34A)",
            boxShadow:
              "0 10px 30px rgba(37,211,102,.35), 0 0 40px rgba(37,211,102,.25)",
          }}
        >
          <i className="ri-whatsapp-line text-white text-[34px]"></i>
        </div>

        {/* Tooltip */}
        <div
          className="absolute right-20 top-1/2 -translate-y-1/2
          px-3 py-2 rounded-xl text-sm font-medium
          bg-[#1E2125] text-white whitespace-nowrap
          opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0
          transition-all duration-300 pointer-events-none"
        >
          {`Let's Talk`}
        </div>
      </a>
    </>
  );
};

export default FloatingWhatsApp;