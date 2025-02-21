import { CirclePauseIcon, CirclePlayIcon } from "lucide-react";
import { useAccessibility } from "../context/AccessibilityContext";

export default function AnimationToggle({ className }) {
  const { isAnimated, setIsAnimated } = useAccessibility();

  const toggleAnimation = () => {
    setIsAnimated(!isAnimated);
    if (isAnimated) {
      document.body.classList.add("reduce-animation");
      sessionStorage.setItem("isAnimated", "false");
    } else {
      document.body.classList.remove("reduce-animation");
      sessionStorage.removeItem("isAnimated");
    }
  };

  return (
    <button
      onClick={toggleAnimation}
      className={`${className} w-full h-fit p-2 grid bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-600 text-neutral-600 dark:text-neutral-300 rounded-full transition-all`}
      aria-label={isAnimated ? "Reduce animations" : "Enable animations"}
      title={isAnimated ? "Reduce animations" : "Enable animations"}
    >
      <div className="flex items-center">
        {isAnimated ? (
          <>
            <CirclePauseIcon strokeWidth={1.5} className="w-6 h-6" />
            <p className="text-sm mx-2">Reduce Motion</p>
          </>
        ) : (
          <>
            <CirclePlayIcon strokeWidth={1.5} className="w-6 h-6" />
            <p className="text-sm mx-2">Enable Motion</p>
          </>
        )}
      </div>
    </button>
  );
}
