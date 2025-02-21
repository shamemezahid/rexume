export default function SectionWithTitle({ pagetitle, content }) {
  return (
    <div className="section flex flex-col gap-4 p-4 rounded-xl">
      <h2 className="text-2xl font-bold text-primary-800 dark:text-primary-300">
        {pagetitle}
      </h2>
      {content} 
    </div>
  );
}
