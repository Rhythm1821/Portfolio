import Image from "next/image";
import { PROJECTS } from "../constants";

export default function Projects() {
    return (
        <div>
            <h2 
              className="my-12 text-center text-2xl font-semibold uppercase tracking-wide text-slate-100"
              >
                Projects
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-2">
                {
                    PROJECTS.map((project,index)=>(
                        <a key={index} href={project.url} target="_blank">
                        <h1>{project.name}</h1>
                        <Image
                            src={project.image}
                            width={300}
                            height={300}
                            alt={project.name} 
                            className="rounded-3xl" />
                    </a>
                    ))
                }
            </div>
        </div>
    );
}