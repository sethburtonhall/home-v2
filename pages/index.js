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
  const [toggleContext, setToggleContext] = useContext(SideBarContext)

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

  const handleOutsideClick = () => {
    if (toggleContext) {
      setToggleContext(!toggleContext)
    }
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
        <div
          className="relative flex min-h-screen flex-col px-5 pt-5 md:container lg:px-0"
          onClick={handleOutsideClick}
        >
          <header className="flex w-full items-center justify-end">
            <div className="cursor-pointer">
              {context === 'code' && (
                <svg
                  className="ml-auto w-10 text-white transition hover:text-pink-500"
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
                  className="ml-auto w-10 text-white transition hover:text-pink-500"
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

          <main className={`flex flex-grow flex-col justify-start md:mt-32`}>
            {context === 'film' ? (
              <motion.div className="this-is-film flex flex-col">
                <Film />
              </motion.div>
            ) : (
              <motion.div
                className="this-is-code flex flex-col"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <Code />
              </motion.div>
            )}
          </main>

          <footer className="flex w-full flex-col items-center justify-between py-6 md:flex-row">
            <SocialIcons />
            <MadeWith />
          </footer>
        </div>

        {/* Resume */}
        <motion.div
          className="scroller fixed top-0 h-screen w-full overflow-y-scroll bg-gradient-to-tr from-gray-800 to-gray-900 p-6 pt-3 lg:w-1/2"
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
