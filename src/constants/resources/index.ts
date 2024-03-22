import { designResources } from "./designResources"
import { TechnologiesResources } from "./technologiesResouces"
import { ToolsResources } from "./toolsResources"
import { typographyResources } from "./typographyResouces"
import { UpskillingResources } from "./upskillingResources"
import { youtubeResources } from "./youtubeResources"

export type ResourceProps = {
    logo: string
    name: string
    description: string
    category: "Design" | "Development" | "Typography" |  "Youtube" | "Technologies" | "Upskilling" | "Tools"
    tags?: string[],
    link: string
}

export const resources: ResourceProps[] = [
    ...designResources,
    ...TechnologiesResources,
    ...ToolsResources,
    ...typographyResources,
    ...UpskillingResources,
    ...youtubeResources
]
