// File: src/app/courses/ms-office-soft-skills/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default function MsOfficeSoftSkillsPage() {
  const course = {
    title: 'MS Office & Soft Skills',
    overview:
      'Master Microsoft Office (Excel, Word, PowerPoint) and develop essential communication, teamwork & interview skills.',
    whatYouLearn: [
      'Advanced Excel: formulas, pivot tables, charts',
      'Word: document formatting, mail merge',
      'PowerPoint: slide design & animations',
      'Effective verbal & written communication',
      'Presentation delivery & body language',
      'Resume writing & interview preparation',
    ],
    duration: '3 months (weekly sessions)',
    mode: 'Online & Offline',
    syllabus: [
      'Excel basics → advanced functions',
      'Data visualization & dashboards in Excel',
      'Word templates & automation',
      'PowerPoint design best practices',
      'Public speaking & storytelling',
      'Mock interviews & feedback',
    ],
    prerequisites: 'No prior experience needed',
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
