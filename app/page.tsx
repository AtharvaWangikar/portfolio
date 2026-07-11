import AboutSection from "@/components/AboutSection"
import HeroSection from "@/components/HeroSection"
import ProjectsSection from "@/components/ProjectsSection"
import WorkEx from "@/components/WorkEx"
import ProfessionExperience from "@/components/ProfessionExperience"
export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <HeroSection />
      <AboutSection />
      /*<WorkEx/>
      <ProjectsSection />*/
      <ProfessionExperience/>
    </main>
  )
}
