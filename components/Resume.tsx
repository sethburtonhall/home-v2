import { data } from 'autoprefixer'
import { useContext } from 'react'
import { SideBarContext } from '../contexts/SideBarContext'
import { experience } from '../data/data'

export default function Resume() {
  const [toggleContext, setToggleContext] = useContext(SideBarContext)

  return (
    <>
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
          <h2 className="pb-3 pr-3 text-4xl text-transparent bg-gradient-to-r bg-clip-text from-purple-700 to-pink-700">
            Hello
          </h2>
          <span className="flex-grow text-4xl">👋🏼 😀 </span>
        </div>

        <p className="font-serif text-base font-light lg:text-lg">
          I am a web developer working in Frontend & Full Stack environments. I
          favor React, NextJS, Jamstack and serverless. As a long time remote
          worker, I am capable of collaborating across a variety of skills and
          teams. I possess a strong passion and dedication to coding as a
          creative craft and vocation and I am ready to work on great projects
          with an even greater team.
        </p>
      </div>

      {/* Experience */}
      <div className="pb-8">
        <div className="flex flex-grow">
          <span className="text-4xl">💻 </span>
          <h2 className="pb-3 pl-3 text-4xl text-transparent bg-gradient-to-r bg-clip-text from-purple-700 to-pink-700">
            Experience
          </h2>
        </div>

        {experience.map((e, index) => (
          <div key={index} className="pb-8">
            <p className="pb-1 text-xl">{e.title}</p>
            <p className="text-base">{e.company}</p>
            <p className="text-sm text-gray-500">{e.date}</p>
            <p className="pt-3 font-serif text-base font-light">
              {e.description}
            </p>
          </div>
        ))}
      </div>

      {/* Hard Skills */}
      <div className="pb-8">
        <div className="flex flex-grow">
          <span className="text-4xl">😎</span>
          <h2 className="pb-3 pl-3 text-4xl text-transparent bg-gradient-to-r bg-clip-text from-purple-700 to-pink-700">
            Hard Skills
          </h2>
        </div>

        <div className="font-serif text-base font-light">
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
        <div className="flex flex-grow">
          <span className="text-4xl">🙂</span>
          <h2 className="pb-3 pl-3 text-4xl text-transparent bg-gradient-to-r bg-clip-text from-purple-700 to-pink-700">
            Soft Skills
          </h2>
        </div>

        <div className="font-serif text-base font-light">
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
        <div className="flex flex-grow">
          <span className="text-4xl">⚙️</span>
          <h2 className="pb-3 pl-3 text-4xl text-transparent bg-gradient-to-r bg-clip-text from-purple-700 to-pink-700">
            Projects
          </h2>
        </div>
        <div className="flex flex-col pb-8">
          <p className="text-lg">Artist Rescue Trust</p>
          <p className="pb-3 text-sm text-gray-500">
            Jamstack, Gatsby, DatoCMS, GraphQL, Netlify
          </p>
          <a
            className="resume-link"
            href="https://artistrescue.org/"
            target="_blank"
            rel="noopener"
          >
            Site
          </a>
          <a
            className="resume-link"
            href="https://github.com/OurKettle/artist-rescue-trust"
            target="_blank"
            rel="noopener"
          >
            Source
          </a>
        </div>

        <div className="flex flex-col pb-8">
          <p className="text-lg">Notes App</p>
          <p className="pb-3 text-sm text-gray-500">
            React, user auth, file storage, & DynamoDB via AWS Amplify
          </p>
          <a
            className="resume-link"
            href="https://serverless-notes-sbh.netlify.app/"
            target="_blank"
            rel="noopener"
          >
            Site
          </a>
          <a
            className="resume-link"
            href="https://github.com/sethburtonhall/notes-client"
            target="_blank"
            rel="noopener"
          >
            Source
          </a>
        </div>

        <div className="flex flex-col pb-8">
          <p className="text-lg">DKS Studio</p>
          <p className="pb-3 text-sm text-gray-500">
            Jamstack, Gatsby, DatoCMS, GraphQL, Netlify
          </p>
          <a
            className="resume-link"
            href="https://davidkstanley.studio/"
            target="_blank"
            rel="noopener"
          >
            Site
          </a>
          <a
            className="resume-link"
            href="https://github.com/sethburtonhall/dks3.0"
            target="_blank"
            rel="noopener"
          >
            Source
          </a>
        </div>

        <div className="flex flex-col pb-8">
          <p className="text-lg">Ushahidi Platform</p>
          <p className="pb-3 text-sm text-gray-500">
            Custom HTML/CSS/JS, Responsive Design, RTL support, Handlebars.js
          </p>
          <a
            className="resume-link"
            href="https://uchaguzi.or.ke/views/map"
            target="_blank"
            rel="noopener"
          >
            App
          </a>
          <a
            className="resume-link"
            href="https://github.com/ushahidi/platform-pattern-library"
            target="_blank"
            rel="noopener"
          >
            Source
          </a>
        </div>

        <div className="flex flex-col pb-8">
          <p className="text-lg">Movie Search</p>
          <p className="pb-3 text-sm text-gray-500">
            React.js, TMDB API, Custom Hooks, Styled Components
          </p>
          <a
            className="resume-link"
            href="https://react-tmdb-sbh.netlify.com/"
            target="_blank"
            rel="noopener"
          >
            App
          </a>
          <a
            className="resume-link"
            href="https://github.com/sethburtonhall/react-movie"
            target="_blank"
            rel="noopener"
          >
            Source
          </a>
        </div>

        <div className="flex flex-col pb-8">
          <p className="text-lg">Old Mother Hubbard</p>
          <p className="pb-3 text-sm text-gray-500">
            HTML/CSS, Responsive Design, Foundation UI
          </p>
          <a
            className="resume-link"
            href="https://www.oldmotherhubbard.com/"
            target="_blank"
            rel="noopener"
          >
            App
          </a>
          <a
            className="resume-link"
            href="https://github.com/sethburtonhall/old-mother-hubbard"
            target="_blank"
            rel="noopener"
          >
            Source
          </a>
        </div>

        <div className="flex flex-col pb-8">
          <p className="text-lg">Ushahidi.com</p>
          <p className="pb-3 text-sm text-gray-500">
            Craft CMS, Twig, HTML/CSS/JS
          </p>
          <a
            className="resume-link"
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
        <div className="flex flex-grow">
          <span className="text-4xl">⌨️</span>
          <h2 className="pb-3 pl-3 text-4xl text-transparent bg-gradient-to-r bg-clip-text from-purple-700 to-pink-700">
            Open Source
          </h2>
        </div>
        <p className="pb-6 text-base font-light">
          I am new to open source and continue to explore projects that I can
          contribute to. More open source projects to come.
        </p>
        <div className="flex flex-col pb-6">
          <p className="text-lg">Protege</p>
          <p className="pb-3 text-sm text-gray-500">React, Firebase</p>
          <a
            className="resume-link"
            href="https://protege.dev/"
            target="_blank"
            rel="noopener"
          >
            Site
          </a>
          <a
            className="resume-link"
            href="https://github.com/drewclem/protege"
            target="_blank"
            rel="noopener"
          >
            Source
          </a>
        </div>
      </div>

      {/* Communities */}
      <div className="pb-8">
        <div className="flex flex-grow">
          <span className="text-4xl">❤️</span>
          <h2 className="pb-3 pl-3 text-4xl text-transparent bg-gradient-to-r bg-clip-text from-purple-700 to-pink-700">
            Communities
          </h2>
        </div>
        <p className="pb-6 text-base font-light">
          I am involved in some amazing online communities that are super
          supportive and essential to my growth as a person and developer,
          especially during this global pandemic.
        </p>
        <div className="flex flex-col pb-6">
          <p className="text-lg">VirtualCoffee.io</p>
          <p className="pb-3 text-sm text-gray-500">
            An intimate community for all devs, optimized for you.
          </p>
          <a
            className="resume-link"
            href="https://virtualcoffee.io/"
            target="_blank"
            rel="noopener"
          >
            Site
          </a>
        </div>

        <div className="flex flex-col pb-6">
          <p className="text-lg">Dev.to</p>
          <p className="pb-3 text-sm text-gray-500">
            A constructive and inclusive social network for software developers.
            With you every step of your journey.
          </p>
          <a
            className="resume-link"
            href="https://dev.to/sethburtonhall"
            target="_blank"
            rel="noopener"
          >
            Site
          </a>
        </div>

        <div className="flex flex-col pb-6">
          <p className="text-lg">Party Corgi Network</p>
          <p className="pb-3 text-sm text-gray-500">
            An inclusive community of content creators helping each other grow.
          </p>
          <a
            className="resume-link"
            href="https://www.partycorgi.com/"
            target="_blank"
            rel="noopener"
          >
            Site
          </a>
        </div>
      </div>

      {/* Education */}
      <div className="pb-8">
        <div className="flex flex-grow">
          <span className="text-4xl">📚</span>
          <h2 className="pb-3 pl-3 text-4xl text-transparent bg-gradient-to-r bg-clip-text from-purple-700 to-pink-700">
            Education
          </h2>
        </div>
        <div className="pb-6">
          <p className="text-lg">BA - Mass Communications</p>
          <p className="pb-3 text-sm text-gray-500">
            North Carolina State University
          </p>
        </div>

        <div className="pb-6">
          <p className="text-lg">MFA - Creative Producing</p>
          <p className="pb-3 text-sm text-gray-500">
            UNC School of the Arts - School of Filmmaking
          </p>
        </div>

        <div className="pb-6">
          <p className="text-lg">Certified ScrumMaster®</p>
          <p className="pb-3 text-sm text-gray-500">Scrum Alliance</p>
        </div>
      </div>
    </>
  )
}
