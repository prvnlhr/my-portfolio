// src/lib/data/portfolioData.js
import doerImg from "../assets/doer.png";
import cloudeImg from "../assets/cloude.png";
import ecryptImg from "../assets/ecrypt.png";
import chordsImg from "../assets/chords.png";

const portfolioData = {
  aboutMe: {
    aboutMeContent: `I'm a no-nonsense developer who writes code that works - most of the time. Fullstack by trade, but my real love is crafting slick, high performing UIs. Always learning, coding, and breaking things—just to fix them better. Ready for any challenge that sharpens my frontend skills and sense of humor.`,
  },
  projects: [
    {
      id: 1,
      title: "DOER",
      titleSub: "E - LEARNING WEB APP",
      desc: "Doer is a full-stack e-learning PWA built with Next.js, offering courses managed in MongoDB. It features secure email/OTP authentication with NextAuth v5, media management via Cloudinary, and SASS for styling. Key functionalities include universal search, progress tracking, and a comprehensive admin panel.",
      imageSrc: doerImg,
      background: `linear-gradient(to top, #A399F2 0%, #FFFFFF 100%)`,
      techStack: [
        "NEXT",
        "MONGODB",
        "NEXTAUTH",
        "NODEMAILER",
        "CLOUDINARY",
        "SASS",
      ],
      link: "https://github.com/prvnlhr/Doer_NextJS",
      tags: [
        "/ E-LEARNING",
        "/ FULLSTACK",
        "/ NEXTJS",
        "/ MONGODB",
        "/ NEXTAUTH",
        "/ SCSS",
        "/ CLOUDINARY",
        "/ PWA",
      ],
    },
    {
      id: 2,
      title: "CLOUD.E",
      titleSub: "CLOUD STORAGE WEB APP",
      desc: "Cloude is a full-stack cloud storage PWA built with Next.js, offering seamless file management via Supabase Storage. It features secure authentication with Supabase Auth, media handling via Supabase, and Tailwind for styling. Key functionalities include real-time access, file sharing, and a responsive user interface.",
      imageSrc: cloudeImg,
      background: "linear-gradient(to top, #5099FF 0%, #FFFFFF 100%)",
      techStack: [
        "NEXT",
        "SUPABASE",
        "SUPABASE AUTHENTICATION",
        "TAILWIND",
        "SUPABASE STORAGE",
      ],
      link: "https://github.com/prvnlhr/cloude_next",
      tags: [
        "/ CLOUD STORAGE",
        "/ NEXTJS",
        "/ SUPABASE",
        "/ AUTHENTICATION",
        "/ TAILWIND",
        "/ STORAGE",
        "/ REAL-TIME",
        "/ UI/UX",
      ],
    },
    {
      id: 3,
      title: "ECRYPT",
      titleSub: "DIGITAL VAULT PWA",
      desc: "Ecrypt is a full-stack digital vault PWA built with the MERN stack, offering secure note management in MongoDB. It features JWT/OAuth authentication with Node.js, state management via Redux Toolkit, and Framer Motion for animations. Key functionalities include CRUD operations, password generation, and email verification.",
      imageSrc: ecryptImg,
      background: "linear-gradient(to top, #EFE6A6 0%, #FFFFFF 100%)",
      techStack: ["REACT", "MONGODB", "NODEJS", "EXPRESS", "REDUX", "FRAMER"],
      link: "https://github.com/prvnlhr/ecrypt_mern_pwa",
      tags: [
        "/ DIGITAL VAULT",
        "/ MERN STACK",
        "/ REACT",
        "/ MONGODB",
        "/ JWT",
        "/ OAUTH",
        "/ CRUD",
        "/ REDUX",
        "/ FRAMER",
      ],
    },
    {
      id: 4,
      title: "CHORDS",
      titleSub: "MUSIC PLAYER WEB APP",
      desc: "Chords is a full-stack music player built with vanilla JavaScript, offering song management via Web Storage API. It features persistent data storage, intuitive search functionality, and modern CSS for styling. Key functionalities include playlist creation, smooth playback, and a responsive user interface across devices.",
      imageSrc: chordsImg,
      background: "linear-gradient(to top, #EEA3BD 0%, #FFFFFF 100%)",
      // background:
      //   "linear-gradient(to top, #0E0E0E 0%, #EEA3BD 50%, #FFFFFF 100%)",
      techStack: ["JAVASCRIPT", "HTML", "CSS", "WEB-STORAGE", "CSS"],
      link: "https://github.com/prvnlhr/Chords_music_player",
      tags: [
        "/ MUSIC PLAYER",
        "/ JAVASCRIPT",
        "/ HTML",
        "/ CSS",
        "/ SEARCH",
        "/ WEB STORAGE",
        "/ UI/UX",
        "/ MEDIA PLAYER",
      ],
    },
  ],
  otherWork: [
    {
      id: 1,
      title: "Date Picker",
      description:
        "A sleek and intuitive custom date picker component built with Next.js, React, and Sass, enabling users to easily add and manage events. It leverages Moment.js for seamless date handling and integration, offering a smooth user experience for scheduling and event management.",
      link: "https://github.com/prvnlhr/Date_Picker_nextJS",
    },
    {
      id: 2,
      title: "Ipod - Virtual simulator",
      description:
        "A virtual iPod simulator that replicates the original iPod interface using React and CSS animations. It includes features such as menu navigation, music playback, and settings adjustments. The click-wheel functionality is fully simulated, offering an engaging and nostalgic user experience.",
      link: "https://github.com/prvnlhr/Ipod_simulator_react",
    },
    {
      id: 3,
      title: "Shopping Cart",
      description:
        "A feature-rich shopping cart application developed using Next.js and Redux Toolkit. It allows users to browse products, add items to the cart, and update quantities seamlessly. The cart dynamically updates the total amount and applies relevant discounts in real time for a smooth e-commerce experience.",
      link: "https://github.com/prvnlhr/shope.fy",
    },
    {
      id: 4,
      title: "Custom Calculator",
      description:
        "A highly customizable calculator built with React and Tailwind CSS, supporting basic and advanced operations. It includes percentage calculations, memory functions, and keyboard support. The responsive design ensures optimal usability across devices, enhancing the overall user experience.",
      link: "https://github.com/prvnlhr/JS_Calculator",
    },
    {
      id: 5,
      title: "Aesop Clone",
      description:
        "A pixel-perfect clone of the Aesop website crafted using Next.js, Tailwind CSS, and Framer Motion for smooth animations. It replicates the original product listing, checkout flow, and interactive UI components, ensuring a visually engaging and responsive browsing experience.",
      link: "https://github.com/prvnlhr/aesop_clone_react",
    },
  ],

  expertise: [
    { id: 1, label: ["F", "R", "O", "N", "T", "E", "N", "D"] }, // FRONTEND
    { id: 2, label: ["B", "A", "C", "K", "E", "N", "D"] }, // BACKEND
    { id: 3, label: ["D", "E", "S", "I", "G", "N"] }, // DESIGN
    { id: 4, label: ["R", "E", "S", "T"] }, // REST
    { id: 5, label: ["C", "O", "D", "I", "N", "G"] }, // CODING
  ],
  contact: {
    firstName: "Praveen",
    lastName: "Lohar",
    email: "praveenlohar.in@gmail.com",
    phone: "7230904343",
    socialLinks: [
      {
        id: 1,
        label: "Linkedin",
        linkUrl: "https://www.linkedin.com/in/praveen-lohar/",
      },
      {
        id: 2,
        label: "Github",
        linkUrl: "https://github.com/prvnlhr",
      },
      {
        id: 3,
        label: "Leetcode",
        linkUrl: "https://leetcode.com/u/praveen_lhr/",
      },
      {
        id: 4,
        label: "Instagram",
        linkUrl: "https://www.instagram.com/iamlohar/",
      },
      {
        id: 5,
        label: "Twitter/X",
        linkUrl: "https://x.com/praveen_lhr",
      },
      {
        id: 6,
        label: "Resume",
        linkUrl:
          "https://drive.google.com/file/d/1-F7YQB1VbjKthEjJke9JjrLUOacxEmsQ/view?usp=sharing",
      },
    ],
  },

  footer: {
    copyright: "© 2025 Your Name. All rights reserved.",
  },
};

export default portfolioData;
