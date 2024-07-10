"use client";

const LogoLoader = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <style jsx>{`
        @keyframes coreanim {
          0% {
            opacity: 0;
            transform: rotate(360deg);
          }
          50% {
            opacity: 1;
            transform: rotate(180deg);
          }
          100% {
            opacity: 0;
            transform: rotate(0deg);
          }
        }

        img {
          animation: coreanim 1s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite;
        }
      `}</style>
      <img src="/images/logo.png" className="w-16 h-16" />
    </div>
  );
};

export default LogoLoader;
