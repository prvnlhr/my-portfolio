// src/lib/data/portfolioData.js

const portfolioData = {
  aboutMe: {
    aboutMeContent: `I'm a no-nonsense developer who writes code that works - most of the time. Fullstack by trade, but my real love is crafting slick, high performing UIs. Always learning, coding, and breaking things—just to fix them better. Ready for any challenge that sharpens my frontend skills and sense of humor`,
  },

  projects: [
    {
      title: "Doer - E Learning",
      desc: "Doer is a full-stack e-learning PWA built with Next.js, offering a variety of courses managed in MongoDB. It features secure email/OTP authentication with NextAuth v5, media management via Cloudinary, and SASS for styling. Key functionalities include universal search, progress tracking, and a comprehensive admin panel for content management.",
      techStack: [
        "Next",
        "MongoDB",
        "NextAuth",
        "Nodemailer",
        "Cloudinary",
        "SASS",
      ],
    },
    {
      title: "Cloude - Cloud Storage",
      desc: "Cloude is a modern cloud storage solution built with a seamless and intuitive interface. Users can easily upload, organize, and manage their files securely in the cloud. With real-time access and sharing features, Cloude ensures smooth collaboration and file management. Leveraging Supabase for backend, authentication, and storage, along with a clean Tailwind-powered UI, Cloude offers a fast, reliable, and user-friendly experience, similar to popular platforms like Google Drive.",
      techStack: [
        "Next",
        "Supabase",
        "Supabase Authentication",
        "Tailwind",
        "Supabase Storage",
      ],
    },
    {
      title: "Ecrypt  - Digital Vault",
      desc: "Ecrypt is a secure digital vault PWA built using the MERN stack (MongoDB, Express.js, React, Node.js), offering full CRUD operations and seamless state management via Redux Toolkit. The app features secure JWT-based authentication and authorization, including email verification and OAuth support. Additional functionalities include a password generator, search feature, date picker, and dynamic animations crafted using Framer Motion to enhance the user experience.",
      techStack: ["React", "MongoDB", "NodeJS", "Express", "Redux", "Framer"],
    },
    {
      title: "Chords - Music Player",
      desc: "Chords is a fully-featured music player built with JavaScript, HTML, and CSS, delivering an intuitive and engaging interface. The app allows users to seamlessly search for songs, albums, and artists, ensuring a smooth music discovery experience. Efficiently managed state and data persistence using the Web Storage API, Chords ensures reliable performance, offering users a consistent and enjoyable listening journey.",
      techStack: ["Javascript", "HTML", "CSS", "WEB-STORAGE", "CSS"],
    },
  ],

  otherWork: [
    {
      id: 1,
      title: "Date Picker",
      description:
        "A sleek and intuitive custom date picker component built with Next.js, React, and Sass, enabling users to easily add and manage events. It leverages Moment.js for seamless date handling and integration, offering a smooth user experience for scheduling and event management.",
      link: "",
    },
    {
      id: 2,
      title: "Ipod - Virtual simulator",
      description:
        "A virtual iPod simulator that replicates the original iPod interface using React and CSS animations. It includes features such as menu navigation, music playback, and settings adjustments. The click-wheel functionality is fully simulated, offering an engaging and nostalgic user experience.",
      link: "",
    },
    {
      id: 3,
      title: "Shopping Cart",
      description:
        "A feature-rich shopping cart application developed using Next.js and Redux Toolkit. It allows users to browse products, add items to the cart, and update quantities seamlessly. The cart dynamically updates the total amount and applies relevant discounts in real time for a smooth e-commerce experience.",
      link: "",
    },
    {
      id: 4,
      title: "Custom Calculator",
      description:
        "A highly customizable calculator built with React and Tailwind CSS, supporting basic and advanced operations. It includes percentage calculations, memory functions, and keyboard support. The responsive design ensures optimal usability across devices, enhancing the overall user experience.",
      link: "",
    },
    {
      id: 5,
      title: "Aesop Clone",
      description:
        "A pixel-perfect clone of the Aesop website crafted using Next.js, Tailwind CSS, and Framer Motion for smooth animations. It replicates the original product listing, checkout flow, and interactive UI components, ensuring a visually engaging and responsive browsing experience.",
      link: "",
    },
  ],

  expertise: [
    {
      id: 1,
      label: ["M", "E", "R", "N"],
    },
    {
      id: 2,
      label: ["N", "e", "x", "t"],
    },
    {
      id: 3,
      label: ["U", "I", "/", "U", "X"],
    },
    {
      id: 4,
      label: ["A", "l", "g", "o", "r", "i", "t", "h", "m"],
    },
  ],
  contact: {
    email: "praveenlohar.in@gamil.com",
    phone: "7230904343",
    links: {
      github: "https://github.com/yourname",
      linkedin: "https://linkedin.com/in/yourname",
      resume: "https://twitter.com/yourhandle",
    },
  },

  footer: {
    copyright: "© 2025 Your Name. All rights reserved.",
  },
};

export default portfolioData;
