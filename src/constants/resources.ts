
export type ResourceProps = {
    logo: string
    name: string
    description: string
    category: "Design" | "Development" | "Typography" |  "Youtube" | "Technologies" | "Upskilling" | "Tools"
    tags?: string[]
}

export const resources: ResourceProps[] = [
    {
        logo: "/resources/dribble.svg",
        name: "dribble",
        description: "Dribbble is a community of designers and creatives showcasing their work, sharing feedback, and finding inspiration.",
        category: "Design",
    },
    {
        logo: "/resources/dribble.svg",
        name: "StackBricks",
        description: "Database-Management for Developer Machines. With the free StackBricks application you can start multiple MariaDB, MySQL, PostgreSQL or Redis servers on your macOS, Windows or Linux desktop. Need Docker desktop installed and running to work!",
        category: "Tools",
    },
    {
        logo: "/resources/dribble.svg",
        name: "DbGate",
        description: "Powerful cross-platform SQL client and database manager for MySQL, SQL Server, PostgreSQL, SQLite, MongoDB, Redis, Oracle.",
        category: "Tools",
    }
]