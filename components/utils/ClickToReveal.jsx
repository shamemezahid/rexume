import { CircleCheckIcon, CopyIcon, EyeClosedIcon, EyeIcon } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { toast, Toaster } from "sonner";

export function ClickToReveal({ content }) {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsRevealed(false);
        setIsCopied(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="text-sm w-full sm:w-fit flex flex-col sm:flex-row sm:justify-between dark:bg-neutral-700 bg-neutral-200/50 rounded-xl overflow-hidden"
    >
      <Toaster
        position="top-center"
        richColors={true}
        theme={
          document.body.classList.contains("dark") ? "dark" : "light"
        }
      />
      <a
        onClick={() => {
          setIsRevealed(!isRevealed);
          setIsCopied(false);
        }}
        title="Click to hide email"
        className="cursor-pointer w-full flex items-center px-4 py-3 font-normal dark:text-primary-400 text-primary-700 hover:text-primary-500"
      >
        <EyeIcon
          strokeWidth={1.5}
          className={
            isRevealed
              ? "w-0 h-0 transition-all"
              : "w-5 h-5 dark:text-neutral-400 text-neutral-500 transition-all"
          }
        />
        <EyeClosedIcon
          strokeWidth={1.5}
          className={
            isRevealed
              ? "w-5 h-5 dark:text-neutral-400 text-neutral-500 transition-all"
              : "w-0 h-0 transition-all"
          }
        />

        {isRevealed && (
          <p className="ml-3 transition-all duration-500">{content}</p>
        )}
        {!isRevealed && (
          <p className="ml-3 transition-all duration-500">
            Click to reveal email
          </p>
        )}
      </a>
      <a
        className={
          isRevealed
            ? "cursor-pointer w-full sm:w-fit flex gap-3 items-center px-4 py-3 dark:bg-neutral-600 bg-neutral-300 hover:bg-neutral-200 whitespace-nowrap transition-all duration-100"
            : "w-0 h-0 transition-all duration-100"
        }
        onClick={() =>
          navigator.clipboard
            .writeText(content)
            .then(setIsCopied(true))
            .then(setIsRevealed(false))
            .then(toast.success("Email copied to clipboard"))
            .catch((err) => console.error("Error copying to clipboard", err))
        }
        title="Click to copy email"
      >
        {isCopied ? (
          <>
            <CircleCheckIcon strokeWidth={1.5} className="w-5 h-5 text-neutral-400" />
            <p>Copied</p>
          </>
        ) : (
          <>
            <CopyIcon strokeWidth={1.5} className="w-5 h-5 text-neutral-400" />
            <p>Click to Copy</p>
          </>
        )}
      </a>
    </div>
  );
}
