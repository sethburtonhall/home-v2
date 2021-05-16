import { useEffect, useContext } from 'react'
import { SideBarContext } from '../contexts/SideBarContext'

export default function Code() {
  const [toggleContext, setToggleContext] = useContext(SideBarContext)

  useEffect(() => {
    setToggleContext(false)
  }, [])

  return (
    <>
      <div className="flex flex-col justify-start pb-6 lg:items-center md:flex-row">
        <img
          src="/seth-code.jpg"
          alt="Seth Hall"
          className="w-20 h-20 rounded-full align-self-start"
          width={80}
          height={80}
        />
        <div className="flex flex-col flex-grow mt-6 md:pl-6 md:mt-0">
          <h2 className="text-4xl">Seth Hall : Web Developer</h2>
          <div
            className="text-lg font-bold underline transition-colors ease-in-out cursor-pointer hover:text-blue-400"
            onClick={() => setToggleContext(!toggleContext)}
          >
            {toggleContext === false && (
              <svg
                className="relative inline-block w-5 h-5 mr-1 cursor-pointer -top-0.5"
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
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
            {toggleContext === true && (
              <svg
                className="relative inline-block w-5 h-5 mr-1 cursor-pointer -top-0.5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
            View Portfolio
          </div>
        </div>
      </div>

      <p className="font-serif text-base font-light lg:text-xl pb-9">
        Frontend/Full Stack Web Developer. Always learning. Currently available for work.
        .
      </p>

      <h1 className="pb-2 text-lg">Current Stack:</h1>
      <div className="grid grid-flow-row grid-cols-2 grid-rows-6 gap-3 p-6 mb-10 text-sm text-center rounded lg:text-base md:grid-cols-3 md:grid-rows-4 lg:grid-cols-6 lg:grid-rows-2 md:mb-0 glass">
        <div className="p-1 text-gray-900 bg-orange-600 rounded">Html</div>
        <div className="p-1 bg-blue-700 rounded">CSS</div>
        <div className="p-1 text-gray-900 bg-yellow-400 rounded">
          Javascript
        </div>
        <div className="p-1 text-gray-900 rounded bg-cyan-400">React</div>
        <div className="p-1 bg-black rounded">Next.js</div>
        <div className="p-1 text-gray-900 rounded bg-cyan-600">Tailwind</div>
        <div className="p-1 bg-pink-600 rounded">Jamstack</div>
        <div className="p-1 text-gray-900 bg-white rounded">CMS</div>
        <div className="p-1 text-gray-900 bg-orange-600 rounded">
          Serverless
        </div>
        <div className="p-1 text-gray-900 bg-green-600 rounded">RWD</div>
        <div className="p-1 text-gray-900 bg-yellow-500 rounded">Firebase</div>
      </div>
    </>
  )
}
