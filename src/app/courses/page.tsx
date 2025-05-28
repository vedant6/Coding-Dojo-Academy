'use client'

import React, { useState } from 'react'
import Link from 'next/link'

type Course = {
  slug: string
  title: string
  desc: string
  level: string
  duration: string
  mode: string
  prerequisites?: string
  syllabus?: string[]
  topics?: string[]
  details: string
}

const courses: Course[] = [
  {
    slug: 'class-10-12-cs-ip',
    title: 'Class 10–12 (CS & IP)',
    desc: 'CBSE & ICSE board Computer Science & Informatics Practices.',
    level: 'Beginner → Advanced',
    duration: '6 Months',
    mode: 'Online / Offline',
    prerequisites: 'Basic computer literacy',
    syllabus: [
      'Computer System Fundamentals',
      'Computational Thinking & Python Programming',
      'Lists, Stacks, Queues, Recursion',
      'Database Management with SQL',
      'Networking & Open Source Concepts',
      'Python for IP & File I/O',
    ],
    details:
      'Aligned to CBSE & ICSE, this course combines theory with hands-on labs and mock tests. You’ll build projects in Python, master data structures, and get exam-ready with full syllabus coverage.',
  },
  {
    slug: 'bca-mca-btech-cse',
    title: 'BCA / MCA / B.Tech CSE',
    desc: 'University curriculum + practical labs in C, C++, Java.',
    level: 'Project-Based Learning',
    duration: '4 Months',
    mode: 'Offline',
    prerequisites: '12th grade pass in Science / IT stream',
    topics: [
      'Advanced C Programming',
      'Object-Oriented C++',
      'Java SE & EE Fundamentals',
      'Web Dev: HTML, CSS, JavaScript',
    ],
    details:
      'Covers core subjects of your BCA/MCA/B.Tech syllabus with extra workshops in app development, REST APIs, and version control. Includes group capstone projects and code review sessions.',
  },
  {
    slug: 'data-analytics',
    title: 'Data Analytics',
    desc: 'Power BI, Tableau, SQL & NoSQL, real-world case studies.',
    level: 'Hands-On Workshops',
    duration: '4 Months',
    mode: 'Online',
    topics: [
      'Power BI Desktop & Reports',
      'Tableau Dashboards',
      'SQL Query & Optimization',
      'NoSQL (MongoDB) Modeling',
    ],
    details:
      'Learn to turn raw data into actionable insights. We cover end-to-end pipelines, dashboard design principles, and capstone case studies—perfect for analytics roles.',
  },
  {
    slug: 'cybersecurity-vapt',
    title: 'Cybersecurity & VAPT',
    desc: 'Penetration testing, secure coding, compliance standards.',
    level: 'Live Labs & Demos',
    duration: '5 Months',
    mode: 'Offline',
    topics: [
      'Network Security Basics',
      'Web App Penetration Testing',
      'Secure Coding Practices',
      'Compliance & Standards (ISO, OWASP)',
    ],
    details:
      'Get your hands dirty in a real-world lab environment: scan networks, exploit vulnerabilities, and produce professional security assessment reports.',
  },
  {
    slug: 'ms-office-soft-skills',
    title: 'MS Office & Soft Skills',
    desc: 'Excel, Word, presentation skills & interview readiness.',
    level: 'Career-Focused Training',
    duration: '2 Months',
    mode: 'Online',
    topics: [
      'Advanced Excel Functions',
      'Word Automation & Templates',
      'PowerPoint Design Tips',
      'Communication & Interview Prep',
    ],
    details:
      'Boost productivity with advanced Office tools, then sharpen your communication, teamwork, and interview skills to stand out in any job market.',
  },
]

export default function CoursesPage() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section className="py-16 bg-slate-800 text-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-amber-600 text-center mb-12">
          Our Full Course Catalog
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {courses.map((c) => {
            const isActive = active === c.slug
            return (
              <div
                key={c.slug}
                onClick={() => setActive(c.slug)}
                onMouseLeave={() => setActive(null)}
                className={`
                  relative
                  bg-slate-700 p-6 rounded-lg shadow-lg
                  transform transition-all duration-300
                  cursor-pointer
                  ${isActive ? 'scale-105 shadow-2xl z-10 bg-slate-600' : 'hover:shadow-xl'}
                `}
              >
                <h2 className="text-2xl font-semibold text-white mb-2">
                  {c.title}
                </h2>
                <p className="text-slate-300 mb-4">{c.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-green-500 text-black py-1 px-3 rounded-full text-sm">
                    {c.level}
                  </span>
                  <span className="bg-amber-600 text-slate-900 py-1 px-3 rounded-full text-sm">
                    {c.duration}
                  </span>
                  <span className="bg-blue-500 text-white py-1 px-3 rounded-full text-sm">
                    {c.mode}
                  </span>
                </div>

                {isActive && (
                  <div className="mt-6 text-left text-slate-200 space-y-3">
                    {/* Bullet list */}
                    {(c.syllabus ?? c.topics!)!.map((item) => (
                      <div key={item} className="flex items-start">
                        <span className="mr-2 mt-1 text-green-400">•</span>
                        <p>{item}</p>
                      </div>
                    ))}

                    {/* Details paragraph */}
                    <p className="mt-4 leading-relaxed">{c.details}</p>

                    {/* Prerequisites */}
                    {c.prerequisites && (
                      <p className="mt-2 text-sm text-slate-400">
                        <strong>Prerequisites:</strong> {c.prerequisites}
                      </p>
                    )}

                    {/* Learn more link */}
                    <Link
                      href={`/courses/${c.slug}`}
                      className="mt-4 inline-block text-amber-400 hover:underline"
                    >
                      Learn more →
                    </Link>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
