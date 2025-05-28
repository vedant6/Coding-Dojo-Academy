// File: src/app/not-found.tsx
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-6xl font-extrabold text-amber-600 mb-4">404</h1>
      <p className="text-xl text-slate-200 mb-6">Oops! Page not found.</p>
      <Link
        href="/"
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition"
      >
        Back to Home
      </Link>
    </main>
  )
}
