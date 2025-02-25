import React from "react";
import { FileTextIcon, SquareArrowUpIcon } from "lucide-react"; // Importing from lucide-react
import { Drawer } from "vaul";
import SeparatorLine from "../utils/SeparatorLine";

const TriggerButton = React.forwardRef(({ icon: Icon, label, title, styles, ...props }, ref) => (
  <button
    ref={ref} 
    title={title}
    className={`hover:shadow-primary-700/25 hover:shadow-[0_0_2px_0_rgba(80,80,80,0.01)] group flex items-center gap-2 w-full sm:w-fit text-sm text-left font-semibold transition-all px-4 py-3 rounded-xl text-primary-700 dark:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-950 ${styles}`}
    {...props}
  >
    <div className="flex flex-col">
      <FileTextIcon strokeWidth={1.5} className="w-4 h-4 transition-all duration-500 group-hover:h-0 stroke-neutral-500 dark:stroke-neutral-400" />
      <SquareArrowUpIcon strokeWidth={1.5} className="w-4 h-0 transition-all duration-500 group-hover:w-4 group-hover:h-4" /> 
    </div>
    {label}
  </button>
));

TriggerButton.displayName = 'TriggerButton';

export function CommonDrawer({ 
  triggerIcon, 
  triggerLabel, 
  triggerTitle, 
  triggerStyles,
  renderContent,
  drawerTitle,
  drawerSubtitle,
  contentStyles
}) {
  return (
    <Drawer.Root shouldScaleBackground={true}>
      <Drawer.Trigger asChild>
        <TriggerButton 
          icon={triggerIcon} 
          label={triggerLabel} 
          title={triggerTitle} 
          styles={triggerStyles}
        />
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/75 backdrop-blur-3xl" />
        <Drawer.Content className={`cursor-pointer bg-neutral-50 dark:bg-neutral-800 flex flex-col items-center pt-12 pb-0 px-4 sm:px-8 gap-6 max-w-6xl mx-auto rounded-t-3xl h-[92%] fixed bottom-0 left-0 right-0 ${contentStyles}`}>
          <div 
            className="absolute top-4 w-10 min-h-2 h-2 rounded-full dark:bg-neutral-500 bg-neutral-300"
            title="Drag down to close drawer"
          />
          <div className="cursor-default relative w-full h-full flex flex-col gap-4 dark:text-neutral-50 text-neutral-700">
            <div className={`${drawerSubtitle ? 'w-fit' : 'w-full text-center'}`}>
              <p className="dark:text-neutral-50 text-neutral-700 text-xl font-semibold">{drawerTitle}</p>
              {drawerSubtitle && <p className="dark:text-neutral-400 text-neutral-500 text-sm mt-1">{drawerSubtitle}</p>}
            </div>
            <SeparatorLine />
            {renderContent()}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}