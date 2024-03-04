
const text = document.querySelector('.name-headers h1')

let tl = gsap.timeline({ defaults: { opacity: 0, ease: "linear" } });

function init() {
    const elems = document.querySelectorAll(".c-text")
    elems.forEach((el, idx) => {
        const split = new SplitType(el, { types: 'words' });
        const splittedText = new SplitType(split.words, { types: 'words' });
            gsap.to(splittedText.words, {
                y: 0,
                opacity: 1,
                // autoAlpha: 1,
                stagger: 0.08,
                duration: 1,
            transformStyle: "preserve-3d",
            ease: 'power3.inOut'
            // ease: "easeIn",
            });
        })
        gsap.fromTo(".classydev-pic", {
            opacity: 0,
            x: -20, ease: "back"
        },{
            duration: 1,
            opacity: 1,
            x: 0,
            ease: "back"
        })
        // .from(".name-headers button", { y: 50, }, "-=0.4")
        // .from("#items > g", { scale: 0, stagger: 0.1, transformOrigin: "50% 50%" }, "-=0.5")
}
function animatHeaderText(el, trigger) {
    let elems
    if (typeof el === 'string') {
        elems = document.querySelectorAll(el)
    }
    let triggers;
    if (typeof trigger === 'string') {
        triggers = document.querySelectorAll(trigger)
    }
    // const tl = gsap.timeline({ paused: true })
    elems.forEach((el, idx) => {
        const split = new SplitType(el, { types: 'words' });
        const splittedText = new SplitType(split.words, { types: 'words' });
            gsap.to(splittedText.words, {
                y: 0,
                opacity: 1,
                // autoAlpha: 1,
                stagger: 0.08,
                duration: 0.6,
            transformStyle: "preserve-3d",
            ease: 'power3.inOut'
            // ease: "easeIn",
            });
        })
}


const handleHoveredLink = () => {
    let svgElems = document.querySelectorAll(".project-link-con")
    let svgElemParents = document.querySelectorAll(".each-project")
    svgElemParents.forEach((svgElemParent, idx) => {
        svgElemParent.addEventListener("mouseenter", () => {
            svgElems[idx].querySelectorAll(".project-link-con a svg").forEach(e => {
                e.classList.add("hovered")
            })
        })
        svgElemParent.addEventListener("mouseleave", () => {
            svgElems[idx].querySelectorAll(".project-link-con a svg").forEach(e => {
                e.classList.remove("hovered")
            })
        })
    });
}


const projects = [
    {
        title: "Payv3rse",
        description: "Payv3rse is your gateway to seamless cryptocurrency exchange, gift card trading, and hassle-free bill payments",
        skills: ["Nuxt", "vue3", "TailwindCSS", "GSAP", 'Dashboard'],
        url: "https://payv3rse.co/"
    },
    {
        title: "Boost",
        description: "Boost is an app that revolutionizes car rentals, providing innovative solutions for seamless mobility",
        skills: ["Nuxt", "vue3", "TailwindCSS", "GSAP", 'Dashboard'],
        url: "https://boostco.net/"
    },
    {
        title: "Zinex",
        description: "Zinex is an all-in-one platform for seamless gift card trading, crypto asset management, and quick airtime/data purchases.",
        skills: ["Nuxt", "vue3", "TailwindCSS", "GSAP"],
        url: "https://zinex.ng/"
    },
    {
        title: "BoostMySocial",
        description: "BoostMySocial is a platform that helps you grow your social media presence by providing real followers, likes, and comments.",
        skills: ["Nuxt", "vue3", "TailwindCSS", "GSAP"],
        url: "https://boost-my-social.vercel.app/"
    },
    {
        title: "Stonkas",
        description: "Stonkers is a web 3 platform that rewards people for tweeting positive tweets about stonkerss. ",
        skills: ["Nuxt", "vue3", "TailwindCSS", "GSAP"],
        url: "https://stonkers.gg/"
    },
    {
        title: "AskYourTelegram",
        description: "AskYourTelegram is an app that helps discover instant answers, seamless connections, and personalized recommendations to revolutionize your knowledge journey.",
        skills: ["Nuxt", "vue3", "TailwindCSS", "GSAP"],
        url: "https://www.askyourtelegram.com/"
    },
    {
        title: "Digital Purse",
        description: "Digital Purse is an app that redefines the way you make transactions. With complete anonymity and no need for KYC verification, it offers smooth, secure, and private payments at your fingertips.",
        skills: ["Nuxt", "vue3", "TailwindCSS", "GSAP"],
        url: "https://digital-purse.vercel.app/"
    },
    {
        title: "Hiree Server",
        description: "Hiree is a web app for developers looking for jobs and employers looking for developers.",
        skills: ["Nodejs", "Express", "HaperDB", "JWT", "Bcrypt", "Nodemailer", "Sendgrid", "Heroku"],
        github: "https://github.com/classyrazy/hiree-server"
    },
    {
        title: "Hiree",
        description: "Hiree is a web app for developers looking for jobs and employers looking for developers.",
        skills: ["TailwindCSS", "Typescript", "Vue3", "Nuxt"],
        github: "https://github.com/classyrazy/hiree",
        url: "https://hiree.vercel.app/"
    },
    {
        title: "Avanda Docs",
        description: "Documentation for a nodejs backend framework Avanda",
        skills: ["TailwindCSS", "Typescript", "Vue3", "Nuxt", "Nuxt Content", "Markdown"],
        github: "https://github.com/avandajs/docs",
        url: "https://avanda-docs.vercel.app/"
    },
    {
        title: "Kiakia",
        description: "Web for kiakia app",
        skills: ["SASS(parrot css)", "Typescript", "Nuxt"],
        url: "https://kiakia.africa/"
    },
    {
        title: "Corep",
        description: 'Corep is a web app for university students giving them real-time update about their courses Still in progress',
        skills: ["SASS(parrot css)", "Vue3", "Nuxt 3", "Nodejs", "Avanda", "Typescript"],
        url: "https://corep.ng/"
    },
    {
        title: "Contact App",
        description: 'A localStorage based contact app that enable you to contact saved numbers by call and whatApp',
        skills: ["HTML", "CSS", "Vanilla JS"],
        url: "https://contact-app-new.netlify.app/",
        github: "https://github.com/classyrazy/contact-App"
    },
    {
        title: "Zuri ChatApp",
        description: 'A simple chat app to chat with people just by sending them an invite',
        skills: ["HTML", "CSS", "Vanilla JS", "Nodejs", "Socket.io"],
        url: "https://zuri-chat-app-by-classydev.herokuapp.com/",
        github: "https://github.com/classyrazy/chat-app-zuri"
    }
]
const projectContainer = document.querySelector("#project-con")

const buildContent = (project, idx) => {
    let htmlItem = ""
    htmlItem = `
    <div class="each-project" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="${idx * 100}">
    <div class="project-link-con">
        ${project.url ? `
            <a href="${project.url}" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19.986"
                                xmlns:v="https://vecta.io/nano">
                                <path
                                    d="M12.705 2.273h6.158L17.73 1.14V7.3a1.18 1.18 0 0 0 .331.8c.443.44 1.157.44 1.6 0 .208-.215.327-.5.33-.8V1.14A1.15 1.15 0 0 0 18.86.008h-6.158a1.18 1.18 0 0 0-.8.331c-.44.443-.44 1.157 0 1.6.215.207.5.326.8.33z" />
                                <path
                                    d="M9.446 12.16L19.668 1.936c.44-.443.44-1.157 0-1.6a1.14 1.14 0 0 0-.8-.331 1.19 1.19 0 0 0-.8.331L14.61 3.792 11.653 6.74l-3.8 3.812c-.44.443-.44 1.157 0 1.6a1.14 1.14 0 0 0 .8.331 1.19 1.19 0 0 0 .8-.331zm8.287-.33v4.867a6.02 6.02 0 0 1-.016.809l.04-.3c-.02.13-.052.258-.1.38l.113-.27a1.73 1.73 0 0 1-.208.36l.177-.23c-.086.108-.184.206-.292.292l.23-.177c-.1.084-.232.154-.36.208l.27-.113a1.69 1.69 0 0 1-.381.1l.3-.04a4.29 4.29 0 0 1-.566.016H2.723a1.58 1.58 0 0 1-.231-.016l.3.04c-.13-.02-.258-.052-.38-.1l.27.113c-.128-.055-.25-.124-.36-.208l.23.177a1.78 1.78 0 0 1-.295-.295l.177.23c-.084-.1-.154-.232-.208-.36l.113.27a1.69 1.69 0 0 1-.1-.38l.04.3c-.018-.188-.023-.377-.016-.566v-14.2a1.58 1.58 0 0 1 .016-.231l-.04.3c.02-.13.052-.258.1-.38l-.113.27c.055-.128.124-.25.208-.36l-.177.23c.086-.108.184-.206.292-.292l-.23.177c.1-.084.232-.154.36-.208l-.27.113a1.69 1.69 0 0 1 .381-.1l-.3.04a5.27 5.27 0 0 1 .682-.016h4.994a1.18 1.18 0 0 0 .8-.331c.44-.443.44-1.157 0-1.6-.215-.208-.5-.327-.8-.33h-5.45A2.76 2.76 0 0 0 1.33.4a2.55 2.55 0 0 0-.612.5 2.61 2.61 0 0 0-.442.657 3.39 3.39 0 0 0-.186.485 3.62 3.62 0 0 0-.084.56v13.936a7.27 7.27 0 0 0 .066 1.332c.1.516.37.988.75 1.354.188.187.404.344.64.464.16.08.324.146.494.2a3.08 3.08 0 0 0 .54.093 3.14 3.14 0 0 0 .4.016h14.38a3.03 3.03 0 0 0 1.257-.3 2.62 2.62 0 0 0 1.112-1.08 2.82 2.82 0 0 0 .344-1.325v-5.448a1.18 1.18 0 0 0-.331-.8c-.443-.44-1.157-.44-1.6 0a1.25 1.25 0 0 0-.322.811z" />
                            </svg>
        </a>
            `: ''
        }
        ${project.github ? `
            <a href="${project.github}" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                xmlns:v="https://vecta.io/nano">
                <path
                    d="M10.995 22C4.92 21.997-.003 17.07 0 10.995S4.93-.003 11.005 0 22.003 4.93 22 11.005A11.01 11.01 0 0 1 10.995 22zm2.75-2.192c4.635-1.445 7.36-6.232 6.234-10.955S14.262 1.086 9.474 1.887 1.335 7.06 1.808 11.892a8.99 8.99 0 0 0 2.715 5.685 8.9 8.9 0 0 0 3.841 2.272v-.247c0-.56-.01-1.118.013-1.677.004-.555.23-1.084.63-1.47.06-.058.126-.113.2-.188-.077-.014-.117-.024-.158-.028a7.32 7.32 0 0 1-2.209-.559c-.978-.405-1.748-1.193-2.13-2.18-.26-.705-.398-1.45-.41-2.2a4.08 4.08 0 0 1 .984-2.99c.07-.068.088-.17.047-.26A3.68 3.68 0 0 1 5.462 5.5c.033-.064.095-.108.167-.118a3.15 3.15 0 0 1 .643.06c.713.198 1.386.52 1.99.95.093.065.21.084.32.05a9.83 9.83 0 0 1 4.937 0 .4.4 0 0 0 .35-.064 6.26 6.26 0 0 1 1.977-.934c.21-.042.425-.06.64-.058a.19.19 0 0 1 .143.1A3.69 3.69 0 0 1 16.77 8c-.052.12-.026.26.067.352.602.692.938 1.574.948 2.49.028.777-.068 1.553-.283 2.3a3.9 3.9 0 0 1-1.418 2.057c-.728.506-1.564.834-2.44.96-.243.046-.5.074-.72.108a6.87 6.87 0 0 1 .519.647c.223.402.327.858.3 1.317l.003 1.576z" />
            </svg>
        </a>
            `: ''
        }
    </div>
    <div class="project-info">
        <h3 class="project-name">${project.title}</h3>
        <p> ${project.description}
        </p>
    </div>
    <div class="tech-names">
        ${project.skills.map(skill => {
            return `<span>${skill}</span>`
        }).join('')
        }
    
    </div>
    </div> 
    `
    return htmlItem
}
const injectIntoPage = () => {
    projects.forEach(project => {
        projectContainer.innerHTML += buildContent(project)
    })

}

window.addEventListener("load", () => {
    init()
    injectIntoPage()
    handleHoveredLink()
})


