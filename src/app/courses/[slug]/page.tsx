import { notFound } from 'next/navigation'
import Link from 'next/link'

type CourseDetail = {
  slug: string
  title: string
  overview: string
  whatYouLearn: string[]
  duration: string
  mode: string
  prerequisites?: string
  syllabus?: string[]
}

const courseDetails: CourseDetail[] = [
  {
    slug: 'class-10-12-cs-ip',
    title: 'Class 10–12 (CS & IP)',
    overview:
      'Our Class 10–12 program is aligned to both CBSE and ICSE boards, covering Computer Science and Informatics Practices. This is a project-driven course that balances theory with hands-on labs, mock tests, and doubt-solving sessions.',
    whatYouLearn: [
      'Fundamentals of Computer Systems & Networking',
      'Python programming: variables, loops, functions',
      'Data structures: Lists, Stacks, Queues, Recursion',
      'Database management: SQL queries & normalization',
      'File handling & modules for IP practicals',
      'Mock exams & practice questions for board readiness',
    ],
    duration: '6 months',
    mode: 'Online & Offline',
    prerequisites: 'Basic familiarity with computers',
    syllabus: [
      'CBSE CS Unit 1–5 (System Fundamentals → Python → DS)',
      'ICSE IP Units (Open Source → Python → SQL → File I/O)',
    ],
  },
  {
    slug: 'bca-mca-btech-cse',
    title: 'BCA / MCA / B.Tech CSE',
    overview:
      'Designed for university students, this course covers core subjects of your Computer Science degree and supplements them with industry-grade labs and mini-projects. You’ll walk away with a strong portfolio ready for internships and placements.',
    whatYouLearn: [
      'Advanced C programming techniques',
      'Object-oriented design in C++',
      'Java SE & EE: Servlets, JSP, JDBC',
      'Front-end basics: HTML5, CSS3, JavaScript',
      'Version control & collaborative coding (Git)',
      'Capstone group project with presentation',
    ],
    duration: '4 Months',
    mode: 'Offline (Delhi NCR)',
    prerequisites: '12th-grade Science / IT stream',
  },
  {
    slug: 'data-analytics',
    title: 'Data Analytics',
    overview:
      'Turn raw data into insights. We’ll teach you end-to-end data pipelines—from data cleaning to dashboard design—using Power BI, Tableau, SQL, and NoSQL databases through real-world case studies.',
    whatYouLearn: [
      'Data cleaning & transformation in Python',
      'Building interactive Power BI reports',
      'Designing dashboards in Tableau',
      'Writing advanced SQL queries & optimization',
      'Modeling NoSQL data with MongoDB',
      'Storytelling with data & presentation best practices',
    ],
    duration: '4 Months',
    mode: 'Online live sessions',
    prerequisites: 'Basic Python & database knowledge',
  },
  {
    slug: 'cybersecurity-vapt',
    title: 'Cybersecurity & VAPT',
    overview:
      'Learn to think like an attacker and defend like a pro. This intensive program walks you through network security, web-app pentesting, secure coding, and compliance standards with live lab environments.',
    whatYouLearn: [
      'Network scanning & vulnerability assessment',
      'Exploit development basics',
      'Secure coding in Python & Java',
      'OWASP Top 10 & mitigation strategies',
      'Compliance frameworks (ISO 27001, GDPR basics)',
      'Writing professional pentest reports',
    ],
    duration: '3 Months (Only on Saturday & Sunday)',
    mode: 'Offline labs',
    prerequisites: 'Fundamentals of networking & programming',
  },
  {
    slug: 'ms-office-soft-skills',
    title: 'MS Office & Soft Skills',
    overview:
      'Boost your productivity and communication. Master Excel formulas, Word automation, and PowerPoint design, then polish your interview & teamwork skills with role-plays and mock interviews.',
    whatYouLearn: [
      'Excel: PivotTables, VLOOKUP, Macros',
      'Word: Styles, templates, mail merge',
      'PowerPoint: slide design & animations',
      'Professional communication & email etiquette',
      'Team collaboration & conflict resolution',
      'Mock interviews with personalized feedback',
    ],
    duration: '2 Months',
    mode: 'Online & Offline',
    prerequisites: 'None',
  },
]

// Dynamic static params for Next.js App Router
export function generateStaticParams() {
  return courseDetails.map((c) => ({ slug: c.slug }))
}

// Page Component
export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = courseDetails.find((c) => c.slug === params.slug)
  if (!course) return notFound()

  return (
    <main className="min-h-screen bg-slate-900 text-slate-50 p-8">
      {/* Breadcrumb */}
      <Link href="/courses" className="text-slate-400 hover:text-amber-400">
        ← Back to Courses
      </Link>

      {/* Title */}
      <h1 className="mt-4 text-5xl font-extrabold text-amber-600">
        {course.title}
      </h1>

      {/* Overview */}
      <p className="mt-6 text-lg leading-relaxed max-w-3xl">
        {course.overview}
      </p>

      {/* Details Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* What You Learn */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-3">
            What You’ll Learn
          </h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            {course.whatYouLearn.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Logistics */}
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-medium text-white">Duration</h3>
            <p className="text-slate-300">{course.duration}</p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-white">Mode</h3>
            <p className="text-slate-300">{course.mode}</p>
          </div>
          {course.prerequisites && (
            <div>
              <h3 className="text-xl font-medium text-white">Prerequisites</h3>
              <p className="text-slate-300">{course.prerequisites}</p>
            </div>
          )}
          {course.syllabus && (
            <div>
              <h3 className="text-xl font-medium text-white">Official Syllabus</h3>
              <ul className="list-decimal list-inside space-y-1 text-slate-300">
                {course.syllabus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <Link
          href={`https://wa.me/919250180808?text=Hi,%20I%20would%20like%20to%20enroll%20in%20the%20${encodeURIComponent(course.title)}%20course.`}
          target="_blank"
          className="inline-block bg-green-500 hover:bg-green-600 text-slate-900 font-bold py-3 px-8 rounded-lg text-lg transition"
        >
          Enquire Now on WhatsApp
        </Link>
      </div>
    </main>
  )
}
