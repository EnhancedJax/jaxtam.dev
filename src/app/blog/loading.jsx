
"use client";

export default function Loading() {
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
          animation: coreanim 1.5s cubic-bezier(0.76, 0, 0.24, 1) infinite;
        }
      `}</style>
      <img src="/images/iconlogo.png" className="w-16 h-16" />
    </div>
  );
}
