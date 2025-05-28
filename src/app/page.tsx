// File: src/app/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import { courses } from '@/data/courses'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <main className="min-h-[60vh] bg-slate-900 flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <Image
            src="/websiteLogo.png"
            alt="Coding Dojo Academy Logo"
            width={96}
            height={96}
            className="mx-auto mb-4"
          />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-amber-600 mb-4">
            Coding Dojo Academy
          </h1>
          <p className="text-xl sm:text-2xl text-slate-200 mb-2">
            Code the Future at the Dojo of Tech!
          </p>
          <p className="text-sm sm:text-base text-amber-400 italic mb-8">
            🎓 Classes for every age—no age limit, customized to your goals!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="#our-courses"
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition"
            >
              View Our Courses
            </Link>
            <a
              href="https://wa.me/919250180808?text=Hi%20I'm%20interested%20in%20a%20free%20demo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg shadow transition"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </main>

      {/* Our Courses */}
      <section
        id="our-courses"
        className="py-16 bg-slate-800 text-slate-50"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-amber-600 text-center mb-12">
            Our Classes
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((c) => (
              <Link
                key={c.slug}
                href={`/courses/${c.slug}`}
                className="block bg-slate-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition"
              >
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {c.title}
                </h3>
                <p className="text-slate-300 mb-4">{c.desc}</p>
                <span className="inline-block bg-green-500 text-black py-1 px-3 rounded-full text-sm">
                  {c.level}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
