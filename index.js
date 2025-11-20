// Initialize Lenis smooth scroll
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

// Request animation frame for Lenis
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// GSAP ScrollTrigger integration with Lenis
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

const text = document.querySelector(".name-headers h1");

let tl = gsap.timeline({ defaults: { opacity: 0, ease: "linear" } });

function init() {
  const elems = document.querySelectorAll(".c-text");
  elems.forEach((el, idx) => {
    const split = new SplitType(el, { types: "words" });
    const splittedText = new SplitType(split.words, { types: "words" });
    gsap.to(splittedText.words, {
      y: 0,
      opacity: 1,
      // autoAlpha: 1,
      stagger: 0.08,
      duration: 1,
      transformStyle: "preserve-3d",
      ease: "power3.inOut",
      // ease: "easeIn",
    });
  });
  gsap.fromTo(
    ".classydev-pic",
    {
      opacity: 0,
      x: -20,
      ease: "back",
    },
    {
      duration: 1,
      opacity: 1,
      x: 0,
      ease: "back",
    }
  );
  // .from(".name-headers button", { y: 50, }, "-=0.4")
  // .from("#items > g", { scale: 0, stagger: 0.1, transformOrigin: "50% 50%" }, "-=0.5")
}
function animatHeaderText(el, trigger) {
  let elems;
  if (typeof el === "string") {
    elems = document.querySelectorAll(el);
  }
  let triggers;
  if (typeof trigger === "string") {
    triggers = document.querySelectorAll(trigger);
  }
  // const tl = gsap.timeline({ paused: true })
  elems.forEach((el, idx) => {
    const split = new SplitType(el, { types: "words" });
    const splittedText = new SplitType(split.words, { types: "words" });
    gsap.to(splittedText.words, {
      y: 0,
      opacity: 1,
      // autoAlpha: 1,
      stagger: 0.08,
      duration: 0.6,
      transformStyle: "preserve-3d",
      ease: "power3.inOut",
      // ease: "easeIn",
    });
  });
}

const handleHoveredLink = () => {
  let svgElems = document.querySelectorAll(".project-link-con");
  let svgElemParents = document.querySelectorAll(".each-project");
  svgElemParents.forEach((svgElemParent, idx) => {
    svgElemParent.addEventListener("mouseenter", () => {
      svgElems[idx].querySelectorAll(".project-link-con a svg").forEach((e) => {
        e.classList.add("hovered");
      });
    });
    svgElemParent.addEventListener("mouseleave", () => {
      svgElems[idx].querySelectorAll(".project-link-con a svg").forEach((e) => {
        e.classList.remove("hovered");
      });
    });
  });
};

// Experience data array
// const experiences = [
//     {
//         id: "00",
//         title: "Self Taught",
//         description: "Began teaching myself programming and how to code around December 2019 the goal was to build a collection of different restaurants in the university into an app and that was how my journey began."
//     },
//     {
//         id: "01",
//         title: "B.sc in mathematics and Computer Science",
//         description: "I obtained my B.sc degree from the University of Lagos. During my time at the university, I was able to learn various concepts in both mathematics and computer science which has helped me in my development career."
//     },
//     {
//         id: "02",
//         title: "Zuri and Hng Internships <span class='highlight'>[ Cohort 2021 ]</span>",
//         description: "I Participated in the Zuri and Hng Internships program in which I learnt to improve my web development skills and also worked on real-world projects with other developers."
//     },
//     {
//         id: "03",
//         title: "Google Africa Developer scholarship <span class='highlight'>[ GADS ]</span>",
//         description: "I qualified for the GADS 2019 program, it was during this program I deepened my frontend development skill and acquired new skills i.e backend development with node. Later went on to become a Mentor for the program the following year GADS 2020"
//     },
//     {
//         id: "04",
//         title: "Google Africa Developer scholarship <span class='highlight'>[ GADS ]</span>",
//         description: "I qualified for the GADS 2019 program, it was during this program I deepened my frontend development skill and acquired new skills i.e backend development with node. Later went on to become a Mentor for the program the following year GADS 2020"
//     }
// ];

const projects = [
    {
        title: "Vue Modaller",
        description:
            "I built a customizable modal library for Vue 3, making it easy for developers to create beautiful modals with minimal code.",
        skills: ["Nuxt3", "vue3"],
        github: "https://github.com/classyrazy/vue-modaller",
    },

    {
        title: "Xara",
        description:
            "As a lead frontend Engineer, I built Xara's landing pages and admin dashboard, created internal tools that streamline the customer services experience.",
        skills: ["Nuxt3", "vue3", "TailwindCSS", "GSAP", "Dashboard"],
        url: "https://usexara.ai/",
    },
    {
        title: "Billpoint",
        description:
            "Billpoint is an app that allows you to pay your electricity, internet, and other utility bills quickly and easily from the palm of your hand, with about 2k active users monthly.",
        skills: ["Nuxt3", "vue3", "TailwindCSS", "GSAP", "Dashboard"],
        url: "https://app.billpoint.co/",
    },

    {
        title: "Brown Envelope",
        description:
            "I created an AI-powered job application bot that automatically fills forms, uploads resumes, and submits applications across multiple job sites, saving hours of manual work.",
        skills: ["Nodejs", "AI/ML", "Automation", "Gemini", "playwright"],
        github: "https://github.com/classyrazy/brown-envelope",
        url: "https://drive.google.com/file/d/1QF6lQebONTPMLfue19A5rA8BCqhMrant/view?usp=sharing",
    },
    {
        title: "Boost",
        description:
            "I built a platform that makes car rentals seamless and hassle-free.",
        skills: ["Nuxt", "vue3", "TailwindCSS", "GSAP", "Dashboard"],
        url: "https://boostco.net/",
    },
    {
        title: "Bitshop",
        description:
            "Bitshop is an app that allows you to send cryptocurrency to your friends and family",
        skills: ["Nuxt", "vue3", "TailwindCSS", "GSAP", "Dashboard"],
        url: "https://app.bitshop.ng/",
    },
    {
        title: "Country Atlas",
        description:
            "Co-authored a comprehensive, lightweight npm library providing extensive global data including countries, currencies, and flags. Achieved over 11,000 downloads, demonstrating strong community adoption and utility.",
        skills: ["JavaScript", "npm", "Open Source", "API"],
        github: "https://github.com/amplifiedhq/countries-atlas",
        url: "https://www.npmjs.com/package/@amplifiedhq/countries-atlas",
    },
    {
        title: "Movieace",
        description:
            "I didn't like the way existing movie streaming platforms were designed with no structure and organization, so I built Movieace, a sleek and user-friendly movie streaming platform that offers a seamless viewing experience.",
        skills: ["Nuxt3", "vue3", "TailwindCSS", "GSAP", "Dashboard"],
        url: "https://movieace.vercel.app/",
    },
    {
        title: "Quantum Swap",
        description:  "Explore, shop, and experience the future of hassle-free digital commerce with Quantum Swap",
        skills: ["Nuxt", "vue3", "TailwindCSS", "GSAP", "Dashboard"],
        url: "https://quantumswaps.com/",
    },
    {
        title: "Cryzed",
        description:
            "I built a secure platform for converting digital assets to Naira, selling gift cards, and paying bills.",
        skills: ["Nuxt", "vue3", "TailwindCSS", "GSAP"],
        url: "https://cryzed.com/",
    },
    {
        title: "BoostMySocial",
        description:
            "BoostMySocial is a platform that helps you grow your social media presence by providing real followers, likes, and comments.",
        skills: ["Nuxt", "vue3", "TailwindCSS", "GSAP"],
        url: "https://boost-my-social.vercel.app/",
    },
    {
        title: "Zinex",
        description:
            "Zinex is an all-in-one platform for seamless gift card trading, crypto asset management, and quick airtime/data purchases.",
        skills: ["Nuxt", "vue3", "TailwindCSS", "GSAP"],
        url: "https://zinex.ng/",
    },
    {
        title: "Stonkas",
        description:
            "Stonkers is a web 3 platform that rewards people for tweeting positive tweets about stonkerss. ",
        skills: ["Nuxt", "vue3", "TailwindCSS", "GSAP"],
        url: "https://stonkers.gg/",
    },
    {
        title: "AskYourTelegram",
        description:
            "AskYourTelegram is an app that helps discover instant answers, seamless connections, and personalized recommendations to revolutionize your knowledge journey.",
        skills: ["Nuxt", "vue3", "TailwindCSS", "GSAP"],
        url: "https://www.askyourtelegram.com/",
    },
    {
        title: "Digital Purse",
        description:
            "Digital Purse is an app that redefines the way you make transactions. With complete anonymity and no need for KYC verification, it offers smooth, secure, and private payments at your fingertips.",
        skills: ["Nuxt", "vue3", "TailwindCSS", "GSAP"],
        url: "https://digitalpurse.io/",
    },
    {
        title: "Hiree Server",
        description:
            "I built the backend API for a job matching platform connecting developers with employers.",
        skills: ["Nodejs", "Express", "HaperDB", "JWT", "Bcrypt"],
        github: "https://github.com/classyrazy/hiree-server",
    },
    {
        title: "Abinibi",
        description:
            "an online clothing store blending African heritage with modern fashion.",
        skills: ["TailwindCSS", "Typescript", "Vue3", "Nuxt3", "Nodejs"],
        url: "https://abinibi.shop/",
    },
    {
        title: "Hiree",
        description:
            "I built a job marketplace connecting developers with employers. by using the hiree github histories and commits and list of skills on their github profiles to match them with relevant job listings.",
        skills: ["TailwindCSS", "Typescript", "Vue3", "Nuxt"],
        github: "https://github.com/classyrazy/hiree",
        url: "https://hiree.vercel.app/",
    },
    {
        title: "Avanda Docs",
        description:
            "I created comprehensive documentation for the Avanda Node.js framework.",
        skills: [
            "TailwindCSS",
            "Typescript",
            "Vue3",
            "Nuxt",
            "Nuxt Content",
            "Markdown",
        ],
        github: "https://github.com/avandajs/docs",
        url: "https://avanda-docs.vercel.app/",
    },
    {
        title: "Avanda Debugger",
        description:
            "I developed a testing tool for Avanda framework, similar to Postman but optimized for graph services.",
        skills: ["TailwindCSS", "Typescript", "Vue3", "Nuxt", "Nodejs", "Avanda"],
        github: "https://github.com/classyrazy/avanda-debugger",
        url: "https://avanda-debugger.vercel.app/",
    },
    {
        title: "Kiakia",
        description:
            "I built and maintained the landing pages and admin dashboard for the Kiakia mobile app.",
        skills: ["SASS(parrot css)", "Typescript", "Nuxt"],
        url: "https://kiakia.africa/",
    },
    {
        title: "Corep",
        description:
            "I created a platform giving university students real-time course updates, assignments, and lecturer announcements.",
        skills: [
            "SASS(parrot css)",
            "Vue3",
            "Nuxt 3",
            "Nodejs",
            "Avanda",
            "Typescript",
            "Firebase",
        ],
        url: "https://corep.ng/",
        github: "https://github.com/classyrazy/corep-dashboard-user/tree/develop",
    },
    {
        title: "Contact App",
        description:
            "I built a simple contact manager that stores contacts locally and enables quick calls and WhatsApp messages.",
        skills: ["HTML", "CSS", "Vanilla JS"],
        url: "https://contact-app-new.netlify.app/",
        github: "https://github.com/classyrazy/contact-App",
    },
    {
        title: "Zuri ChatApp",
        description:
            "I developed a real-time chat application where users can chat by sending invite links.",
        skills: ["HTML", "CSS", "Vanilla JS", "Nodejs", "Socket.io"],
        url: "https://zuri-chat-app-by-classydev.herokuapp.com/",
        github: "https://github.com/classyrazy/chat"
    },
];
const projectContainer = document.querySelector("#project-con");
const experienceContainer = document.querySelector("#experience-con");
const loadMoreBtn = document.querySelector("#load-more-btn");

let projectsToShow = 6; // Initially show 6 projects
let currentProjectIndex = 0;

const buildExperienceContent = (experience, idx) => {
  return `
    <div class="each-experience" data-aos="fade-up" data-aos-delay="${
      idx * 100
    }">
        <div class="experience-number">
            <span class="exp-id">${experience.id}</span>
        </div>
        <div class="experience-content">
            <h3 class="experience-title">${experience.title}</h3>
            <p class="experience-description">${experience.description}</p>
        </div>
    </div>
    `;
};

const buildContent = (project, idx) => {
  let htmlItem = "";
  htmlItem = `
    <div class="each-project" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="${
      idx * 100
    }">
    <div class="project-link-con">
        ${
          project.url
            ? `
            <a href="${project.url}" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19.986"
                                xmlns:v="https://vecta.io/nano">
                                <path
                                    d="M12.705 2.273h6.158L17.73 1.14V7.3a1.18 1.18 0 0 0 .331.8c.443.44 1.157.44 1.6 0 .208-.215.327-.5.33-.8V1.14A1.15 1.15 0 0 0 18.86.008h-6.158a1.18 1.18 0 0 0-.8.331c-.44.443-.44 1.157 0 1.6.215.207.5.326.8.33z" />
                                <path
                                    d="M9.446 12.16L19.668 1.936c.44-.443.44-1.157 0-1.6a1.14 1.14 0 0 0-.8-.331 1.19 1.19 0 0 0-.8.331L14.61 3.792 11.653 6.74l-3.8 3.812c-.44.443-.44 1.157 0 1.6a1.14 1.14 0 0 0 .8.331 1.19 1.19 0 0 0 .8-.331zm8.287-.33v4.867a6.02 6.02 0 0 1-.016.809l.04-.3c-.02.13-.052.258-.1.38l.113-.27a1.73 1.73 0 0 1-.208.36l.177-.23c-.086.108-.184.206-.292.292l.23-.177c-.1.084-.232.154-.36.208l.27-.113a1.69 1.69 0 0 1-.381.1l.3-.04a4.29 4.29 0 0 1-.566.016H2.723a1.58 1.58 0 0 1-.231-.016l.3.04c-.13-.02-.258-.052-.38-.1l.27.113c-.128-.055-.25-.124-.36-.208l.23.177a1.78 1.78 0 0 1-.295-.295l.177.23c-.084-.1-.154-.232-.208-.36l.113.27a1.69 1.69 0 0 1-.1-.38l.04.3c-.018-.188-.023-.377-.016-.566v-14.2a1.58 1.58 0 0 1 .016-.231l-.04.3c.02-.13.052-.258.1-.38l-.113.27c.055-.128.124-.25.208-.36l-.177.23c.086-.108.184-.206.292-.292l-.23.177c.1-.084.232-.154.36-.208l-.27.113a1.69 1.69 0 0 1 .381-.1l-.3.04a5.27 5.27 0 0 1 .682-.016h4.994a1.18 1.18 0 0 0 .8-.331c.44-.443.44-1.157 0-1.6-.215-.208-.5-.327-.8-.33h-5.45A2.76 2.76 0 0 0 1.33.4a2.55 2.55 0 0 0-.612.5 2.61 2.61 0 0 0-.442.657 3.39 3.39 0 0 0-.186.485 3.62 3.62 0 0 0-.084.56v13.936a7.27 7.27 0 0 0 .066 1.332c.1.516.37.988.75 1.354.188.187.404.344.64.464.16.08.324.146.494.2a3.08 3.08 0 0 0 .54.093 3.14 3.14 0 0 0 .4.016h14.38a3.03 3.03 0 0 0 1.257-.3 2.62 2.62 0 0 0 1.112-1.08 2.82 2.82 0 0 0 .344-1.325v-5.448a1.18 1.18 0 0 0-.331-.8c-.443-.44-1.157-.44-1.6 0a1.25 1.25 0 0 0-.322.811z" />
                            </svg>
        </a>
            `
            : ""
        }
        ${
          project.github
            ? `
            <a href="${project.github}" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                xmlns:v="https://vecta.io/nano">
                <path
                    d="M10.995 22C4.92 21.997-.003 17.07 0 10.995S4.93-.003 11.005 0 22.003 4.93 22 11.005A11.01 11.01 0 0 1 10.995 22zm2.75-2.192c4.635-1.445 7.36-6.232 6.234-10.955S14.262 1.086 9.474 1.887 1.335 7.06 1.808 11.892a8.99 8.99 0 0 0 2.715 5.685 8.9 8.9 0 0 0 3.841 2.272v-.247c0-.56-.01-1.118.013-1.677.004-.555.23-1.084.63-1.47.06-.058.126-.113.2-.188-.077-.014-.117-.024-.158-.028a7.32 7.32 0 0 1-2.209-.559c-.978-.405-1.748-1.193-2.13-2.18-.26-.705-.398-1.45-.41-2.2a4.08 4.08 0 0 1 .984-2.99c.07-.068.088-.17.047-.26A3.68 3.68 0 0 1 5.462 5.5c.033-.064.095-.108.167-.118a3.15 3.15 0 0 1 .643.06c.713.198 1.386.52 1.99.95.093.065.21.084.32.05a9.83 9.83 0 0 1 4.937 0 .4.4 0 0 0 .35-.064 6.26 6.26 0 0 1 1.977-.934c.21-.042.425-.06.64-.058a.19.19 0 0 1 .143.1A3.69 3.69 0 0 1 16.77 8c-.052.12-.026.26.067.352.602.692.938 1.574.948 2.49.028.777-.068 1.553-.283 2.3a3.9 3.9 0 0 1-1.418 2.057c-.728.506-1.564.834-2.44.96-.243.046-.5.074-.72.108a6.87 6.87 0 0 1 .519.647c.223.402.327.858.3 1.317l.003 1.576z" />
            </svg>
        </a>
            `
            : ""
        }
    </div>
    <div class="project-info">
        <h3 class="project-name">${project.title}</h3>
        <p> ${project.description}
        </p>
    </div>
    <div class="tech-names">
        ${project.skills
          .map((skill) => {
            return `<span>${skill}</span>`;
          })
          .join("")}
    
    </div>
    </div> 
    `;
  return htmlItem;
};
const injectIntoPage = () => {
  // Inject experiences
  if (experienceContainer) {
    experiences.forEach((experience, idx) => {
      experienceContainer.innerHTML += buildExperienceContent(experience, idx);
    });
  }

  // Inject initial projects
  showProjects();
};

const showProjects = () => {
  // Show initial projects
  const projectsToDisplay = projects.slice(0, projectsToShow);

  projectsToDisplay.forEach((project, idx) => {
    projectContainer.innerHTML += buildContent(project, idx);
  });

  // Update current index
  currentProjectIndex = projectsToShow;
  handleHoveredLink();

  // Hide load more button if all projects are shown
  if (currentProjectIndex >= projects.length) {
    loadMoreBtn.style.display = "none";
  }
};

const loadMoreProjects = () => {
  const remainingProjects = projects.slice(
    currentProjectIndex,
    currentProjectIndex + projectsToShow
  );

  remainingProjects.forEach((project, idx) => {
    projectContainer.innerHTML += buildContent(
      project,
      currentProjectIndex + idx
    );
  });

  currentProjectIndex += projectsToShow;

  // Hide load more button if all projects are shown
  if (currentProjectIndex >= projects.length) {
    loadMoreBtn.style.display = "none";
  }
};

window.addEventListener("load", () => {
  init();
//   injectIntoPage()
  showProjects();
  handleHoveredLink();

  // Add load more button event listener
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", loadMoreProjects);
  }

  // Add smooth scroll to any anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        lenis.scrollTo(target, {
          offset: -100,
          duration: 2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });
      }
    });
  });

  // Prevent default scroll behavior
  window.history.scrollRestoration = 'manual';
});

// Add scroll-based animations with Lenis
lenis.on('scroll', (e) => {
  // Update scroll progress indicator
  const scrollProgress = document.getElementById('scroll-progress');
  if (scrollProgress) {
    const scrolled = (e.scroll / (e.limit)) * 100;
    scrollProgress.style.width = `${Math.min(scrolled, 100)}%`;
  }
  
  // You can add more scroll-based effects here
  // For example, parallax effects, reveal animations, etc.
});
