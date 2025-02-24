import { projects } from '@/constant';
import Link from 'next/link';
import { CardProject, CarouselProject } from '../CarouselCardsForProject';
import Container from '../Container';

const Project = () => {
    const projectCards = projects.map((project, index) => (
        <Link href={project.link} key={project.id}>
            <CardProject project={project} index={index} />
        </Link>
    ));
    return (
        <section className="py-16">
            <Container>
                <div>
                    <div className="text-center space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                            Our Projects
                        </h2>
                        <p className="text-muted-foreground text-lg md:text-xl lg:text-2xl font-normal max-w-4xl mx-auto">
                            Some of Out projects that we have worked on.
                        </p>
                    </div>
                    <div className="gap-8 my-10">
                        <CarouselProject items={projectCards} />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Project
