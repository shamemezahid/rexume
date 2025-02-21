
import Image from "next/image";

export default function LoadingScreen() {
  return (
    <div className="bg-[#313131] grid w-full h-screen place-items-center transition-all">
      <Image
        src="/loaders/loading.svg"
        alt="Loading Animation"
        width={256}
        height={256}
        className="w-16 animate-pulse"
      />
    </div>
  );
}