export function ResumeContent({ src }) {
    return (
      <div className="w-full h-full mx-auto sm:rounded-t-xl overflow-hidden">
        <iframe
          className="w-full h-full rounded-t-3xl"
          src={src}
          allow="autoplay"
        />
      </div>
    );
  }