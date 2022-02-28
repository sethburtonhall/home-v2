import { useEffect, useContext } from 'react'
import { SideBarContext } from '../contexts/SideBarContext'
import { bio } from '../data/data'

export default function Code() {
  const [toggleContext, setToggleContext] = useContext(SideBarContext)

  useEffect(() => {
    setToggleContext(false)
  }, [])

  return (
    <>
      <div className="flex flex-col justify-start pb-6 md:flex-row lg:items-center">
        <img
          src="/seth-code.jpg"
          alt="Seth Hall"
          className="align-self-start h-20 w-20 rounded-full"
          width={80}
          height={80}
        />
        <div className="mt-6 flex flex-grow flex-col md:mt-0 md:pl-6">
          <h2 className="pb-2 text-4xl">Seth Hall</h2>
          <div className="flex flex-col md:flex-row">
            <div
              className="mb-3 cursor-pointer text-lg font-bold underline transition-colors ease-in-out hover:text-blue-400 md:mb-0 md:mr-6"
              onClick={() => setToggleContext(!toggleContext)}
            >
              {toggleContext === false && (
                <svg
                  className="relative -top-0.5 mr-1 inline-block h-5 w-5 cursor-pointer"
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
                  className="relative -top-0.5 mr-1 inline-block h-5 w-5 cursor-pointer"
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
            {/* <div className="px-2 text-lg font-bold bg-pink-500 rounded">Currently available for work</div> */}
          </div>
        </div>
      </div>

      <p className="pb-9 font-serif text-base font-light lg:text-xl">{bio}</p>

      <h1 className="pb-2 text-lg">Current Stack:</h1>
      <div className="glass mb-10 grid grid-flow-row grid-cols-2 grid-rows-6 gap-3 rounded p-6 text-center text-sm md:mb-0 md:grid-cols-3 md:grid-rows-4 lg:grid-cols-6 lg:grid-rows-2 lg:text-base">
        <div className="rounded bg-orange-600 p-1 text-gray-900">Html</div>
        <div className="rounded bg-blue-700 p-1">CSS</div>
        <div className="rounded bg-yellow-400 p-1 text-gray-900">
          Javascript
        </div>
        <div className="rounded bg-blue-500 p-1 text-gray-900">Typescript</div>
        <div className="rounded bg-gray-800 p-1 text-gray-900">
          <span className="px-1 text-blue-700">R</span>
          <span className="px-1 text-green-600">E</span>
          <span className="px-1 text-yellow-400">M</span>
          <span className="px-1 text-pink-600">I</span>
          <span className="px-1 text-red-500">X</span>
        </div>
        <div className="rounded bg-cyan-400 p-1 text-gray-900">React/Next</div>
        <div className="rounded bg-green-500 p-1 text-gray-900">Vue</div>
        <div className="rounded bg-cyan-600 p-1 text-gray-900">Tailwind</div>
        <div className="rounded bg-pink-600 p-1">Jamstack</div>
        <div className="rounded bg-white p-1 text-gray-900">CMS</div>
        <div className="rounded bg-orange-600 p-1 text-gray-900">
          Serverless
        </div>
        <div className="rounded bg-indigo-600 p-1 text-gray-900">APIs</div>
        <div className="rounded bg-yellow-500 p-1 text-gray-900">Firebase</div>
        <div className="rounded bg-black p-1 text-white">SQL</div>
      </div>
    </>
  )
}
