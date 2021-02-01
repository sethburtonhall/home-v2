import { useEffect, useContext } from 'react'
import Head from 'next/head'
import { ModeContext } from '../contexts/ModeContext'
import { SideBarContext } from '../contexts/SideBarContext'
import { motion } from 'framer-motion'
import Code from '../components/Code'
import Film from '../components/Film'
import SocialIcons from '../components/SocialIcons'
import MadeWith from '../components/MadeWith'
import Resume from '../components/Resume'

export default function Home() {
  const [context, setContext] = useContext(ModeContext)
  const [toggleContext] = useContext(SideBarContext)

  useEffect(() => {
    setContext('code')
  }, [])

  const backgroundVariants = {
    active: {
      backgroundColor: '#4C1D95',
      transition: { duration: 0.2 },
    },
    inactive: {
      backgroundColor: '#111827',
      transition: { duration: 0.2 },
    },
  }

  return (
    <>
      <Head>
        <title>Seth Hall: Code/Film</title>
      </Head>
      <motion.div
        className={`relative`}
        variants={backgroundVariants}
        animate={context === 'code' ? 'active' : 'inactive'}
      >
        {/* main content */}
        <div className="relative flex flex-col min-h-screen px-5 pt-5 md:container lg:px-0">
          <header className="flex items-center justify-end w-full">
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
                  width="100"
                  height="40"
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
            className={`flex flex-col items-center justify-start flex-grow md:mt-32`}
          >
            {context === 'film' ? (
              <motion.div className="flex flex-col this-is-film">
                <Film />
              </motion.div>
            ) : (
              <motion.div
                className="flex flex-col this-is-code"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <Code />
              </motion.div>
            )}
          </main>

          <footer className="flex flex-col items-center justify-between w-full py-6 md:flex-row">
            <SocialIcons />
            <MadeWith />
          </footer>
        </div>

        {/* Resume */}
        <motion.div
          className="fixed top-0 w-full h-screen p-6 pt-3 overflow-y-scroll scroller lg:w-1/2 bg-gradient-to-tr from-gray-800 to-gray-900"
          initial={{ x: -1000 }}
          animate={{
            x: toggleContext ? 0 : -1000,
          }}
          transition={{
            duration: 0.2,
          }}
        >
          <Resume />
        </motion.div>
      </motion.div>
    </>
  )
}
