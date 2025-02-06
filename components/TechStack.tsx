import { cn } from "@/lib/utils";
import { CodeXml, Database, GitBranch, Ruler } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";
import Container from "./Container";
import { Separator } from "./ui/separator";
import Note from "./note";

const TechStack = () => {
    return (
        <section className="py-24 md:py-32 lg:py-40">
            <Container className="flex flex-col items-center">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-gray-800">
                        Our Technology Suite
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        We leverage a robust technology stack to deliver high-quality, scalable, and innovative digital experiences.
                    </p>
                </div>
                <div className="grid gap-12 md:gap-16 lg:gap-20 mt-10 max-w-[38rem] w-full">
                    <TechCard
                        src="/figma.svg"
                        title="Figma"
                        description="Design & Prototyping"
                        descriptionTwo="Collaborative design and prototyping for intuitive user experiences."
                        icon={<Ruler className="w-6 h-6 text-gray-700" />}
                    />
                    <BigTechCard
                        src="/react.svg"
                        srcTwo="/next.svg"
                        title="React.js"
                        titleTwo="Next.js"
                        description="Frontend Development"
                        descriptionTwo={
                            <span className="leading-relaxed text-gray-600">
                                Building performant and user-friendly interfaces with React.js and the power of Next.js for server-side rendering and optimized performance.
                            </span>
                        }
                        icon={<CodeXml className="w-6 h-6 text-gray-700" />}
                    />
                    <BigTechCard
                        src="/ruby.png"
                        srcTwo="/java.svg"
                        title="Ruby"
                        titleTwo="Java"
                        description="Backend Development"
                        descriptionTwo={
                            <span className="leading-relaxed text-gray-600">
                                Robust backend solutions with Ruby for rapid development and Java for high-performance, enterprise-grade applications.
                            </span>
                        }
                        icon={<Database className="w-6 h-6 text-gray-700" />}
                    />
                    <BigTechCard
                        src="/cloudways.svg"
                        srcTwo="/vercel.svg"
                        title="Cloudways"
                        titleTwo="Vercel"
                        description="Hosting & Deployment"
                        descriptionTwo={
                            <span className="leading-relaxed text-gray-600">
                                Reliable and scalable hosting on Cloudways and optimized deployments with Vercel for fast loading times and a seamless user experience.
                            </span>
                        }
                        icon={<Database className="w-6 h-6 text-gray-700" />}
                    />
                    <TechCard
                        src="/github.svg"
                        title="GitHub"
                        description="Version Control & Collaboration"
                        descriptionTwo="Streamlined development with Git for efficient version control and seamless collaboration among team members."
                        icon={<GitBranch className="w-6 h-6 text-gray-700" />}
                    />
                    <TechCard
                        src="/amazon-payment-2.png"
                        title="Amazon Payment Services"
                        description="Secure Payments"
                        descriptionTwo="Seamless and secure payment processing for a smooth user checkout experience."
                        icon={<GitBranch className="w-6 h-6 text-gray-700" />}
                    />
                </div>
                <Note title="Note" type="note">
                    we have created a new payment
                </Note>
            </Container>
        </section>
    );
};

const TechCard = ({
    src,
    title,
    description,
    icon,
    descriptionTwo,
    className,
}: {
    src: string;
    title: string;
    description: string;
    icon: ReactNode;
    descriptionTwo: ReactNode;
    className?: string;
}) => (
    <div className="px-8 py-10 bg-white border border-gray-200 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col space-y-6 w-full">
        <div className="flex items-center space-x-4">
            <div>{icon}</div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-700">
                {description}
            </h3>
        </div>
        <Separator orientation="horizontal" className="w-full h-[1px] bg-gray-300" />
        <div className="flex items-start sm:flex-row flex-col sm:space-x-6 space-x-0 space-y-4">
            <Image
                src={src}
                alt={title}
                width={50}
                height={50}
                quality={100}
                className={cn("md:w-20 md:h-20 w-16 h-16 object-contain", className)}
            />
            <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-medium text-gray-900">
                    {title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {descriptionTwo}
                </p>
            </div>
        </div>
    </div>
);

const BigTechCard = ({
    src,
    title,
    titleTwo,
    srcTwo,
    description,
    icon,
    descriptionTwo,
    className,
}: {
    src: string;
    titleTwo: string;
    srcTwo: string;
    title: string;
    description: string;
    icon: ReactNode;
    descriptionTwo: ReactNode;
    className?: string;
}) => (
    <div className="px-8 py-10 bg-white border border-gray-200 rounded-3xl  shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col space-y-6 w-full">
        <div className="flex items-center space-x-4">
            <div>{icon}</div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-700">
                {description}
            </h3>
        </div>
        <Separator orientation="horizontal" className="w-full h-[1.5px] bg-gray-300" />
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
            <div className="flex flex-col items-center justify-center p-6 rounded-lg bg-gray-100 shadow-sm">
                <Image
                    src={src}
                    alt={title}
                    width={50}
                    height={50}
                    quality={100}
                    className={cn("md:w-20 md:h-20 w-16 h-16 object-contain", className)}
                />
                <h3 className="text-lg md:text-xl font-medium mt-4 text-gray-900">
                    {title}
                </h3>
            </div>
            <div className="flex flex-col items-center justify-center p-6 rounded-lg bg-gray-100 shadow-sm">
                <Image
                    src={srcTwo}
                    alt={titleTwo}
                    width={50}
                    height={50}
                    quality={100}
                    className={cn("md:w-20 md:h-20 w-16 h-16 object-contain", className)}
                />
                <h3 className="text-lg md:text-xl font-medium mt-4 text-gray-900">
                    {titleTwo}
                </h3>
            </div>
        </div>
        <div className="text-sm md:text-base text-gray-600 mt-4">{descriptionTwo}</div>
    </div>
);

export default TechStack;
