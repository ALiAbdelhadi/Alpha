import Link from "next/link"
import Container from "./Container"
export default function CtaSection() {
    return (
        <section className="relative" aria-labelledby="cta-heading">
            <Container>
                <div className="relative rounded-3xl z-20 grid w-full max-w-7xl grid-cols-1 justify-start bg-gradient-to-br from-gray-100 to-white shadow-sm transition-colors dark:from-neutral-900 dark:to-neutral-950 md:my-40 md:grid-cols-3">
                    <div className="space-y-8 p-8 md:col-span-2 md:p-14">
                        <h2 id="cta-heading" className="text-3xl font-medium tracking-tight text-muted-foreground">
                            Want a professional, extraordinary website tailored to your needs?{" "}
                            <strong className="mt-2 inline font-semibold text-black dark:text-white">
                                Get in touch
                            </strong>
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                            We've helped thousands of{" "}
                            <Link
                                href="#"
                                className="text-primary/75 hover:text-primary transition-colors"
                            >
                                founders and teams
                            </Link>{" "}
                            build their products and apps from scratch, and we can help you too.
                        </p>
                        <div className="pt-2">
                            <Link
                                href="#"
                                className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-base font-medium text-white transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-offset-2 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                            >
                                Talk to us
                            </Link>
                        </div>
                    </div>
                    <div className="border-dashed border-t p-8 dark:border-gray-800 md:border-l md:border-t-0 md:p-14">
                        <blockquote className="text-lg text-muted-foreground">
                            <p>
                                Manu literally took our requirements and quite literally ran with them. To
                                anyone reading this - I can't recommend Manu enough, your job will be done
                                exceptionally well, and you will be delighted with the end result.
                            </p>
                            <footer className="mt-4">
                                <p className="font-semibold text-gray-900 dark:text-gray-100">
                                    Ali Abdelhadi
                                </p>
                                <p>
                                    Founder
                                </p>
                            </footer>
                        </blockquote>
                    </div>
                </div>
            </Container >
        </section >
    )
}

