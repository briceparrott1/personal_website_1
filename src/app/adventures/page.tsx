'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Camera } from 'lucide-react'
import Image from 'next/image'

const adventures = [
  {
    id: 1,
    title: "Journey Through Japan",
    location: "Tokyo, Kyoto, Osaka",
    date: "March 2023",
    duration: "14 days",
    description: "An immersive cultural experience exploring ancient temples, modern cities, and traditional cuisine. Witnessed cherry blossoms in full bloom and participated in local festivals.",
    highlights: [
      "Visited 15 temples and shrines across three cities",
      "Participated in traditional tea ceremony",
      "Hiked Mount Fuji base trails",
      "Experienced authentic kaiseki dining"
    ],
    image: "/api/placeholder/600/400",
    tags: ["Culture", "Food", "History", "Nature"]
  },
  {
    id: 2,
    title: "Nordic Road Trip",
    location: "Norway, Sweden, Finland",
    date: "July 2022", 
    duration: "21 days",
    description: "Epic road trip through Scandinavian countries during the midnight sun season. Experienced pristine wilderness, modern design, and incredible natural phenomena.",
    highlights: [
      "Drove 3,500km through three countries",
      "Witnessed midnight sun in northern Norway",
      "Stayed in glass igloos under northern lights",
      "Explored Norwegian fjords by kayak"
    ],
    image: "/api/placeholder/600/400",
    tags: ["Road Trip", "Nature", "Photography", "Adventure"]
  },
  {
    id: 3,
    title: "Patagonia Expedition",
    location: "Chile & Argentina",
    date: "November 2021",
    duration: "18 days", 
    description: "Trekking adventure through one of the world's last wilderness frontiers. Challenged physical limits while experiencing raw natural beauty.",
    highlights: [
      "Completed W Trek in Torres del Paine",
      "Climbed Cerro Torre base camp",
      "Spotted condors and guanacos in wild",
      "Camped under Southern Hemisphere stars"
    ],
    image: "/api/placeholder/600/400",
    tags: ["Trekking", "Wildlife", "Camping", "Challenge"]
  },
  {
    id: 4,
    title: "Morocco Cultural Immersion",
    location: "Marrakech, Fez, Sahara",
    date: "September 2020",
    duration: "12 days",
    description: "Deep dive into Moroccan culture, from bustling souks to serene desert landscapes. Learned traditional crafts and stayed with Berber families.",
    highlights: [
      "Spent 3 nights in Sahara desert camp",
      "Learned traditional pottery in Fez",
      "Navigated labyrinthine medinas",
      "Rode camels at sunset over dunes"
    ],
    image: "/api/placeholder/600/400", 
    tags: ["Culture", "Desert", "Crafts", "Local Living"]
  }
]

export default function Adventures() {
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
            Adventures & Travels
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Exploring the world one journey at a time, collecting stories and experiences from diverse cultures
          </p>
        </motion.div>

        <div className="grid gap-8 lg:gap-12">
          {adventures.map((adventure, index) => (
            <motion.article
              key={adventure.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-muted">
                    <div className="absolute inset-0 bg-gradient-to-br from-muted via-accent/20 to-muted flex items-center justify-center">
                      <Camera className="w-16 h-16 text-muted-foreground/50" />
                    </div>
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {adventure.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {adventure.location}
                    </div>
                    <span>{adventure.duration}</span>
                  </div>

                  <h2 className="text-3xl font-semibold mb-4 group-hover:text-accent-foreground transition-colors">
                    {adventure.title}
                  </h2>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {adventure.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="font-medium mb-3">Adventure Highlights</h3>
                    <ul className="space-y-2">
                      {adventure.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {adventure.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-accent/50 text-accent-foreground text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground italic">
            "Travel makes one modest. You see what a tiny place you occupy in the world."
          </p>
          <p className="text-sm text-muted-foreground mt-2">— Gustave Flaubert</p>
        </motion.div>
      </div>
    </div>
  )
}