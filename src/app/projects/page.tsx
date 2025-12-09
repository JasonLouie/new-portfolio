import ProjectCard from "@/src/components/ProjectCard";
import { projects } from "@/src/constants/constants";

export default function Projects() {
    return (
        <>
            <h1>Projects</h1>
            {projects.map(project =>
                <ProjectCard key={project.id} name={project.name} href={project.href} description={project.description}/>
            )}
        </>
    );
}