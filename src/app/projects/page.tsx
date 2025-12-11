import ProjectCard from "@/src/components/ProjectCard";
import { projects } from "@/src/constants";

export default function Projects() {
    return (
        <>
            <h1>Projects</h1>
            {projects.map((project, i) =>
                <ProjectCard key={`project-${i}`} {...project}/>
            )}
        </>
    );
}