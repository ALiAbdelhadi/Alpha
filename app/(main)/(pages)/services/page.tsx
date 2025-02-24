'use client'

import { services } from '@/constant'
import Container from '@/components/Container'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { CircleDot } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
const Page = () => {
    const industries = [
        "Medicine",
        "FinTech",
        "Real estate",
        "E-commerce",
        "SaaS",
        "Education"
    ]
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    }

    const Separator = ({ position }: { position: 'top' | 'bottom' | 'both' }) => (
        <div className="relative w-full h-[0.5px]">
            {(position === 'top' || position === 'both') && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[80%] h-px bg-gradient-to-r from-transparent via-black/20 to-transparent" />
            )}
            {(position === 'bottom' || position === 'both') && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[80%] h-px bg-gradient-to-r from-transparent via-black/20 to-transparent" />
            )}
        </div>
    )

    return (
        <div className="relative overflow-hidden">
            <div className="fixed inset-0 bg-gradient-to-br from-background via-gray-50/50 to-primary/50 pointer-events-none" />
            <Container className="relative">
                <div>
                    <motion.div
                        className="pt-40 pb-24 text-center min-h-[60vh] flex flex-col items-center justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="relative flex flex-col items-end mb-8">
                            <motion.h2
                                className="text-5xl md:text-6xl"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                Explore
                            </motion.h2>
                            <motion.h2
                                className="text-5xl md:text-6xl"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                what we do
                            </motion.h2>
                        </div>
                        <motion.p
                            className="text-muted-foreground max-w-lg text-xl leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            Pictimi focuses on emerging brands and brand evolutions for rapidly expanding innovative enterprises.
                        </motion.p>
                    </motion.div>
                    <Separator position="bottom" />
                    <div>
                        {services.map((service, index) => (
                            <React.Fragment key={service.id}>
                                <motion.section
                                    id={service.id}
                                    className={cn(
                                        "relative group",
                                        "before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-500 group-hover:before:opacity-100",
                                    )}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 * index }}
                                >
                                    {/* Radial Gradient Background */}
                                    <div className={cn(
                                        "absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                                        "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]",
                                    )} />
                                    <div className={cn("py-24 relative z-10")}>
                                        <div className="grid md:grid-cols-2 gap-12 items-start">
                                            <motion.div
                                                className="flex items-center gap-6"
                                                {...fadeInUp}
                                            >
                                                <div className={`flex-shrink-0 p-2 rounded-full`}>
                                                    <CircleDot className={`w-12 h-12 ${service.iconColor}`} />
                                                </div>
                                                <div>
                                                    <h3 className="text-3xl lg:text-4xl font-bold mb-2 whitespace-pre-line max-w-x">
                                                        {service.title}
                                                    </h3>
                                                </div>
                                            </motion.div>
                                            <motion.div
                                                className="space-y-8"
                                                {...fadeInUp}
                                                transition={{ delay: 0.2 }}
                                            >
                                                <h4 className="text-2xl font-semibold">
                                                    {service.subtitle}
                                                </h4>
                                                <p className="leading-relaxed text-lg">
                                                    {service.description}
                                                </p>
                                                {service.showTags && (
                                                    <div className="flex flex-wrap gap-3">
                                                        {industries.map((industry) => (
                                                            <motion.span
                                                                key={industry}
                                                                className={cn(
                                                                    "px-6 py-2 rounded-full border border-gray-950/10",
                                                                    "text-gray-950/90 backdrop-blur-sm text-sm",
                                                                    "hover:bg-gray-950/5 hover:border-gray-950/20",
                                                                    "transition-all duration-300 cursor-pointer",
                                                                    "bg-white/50"
                                                                )}
                                                                whileHover={{ scale: 1.01 }}
                                                                whileTap={{ scale: 0.95 }}
                                                            >
                                                                {industry}
                                                            </motion.span>
                                                        ))}
                                                    </div>
                                                )}
                                                <Button className="rounded-full">
                                                    <Link href={`/services/${service.id}`}>
                                                        Explore More
                                                    </Link>
                                                </Button>
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.section>
                                {index < services.length - 1 ? (
                                    <Separator position="both" />
                                ) : (
                                    <Separator position="top" />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Page
