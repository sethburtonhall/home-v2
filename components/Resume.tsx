import { data } from 'autoprefixer'
import { useContext } from 'react'
import { SideBarContext } from '../contexts/SideBarContext'
import { experience, bio } from '../data/data'

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
          {bio}
        </p>
      </div>

      {/* Technical Skills */}
      <div className="pb-8">
        <div className="flex flex-grow">
          <span className="text-4xl">😎</span>
          <h2 className="pb-3 pl-3 text-4xl text-transparent bg-gradient-to-r bg-clip-text from-purple-700 to-pink-700">
            Technical Skills
          </h2>
        </div>

        <div className="font-serif text-base font-light">
          <ul className="pl-5 list-disc list-outside">
            <li className="pb-3">
              Front End: HTML/CSS/JS, React/Next, Vue, Typescript, APIs, testing, performance, accessibility
            </li>
            <li className="pb-3">
              Styling: TailwindCSS, CSS in JS, Material UI, Bootstrap, Chakra UI
            </li>
            <li className="pb-3">
              Serverless/Database: JAMstack, Headless CMS, Firebase/AWS, GraphQL, SQL
            </li>
            <li className="pb-3">
              Team Collaboration: Agile Development, Jira, Slack, VS Code, Git/Github, Figma, Adobe XD, Retool
            </li>
          </ul>
        </div>
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

      {/* Projects */}
      <div className="pb-8">
        <div className="flex flex-grow">
          <span className="text-4xl">⚙️</span>
          <h2 className="pb-3 pl-3 text-4xl text-transparent bg-gradient-to-r bg-clip-text from-purple-700 to-pink-700">
            Projects
          </h2>
        </div>
        <div className="flex flex-col pb-6">
          <p className="text-lg">Protegé</p>
          <p className="pb-3 text-sm text-gray-500">
            NextJS, TailwindCSS, Firebase
          </p>
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
          <p className="text-lg">Technology Venture Partners</p>
          <p className="pb-3 text-sm text-gray-500">
            Jamstack, Jekyll, CloudCannon CMS, Netlify
          </p>
          <a
            className="resume-link"
            href="https://tvp.com"
            target="_blank"
            rel="noopener"
          >
            Site
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
          I am a core team member on Protegé, an open source job board for
          Junior Developers.
        </p>
        <div className="flex flex-col pb-6">
          <p className="text-lg">Protegé</p>
          <p className="pb-3 text-sm text-gray-500">
            NextJS, TailwindCSS, Firebase
          </p>
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
          especially during the global pandemic.
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
