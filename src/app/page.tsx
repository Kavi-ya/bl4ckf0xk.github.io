import { Hero } from "@/components/sections/Hero";
import { ProjectGrid } from "@/components/sections/ProjectGrid";
import { BlogList } from "@/components/sections/BlogList";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Hero />
      {/* <ProjectGrid />
      <BlogList /> */}
    </div>
  );
}
