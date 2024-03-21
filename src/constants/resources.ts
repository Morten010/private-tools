
export type ResourceProps = {
    logo: string
    name: string
    description: string
    category: "Design" | "Development" | "Typography" |  "Youtube" | "Technologies" | "Upskilling" | "Tools"
    tags?: string[]
}

export const resources: ResourceProps[] = [
    {
        logo: "/logos/dribbble.svg",
        name: "dribble",
        description: "Dribbble is a community of designers and creatives showcasing their work, sharing feedback, and finding inspiration.",
        category: "Design",
    },
    {
        logo: "/logos/stackbricks.svg",
        name: "StackBricks",
        description: "Database-Management for Developer Machines. With the free StackBricks application you can start multiple MariaDB, MySQL, PostgreSQL or Redis servers on your macOS, Windows or Linux desktop. Need Docker desktop installed and running to work!",
        category: "Tools",
    },
    {
        logo: "/logos/dbgate.png",
        name: "DbGate",
        description: "Powerful cross-platform SQL client and database manager for MySQL, SQL Server, PostgreSQL, SQLite, MongoDB, Redis, Oracle.",
        category: "Tools",
    },
    {
        logo: "/logos/fontshare.webp",
        name: "Fontshare",
        description: "Fontshare is a free fonts service from the Indian Type Foundry (ITF), making quality fonts accessible to all.",
        category: "Typography",
    },
    {
        logo: "/logos/minimalgallery.webp",
        name: "Minimal Gallery",
        description: "For the love of beautiful, clean and functional websites.",
        category: "Design",
    },
    {
        logo: "/logos/darkmodedesign.svg",
        name: "Dark mode design",
        description: "Dark Mode Design is a showcase of beautifully designed and inspiring dark mode websites. Dim the lights, lower your screen brightness, and enjoy.",
        category: "Design",
    },
    {
        logo: "/logos/refero.webp",
        name: "Refero",
        description: "Refero.design makes design research easier and faster than ever before. Explore over then 22,000 pages and over than 20,000 iOS screens.",
        category: "Design",
    },
    {
        logo: "/logos/freefaces.webp",
        name: "Free Faces",
        description: "curated collection of typefaces that are available under a variety of free licences somewhere on the interwebs.",
        category: "Typography",
    },
    {
        logo: "/logos/mobbin.webp",
        name: "Mobbin",
        description: "The world’s largest mobile and web design library. Save hours of UI & UX research with our library of 300,000+ screens from the world’s best designed apps.",
        category: "Design",
    },
    {
        logo: "/logos/vscode.webp",
        name: "Vscode",
        description: "Visual Studio Code (VSCode) is a versatile, lightweight code editor developed by Microsoft, offering extensive language support, customization options, and a rich extension ecosystem for developers.",
        category: "Tools",
    },
    {
        logo: "/logos/lmstudio.webp",
        name: "Lmstudio",
        description: "LM Studio is an easy to use desktop app for experimenting with local and open-source Large Language Models (LLMs). ",
        category: "Tools",
    },
    {
        logo: "/logos/github.webp",
        name: "Github desktop",
        description: "GitHub Desktop is a user-friendly desktop application developed by GitHub for managing version-controlled repositories. It provides an intuitive interface for tasks like cloning repositories, reviewing changes, committing code, and synchronizing with remote repositories hosted on GitHub. GitHub Desktop simplifies the Git workflow, making it accessible to developers of all skill levels without needing to use the command line interface.",
        category: "Tools",
    },
    {
        logo: "/logos/react.webp",
        name: "React",
        description: "GitHub Desktop is a user-friendly desktop application developed by GitHub for managing version-controlled repositories. It provides an intuitive interface for tasks like cloning repositories, reviewing changes, committing code, and synchronizing with remote repositories hosted on GitHub. GitHub Desktop simplifies the Git workflow, making it accessible to developers of all skill levels without needing to use the command line interface.",
        category: "Technologies",
    },
    {
        logo: "/logos/nextjs.svg",
        name: "Next",
        description: "GitHub Desktop is a user-friendly desktop application developed by GitHub for managing version-controlled repositories. It provides an intuitive interface for tasks like cloning repositories, reviewing changes, committing code, and synchronizing with remote repositories hosted on GitHub. GitHub Desktop simplifies the Git workflow, making it accessible to developers of all skill levels without needing to use the command line interface.",
        category: "Technologies",
    },
    {
        logo: "/logos/vue.webp",
        name: "Vue",
        description: "GitHub Desktop is a user-friendly desktop application developed by GitHub for managing version-controlled repositories. It provides an intuitive interface for tasks like cloning repositories, reviewing changes, committing code, and synchronizing with remote repositories hosted on GitHub. GitHub Desktop simplifies the Git workflow, making it accessible to developers of all skill levels without needing to use the command line interface.",
        category: "Technologies",
    },
    {
        logo: "/logos/nuxt.svg",
        name: "Nuxt",
        description: "GitHub Desktop is a user-friendly desktop application developed by GitHub for managing version-controlled repositories. It provides an intuitive interface for tasks like cloning repositories, reviewing changes, committing code, and synchronizing with remote repositories hosted on GitHub. GitHub Desktop simplifies the Git workflow, making it accessible to developers of all skill levels without needing to use the command line interface.",
        category: "Technologies",
    },
    {
        logo: "/logos/framer.svg",
        name: "Framer",
        description: "GitHub Desktop is a user-friendly desktop application developed by GitHub for managing version-controlled repositories. It provides an intuitive interface for tasks like cloning repositories, reviewing changes, committing code, and synchronizing with remote repositories hosted on GitHub. GitHub Desktop simplifies the Git workflow, making it accessible to developers of all skill levels without needing to use the command line interface.",
        category: "Technologies",
    },
    {
        logo: "/logos/react.webp",
        name: "React Native",
        description: "GitHub Desktop is a user-friendly desktop application developed by GitHub for managing version-controlled repositories. It provides an intuitive interface for tasks like cloning repositories, reviewing changes, committing code, and synchronizing with remote repositories hosted on GitHub. GitHub Desktop simplifies the Git workflow, making it accessible to developers of all skill levels without needing to use the command line interface.",
        category: "Technologies",
    }
]