import { ResourceProps, resources } from "../constants/resources"
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Search from "@/components/custom/Search";
import ResourceCard from "@/components/custom/ResourceCard";

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
      {/* search */}
      <div>
        <Search />
      </div>
      {/* search */}

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
            Resources
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
        className="flex flex-wrap mt-5 gap-4"
        >
          {!data.length && (
            <div
            className="w-full h-[30vh] grid place-content-center"
            >
              <p>
                No resources found here
              </p>
            </div>
          )}
          {data.map((resource, index) => (
            <ResourceCard
            key={"Resource-card-" + index} 
            resource={resource}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
