import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "IPL Analysis Dashboard",
    description:
      "Comprehensive visualization tool for analyzing Indian Premier League matches, team and player statistics. Focuses on KPIs such as team performance, player performance, season records by teams,etc.",
    image: "/ipl.png",
    github: "https://github.com/AtharvaWangikar?=repositories",
    link: "/",
  },
  {
    name: "COVID 19 Exploratory Analysis",
    description: " Processed the comprehensive CoVID 19 dataset, and uncovered valuable conclusions and insights about the COVID-19 pandemic.",
    image: "/cov.png",
    github: "https://github.com/AtharvaWangikar/Analysis_of_COVID19",
    link: "/",
  },
  {
    name: "Netflix Clone using NextJS",
    description:
      "Full Stack project using React for frontend, Next for Server-side rendering, TailwindCSS for styling, Prisma for data Abstraction, MongoDB for storage, Next-Auth for Authentication, Typescript for scripting and Vercel for Deployment.",
    image: "/nf.png",
    github: "https://github.com/AtharvaWangikar/netflix-clone",
    link: "https://netflix-clone-spidey.vercel.app/",
  },
  {
    name: "Personal Expense Tracker and Dashboard",
    description:
      "Currently working on it.",
    image: "/cs.jpg",
    github: "https://github.com/AtharvaWangikar/e",
    link: "/",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}

      </div>
    </section>
  )
}

export default ProjectsSection
