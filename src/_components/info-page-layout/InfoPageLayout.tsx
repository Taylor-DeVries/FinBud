import { ReactNode } from "react";

const CONTAINER_CLASSES =
  "flex flex-col items-start w-full max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto my-10 px-6 sm:px-10 lg:px-16 text-gray-50 dark:text-[#333]";

const H1_CLASSES = "text-3xl md:text-4xl lg:text-4xl font-bold";
const HR_CLASSES =
  "border-gray-50 dark:border-[#333] border-4 my-4 w-full self-stretch";

/** Shared h2 styling for info page section headings. Use for Our Mission, Our Approach, etc. */
export const INFO_SECTION_HEADING =
  "text-xl md:text-2xl lg:text-3xl font-bold mb-4";

/** Shared section wrapper. Use for each major section (Our Mission, Our Approach, etc.). */
export const INFO_SECTION = "mb-8 w-full";

/** Spacing between section heading and content. */
export const INFO_SECTION_CONTENT = "mt-2";

/** Body text sizes - use on p or div containing paragraphs. */
export const INFO_BODY =
  "text-sm sm:text-sm md:text-base lg:text-lg leading-relaxed";

interface InfoPageLayoutProps {
  title: string;
  children: ReactNode;
}

export default function InfoPageLayout({ title, children }: InfoPageLayoutProps) {
  return (
    <div className="flex-1 bg-light_blue_infoPage overflow-y-auto h-screen">
      <div className={CONTAINER_CLASSES}>
        <h1 className={H1_CLASSES}>{title}</h1>
        <hr className={HR_CLASSES} />
        {children}
      </div>
    </div>
  );
}
