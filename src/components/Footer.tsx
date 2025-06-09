export default function Footer() {
  return (
    <footer
      className="bg-gray-100 dark:bg-black py-6"
      role="contentinfo"
      aria-label="Footer"
    >
      <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://www.linkedin.com/in/milanthapa2003/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
            aria-label="LinkedIn profile of Milan Thapa"
            title="Visit Milan Thapa's LinkedIn profile"
          >
            Milan Thapa
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
