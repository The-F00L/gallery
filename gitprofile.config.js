// gitprofile.config.js

const config = {
  github: {
    username: 'The-F00L', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 2, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: '',
    twitter: 'Th3_F00L',
    exercism: 'The-F00L',
    tryhackme: 'TheF00L',
    codewars: 'The-F00L',
    mastodon: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'thezero.thef00l@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'React.js',
    'Node.js',
    'MySQL',
    'Git',
    'Docker',
    'CSS',
  ],
  experiences: [
    {
      company: 'Company Name',
      position: 'Position',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://example.com',
    },
  ],
  certifications: [
    {
        name : 'Harvard CS50T',
        body : 'body',
        year : 'year',
        link : "certs/CS50T.png"
    },
    {
        name : "NahamCon2022 CTF",
        body : 'body',
        year : 'year',
        link : "certs/nahamcon2022_teams_cert.png"
    },
    {
        name : "Advent of Cyber 2021",
        body : 'body',
        year : 'year',
        link : "certs/THM_AoC_2021.png"
    },
    {
        name : "Python Basic",
        body : 'body',
        year : 'year',
        link : "certs/hacker_rank_python_basic.png"
    },
    {
        name : "Python",
        body : 'body',
        year : 'year',
        link : "certs/kaggle_Python.png"
    },
    {
        name : "Intro to Machine Learning",
        body : 'body',
        year : 'year',
        link : "certs/kaggle_Intro_to_Machine_Learning.png"
    },
    {
        name : "Java Basic",
        body : 'body',
        year : 'year',
        link : "certs/hacker_rank_java_basic.png"
    },
    {
        name : "Responsive Web Design",
        body : 'body',
        year : 'year',
        link : "certs/freeCodeCamp_Responsive_Web_Design.png"
    },
    {
        name : "Pandas",
        body : 'body',
        year : 'year',
        link : "certs/kaggle_Pandas.png"
    },
    {
        name : "JavaScript Algorithms and Data Structures",
        body : 'body',
        year : 'year',
        link : "certs/freeCodeCamp_JavaScript_Algorithms_and_Data_Structures.png"
    },
    {
        name : "C# Basic",
        body : 'body',
        year : 'year',
        link : "certs/hacker_rank_csharp_basic.png"
    },
    {
        name : "Cyber Apocalypse 2021 CTF",
        body : 'body',
        year : 'year',
        link : "certs/CTF-Cyber-Apocalypse-TheF00L.jpg"
    },
    {
        name : "Javascript Basic",
        body : 'body',
        year : 'year',
        link : "certs/hacker_rank_javascript_basic.png"
    },
    {
        name : "Intro to Game AI and Reinforcement Learning",
        body : 'body',
        year : 'year',
        link : "certs/kaggle_Intro_to_Game_AI_and_Reinforcement_Learning.png"
    },
    {
        name : "Back End Development and APIs",
        body : 'body',
        year : 'year',
        link : "certs/freeCodeCamp_Back_End_Development_and_APIs.png"
    },
    {
        name : "Intro to AI ethics",
        body : 'body',
        year : 'year',
        link : "certs/kaggle_Intro_to_AI_Ethics.png"
    },
    {
        name : "Scientific Computing with Python",
        body : 'body',
        year : 'year',
        link : "certs/freeCodeCamp_Scientific_Computing_with_Python.png"
    },
    {
        name : "Problem Solving Basic",
        body : 'body',
        year : 'year',
        link : "certs/hacker_rank_problem_solving_basic.png"
    },
    {
        name : "SQL Basic",
        body : 'body',
        year : 'year',
        link : "certs/hacker_rank_sql_basic.png"
    },
    {
        name : "SQL Advanced",
        body : 'body',
        year : 'year',
        link : "certs/kaggle_Advanced_SQL.png"
    },
    {
        name : "Data Analysis with Python",
        body : 'body',
        year : 'year',
        link : "certs/freeCodeCamp_Data_Analysis_with_Python.png"
    },
    {
        name : "Computer Vision",
        body : 'body',
        year : 'year',
        link : "certs/kaggle_Computer_Vision.png"
    },
    {
        name : "Data Visualization",
        body : 'body',
        year : 'year',
        link : "certs/freeCodeCamp_Data_Visualization.png"
    },
    {
        name : "CSS",
        body : 'body',
        year : 'year',
        link : "certs/hacker_rank_css.png"
    },
    {
        name : "Javascript Intermediate",
        body : 'body',
        year : 'year',
        link : "certs/hacker_rank_javascript_intermediate.png"
    },
    {
        name : "Node Intermediate",
        body : 'body',
        year : 'year',
        link : "certs/hacker_rank_node_intermediate.png"
    },
    {
        name : "Time Series",
        body : 'body',
        year : 'year',
        link : "certs/kaggle_Time_Series.png"
    },
    {
        name : "Problem Solving Intermediate",
        body : 'body',
        year : 'year',
        link : "certs/hacker_rank_problem_solving_intermediate.png"
    },
    {
        name : "React Basic",
        body : 'body',
        year : 'year',
        link : "certs/hacker_rank_react_basic.png"
    },
    {
        name : "Intro to Deep Learning",
        body : 'body',
        year : 'year',
        link : "certs/kaggle_Intro_to_Deep_Learning.png"
    },

    {
        name : "Rest API Intermediate",
        body : 'body',
        year : 'year',
        link : "certs/hacker_rank_REST_API_intermediate.png"
    },
    {
        name : "SQL intermediate",
        body : 'body',
        year : 'year',
        link : "certs/hacker_rank_sql_intermediate.png"
    },
    {
        name : "Data Cleaning",
        body : 'body',
        year : 'year',
        link : "certs/kaggle_Data_Cleaning.png"
    },
    {
        name : "Feature Engineering",
        body : 'body',
        year : 'year',
        link : "certs/kaggle_Feature_Engineering.png"
    },
    {
        name : "Data Visualization",
        body : 'body',
        year : 'year',
        link : "certs/kaggle_Data_Visualization.png"
    },
    {
        name : "Go Basic",
        body : 'body',
        year : 'year',
        link : "certs/hacker_rank_go_basic.png"
    },
    {
        name : "Geospatial Analysis",
        body : 'body',
        year : 'year',
        link : "certs/kaggle_Geospatial_Analysis.png"
    },
    {
        name : "Intermediate Machine Learning",
        body : 'body',
        year : 'year',
        link : "certs/kaggle_Intermediate_Machine_Learning.png"
    },
    {
        name : "Intro to SQL",
        body : 'body',
        year : 'year',
        link : "certs/kaggle_Intro_to_SQL.png"
    },
    {
        name : "Machine Learning Explainability",
        body : 'body',
        year : 'year',
        link : "certs/kaggle_Machine_Learning_Explainability.png"
    },
  ],
  education: [
    {
      institution: 'Petrik Lajos Bilingual Vocational School of Chemistry, Environmental Protection and Information Technology',
      degree: 'Software Developer Degree',
      from: '2019',
      to: '2020',
    },
    {
      institution: 'Petrik Lajos Bilingual Vocational School of Chemistry, Environmental Protection and Information Technology',
      degree: 'Diploma of Vocational Education: Information Technology',
      from: '2015',
      to: '2019',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    // {
    //   title: 'Project Name',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
    //   imageUrl: 'https://via.placeholder.com/250x250',
    //   link: 'https://example.com',
    // },
    // {
    //   title: 'Project Name',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
    //   imageUrl: 'https://via.placeholder.com/250x250',
    //   link: 'https://example.com',
    // },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'procyon',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
