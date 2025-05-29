// File: src/app/classes/class-10-12-cs-ip/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default function Class1012Page() {
  // In a real app you might import these details from a shared data file:
  const course = {
    title: 'Class 10–12 (CS & IP)',
    overview:
      'Aligned to CBSE & ICSE boards with hands-on Python & Java projects.',
    whatYouLearn: [
      'Python basics & data structures',
      'Object-oriented Java',
      'Web fundamentals: HTML, CSS, JavaScript',
      'Database basics: SQL queries',
      'Problem-solving & algorithms',
    ],
    duration: '6 months (twice-weekly classes)',
    mode: 'Online & Offline',
    syllabus: [
      'Introduction to Python',
      'Control flow & functions',
      'Java OOP concepts',
      'Front-end fundamentals',
      'SQL & data modeling',
      'Final capstone project',
    ],
    prerequisites: 'No prior coding experience required',
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
        <p><strong>Duration:</strong> {course.duration}</p>
        <p><strong>Mode:</strong> {course.mode}</p>
        <p><strong>Prerequisites:</strong> {course.prerequisites}</p>
      </section>
    </main>
  )
}
