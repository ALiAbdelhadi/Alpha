import { Faqs, LinkItems, Service, servicesLinksProps, TimeLineProps } from "@/types";

export const servicesLinks: servicesLinksProps[] = [
    {
        title: "UI&UX Design",
        description: "Create stunning and responsive websites.",
        href: "/services/uiux-design",
    },
    {
        title: "Web Development",
        description: "Create stunning and responsive websites.",
        href: "/services/web-development",
    },
    {
        title: "Hosting & Domain",
        description: "Secure and reliable hosting solutions.",
        href: "/services/hosting-and-domain",
    },
    {
        title: "MVP",
        description: "Rapidly prototype and validate your ideas.",
        href: "/services/mvp",
    },
];

export const navItems: LinkItems[] = [
    { title: "Docs", href: "/docs/getting-started" },
    { title: "Components", href: "/docs/components" },
    { title: "Blocks", href: "/blocks" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" }
];
export const FooterItemsCompany: LinkItems[] = [
    { title: "FAQs", href: "/faqs" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
]
export const FooterItemsLegal: LinkItems[] = [
    { title: "Jobs", href: "/jobs" },
    { title: "Terms of Service", href: "/terms" },
    { title: "Privacy Policy", href: "/privacy" },
]
// Timeline
export const TimeLineData: TimeLineProps[] = [
    {
        title: "STEP 1: Discovery & Consultation",
        content: (
            <div className="md:space-y-5 space-y-2">
                <div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl">Deep Dive & Alignment</h2>
                </div>
                <div className="md:w-[80%] w-full">
                    <p className="text-muted-foreground text-sm md:text-base">
                        We initiate with a thorough consultation to understand your unique business needs, project goals, and desired outcomes for your web/mobile app, MVP, or ERP system.
                    </p>
                </div>
            </div>
        ),
    },
    {
        title: "STEP 2: Planning & Strategy",
        content: (
            <div className="md:space-y-5 space-y-2">
                <div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl">Blueprint for Success</h2>
                </div>
                <div className="md:w-[80%] w-full">
                    <p className="text-muted-foreground text-sm md:text-base">
                        Our expert team meticulously plans the project roadmap, defining scope, timelines, budget, and key deliverables for your web/mobile app, MVP, or ERP system development.
                    </p>
                </div>
            </div>
        ),
    },
    {
        title: "STEP 3: Design & Development",
        content: (
            <div className="md:space-y-5 space-y-2">
                <div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl">Crafting Your Solution</h2>
                </div>
                <div className="md:w-[80%] w-full">
                    <p className="text-muted-foreground text-sm md:text-base">
                        Our skilled developers and designers bring your vision to life. We focus on user-centered design, robust development, and seamless integration for your web/mobile app, MVP, or ERP system.
                    </p>
                </div>
            </div>
        ),
    },
    {
        title: "STEP 4: Testing & Quality Assurance",
        content: (
            <div className="md:space-y-5 space-y-2">
                <div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl">Ensuring Excellence</h2>
                </div>
                <div className="md:w-[80%] w-full">
                    <p className="text-muted-foreground text-sm md:text-base">
                        Rigorous testing is conducted at every stage to identify and address any issues, ensuring the highest quality and performance for your web/mobile app, MVP, or ERP system.
                    </p>
                </div>
            </div>
        ),
    },
    {
        title: "STEP 5: Launch & Beyond",
        content: (
            <div className="md:space-y-5 space-y-2">
                <div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl">Go-Live & Continuous Support</h2>
                </div>
                <div className="md:w-[80%] w-full">
                    <p className="text-muted-foreground text-sm md:text-base">
                        We seamlessly launch your web/mobile app, MVP, or ERP system and provide ongoing support, maintenance, and updates to ensure its continued success and meet your evolving business needs.
                    </p>
                </div>
            </div>
        ),
    },
];
export const projects = [
    {
        id: 1,
        title: "E-commerce web app",
        description: "An E-commerce web app for lighting store",
        image: "/projects/project-1.png",
        link: "https://eg-artlighting.vercel.app"
    },
    {
        id: 2,
        title: "E-commerce web app",
        description: "An E-commerce web app for lighting store",
        image: "/projects/project-2.png",
        link: "https://casescobra-cuxh.vercel.app/"
    },
    {
        id: 3,
        title: "E-commerce web app",
        description: "An E-commerce web app for lighting store",
        image: "/projects/project-3.png",
        link: "https://modern-website-gold.vercel.app/"
    },
]
export const services: Service[] = [
    {
        id: "uiux-design",
        link: "/services/uiux-design",
        title: "UI&UX Design",
        subtitle: "Creating seamless user experiences",
        description: "We specialize in crafting intuitive and visually appealing digital experiences that align with user needs and business goals. Our design process ensures your product stands out while delivering exceptional usability.",
        showTags: true,
        iconColor: "text-teal-500",
    },
    {
        id: "web-development",
        link: "/services/web-development",
        title: "Web Development",
        subtitle: "Building modern, high-performing websites",
        description: "Our team develops high-performance and scalable websites and web applications tailored to meet your business requirements, utilizing the latest technologies and best practices.",
        showTags: true,
        iconColor: "text-blue-500",
    },
    {
        id: "hosting-and-domain",
        link: "/services/hosting-and-domain",
        title: "Hosting & Domain",
        subtitle: "Reliable hosting and domain services",
        description: "Our hosting and domain registration services guarantee reliability, scalability, and security, providing the foundation your online presence needs to thrive.",
        showTags: false,
        iconColor: "text-yellow-500",
    },
    {
        id: "mvp-development",
        link: "/services/mvp",
        title: "MVP Development",
        subtitle: "Bring your ideas to life quickly",
        description: "Our MVP development service enables you to rapidly test market assumptions and gather user feedback with functional, prototype-level solutions designed to scale.",
        showTags: true,
        iconColor: "text-green-500",
    },
];
export const faqs: Faqs[] = [
    {
        category: "Services",
        questions: [
            {
                question: "What services does your company offer?",
                answer: (
                    <>
                        <p>
                            We provide a comprehensive range of web and application development services, catering to
                            projects of all sizes and complexities. Our core offerings include:
                        </p>
                        <ul className="list-disc ml-6 mt-2">
                            <li>
                                Web Development: Custom websites and web applications tailored to your specific needs.
                            </li>
                            <li>
                                App Development: Mobile applications for iOS, Android, and other platforms, focusing on
                                user-friendly and feature-rich experiences.
                            </li>
                            <li>Hosting: Reliable and secure hosting solutions for optimal performance.</li>
                            <li>Domain Services: Assistance in acquiring unique domain names for brand visibility.</li>
                            <li>
                                ERP Systems Implementation: Integration of ERP systems to streamline operations and
                                enhance efficiency.
                            </li>
                        </ul>
                    </>
                ),
            },
            {
                question: "Can you handle both small and large-scale projects?",
                answer: (
                    <>
                        Absolutely! We are well-equipped to manage projects of all sizes and complexities, ensuring
                        exceptional results tailored to your specific requirements.
                    </>
                ),
            },
        ],
    },
    {
        category: "Pricing and Quotations",
        questions: [
            {
                question: "How do I get a price quotation?",
                answer: (
                    <>
                        To provide an accurate quote, we&apos;ll gather details during a free consultation. Once we
                        understand your needs, goals, and desired functionalities, we will provide a comprehensive quote
                        outlining costs and timelines.
                    </>
                ),
            },
            {
                question: "Is there any flexibility in pricing?",
                answer: (
                    <>
                        We offer competitive and transparent pricing. While we have standard rates, we are open to
                        discussing project specifics and tailoring solutions to fit your budget.
                    </>
                ),
            },
        ],
    },
    {
        category: "Project Process",
        questions: [
            {
                question: "What happens after I accept your quotation?",
                answer: (
                    <>
                        <p>Upon accepting our proposal, we&apos;ll initiate the project process:</p>
                        <ul className="list-disc ml-6 mt-2">
                            <li>Project Kickoff: Define requirements, goals, and timelines.</li>
                            <li>Development & Design: Work on your project with regular updates.</li>
                            <li>Testing & Deployment: Ensure functionality and deploy your project.</li>
                            <li>Launch & Maintenance: Provide launch support and optional ongoing maintenance.</li>
                        </ul>
                    </>
                ),
            },
            {
                question: "How long does it take to develop a website or app?",
                answer: (
                    <>
                        Timelines depend on project complexity. Simple websites may take a few weeks, while complex
                        enterprise applications may require several months. We&apos;ll provide an estimate during the
                        consultation.
                    </>
                ),
            },
        ],
    },
    {
        category: "Ownership and Deliverables",
        questions: [
            {
                question: "Do I have full ownership of the website and its code?",
                answer: (
                    <>
                        Yes, upon project completion, you will have full ownership of the website or application,
                        including all its code and intellectual property rights.
                    </>
                ),
            },
            {
                question: "Will you host the website, or can I choose my own hosting provider?",
                answer: (
                    <>
                        We offer hosting services but you are free to choose your preferred provider.
                    </>
                ),
            },
        ],
    },
    {
        category: "Updates and Maintenance",
        questions: [
            {
                question: "Can I update my project after it's published?",
                answer: (
                    <>
                        Yes! We can assist with updates or additional features after publication. These are billed
                        separately from the initial project scope.
                    </>
                ),
            },
            {
                question: "Are updates or additional features included in the initial price?",
                answer: (
                    <>
                        The initial price covers core functionalities outlined in the project scope. Additional updates
                        or features are billed separately.
                    </>
                ),
            },
        ],
    },
    {
        category: "General",
        questions: [
            {
                question: "What sets your company apart from others?",
                answer: (
                    <>
                        We distinguish ourselves through:
                        <ul className="list-disc ml-6 mt-2">
                            <li>Quality & Expertise: Skilled developers delivering exceptional results.</li>
                            <li>Client Focus: Tailored solutions aligned with your vision.</li>
                            <li>Transparency & Communication: Open communication throughout the project lifecycle.</li>
                        </ul>
                    </>
                ),
            },
        ],
    },
];
// about us section 
export const CarouselsData = [
    {
        category: "Artificial Intelligence",
        title: "You can do more with AI.",
        src: "/design-process-2.jpg",
    },
    {
        category: "Productivity",
        title: "Enhance your productivity.",
        src: "/design-process-2.jpg",
    },
    {
        category: "Product",
        title: "Launching the new Apple Vision Pro.",
        src: "/design-process-2.jpg",
    },
    {
        category: "Product",
        title: "Maps for your iPhone 15 Pro Max.",
        src: "/design-process-2.jpg",
    },
    {
        category: "iOS",
        title: "Photography just got better.",
        src: "/design-process-2.jpg",
    },
    {
        category: "Hiring",
        title: "Hiring for a Staff Software Engineer",
        src: "/design-process-2.jpg",
    },
];