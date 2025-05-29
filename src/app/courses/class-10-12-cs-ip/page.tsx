// File: src/app/classes/bca-mca-btech-cse/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default function BcaMcaBtechCsePage() {
  const course = {
    title: 'BCA / MCA / B.Tech CSE',
    overview:
      'A project‐driven program covering your university syllabus in C, C++ & Java.',
    whatYouLearn: [
      'Core programming in C & C++',
      'Object‐oriented design with Java',
      'Data structures & algorithms',
      'Web fundamentals (HTML, CSS, JS)',
      'Database connectivity & JDBC',
      'Final capstone application',
    ],
    duration: '6 months (twice-weekly sessions)',
    mode: 'Online & Offline',
    syllabus: [
      'Introduction to C programming',
      'Pointers & memory management',
      'OOP principles in C++',
      'Java classes, inheritance, interfaces',
      'Servlets & JSP basics',
      'Mini project: Student Management System',
    ],
    prerequisites: 'Basic familiarity with computers',
  }

  if (!course) return notFound()

  return (
    <main className="min-h-screen bg-slate-900 text-slate-50 p-8">
      <Link href="/courses" className="text-slate-400 hover:text-amber-400">
        ← Back to Classes
      </Link>

      <h1 className="mt-4 text-5xl font-extrabold text-amber-600">
        {course.title}
      </h1>

      <p className="mt-6 text-lg">{course.overview}</p>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-white mb-2">What You’ll Learn</h2>
        <ul className="list-disc list-inside space-y-1 text-slate-300">
          {course.whatYouLearn.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-white mb-2">Syllabus</h2>
        <ul className="list-decimal list-inside space-y-1 text-slate-300">
          {course.syllabus.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-8 space-y-2">
        <p>
          <strong>Duration:</strong> {course.duration}
        </p>
        <p>
          <strong>Mode:</strong> {course.mode}
        </p>
        <p>
          <strong>Prerequisites:</strong> {course.prerequisites}
        </p>
      </section>
    </main>
  )
}
