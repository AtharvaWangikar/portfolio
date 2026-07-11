import React from "react"
import Image from "next/image"
import SlideUp from "./SlideUp"

const projects = [
  {
    name: "ABBPS Payment Platform Enhancements",
    description:
      "Led business analysis and delivery coordination for multiple enhancements to a critical payment platform. Collaborated with business, development, QA, infrastructure, and security teams to gather requirements, manage Agile sprints, coordinate UAT, and support successful production releases.",
    image: "/abbps.jpg",
    skills:
      "Business Analysis • Agile • Jira • UAT • Release Management • Payments",
  },
  {
    name: "NACH Technical Upgrade",
    description:
      "Coordinated the modernization of the NACH payment platform while simultaneously supporting enhancements and operational requirements for the live production system. Managed priorities, dependencies, risks, and stakeholder communication across multiple teams.",
    image: "/nach.jpg",
    skills:
      "Stakeholder Management • Project Coordination • Risk Management • Agile • Payments",
  },
  {
    name: "Business Continuity Planning (Direct Settlement)",
    description:
      "Supported the implementation of a disaster recovery and direct settlement solution by coordinating infrastructure provisioning, environment readiness, access management, testing activities, and cross-functional delivery across business and technical teams.",
    image: "/bcp.jpg",
    skills:
      "Business Continuity • Infrastructure • UAT • Cloud • Cross-functional Coordination",
  },
  {
    name: "Automation Testing Initiative",
    description:
      "Contributed to an automation testing initiative aimed at reducing manual testing effort by collaborating with multiple application teams, defining business scenarios, validating test coverage, and improving release efficiency.",
    image: "/automation.jpg",
    skills:
      "Automation • Business Analysis • Process Improvement • Agile • Testing",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Professional Experience
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>

      <div className="flex flex-col space-y-24">
        {projects.map((project, idx) => (
          <SlideUp key={idx} offset="-300px 0px -300px 0px">
            <div className="flex flex-col md:flex-row md:space-x-12">
              <div className="md:w-1/2">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={1000}
                  height={700}
                  className="rounded-xl shadow-xl"
                />
              </div>

              <div className="mt-8 md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">
                  {project.name}
                </h2>

                <p className="text-lg leading-8 text-neutral-600 dark:text-neutral-400 mb-5">
                  {project.description}
                </p>

                <span className="inline-block rounded-lg bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-800 dark:bg-cyan-900 dark:text-cyan-100">
                  {project.skills}
                </span>
              </div>
            </div>
          </SlideUp>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
