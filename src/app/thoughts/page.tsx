'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { formatDate } from '@/lib/utils'

const articles = [
  {
    id: 1,
    title: "The Future of Remote Work: Lessons from Digital Nomads",
    excerpt: "Exploring how the digital nomad lifestyle is reshaping traditional work culture and what organizations can learn from distributed teams.",
    publishedAt: "2023-11-15",
    readTime: "8 min read",
    category: "Work Culture",
    featured: true,
    tags: ["Remote Work", "Digital Nomads", "Future of Work", "Productivity"]
  },
  {
    id: 2,
    title: "Minimalist Design Principles in the Age of Information Overload", 
    excerpt: "How minimalist design principles can help us create more meaningful digital experiences in an increasingly cluttered world.",
    publishedAt: "2023-10-22",
    readTime: "6 min read", 
    category: "Design",
    featured: false,
    tags: ["Design", "Minimalism", "UX", "Digital Wellness"]
  },
  {
    id: 3,
    title: "Building Sustainable Tech Habits for Long-term Success",
    excerpt: "Practical strategies for maintaining productivity and well-being in our hyper-connected digital environment.",
    publishedAt: "2023-09-18",
    readTime: "10 min read",
    category: "Productivity", 
    featured: false,
    tags: ["Productivity", "Technology", "Habits", "Well-being"]
  },
  {
    id: 4,
    title: "The Art of Slow Travel: Quality Over Quantity",
    excerpt: "Why spending more time in fewer places leads to richer travel experiences and deeper cultural connections.",
    publishedAt: "2023-08-30",
    readTime: "7 min read",
    category: "Travel",
    featured: false,
    tags: ["Travel", "Culture", "Mindfulness", "Experience"]
  },
  {
    id: 5,
    title: "Creative Problem Solving Through Cross-Disciplinary Thinking",
    excerpt: "How drawing insights from diverse fields can lead to innovative solutions in design and technology.",
    publishedAt: "2023-07-14",
    readTime: "9 min read",
    category: "Innovation",
    featured: true,
    tags: ["Innovation", "Creativity", "Problem Solving", "Design Thinking"]
  },
  {
    id: 6,
    title: "The Psychology of Digital Detox: Finding Balance in a Connected World",
    excerpt: "Understanding the mental health implications of constant connectivity and strategies for healthy digital consumption.",
    publishedAt: "2023-06-25",
    readTime: "12 min read",
    category: "Wellness",
    featured: false,
    tags: ["Digital Wellness", "Mental Health", "Balance", "Technology"]
  }
]

export default function Thoughts() {
  const featuredArticles = articles.filter(article => article.featured)
  const regularArticles = articles.filter(article => !article.featured)

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
            Thoughts & Articles
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Reflections on design, technology, travel, and the intersection of digital and human experiences
          </p>
        </motion.div>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-semibold mb-8">Featured Articles</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-muted/30 border border-border rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-lg hover:border-accent">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                      <span className="px-2 py-1 bg-accent/50 text-accent-foreground rounded-full text-xs font-medium">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {formatDate(article.publishedAt)}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </div>
                    </div>

                    <h3 className="text-2xl font-semibold mb-4 group-hover:text-accent-foreground transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {article.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-accent/20 text-accent-foreground text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-accent-foreground font-medium group-hover:gap-3 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.section>
        )}

        {/* All Articles */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-8">All Articles</h2>
          <div className="space-y-6">
            {regularArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="border border-border rounded-xl p-6 transition-all duration-300 hover:shadow-md hover:border-accent">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                        <span className="px-2 py-1 bg-accent/50 text-accent-foreground rounded-full text-xs font-medium">
                          {article.category}
                        </span>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {formatDate(article.publishedAt)}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {article.readTime}
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold mb-2 group-hover:text-accent-foreground transition-colors">
                        {article.title}
                      </h3>

                      <p className="text-muted-foreground mb-3 leading-relaxed">
                        {article.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-accent/20 text-accent-foreground text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-accent-foreground font-medium group-hover:gap-3 transition-all lg:ml-6">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground italic">
            &ldquo;The best way to find out if you can trust somebody is to trust them.&rdquo;
          </p>
          <p className="text-sm text-muted-foreground mt-2">— Ernest Hemingway</p>
        </motion.div>
      </div>
    </div>
  )
}