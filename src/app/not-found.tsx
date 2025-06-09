import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 dark:from-purple-900 dark:via-blue-900 dark:to-indigo-900 text-center">
      <h1 className="text-[120px] sm:text-[140px] font-extrabold text-gray-900 dark:text-white leading-none mb-4 select-none">
        😵‍💫 404
      </h1>

      <p className="text-3xl sm:text-4xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
        Lost in cyberspace? This page is nowhere to be found.
      </p>

      <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-400 mb-8 max-w-xl">
        Maybe the internet gremlins are playing tricks, or our dev just took a coffee break ☕️😅
      </p>

      <img
        src="https://media.giphy.com/media/l2JehQ2GitHGdVG9y/giphy.gif"
        alt="Funny confused gif"
        className="w-56 sm:w-64 rounded-2xl shadow-lg mb-10 select-none"
        draggable={false}
      />

      <Link
        href="/"
        className="inline-block px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-full text-lg shadow-lg transition duration-300"
        aria-label="Go back to home page"
      >
        Take me home 🚀
      </Link>
    </div>
  )
}
