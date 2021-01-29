import { useEffect, useContext } from 'react'
import { SideBarContext } from '../contexts/SideBarContext'

export default function Resume() {
  const [toggleContext, setToggleContext] = useContext(SideBarContext)

  return (
    <aside
      className={`fixed overflow-y-scroll h-screen p-6 pt-3 top-0 bg-gray-900 w-full lg:w-1/2 transition-all duration-300 ease-in-out ${
        toggleContext === true ? 'left-0' : '-left-full'
      }`}
    >
      <svg
        className="w-10 ml-auto cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={() => setToggleContext(!toggleContext)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>

      {/* Introduction */}
      <div className="pb-8">
        <div className="flex">
          <h2 className="pb-3 pr-3 text-3xl text-transparent bg-gradient-to-r bg-clip-text from-purple-700 to-pink-700">
            Hello
          </h2>
          <span className="text-3xl">👋🏼 😀 </span>
        </div>

        <p className="font-serif font-light">
          I am a web developer working in Frontend & Full Stack environments. I
          live in the great state of North Carolina. With 10 years of
          development experience, I am capable of collaborating across a variety
          of skill sets and personalities. I have been working remotely since
          2006 and thanks to my tenacity, and the web community, I have taught
          myself design and development. If we work together and I don't know
          something, I will say so and then I will learn whatever is needed for
          that specific project. I am married and have an 9-year-old daughter
          and a 6-year-old son, so it is important to balance my time between
          work and family. I possess a strong passion and dedication to creative
          craft and vocation and I am ready to work on great products with an
          even greater team. (This could be you!).
        </p>
      </div>

      {/* Experience */}
      <div className="pb-8">
        <div className="flex">
          <span className="text-3xl">💻 </span>
          <h2 className="pb-3 pl-3 text-3xl text-transparent bg-gradient-to-r bg-clip-text from-purple-700 to-pink-700">
            Experience
          </h2>
        </div>
        <div className="pb-6">
          <p className="text-xl">Web Developer</p>
          <p className="text-md">SoleLife, Inc - Contract</p>
          <p className="text-sm text-gray-500">
            October 2020-December 2020 | Remote
          </p>
          <p className="pt-3 font-serif text-base font-light">
            SoleLife streams and automates your coaching business with
            tele-conferencing, chat, admin tasks, scheduling, billing, and more.
            As a member of the dev team, I worked on a React frontend and AWS
            serverless backend.
          </p>
        </div>

        <div className="pb-6">
          <p className="text-xl">Web Developer</p>
          <p className="text-md">Ocupop - Contract</p>
          <p className="text-sm text-gray-500">
            May 2020-September 2020 | Remote
          </p>
          <p className="pt-3 font-serif text-base font-light">
            Ocupop is a creative design agency based out of Milwaukee, WI. As a
            member of the dev team, I worked on a custom e-commerce platform and
            custom CMS marketing sites.
          </p>
        </div>

        <div className="pb-6">
          <p className="text-xl">Web Developer</p>
          <p className="text-md">Ushahidi - Full Time</p>
          <p className="text-sm text-gray-500">
            May 2013-October 2018 | Remote
          </p>
          <p className="pt-3 font-serif text-base font-light">
            Ushahidi is a Nairobi, Kenya based technology company that designs
            products and initiatives that strive to solve global problems. As
            part of the design team I was responsible for all front end code
            across multiple software products and websites.
          </p>
        </div>

        <div>
          <p className="text-xl">Web Developer</p>
          <p className="text-md">Self-Employed - Consultant</p>
          <p className="text-sm text-gray-500">
            2011-2013 & 2018-2020 | Remote
          </p>
          <p className="pt-3 font-serif text-base font-light">
            As a consultant I have partnered with creative agencies and
            individuals on a variety of web projects ranging from custom builds
            to content management systems
          </p>
        </div>
      </div>

      {/* Hard Skills */}
      <div className="pb-8">
        <div className="flex">
          <span className="text-3xl">😎</span>
          <h2 className="pb-3 pl-3 text-3xl text-transparent bg-gradient-to-r bg-clip-text from-purple-700 to-pink-700">
            Hard Skills
          </h2>
        </div>

        <div className="font-serif text-base font-light ">
          <ul className="pl-5 list-disc list-outside">
            <li className="pb-3">HTML/CSS/JS</li>
            <li className="pb-3">React Ecosystem</li>
            <li className="pb-3">Firebase/AWS</li>
            <li className="pb-3">serverless stack</li>
            <li className="pb-3">Jamstack</li>
            <li className="pb-3">headless CMS</li>
            <li className="pb-3">
              static site generators (Next, Gatsby, Jekyll)
            </li>
            <li className="pb-3">DatoCMS, CraftCMS, CloudCannon</li>
            <li className="pb-3">
              styled components, styled system, Sass, PostCSS, etc..
            </li>
            <li className="pb-3">html templating (Handlebars, Twig, etc...)</li>
            <li className="pb-3">
              CSS frameworks (Material UI, Bootstrap, Chakra UI, Foundation,
              etc...)
            </li>
            <li className="pb-3">git version control (Github, BitBucket)</li>
            <li className="pb-3">responsive design web</li>
            <li className="pb-3">performance and accessibility</li>
            <li className="pb-3">terminal/command line</li>
          </ul>
        </div>
      </div>

      {/* Soft Skills */}
      <div className="pb-8">
        <div className="flex">
          <span className="text-3xl">🙂</span>
          <h2 className="pb-3 pl-3 text-3xl text-transparent bg-gradient-to-r bg-clip-text from-purple-700 to-pink-700">
            Soft Skills
          </h2>
        </div>

        <div className="font-serif text-base font-light ">
          <ul className="pl-5 list-disc list-outside">
            <li className="pb-3">
              remote working - I am skilled in communicating across multiple
              time zones with multiple types of positions and personalities. In
              an autonomous environment I am great at time management and
              meeting deadlines.
            </li>
            <li className="pb-3">experience in Agile development</li>
            <li className="pb-3">honest and thoughtful communication</li>
            <li className="pb-3">
              excellent written and verbal communication skills
            </li>
            <li className="pb-3">listening and validating others</li>
            <li className="pb-3">positive and encouraging personality</li>
            <li className="pb-3">friendly and laid back demeanor</li>
            <li className="pb-3">a good sense of humor</li>
            <li className="pb-3">
              a deep understanding of the development process and the efficiency
              needed to see it through from start to finish
            </li>
          </ul>
        </div>
      </div>

      {/* Projects */}
      <div className="pb-8">
        <div className="flex">
          <span className="text-3xl">⚙️</span>
          <h2 className="pb-3 pl-3 text-3xl text-transparent bg-gradient-to-r bg-clip-text from-purple-700 to-pink-700">
            Projects
          </h2>
        </div>
        <div className="flex flex-col pb-6">
          <p className="text-md">Artist Rescue Trust</p>
          <p className="text-sm text-gray-500">
            Jamstack, Gatsby, DatoCMS, GraphQL, Netlify
          </p>
          <a
            className="text-purple-600 hover:text-purple-700"
            href="https://artistrescue.org/"
            target="_blank"
            rel="noopener"
          >
            Site
          </a>
          <a
            className="text-purple-600 hover:text-purple-700"
            href="https://github.com/OurKettle/artist-rescue-trust"
            target="_blank"
            rel="noopener"
          >
            Source
          </a>
        </div>

        <div className="flex flex-col pb-6">
          <p className="text-md">Notes App</p>
          <p className="text-sm text-gray-500">
            React, user auth, file storage, & DynamoDB via AWS Amplify
          </p>
          <a
            className="text-purple-600 hover:text-purple-700"
            href="https://serverless-notes-sbh.netlify.app/"
            target="_blank"
            rel="noopener"
          >
            Site
          </a>
          <a
            className="text-purple-600 hover:text-purple-700"
            href="https://github.com/sethburtonhall/notes-client"
            target="_blank"
            rel="noopener"
          >
            Source
          </a>
        </div>

        <div className="flex flex-col pb-6">
          <p className="text-md">DKS Studio</p>
          <p className="text-sm text-gray-500">
            Jamstack, Gatsby, DatoCMS, GraphQL, Netlify
          </p>
          <a
            className="text-purple-600 hover:text-purple-700"
            href="https://davidkstanley.studio/"
            target="_blank"
            rel="noopener"
          >
            Site
          </a>
          <a
            className="text-purple-600 hover:text-purple-700"
            href="https://github.com/sethburtonhall/dks3.0"
            target="_blank"
            rel="noopener"
          >
            Source
          </a>
        </div>

        <div className="flex flex-col pb-6">
          <p className="text-md">Ushahidi Platform</p>
          <p className="text-sm text-gray-500">
            Custom HTML/CSS/JS, Responsive Design, RTL support, Handlebars.js
          </p>
          <a
            className="text-purple-600 hover:text-purple-700"
            href="https://uchaguzi.or.ke/views/map"
            target="_blank"
            rel="noopener"
          >
            App
          </a>
          <a
            className="text-purple-600 hover:text-purple-700"
            href="https://github.com/ushahidi/platform-pattern-library"
            target="_blank"
            rel="noopener"
          >
            Source
          </a>
        </div>

        <div className="flex flex-col pb-6">
          <p className="text-md">Movie Search</p>
          <p className="text-sm text-gray-500">
            React.js, TMDB API, Custom Hooks, Styled Components
          </p>
          <a
            className="text-purple-600 hover:text-purple-700"
            href="https://react-tmdb-sbh.netlify.com/"
            target="_blank"
            rel="noopener"
          >
            App
          </a>
          <a
            className="text-purple-600 hover:text-purple-700"
            href="https://github.com/sethburtonhall/react-movie"
            target="_blank"
            rel="noopener"
          >
            Source
          </a>
        </div>

        <div className="flex flex-col pb-6">
          <p className="text-md">Old Mother Hubbard</p>
          <p className="text-sm text-gray-500">
            HTML/CSS, Responsive Design, Foundation UI
          </p>
          <a
            className="text-purple-600 hover:text-purple-700"
            href="https://www.oldmotherhubbard.com/"
            target="_blank"
            rel="noopener"
          >
            App
          </a>
          <a
            className="text-purple-600 hover:text-purple-700"
            href="https://github.com/sethburtonhall/old-mother-hubbard"
            target="_blank"
            rel="noopener"
          >
            Source
          </a>
        </div>

        <div className="flex flex-col pb-6">
          <p className="text-md">Ushahidi.com</p>
          <p className="text-sm text-gray-500">Craft CMS, Twig, HTML/CSS/JS</p>
          <a
            className="text-purple-600 hover:text-purple-700"
            href="https://www.ushahidi.com/"
            target="_blank"
            rel="noopener"
          >
            Site
          </a>
        </div>
      </div>

      {/* Open Source */}
      <div className="pb-8">
        <div className="flex">
          <span className="text-3xl">⌨️</span>
          <h2 className="pb-3 pl-3 text-3xl text-transparent bg-gradient-to-r bg-clip-text from-purple-700 to-pink-700">
            Open Source
          </h2>
        </div>
        <div className="flex flex-col pb-6">
          <p className="text-md">Protege</p>
          <p className="text-sm text-gray-500">React, Firebase</p>
          <a
            className="text-purple-600 hover:text-purple-700"
            href="https://protege.dev/"
            target="_blank"
            rel="noopener"
          >
            Site
          </a>
          <a
            className="text-purple-600 hover:text-purple-700"
            href="https://github.com/drewclem/protege"
            target="_blank"
            rel="noopener"
          >
            Source
          </a>
        </div>
      </div>

      {/* Education */}
      <div className="pb-8">
        <div className="flex">
          <span className="text-3xl">📚</span>
          <h2 className="pb-3 pl-3 text-3xl text-transparent bg-gradient-to-r bg-clip-text from-purple-700 to-pink-700">
            Education
          </h2>
        </div>
        <div className="pb-6">
          <p className="text-md">BA - Mass Communications</p>
          <p className="text-sm text-gray-500">
            North Carolina State University
          </p>
        </div>

        <div className="pb-6">
          <p className="text-md">MFA - Creative Producing</p>
          <p className="text-sm text-gray-500">
            UNC School of the Arts - School of Filmmaking
          </p>
        </div>

        <div className="pb-6">
          <p className="text-md">Certified ScrumMaster®</p>
          <p className="text-sm text-gray-500">Scrum Alliance</p>
        </div>
      </div>
    </aside>
  )
}
