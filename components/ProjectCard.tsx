import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Project } from '@/types'

const ProjectCard = ({ link, image, title, description }: Project) => {
    return (
        <div className="group relative overflow-hidden rounded-3xl shadow-lg transition-all duration-300 hover:shadow-xl h-[300px]">
            <Link href={link} className="block h-full" target='_blank'>
                <div className="relative w-full h-full">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        quality={100}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 33vw"
                        className="object-cover transition-transform duration-400 group-hover:scale-105"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                    <h3 className="text-xl font-bold mb-2">{title}</h3>
                    <p className="text-sm mb-4">{description}</p>
                    <span className="inline-flex items-center text-sm font-semibold text-white hover:text-blue-200 transition-colors">
                        Discover More
                        <ArrowRight className="mr-2 h-4 w-4" />
                    </span>
                </div>
            </Link>
        </div>
    )
}

export default ProjectCard

