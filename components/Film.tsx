export default function Film() {
  return (
    <>
      <div className="flex flex-col pb-6 md:flex-row lg:items-center">
        <img
          src="/seth-film.jpg"
          alt="Seth Hall"
          className="w-20 h-20 rounded-full"
          width={80}
          height={80}
        />
        <div className="flex flex-col mt-6 md:pl-6 md:mt-0">
          <h2 className="text-4xl">Seth Hall : Creative Producer</h2>
          <a
            href="https://hallpictures.us/"
            target="_blank"
            rel="noopener"
            className="text-lg font-bold text-pink-400 transition-colors ease-in-out cursor-pointer hover:underline"
          >
            <svg
              className="relative inline-block w-4 h-4 mr-1 -top-0.5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width={20}
              height={20}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            Watch Films
          </a>
        </div>
      </div>
      <p className="font-serif text-xl font-light pb-9">
        I also have an MFA in Creative Producing from UNCSA. Hall Pictures is my
        NC based film company that specializes in the development and production
        of shorts, features, and series. We are truly independent, doing our
        best to develop great stories and produce high-quality content while
        providing a safe and nurturing environment for film creatives.
      </p>
    </>
  )
}
