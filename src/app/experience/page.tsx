'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'
import Image from 'next/image'

const experiences = [
  {
    id: 1,
    company: "Shift5",
    position: "Software Engineering Intern",
    location: "Washington, D.C",
    duration: "June 2025 - Present",
    description: "Developed and deployed UI bug fixes and usability enhancements across React.js web application, supporting the on-time monthly release of stable product updates.",
    achievements: [
      "Collaborated with product managers, field engineers, and QA to identify and resolve front-end issues",
      "Optimized data fetching architecture by consolidating API calls into higher-order components",
      "Reduced network calls by over 40% through elimination of redundant requests"
    ],
    technologies: ["React.js", "JavaScript", "API Integration", "Data Visualization"],
    logo: "/logos/shift5.jpeg",
    link: "#"
  },
  {
    id: 2,
    company: "Lockheed Martin",
    position: "Software Engineering Intern",
    location: "Washington, D.C",
    duration: "June 2024 - December 2024",
    description: "Developed backend and deployed internal website which consolidated multiple messy data sources into one tool to allow users to build custom satellites on user friendly interface.",
    achievements: [
      "Led backend team of 3 interns in creating REST API to handle requests from client to PostgreSQL database",
      "Used Express framework integrated with Sequelize layer to simplify queries",
      "Selected to stay on project and continue to develop stretch goals throughout fall of 2024"
    ],
    technologies: ["Node.js", "PostgreSQL", "Express", "Sequelize", "REST API"],
    logo: "/logos/lockheed-martin.png",
    link: "#"
  },
  {
    id: 3,
    company: "Lockheed Martin",
    position: "Software Engineering Intern",
    location: "Highlands Ranch, Colorado",
    duration: "May 2023 - August 2023",
    description: "Developed back end of GUI for an autonomous mission tasking system from the ground up using Django for interface and Flask for testing.",
    achievements: [
      "Created parsing algorithm to process logs from tasking software into performance tracking metrics",
      "Designed GUI database using SQLite to decrease average query time by 45%",
      "Built comprehensive testing framework using Flask for system validation"
    ],
    technologies: ["Django", "Flask", "SQLite", "Python", "Algorithm Design"],
    logo: "/logos/lockheed-martin.png",
    link: "#"
  }
]

export default function Experience() {
  return (
    <div className="page-transition section-spacing">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
            Professional Experience
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A journey through roles and responsibilities that have shaped my professional growth
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="bg-muted/30 border border-border rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:border-accent">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6 gap-6">
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-6 mb-2">
                      <div className="flex items-center gap-3">
                        <h3 className="text-2xl font-semibold">{exp.position}</h3>
                        <ExternalLink
                          className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                        />
                      </div>
                      <div className="flex-shrink-0">
                        <div className="relative w-64 h-32 lg:w-80 lg:h-40 flex items-center justify-center">
                          <Image
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>
                    <h4 className="text-xl text-muted-foreground font-medium mb-3">{exp.company}</h4>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="mb-6">
                  <h5 className="font-medium mb-3">Key Achievements</h5>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="font-medium mb-3">Technologies</h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-accent/50 text-accent-foreground text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}