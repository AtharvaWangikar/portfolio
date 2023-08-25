import React from "react"
const Gskills = [
  { skill: "Data Analysis" },
  { skill: "Data Visualization" },
  { skill: "Agile" },
  { skill: "Web Development" },
  { skill: "Teamwork" },
  { skill: "Adaptability" },

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
  { skill: "Spreadsheets" },
  { skill: "MySQL/Postgres/SSMS" },
  { skill: "Power BI" },
  { skill: "MongoDB" },
  { skill: "Tableau" },
  { skill: "Google Cloud" },
  { skill: "Netlify" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "Vercel" },
  { skill: "Jupyter Notebooks" },
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
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer
              based in Pune.
            </p>
            <br />
            <p>
              I will graduate from Dr D Y Patil Institute of Technology, Pune  in 2024 with a BE in Computer Engineering.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From reading, riding, traveling, listening to music, watching TV, exploring and staying updated on Science & Technology.
              I am always seeking new experiences and love to keep myself
              engaged and learning new things.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-cyan-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities.
            </p>
            <br />
            <div>
              <button className="text-neutral-100 font-semibold px-6 py-3 bg-cyan-600 rounded shadow hover:bg-blue-700">
                <a className="button" href="./AtharvaWangikarResume.pdf" download="AtharvaWangikarResume.pdf">
                  Download Resume
                </a>
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
