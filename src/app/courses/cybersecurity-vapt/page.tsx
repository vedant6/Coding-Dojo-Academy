// File: src/app/classes/cybersecurity-vapt/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default function CybersecurityVaptPage() {
  const course = {
    title: 'Cybersecurity & VAPT',
    overview:
      'Learn penetration testing, secure coding, and compliance standards with live labs.',
    whatYouLearn: [
      'Web application security fundamentals',
      'Network penetration testing (Nmap, Metasploit)',
      'Secure coding best practices',
      'Vulnerability assessment & reporting',
      'Compliance frameworks (ISO, GDPR)',
      'Capstone: Real-world pentest engagement',
    ],
    duration: '5 months (bi-weekly hands-on labs)',
    mode: 'Online & Offline',
    syllabus: [
      'Introduction to cybersecurity concepts',
      'Recon & scanning techniques',
      'Exploitation & post-exploitation',
      'Secure software development lifecycle',
      'Reporting & remediation strategies',
      'Final pentest project',
    ],
    prerequisites: 'Basic networking & programming knowledge',
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
