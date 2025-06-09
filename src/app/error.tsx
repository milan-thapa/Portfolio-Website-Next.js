'use client'
import Link from 'next/link'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-br from-red-200 via-red-300 to-red-400 dark:from-red-900 dark:via-red-800 dark:to-red-900 text-center">
      <h1 className="text-[120px] font-extrabold text-red-900 dark:text-red-400 select-none mb-6">🔥</h1>
      <h2 className="text-4xl sm:text-5xl font-bold text-red-900 dark:text-red-300 mb-4">
        Something went wrong.
      </h2>
      <p className="max-w-lg text-lg text-red-800 dark:text-red-200 mb-8">
        {error.message || 'An unexpected error occurred. Please try again.'}
      </p>

      <div className="flex gap-4 justify-center">
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-red-700 hover:bg-red-800 text-white rounded-full font-semibold transition"
        >
          Try Again
        </button>

        <Link
          href="/"
          className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-full font-semibold transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}
