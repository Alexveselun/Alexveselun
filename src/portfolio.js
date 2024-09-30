/* Portfolio's Portfolio file*/

/* Change this file to get your personal Porfolio */

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

  education: true, // Change this to false if you don't want education (degrees, certifications, competitiveSites) page

  projects: true, // Change this to false if you don't want projects (from github data) and publications page

  opensource: true, // Change this to false if you don't want opensource contribution (from github data) page

  hobbies: true, // Change this to false if you don't want hobbies page

  experience: false, // Change this to false if you don't want experience page

  contact: true, // Change this to false if you don't want contact page
};

// Routing with or without '#'
const routerValue =
  "HashRouter"; /* Supported values:
 					1. HashRouter(for github hosted user Pages)
 					2. BrowserRouter (for regular hosting)
 					*/

// Splash Screen

const splashScreen = {
  useLottie: true, // setting it false will show animation of src/components/loader
  animationFile:
    "nightDay" /* Supported Values
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
  title: "Mr.Yanyk's Portfolio",
  description: "Portfolio Website of Mr.Yanyk",
  og: {
    title: "Mr.Yanyk Portfolio",
    type: "website",
    url: "https://alexveselun.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Mr.Yanyk",
  logo_name: "Mr.Yanyk",
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
  // instagram: "https://www.instagram.com/layman_brother/"

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
  //  {
  //    name: "YouTube",
  //    link: "https://www.youtube.com/channel/UC_amoXmmxSY9KusoDczDTXQ",
  //    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  //  },
  {
    name: "Gmail",
    link: "mailto:alexveselun@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  //  {
  //    name: "Twitter",
  //    link: "https://twitter.com/ashutosh_1919",
  //    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
  //    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  //  },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/alexveselun/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
   {
     name: "Instagram",
     link: "https://www.instagram.com/alexyankevych/",
     fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
     backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
   },
];

// Skill Information

const skills = {
  display: true, // Set it true to display your skills
  data: [
    {
      title: "Entrepreneurship & Business Development",
      imageName:
        "BusinessDevelopmentImg" /* Available imageNames: 
      
      FullStackImg, 
      TerminalImg,  
      DesignImg, 
      AppDevelopImg, 
      CloudInfraImg,
      DataScienceImg,
      BusinessDevelopmentImg
      */,
      skills: [
        "⚡ Proven track record in launching and growing successful ventures.",
        "⚡ Focus on innovative concepts and long-term strategy.",
        "⚡ Strong emphasis on business scaling and sustainable growth.",
      ],
      softwareSkills: [
        {
          skillName: "Business Strategy",
          fontAwesomeClassname: "simple-icons:business",
          style: {
            color: "#4285F4",
          },
        },
      ],
    },
    {
      title: "Creative Arts",
      imageName: "CreativeArtsImg",
      skills: [
        "⚡ Former artist with experience in creative expression.",
        "⚡ Unique approach to business and project management.",
        "⚡ Contributions to artistic and cultural initiatives.",
      ],
      softwareSkills: [
        {
          skillName: "Adobe Photoshop",
          fontAwesomeClassname: "simple-icons:adobephotoshop",
          style: {
            color: "#31A8FF",
          },
        },
      ],
    },
    {
      title: "Problem-Solving & Innovation",
      imageName: "InnovationImg",
      skills: [
        "⚡ Excellent analytical and creative problem-solving skills.",
        "⚡ Applying innovative solutions to complex challenges.",
      ],
      softwareSkills: [],
    },
    {
      title: "Leadership & Team Building",
      imageName: "LeadershipImg",
      skills: [
        "⚡ Proven ability to lead diverse teams.",
        "⚡ Fostering collaboration and guiding teams towards common goals.",
        "⚡ Strong emphasis on mentorship and professional development.",
      ],
      softwareSkills: [],
    },
 
    {
      title: "Philanthropy",
      imageName: "PhilanthropyImg",
      skills: [
        "⚡ Dedication to making a positive social impact through charitable projects.",
        "⚡ Focus on community-building and social responsibility.",
      ],
      softwareSkills: [],
    },
    {
      title: "Project Management",
      imageName: "ProjectManagementImg",
      skills: [
        "⚡ Expertise in managing large-scale projects, from concept to execution.",
        "⚡ Seamless coordination of teams, timelines, and resources.",
        "⚡ Skilled in Agile and Waterfall methodologies.",
      ],
      softwareSkills: [
        {
          skillName: "Jira",
          fontAwesomeClassname: "simple-icons:jira",
          style: {
            color: "#0052CC",
          },
        },
        {
          skillName: "Trello",
          fontAwesomeClassname: "simple-icons:trello",
          style: {
            color: "#0079BF",
          },
        },
      ],
    },
    {
      title: "Marketing Strategy & Execution",
      imageName: "MarketingImg",
      skills: [
        "⚡ Deep understanding of marketing trends and digital advertising.",
        "⚡ Expertise in brand development and content creation.",
        "⚡ Creating effective campaigns that resonate with target audiences.",
      ],
      softwareSkills: [
        {
          skillName: "Google Analytics",
          fontAwesomeClassname: "simple-icons:googleanalytics",
          style: {
            color: "#EA4335",
          },
        },
        {
          skillName: "HubSpot",
          fontAwesomeClassname: "simple-icons:hubspot",
          style: {
            color: "#FF7A59",
          },
        },
      ],
    },
    {
      title: "IT & Technology",
      imageName: "ITTechImg",
      skills: [
        "⚡ Strong technical background with hands-on experience in IT.",
        "⚡ Proficient in software development and automation.",
        "⚡ Expertise in technology integration for businesses.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#F89820",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
      ],
    },
 


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
      progressPercentage: "80%",
    },
    {
      Stack: "PHP",
      progressPercentage: "60%",
    },
    {
      Stack: "Python",
      progressPercentage: "80%",
    },
    {
      Stack: "Shell",
      progressPercentage: "80%",
    },
    {
      Stack: "Ruby",
      progressPercentage: "70%",
    },
    {
      Stack: "C",
      progressPercentage: "60%",
    },
    {
      Stack: "Java",
      progressPercentage: "60%",
    },
    {
      Stack: "GO",
      progressPercentage: "60%",
    },
    {
      Stack: "CPP",
      progressPercentage: "50%",
    },
  ],
};

// Top Contributioned projects
const bigProjects = {
  display: false, // Set it true to show big projects
  title: "Big Projects",
  subtitle: "Some startups and companies that i helped to create their tech",
  projects: [
    {
      image: "saayaHealthLogo.png",
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: "nextuLogo.jpg",
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/",
        },
      ],
    },
  ],
};

const blogSection = {
  display: "none", // Set it none to hide blogs or set it to hardcdoded for following blogs otherwise you can set it to medium to show your fetched(if you used your username for fetcher.mjs) medium blogs
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
    },
  ],
};

const talkSection = {
  display: false, // Set it true to show talks
  title: "Talks",
  subtitle: "I love to share my limited knowledge and get a speaker badge",

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
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
      title: "Saint Joseph Higher Secondary School And College",
      subtitle: "Studying in science department",
      logo_path: "sjhsc.png",
      alt_name: "SJHSC",
      duration: "2019 - Present",
      descriptions: [
        "⚡ I have passed SSC in 2019 from Dhaka Division",
        "⚡ Now I am studying in Saint Joseph Higher Secondary School And College to get HSC Certificate.",
        "⚡ I wish to study in BUET or DMC next year!",
      ],
      website_link: "https://www.sjs.edu.bd/",
    },
  ],
};

// Certifications in education page
const certifications = {
  display: false, // Set it false to hide certifications, defaults to true
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

/*******************          Experience Page          ****************/

const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Associate AI Engineer",
          company: "Legato Health Technology",
          company_url: "https://legatohealthtech.com/",
          logo_path: "legato_logo.png",
          duration: "June 2020 - PRESENT",
          location: "Hyderabad, Telangana",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
        {
          title: "Android and ML Developer",
          company: "Muffito Incorporation",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "muffito_logo.png",
          duration: "May 2018 - Oct 2018",
          location: "Pune, Maharashtra",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },
        {
          title: "Android Developer",
          company: "FreeCopy Pvt. Ltd.",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "freecopy_logo.png",
          duration: "Nov 2017 - Dec 2017",
          location: "Ahmedabad, Gujarat",
          description:
            "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Data Science Research Intern",
          company: "Delhivery Pvt. Ltd.",
          company_url: "https://www.delhivery.com/",
          logo_path: "delhivery_logo.png",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
        {
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
  ],
};

/********************              Hobbies         ********************/

const hobbies = {
  title: "Hobbies",
  subTitle: "I spend my leisure with my hobbies!",
  hobbies: [
    {
      title: "Reading Books",
      description: "I love to read sci-fi and detective books!",
      image_path: "Reading.png",
    },
    {
      title: "Writing",
      description: "I write poems and stories when I get free times!",
      image_path: "Writing.png",
    },
    {
      title: "Memeing",
      description:
        "I have a collection of meme templates and I use them to generate memes!",
      image_path: "Memeing.png",
    },
    {
      title: "Listening Music",
      description: "I am a fan of Alan Walker and Linkin Park!",
      image_path: "Music.png",
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

// Projects (Github) Section of Projects Page
const projects = {
  display: true, // Set it false to hide your pinned projects in github, defaults to true
  title: "Projects",
  description:
    "My projects are mostly open source. I like to contribute in other's project. I always try my best to enhance every project to the peak!",
  avatar_image_path: "projects_image.svg",
};

// Publication Section of Projects Page
const publications = {
  display: false, // Set it true to show publications
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
  publications: {
    data: [
      {
        id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
        name: "Artificial Intelligence Paper",
        createdAt: "2020-03-06T16:26:54Z",
        description:
          "Paper Written on Artificial Intelligence published in xyz ",
        url: "https://example.com",
      },
      {
        id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
        name: "Artificial Intelligence Paper",
        createdAt: "2020-03-06T16:26:54Z",
        description:
          "Paper Written on Artificial Intelligence published in xyz ",
        url: "https://example.com",
      },
      {
        id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
        name: "Artificial Intelligence Paper",
        createdAt: "2020-03-06T16:26:54Z",
        description:
          "Paper Written on Artificial Intelligence published in xyz ",
        url: "https://example.com",
      },
      {
        id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
        name: "Artificial Intelligence Paper",
        createdAt: "2020-03-06T16:26:54Z",
        description:
          "Paper Written on Artificial Intelligence published in xyz ",
        url: "https://example.com",
      },
      {
        id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
        name: "Artificial Intelligence Paper",
        createdAt: "2020-03-06T16:26:54Z",
        description:
          "Paper Written on Artificial Intelligence published in xyz ",
        url: "https://example.com",
      },
    ],
  },
};

/*******************          Contact Page          ****************/

const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Mr.Yanyk.jpeg",
    description:
      "I am available in email and messenger. You can message me (except hi/hello), I will reply within 24 hours. I can help you with Python, shell, web application, android app development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle: "In progress..",
    link: "myfutureAmazingBlog",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Kyiv, Ukraine",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/@50.4489098,30.52621,17.85z?gl=bd",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+380996627078",
  },
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
  competitiveSites,
  degrees,
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
