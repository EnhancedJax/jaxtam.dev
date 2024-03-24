'use client';

const LogoLoader = () => {
  return (
    <div className="flex items-center h-screen">
      <style jsx>{`
        @keyframes coreanim {
          0% {
            transform: rotate(360deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }

        img {
          animation: coreanim 1s linear infinite;
        }
      `}</style>
      <img src="/images/iconlogo.png" className="w-16 h-16" />
    </div>
  );
};

export default LogoLoader;
