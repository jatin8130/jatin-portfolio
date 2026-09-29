const FloatingButtons = () => {
  return (
    <>
      <div className="fixed bottom-2 md:bottom-7 right-3 md:right-7 z-[9999] flex flex-col gap-3">

        {/* ================= WhatsApp ================= */}
        <a
          href="https://wa.me/918130163436?text=Hi%20Jatin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="group relative flex items-center justify-center w-[88px] h-[88px]"
        >
          {/* Premium Ripple */}
          <span className="absolute inset-0 rounded-full border border-[#25D366]/25 animate-[ping_2.8s_cubic-bezier(0,0,0.2,1)_infinite]"></span>

          {/* Rotating Text */}
          <svg
            className="absolute inset-0 w-full h-full rotate-text"
            viewBox="0 0 100 100"
          >
            <defs>
              <path
                id="whatsappCircle"
                d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
              />
            </defs>

            <text
              fontSize="10.5"
              fontWeight="800"
              letterSpacing="1.8"
              fill="#25D366"
            >
              <textPath href="#whatsappCircle" startOffset="0%">
                WHATSAPP • CHAT • WHATSAPP • CHAT •
              </textPath>
            </text>
          </svg>

          {/* Button */}
          <div
            className="relative w-[62px] h-[62px] rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
            style={{
              background: "linear-gradient(145deg,#25D366,#16A34A)",
              boxShadow:
                "0 8px 20px rgba(37,211,102,.20),0 0 16px rgba(37,211,102,.12),inset 0 1px 2px rgba(255,255,255,.35)",
            }}
          >
            <i className="ri-whatsapp-line text-white text-[31px]"></i>
          </div>
        </a>
      </div>

      <style>{`
        .rotate-text {
          animation: rotateText 12s linear infinite;
          transform-origin: center;
        }

        @keyframes rotateText {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 640px) {
          .rotate-text {
            animation-duration: 10s;
          }
        }
      `}</style>
    </>
  );
};

export default FloatingButtons;