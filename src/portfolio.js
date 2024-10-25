/* Some Tips:
★ Place your images in "src/assets/images" path
★ Place your custom loading animations in assets/lottie
★ Set value to false to hide a section or an entire page
★ Get fontAwesomeClassnames from https://www.fontawesome.com
★ Set blogSection false to hide all kind of blogs
*/

/*
Some informations are kept unchanged according to component owners 
Credits: masterPortfolio(https://github.com/ashutosh1919/masterPortfolio)
         developerFolio(https://github.com/saadpasta/developerFolio)
*/

// Website related settings
// Which pages will be enabled

const pageEnabled = {
  splash: true, // Change this to false if you don't want Splash screen
  blog: true, // Change this to false if you don't want
  opensource: true, // Change this to false if you don't want opensource contribution (from github data) page
  hobbies: true, // Change this to false if you don't want hobbies page
  contact: true, // Change this to false if you don't want contact page
  projects: true, // Change this to false if you don't want projects (from github data) and publications page
  newhome: false, // Change this to false if you don't want education (degrees, certifications, competitiveSites) page
  experience: false, // Change this to false if you don't want experience page
};


// Routing with or without '#'
const routerValue =
  "HashRouter"; //for github hosted pages
  // "BrowserRouter"; (for regular hosting)

// Splash Screen
const splashScreen = {
  useLottie: true, // setting it false will show animation of src/components/loader
  animationFile:
    "loaderWinXp"
    /* Supported Values
    					             1. splashAnimation
    					             2. email
    					             3. build
    					             4. landingPerson
    					             5. codingPerson
    					             6. geometricLoader
    					             7. starLoading
    					             8. ripple
    					             9. nightDay
    					             10. littleRobot
    					             11. poolChartLoading
    					             */,
  duration: 2000, // Set animation duration(milliseconds) as per your animation
};

/**************               Home Page                    ****************/

//SEO Related settings
const seo = {
  title: "Mr.Yanyk's Website",
  description: "Website of Mr.Yanyk",
  og: {
    title: "Mr.Yanyk's Website",
    type: "website",
    url: "https://alexveselun.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Mr.Yanyk",
  logo_name: "Mr. Yanyk",
  nickname: "",
  subTitle:
    "I’m passionate about creating unique experiences that blend innovation and culture. I’m dedicated to building spaces that not only entertain but also educate and inspire.",
  resumeLink:
    "https://docs.google.com/document/d/12HcgXpBxVzCtz--IZribLTX5yu7HoatZcDZanvKvsYA/view",
  portfolio_repository: "mailto:alexveselun@gmail.com", //star-me-on-github button
  githubProfile: "https://github.com/alexveselun", //more projects button
};

const socialMediaLinks = [
  /* Your Social Media Links */
  // github: "https://github.com/alexveselun",
  // linkedin: "https://www.linkedin.com/in/alexandr-y-9409a220a/",
  // gmail: "alexveselun@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/",
  // twitter: "https://twitter.com",
  // instagram: "https://www.instagram.com/alexyankevych/"
  // telegram: "https://t.me/kolobok_2023"

  {
    name: "Instagram",
    link: "https://www.instagram.com/alexyankevych/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  {
    name: "Telegram",
    link: "https://t.me/kolobok_2023",
    fontAwesomeIcon: "fa-telegram-plane", // Reference https://fontawesome.com/icons/telegram-plane?style=brands
    backgroundColor: "#0088CC", // Reference https://simpleicons.org/?q=telegram
  },
  {
    name: "Gmail",
    link: "mailto:alexveselun@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Github",
    link: "https://github.com/alexveselun",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/alexandr-y-9409a220a/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  
];

// Skill Information

const skills = {
  display: true, // Set it true to display your skills
  data: [
    {
      title: "Entrepreneurship & Business Development",
      imageName: "entrepreneaur.png",
      skills: [
        "⚡ Proven track record in launching and growing successful ventures.",
        "⚡ Focus on innovative concepts and long-term strategy.",
        "⚡ Strong emphasis on business scaling and sustainable growth.",
      ],
    },
    {
      title: "IT & Technology",
      imageName: "computer.png",
      skills: [
        "⚡ Strong technical background with hands-on experience in IT.",
        "⚡ Proficient in software development and automation.",
        "⚡ Expertise in technology integration for businesses.",
      ],
    },
    {
      title: "Creative Arts",
      imageName: "design.png",
      skills: [
        "⚡ Former artist with experience in creative expression.",
        "⚡ Unique approach to business and project management.",
        "⚡ Contributions to artistic and cultural initiatives.",
      ],
    },
    {
      title: "Problem-Solving & Innovation",
      imageName: "innovation.png",
      skills: [
        "⚡ Excellent analytical and creative problem-solving skills.",
        "⚡ Applying innovative solutions to complex challenges.",
      ],
    },
    // {
    //   title: "Leadership & Team Building",
    //   imageName: "leadership.img",
    //   skills: [
    //     "⚡ Proven ability to lead diverse teams.",
    //     "⚡ Fostering collaboration and guiding teams towards common goals.",
    //     "⚡ Strong emphasis on mentorship and professional development.",
    //   ],
    // },
 
    // {
    //   title: "Philanthropy",
    //   imageName: "philantropu1.img",
    //   skills: [
    //     "⚡ Dedication to making a positive social impact through charitable projects.",
    //     "⚡ Focus on community-building and social responsibility.",
    //   ],
    // },
    // {
    //   title: "Project Management",
    //   imageName: "projects.jpg",
    //   skills: [
    //     "⚡ Expertise in managing large-scale projects, from concept to execution.",
    //     "⚡ Seamless coordination of teams, timelines, and resources.",
    //     "⚡ Skilled in Agile and Waterfall methodologies.",
    //   ],
    // },
    // {
    //   title: "Marketing Strategy & Execution",
    //   imageName: "marketing.jpg",
    //   skills: [
    //     "⚡ Deep understanding of marketing trends and digital advertising.",
    //     "⚡ Expertise in brand development and content creation.",
    //     "⚡ Creating effective campaigns that resonate with target audiences.",
    //   ],
    // },

  ],
};


const techStack = {
  // Skill Part
  display: true, // Set it to true to view skillbars of language
  title: "Proficiency",
  experience: [
    {
      Stack: "HTML", // Insert stack or technology or language you have experience in
      progressPercentage: "90%", // Insert relative proficiency in percentage
    },
    {
      Stack: "CSS/SASS",
      progressPercentage: "80%",
    },
    {
      Stack: "JavaScript/TypeScript",
      progressPercentage: "70%",
    },
    {
      Stack: "Python",
      progressPercentage: "65%",
    },
  ],
};

// Top Contributioned projects
const bigProjects = {
  display: false, // Set it true to show big projects
  title: "Projects",
  subtitle: "",
  projects: [
    {
      image: "",
      projectName: "",
      projectDesc: "",
      footerLink: [
        {
          name: "Visit Website",
          url: "",
        },
        //  you can add extra buttons here.
      ],
    },
  ],
};

const blogSection = {
  title: "The Gallery",
  subtitle: "Check the data loaded from telegram",
  display: "myBlog", 
  blogs: [
    {
      chatId: "123456",
      fileName: "test",
      title: "Title",
      description: "Description",
      pictureName: "img1",
    },
  ],
};


const talkSection = {
  display: false, // Set it true to show talks
  title: "Talks",
  subtitle: "",

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: "",
    },
  ],
};

// Podcast Section

const podcastSection = {
  display: false, // Set it true to show your podcasts
  title: "Podcast",
  subtitle: "I love to talk about myself and technology",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo",
  ],
};

// Your tweets displayed in a iframe
const twitterUsername = "none"; // set it none to display no tweets

/****************               Education Page          ****************/

// Your profiles in Competitive Sites to be displayed in education page
const competitiveSites = {
  display: false, // Set it to true to show icons containing links to your profile in respective sites
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

// Degrees received from institutions
const degrees = {
  display: true, // Set it false to hide degrees, defaults to true
  degrees: [
    {
      title: "",
      subtitle: "",
      logo_path: "",
      alt_name: "",
      duration: "",
      descriptions: [],
      website_link: "",
    },
  ],
};

// Certifications in education page
const certifications = {
  display: true, // Set it false to hide certifications, defaults to true
  certifications: [
    {
      title: "",
      subtitle: "",
      logo_path: "",
      certificate_link: "",
      alt_name: "",
      color_code: "#8C151599",
    },
    {
      title: "",
      subtitle: "",
      logo_path: "",
      certificate_link: "",
      alt_name: "",
      color_code: "#00000099",
    },
  ],
};

/*******************          Experience Page          ****************/

const experience = {
  title: "Experience",
  subtitle: "",
  description: "",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "",
          company: "",
          company_url: "",
          logo_path: "",
          duration: "",
          location: "",
          description: "",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "",
          company: "",
          company_url: "",
          logo_path: "",
          duration: "",
          location: "",
          description: "",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "",
          company: "",
          company_url: "",
          logo_path: "",
          duration: "",
          location: "",
          description: "",
          color: "#4285F4",
        },
      ],
    },
  ],
};

/********************              Hobbies         ********************/

const hobbies = {
  
  title: "Hobbies",
  // subTitle: "Being happy is my favorite hobby",
  hobbies: [
    {
      title: "Reading",
      description: "Enjoying books primarily on psychology and philosophy, with a favorite author being Carl Gustav Jung",
      image_path: "reading.png",
    },
    // {
    //   title: "Creative Arts",
    //   description: "Engaging in various forms of artistic expression!",
    //   image_path: "writing.png",
    // },
    // {
    //   title: "History",
    //   description:
    //     "A passion for learning about historical events and contexts",
    //   image_path: "history.png",
    // },
    {
      title: "Music",
      description: "Listening to a wide range of music, from classical to the latest rock compositions",
      image_path: "music.png",
    },
  ],
};

/****************            OpenSource Page           ********************/

const openSource = {
  organisations: false, // Set it false to hide contributions in github organisations, defaults to true

  issues: true, // Set it false to hide your opened isssues, defaults to true

  pull_requests: true, // Set it false to hide your pull requests in github organisations, defaults to true

  issue_chart: true, // Set it false to hide issue chart, defaults to true

  pr_chart: true, // Set it false to hide pull requests chart, defaults to true
};

/****************            Projects Page           ********************/

const projects = {
  display: true, //
  title: "Projects",
  description: "",
  avatar_image_path: "projects_image.svg",
};

// Publication Section of Projects Page
const publications = {
  display: true, // Set it true to show publications
  title: "Publications",
  description: "",
  avatar_image_path: "projects_image.svg",
  publications: {
    data: [
      { 
        name: "hello",
        createdAt: "22.22",
        description: "",
        url: "",
      },
      { 
        name: "hello2",
        createdAt: "",
        description: "",
        url: "",
      },
    ],
  },
};

/*******************          Contact Page          ****************/

const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image: "contactEmail.png",
    description:
      "I’m reachable via email and messenger. Feel free to message me. Looking forward to collaborating on creative projects!",
  },
  addressSection: {
    title: "Address",
    subtitle: "Kyiv, Ukraine",
    address_image: "addressImage.png",
    location_map_link:
      "https://www.google.com/maps/@50.4489098,30.52621,17.85z?gl=bd",
  },
  // phoneSection: {
  //   title: "Phone Number",
  //   subtitle: "",
  // },
};

// Send a message in emailjs account
const contactMessage = {
  display: true, // Set it false if you don't have emailjs account or you don't want message, defaults to true
  emailjsUserID: "user_ZqZIbV7cSQojQaiPl89II",
  templateID: "outlook1",
  serviceID: "service_9fmduq9",
};

export {
  pageEnabled,
  routerValue,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  techStack,
  competitiveSites, //deletedFunctional
  degrees, //deletedFunctional
  certifications,
  experience,
  hobbies,
  podcastSection,
  bigProjects,
  talkSection,
  openSource,
  projects,
  publications,
  blogSection,
  contactPageData,
  contactMessage,
  twitterUsername,
  splashScreen,
};
