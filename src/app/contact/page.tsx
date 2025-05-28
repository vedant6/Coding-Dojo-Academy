// File: src/app/contact/page.tsx
import Link from 'next/link'
import { FaEnvelope } from 'react-icons/fa'

export default function Contact() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-50 flex items-center justify-center p-4">
      <div className="max-w-xl w-full space-y-12">
        <h1 className="text-4xl font-extrabold text-amber-600 text-center">
          Get in Touch
        </h1>

        {/* Inquiry Form */}
        <form
          action="https://formspree.io/f/YOUR_FORMSPREE_ID"
          method="POST"
          className="space-y-6 bg-slate-800 p-6 rounded-lg shadow-lg"
        >
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full bg-slate-700 border border-slate-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full bg-slate-700 border border-slate-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message / Course Inquiry
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full bg-slate-700 border border-slate-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition"
          >
            Send Inquiry
          </button>
        </form>

        {/* Fallback Contact Options */}
        <div className="text-center space-y-4">
          <p>Prefer a quick chat? Hit us up on WhatsApp:</p>
          <Link
            href="https://wa.me/919250180808?text=Hi%20I%27d%20like%20to%20inquire%20about%20Coding%20Dojo%20Academy"
            target="_blank"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition"
          >
            Chat on WhatsApp
          </Link>

          {/* Email Fallback */}
          <p className="mt-6 text-slate-300">
            Or email us directly at{' '}
            <a
              href="mailto:info@codingdojoacademy.com"
              className="inline-flex items-center text-amber-500 hover:text-amber-400"
            >
              <FaEnvelope className="inline-block mr-2" />
              info@codingdojoacademy.com
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
