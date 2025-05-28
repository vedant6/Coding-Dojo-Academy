// src/app/about/page.tsx
import React from 'react'

export default function About() {
  return (
    <section className="py-16 bg-slate-900 text-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <h1 className="text-4xl font-extrabold text-amber-600 text-center">
          About Coding Dojo Academy
        </h1>

        {/* Mission */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-3">Our Mission</h2>
          <p className="text-slate-300 leading-relaxed">
            At Coding Dojo Academy, our mission is to empower students of all ages with
            stealthy coding skills, rock-solid cybersecurity knowledge, and a syntax-driven
            problem-solving mindset. We blend theory with hands-on projects to create true
            cyber warriors.
          </p>
        </div>

        {/* Values */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-3">Our Values</h2>
          <ul className="list-disc list-inside text-slate-300 space-y-2">
            <li><span className="text-amber-600">Stealth:</span> Learn the art of clean, efficient code.</li>
            <li><span className="text-amber-600">Secure:</span> Build with best practices in cybersecurity.</li>
            <li><span className="text-amber-600">Syntax:</span> Master the rules and patterns of top languages.</li>
          </ul>
        </div>

        {/* Team */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-3">Meet the Instructors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Instructor 1 */}
            <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-amber-400">Vedant Aggarwal</h3>
              <p className="text-slate-300">Founder & Lead Developer. MCA grad with expertise in Next.js, Flutter, and Firebase.</p>
            </div>
            {/* Instructor 2 */}
            <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-amber-400">Agrim Dua</h3>
              <p className="text-slate-300">Cybersecurity Expert. Certified VAPT trainer with 5+ years experience.</p>
            </div>
          </div>
        </div>

        {/* Location Map */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-3">Our Location</h2>
          <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14025.123456789012!2d77.280356!3d28.6509345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3deeeeedddd%3A0xcccccccc!2sLaxmi%20Nagar%2C%20Delhi!5e0!3m2!1sen!2sin!4v0000000000000"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
