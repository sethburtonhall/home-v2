export default function MadeWith() {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row">
      <div className="mb-2 md:mb-0 md:mr-1">
        <a
          href="https://github.com/sethburtonhall/home-v2"
          target="_blank"
          rel="noopener"
          className="social-icon mr-1 pt-1"
        >
          v2.0
        </a>
        made with
      </div>
      <div>
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener"
          className="ml-2 mr-2 rounded bg-black px-2 pt-1 pb-1"
        >
          Next.js
        </a>{' '}
        &
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener"
          className="ml-3 rounded bg-cyan-600 px-2 pt-1 pb-1 text-gray-900"
        >
          TailwindCSS
        </a>
      </div>
    </div>
  )
}
