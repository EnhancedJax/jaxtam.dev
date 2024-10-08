// correct name should be loading.jsx. Changed to disable the nextjs loading screen and handled with the client background component
import LogoLoader from "../components/LogoLoader";

export default function Loading() {
  return (
    <div className="flex items-center justify-center w-full h-full ">
      <LogoLoader />
    </div>
  );
}
