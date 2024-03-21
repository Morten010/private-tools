import { ResourceProps, resources } from "../constants/resources"
import Link from "next/link";
import { cn } from "@/lib/utils";

type CategoriesProps = ResourceProps["category"]

export default function Home({
  searchParams: { category: cat },
}: {
  searchParams: { category: ResourceProps["category"] }
}) {
  
  const categories: CategoriesProps[] = [
    "Tools", 
    "Design",
    "Development",
    "Technologies",
    "Typography",
    "Upskilling",
    "Youtube"
  ]

  const data = cat ? resources.filter(r => r.category === cat) : resources
  
  return (
    <main>
      <div
      className="min-h-screen w-full relative"
      >
        <div 
        className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#fafafa10_1px,transparent_1px),linear-gradient(to_bottom,#fafafa10_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10"
        />
        <div
        className="bg-gradient-to-r from-primary dark:to-secondary-foreground to-secondary text-transparent bg-clip-text"
        >
          <h1
          className="text-8xl font-semibold text-center pt-40"
          >
            Tools
          </h1>
        </div>
        <div
        className="flex justify-center"
        >
          <ul
          className="flex gap-4 flex-wrap bg-card border rounded-sm mt-5 place-content-center"
          >
            {categories.map(category => (
              <li
              key={category + "-category-resource"}
              >
                <Link
                href={`/?category=${category}`}
                className={cn("p-4 inline-block hover:text-primary", {
                  "text-primary": cat === category
                })}
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div
        className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] mt-5 gap-2"
        >
          {data.map(resource => (
            <div
            key={resource.name + "-resource-link"}
            className="bg-card rounded-sm overflow-hidden"
            >
              <div
              className="aspect-video"
              >
                <div
                className="relative w-20"
                >
                  <img
                  src={resource.logo} 
                  alt={`${resource.name} logo`} 
                  height={150}
                  width={150}
                  />
                </div>
              </div>
              <div
              className="p-4"
              >
                <h2
                className="text-2xl font-semibold capitalize"
                >
                  {resource.name}
                </h2>
                <p>
                  {resource.description.slice(0, 100)}...
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
