import { useEffect, useContext } from 'react'
import { ModeContext } from '../contexts/ModeContext'
import { SideBarContext } from '../contexts/SideBarContext'
import Image from 'next/image'
import Head from 'next/head'
import Code from '../components/Code'
import Film from '../components/Film'
import SocialIcons from '../components/SocialIcons'
import MadeWith from '../components/MadeWith'
import Resume from '../components/Resume'

export default function Home() {
  const [context, setContext] = useContext(ModeContext)
  const [toggleContext, setToggleContext] = useContext(SideBarContext)

  useEffect(() => {
    setContext('code')
  }, [])

  return (
    <>
      {/* <style jsx>
        {`
          .bg-code-image {
            width: 100%;
            height: 100%;
            position: absolute;
            background: url('/bg4.jpg') no-repeat;
          }
          .bg-film-image {
            width: 100%;
            height: 100%;
            position: absolute;
            background: url('/bg6.jpg') no-repeat;
          }
        `}
      </style> */}
      <Head>
        <title>Seth Hall: Code/Film</title>
      </Head>
      <div
        className={`relative bg-gradient-to-tr ${
          context === 'code'
            ? 'from-purple-700 to-pink-700'
            : 'from-purple-700 to-blue-700'
        }`}
      >
        {/* <Image
          layout="fill"
          className="object-cover object-center pointer-events-none"
          src="/bg6.jpg"
          alt="background image"
        />
        <Image
          layout="fill"
          className={`object-cover object-center pointer-events-none ${
            context === 'film' ? 'opacity-0' : ''
          }`}
          src="/bg4.jpg"
          alt="background image"
        /> */}
        {/* main content */}
        <div className="relative flex flex-col min-h-screen px-5 pt-5 md:container lg:px-0">
          <header className="flex items-center justify-end w-full">
            {/* <h1
              className="font-sans text-5xl tracking-wide text-white cursor-pointer"
              onClick={() => setContext('code')}
            >
              <span className="text-transparent bg-gradient-to-r bg-clip-text from-blue-300 to-blue-900">
                Seth Hall
              </span>
            </h1> */}
            <div className="cursor-pointer">
              {context === 'code' && (
                <svg
                  className="w-10 ml-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={() => setContext('film')}
                  width="100"
                  height="40"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                  />
                </svg>
              )}
              {context === 'film' && (
                <svg
                  className="w-10 ml-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={() => setContext('code')}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              )}
            </div>
          </header>

          <main
            className={`flex flex-col items-center justify-start flex-grow mt-8 md:mt-32`}
          >
            {context === 'code' ? <Code /> : <Film />}
          </main>

          <footer className="flex flex-col items-center justify-between w-full py-6 md:flex-row">
            <SocialIcons />
            <MadeWith />
          </footer>
        </div>
        <Resume />
      </div>
    </>
  )
}
