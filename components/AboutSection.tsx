import React from "react"
import { useState } from "react";

const [showResume, setShowResume] = useState(false);
{showResume && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
    <div className="relative w-11/12 h-5/6 bg-white rounded-xl shadow-2xl">

      <button
        onClick={() => setShowResume(false)}
        className="absolute top-4 right-4 text-2xl font-bold hover:text-red-500"
      >
        ✕
      </button>

      <iframe
        src="/AtharvaWangikarResume.pdf"
        className="w-full h-full rounded-xl"
      />
    </div>
  </div>
)}
const Gskills = [
   { skill: "Business Analysis" },
  { skill: "Stakeholder Management" },
  { skill: "Agile & Scrum" },
  { skill: "Requirements Gathering" },
  { skill: "Project Coordination" },
  { skill: "UAT & Release Management" },
  { skill: "Risk & Issue Management" },
  { skill: "Process Improvement" },
]

const Tskills = [
  { skill: "Python" },
  { skill: "SQL" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "C/C++" },
  { skill: "Java" },
]
const Toskills = [
  { skill: "Jira" },
  { skill: "Confluence" },
  { skill: "Oracle Database" },
  { skill: "PostgreSQL" },
  { skill: "AWS" },
  { skill: "Amazon RDS" },
  { skill: "Kubernetes (EKS)" },
  { skill: "Dynatrace" },
  { skill: "Bitbucket" },
  { skill: "Jenkins" },
  { skill: "Git" },
  { skill: "Power BI" },
  { skill: "IBM MQ" },
  { skill: "OpenSearch" },
  { skill: "REST APIs" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-cyan-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
  Hi, my name is Atharva Wangikar and I am a{" "}
  <span className="font-bold">Business Systems Analyst</span> specializing in{" "}
  <span className="font-bold">Payments Technology</span>, based in Mumbai,
  India.
</p>

<br />

<p>
  I currently work on enterprise payment systems, collaborating with business,
  development, QA, infrastructure, cloud, and security teams to deliver
  high-impact financial solutions. My experience spans requirements gathering,
  Agile delivery, stakeholder management, UAT, production releases, and
  cross-functional project coordination.
</p>

<br />

<p>
  I have contributed to multiple payment initiatives including ABBPS
  enhancements, NACH technical upgrades, Business Continuity Planning, and
  automation projects. I enjoy solving complex business problems, improving
  processes, and bridging the gap between business and technology.
</p>

<br />

<p>
  Outside of work, I enjoy travelling, reading, exploring emerging
  technologies, and staying updated with developments in cloud computing,
  fintech, and artificial intelligence.
</p>

<br />

<p>
  I believe in{" "}
  <span className="font-bold text-cyan-500">
    continuous learning and delivering meaningful impact
  </span>
  . My goal is to grow into Technical Program Management and Product leadership
  roles while continuing to build expertise in Payments, Cloud, and AI-enabled
  solutions.
</p>
   
            <br />
            <div>
              <button className="text-neutral-100 font-semibold px-6 py-3 bg-cyan-600 rounded shadow hover:bg-blue-700">
                <a className="button" href="./Atharva_Wangikar_BSA_Resume_Payments.pdf" download="Atharva_Wangikar_BSA_Resume_Payments.pdf">
                  Download Resume
                </a>
              </button>
               <button onClick={() => setShowResume(true)} className="text-neutral-100 font-semibold px-6 py-3 bg-cyan-600 rounded shadow hover:bg-blue-700">
                   View Resume
                 </button>
            </div>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {Gskills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-red-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <h1 className="text-2xl font-bold mb-6">Programming Languages</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {Tskills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-amber-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <h1 className="text-2xl font-bold mb-6">Tools & Technologies </h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {Toskills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-emerald-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
