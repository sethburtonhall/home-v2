import { useEffect, useContext } from 'react'
import Image from 'next/image'
import { SideBarContext } from '../contexts/SideBarContext'

export default function Code() {
  const [toggleContext, setToggleContext] = useContext(SideBarContext)
  console.log(toggleContext)

  useEffect(() => {
    setToggleContext(false)
  }, [])

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-start pb-6 md:flex-row">
        <Image
          src="/seth-code.jpg"
          alt="Seth Hall"
          className="w-20 h-20 rounded-full"
          width={80}
          height={80}
        />
        <div className="flex flex-col mt-6 md:pl-6 md:mt-0">
          <h2 className="text-4xl">Seth Hall : Web Developer</h2>
          <div
            className="text-lg font-bold text-blue-400 transition-colors ease-in-out cursor-pointer hover:underline"
            onClick={() => setToggleContext(!toggleContext)}
          >
            {toggleContext === false && (
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

      <p className="font-serif text-xl font-light pb-9">
        I am a Frontend/Full Stack Web Developer living in the North Carolina
        mountains. I am currently available for work. Take a look at my
        portfolio and reach out to discuss your project.
      </p>

      <h1 className="pb-6 text-lg">Current Stack:</h1>
      <div className="grid grid-flow-col grid-cols-2 grid-rows-6 gap-3 mb-10 text-center md:grid-cols-3 md:grid-rows-4 lg:grid-cols-6 lg:grid-rows-2 md:mb-0">
        <div className="bg-orange-600 toolbox">Html</div>
        <div className="bg-blue-700 toolbox">CSS</div>
        <div className="bg-yellow-400 toolbox">Javascript</div>
        <div className="toolbox bg-cyan-400">React</div>
        <div className="bg-black toolbox">Next.js</div>
        <div className="toolbox bg-cyan-600">TailwindCSS</div>
        <div className="bg-pink-600 toolbox">Jamstack</div>
        <div className="text-black bg-white toolbox">CMS</div>
        <div className="bg-orange-600 toolbox">Serverless</div>
        <div className="bg-green-600 toolbox">RWD</div>
        <div className="bg-yellow-500 toolbox">Firebase</div>
        <div className="bg-yellow-600 toolbox">AWS</div>
      </div>
    </div>
  )
}
