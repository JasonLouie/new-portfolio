import Image from "next/image";
import me from "@/src/assets/me.png";
import { bio, projects, skills } from "../constants";
import Section from "../components/Section";
import SkillCard from "../components/SkillCard";
import ProjectCard from "../components/ProjectCard";
import Button from "../components/Button";

export default function About() {
    return (
        <>
            <Section className="bg-green-900">
                <div className="flex flex-col items-center justify-center text-center md:text-left md:flex-row md:gap-x-10">
                    <div className="min-w-50">
                        <Image
                            src={me}
                            alt="Photo of Jason Louie"
                            className="h-50 w-50 rounded-md"
                        />
                    </div>
                    <div>
                        <h1 className="text-xl font-light my-4 md:mt-0">
                            Hello, my name is
                            <span className="block font-bold text-[2.5rem]">
                                Jason Louie
                            </span>
                        </h1>
                        <p>{bio}</p>
                    </div>
                </div>
            </Section>
            <Section title="Skills Overview">
                <p className="text-center">Skill info...</p>
                <div className="mt-20 flex flex-col items-center justify-center gap-y-24 lg:flex-row lg:gap-x-5">
                    {skills.map((skill, i) => <SkillCard key={`skill-${i}`} {...skill} />)}
                </div>
            </Section>
            <Section title="Featured Projects">
                <div className="">
                    {projects.map((project, i) => <ProjectCard key={`project-card-${i}`} {...project} />)}
                </div>
                <Button
                    className="block px-4 py-2 bg-green-600 font-bold text-white text-[0.9rem] mx-auto mt-10 rounded-md w-fit"
                    href="/projects"
                >
                    View all projects
                </Button>
            </Section>
        </>
    );
}
