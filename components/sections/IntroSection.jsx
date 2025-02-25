import { ArrowDownToDotIcon, MailIcon, MapPin } from "lucide-react"; 
import { ResumeDrawer } from "../drawers/ResumeDrawer";

export default function IntroSection({ data }) {
  return (
    <div className="relative flex flex-col justify-start sm:flex-row sm:items-center gap-4 sm:gap-8 p-4 rounded-tr-[64px] rounded-br-[64px] rounded-tl-[100px] rounded-bl-[100px]">
      <div className="flex w-full sm:w-fit justify-between items-start">
        <div
          className="relative w-32 rounded-full overflow-hidden"
          onContextMenu={(e) => e.preventDefault()}
        >
          <img
            alt={data?.intro?.name}
            src={data?.intro?.avatar}
            aria-label={data?.intro?.name}
            height={512}
            width={512}
            className="w-32 aspect-1 rounded-full border-2 border-primary-700 dark:border-primary-500"
            draggable="false"
            preload="true"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">
            {data?.intro?.greetings}
          </h1>
          <span className="flex items-center gap-2">
            <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-200">
              {data?.intro?.tagline}
            </span>
            <span className="flex items-center gap-1 text-sm font-light text-neutral-500 dark:text-neutral-400">
              <MapPin className="w-4 text-neutral-500 dark:text-neutral-400" />
              {data?.intro?.location}
            </span>
          </span>
        </div>
        <div className="flex gap-2 items-center flex-wrap -mx-4">
          {data?.resume?.show && (
            <ResumeDrawer data={data} label={data?.resume?.label} />
          )}
          {data?.contact?.show && (
            <button
              key={"contact"}
              onClick={() => document.getElementById("contact").scrollIntoView({behavior: "smooth"})}
              className="hover:shadow-primary-700/25 hover:shadow-[0_0_2px_0_rgba(80,80,80,0.01)] group flex items-center gap-2 w-full sm:w-fit text-sm text-left font-semibold transition-all px-4 py-3 rounded-xl text-primary-700 dark:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-950"
            >
              <div className="flex flex-col">
                <ArrowDownToDotIcon strokeWidth={1.5} className="w-4 h-0 transition-all duration-500 group-hover:w-4 group-hover:h-4" />
                <MailIcon strokeWidth={1.5} className="w-4 h-4 transition-all duration-500 group-hover:h-0 stroke-neutral-500 dark:stroke-neutral-400" />
              </div>
              <p className="text-sm">{data?.contact?.label || "Contact"}</p>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
