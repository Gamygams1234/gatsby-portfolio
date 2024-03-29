import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Gamaliel Burgos | Full Stack Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'I am a Software Developer who is driven by my passion for creating outstanding web experiences while collaborating seamlessly with cross-functional teams. With a strong foundation in React, CSS, JavaScript, HTML as well as an understanding of Relational Databases, backend languages, and other scripting languages, I bring to the table not only technical expertise but also a deep appreciation for design and user-centricity. I thrive in team environments, valuing open communication, sharing knowledge, and working collectively to achieve our common goals. My goal is to leverage my skills and collaborative spirit to contribute to innovative web projects, ensuring that user interfaces are not just functional but also visually captivating.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Gamaliel Burgos',
  subtitle: 'I am a Full Stack Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'headshot.jpg',
  paragraphOne: 'I am a Software Developer who is driven by my passion for creating outstanding web experiences while collaborating seamlessly with cross-functional teams. With a strong foundation in React, CSS, JavaScript, HTML as well as an understanding of Relational Databases, backend languages, and other scripting languages, I bring to the table not only technical expertise but also a deep appreciation for design and user-centricity. I thrive in team environments, valuing open communication, sharing knowledge, and working collectively to achieve our common goals. My goal is to leverage my skills and collaborative spirit to contribute to innovative web projects, ensuring that user interfaces are not just functional but also visually captivating.',
  paragraphTwo: 'Below, you will find some projects that I have worked on and completed using what I have learned.',
  paragraphThree: '',
 // if no resume, the button will not show up
};

export const projectsData = [
  

  {
    id: nanoid(),
    img: 'coffeeRoasters.jpg',
    title: `Coffee Roasters`,
    info: 'This is a 3 page landing subscription site which showcases my JavaScript, HTML, CSS, and logic skills.',
    info2: '',
    url: 'https://hopeful-nobel-26ed64.netlify.app',
    repo: 'https://github.com/Gamygams1234/coffee-roasters-subscription', // if no repo, the button will not sho
  },


  {
    id: nanoid(),
    img: 'todos.jpg',
    title: `Todo List`,
    info: 'This is a Todo List which showcases night mode, state management, and responsive design. This was all done using the React Framework',
    info2: '',
    url: 'https://pure-fjord-03615.herokuapp.com/',
    repo: 'https://github.com/Gamygams1234/gb-todo-app-react', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ip-tracker.jpg',
    title: `IP Adress Tracker`,
    info: 'This is an IP address tracker where a person can input an IP or a website and they can see the location, timezone, and timezone of the IP.',
    info2: '',
    url: 'https://elated-hamilton-5af558.netlify.app',
    repo: 'https://github.com/Gamygams1234/ip-address-tracker', // if no repo, the button will not sho
  },

  {
    id: nanoid(),
    img: 'splitter.jpg',
    title: `Tip Calculator`,
    info: 'This is a tip caluculator where people can input the total price, the amount of people to split between, and the percentage that the party wants to tip, in order to split the bill evenly.',
    info2: '',
    url: 'https://gb-todos.netlify.app',
    repo: 'https://github.com/Gamygams1234/tip-caluculator-app-splitter', // if no repo, the button will not sho
  },


  {
    id: nanoid(),
    img: 'insure.jpg',
    title: `Insure Landing Page`,
    info: 'This is a landing page made with HTML CSS and Javascript. I was able to implement the :before and :after selectors in order to make sure that the images were layered and it fit the design.',
    info2: '',
    url: 'https://dreamy-yonath-35484e.netlify.app/',
    repo: 'https://github.com/Gamygams1234/insure-landing-page', // if no repo, the button will not sho
  },

  {
    id: nanoid(),
    img: 'slider.jpg',
    title: `Bootcamp Testimonials Slider`,
    info: 'This is a slider made with HTML CSS and Javascript. I was able to implement Object Oriented Javascript so if more pictures are added, the slider can adapt accordingly.',
    info2: '',
    url: 'https://keen-thompson-52857b.netlify.app/',
    repo: 'https://github.com/Gamygams1234/coding-bootcamp-testimonials-slider', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'loopstudios.jpg',
    title: `LoopStudios Landing Page`,
    info: 'This is a landing page made with HTML CSS and Javascript. I was able CSS Grid for the footer and image gallery.',
    info2: '',
    url: 'https://adoring-lovelace-465c9e.netlify.app/',
    repo: 'https://github.com/Gamygams1234/loopstudios', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Stonks',
    info: 'A React JS single page responsive app using an API from alphavantage.co to find information of the stock. Users can search a stock by typing in the abbreviation, then they can see the statistics for the day as well as seeing the history of the stock with a candlestick chart.',
    info2: '',
    url: 'https://musing-neumann-c801c5.netlify.app',
    repo: 'https://github.com/Gamygams1234/stonks-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'interactive-pricing.jpg',
    title: `Interactive Pricing Component`,
    info: 'This is a slider made with HTML CSS and Javascript. I was able to implement Object Oriented Javascript for the slider to act efficiently depending on how many pricing options there are.',
    info2: '',
    url: 'https://elated-wing-5f795f.netlify.app/',
    repo: 'https://github.com/Gamygams1234/interactive-pricing-component', // if no repo, the button will not show up
  },
  
  {
    id: nanoid(),
    img: 'clipboard-landing-page.jpg',
    title: 'Clipboard Landing Page',
    info: 'This is a landing page which was made with HTML/SCSS, Bootstrap and Javascript. This demonstrates how I am able to position items to make the User Interface presentable and responsive.',
    info2: '',
    url: 'https://sad-ptolemy-4d9e71.netlify.app',
    repo: 'https://github.com/Gamygams1234/clipboard-landing-page', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pricing-component.jpg',
    title: 'Pricing Component',
    info: 'This is a single page pricing component made with HTML/CSS and Javascript. This project shhows the seamless design from annual pricing to monthly pricing.',
    info2: '',
    url: 'https://stoic-nightingale-28a720.netlify.app',
    repo: 'https://github.com/Gamygams1234/pricing-component', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'fries-hero-bg.jpg',
    title: 'Fantastic Fries',
    info: 'This is my first multi page assignment made at Bottega Coding School. This was made with basic HTML and CSS. This project demonstrates CSS concepts such as Flexbox and Grid.',
    info2: '',
    url: 'https://condescending-meitner-8164cf.netlify.app/',
    repo: 'https://github.com/Gamygams1234/dev-camp-fries', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'social-media.jpg',
    title: 'Social Media Landing Page',
    info: 'This is a concept for a single page application which deomonstrates a transition with night mode and day mode. This demonstrates my ability to use Javascript and CSS Grid to make a responsive night mode app.',
    info2: '',
    url: 'https://thirsty-fermi-e63aa7.netlify.app/',
    repo: 'https://github.com/Gamygams1234/social-media-dashboard', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'huddle.jpg',
    title: 'Huddle Landing Page',
    info: 'This is landing page which demonstrates how I can construct a Layout with HTML/CSS Bootstrap.',
    info2: '',
    url: 'https://confident-saha-6ff079.netlify.app/',
    repo: 'https://github.com/Gamygams1234/huddle-landing-page', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'sign-up-form.jpg',
    title: 'Sign Up Form',
    info: 'Sign up form using simple HTML/CSS and Javascript. This project uses Regex for the email and password checks.',
    info2: '',
    url: 'https://admiring-dubinsky-71a54c.netlify.app',
    repo: 'https://github.com/Gamygams1234/sign-up-form', // if no repo, the button will not show up
  },
];
// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Shoot me an email!',
  btn: 'gamyburgos@gmail.com',
  email: 'gamyburgos@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [

    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/gamaliel-burgos-a01137172/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Gamygams1234',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
