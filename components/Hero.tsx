'use client'

import { motion } from "framer-motion";
import BentoGrid from "./BentoGrid";
import Container from "./Container";
const Hero = () => {
    return (
        <div className="relative overflow-hidden">
            <div className="relative z-10 pt-16 md:pt-24 lg:pt-32">
                <Container>
                    <div className="space-y-16 md:space-y-24">
                        <div className="grid md:grid-cols-2 items-start">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="space-y-4"
                            >
                                <h2 className="text-2xl md:text-3xl font-medium text-foreground">About Us</h2>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <p className="text-muted-foreground text-xl md:text-2xl leading-wide">
                                    Startups thrive on rapid growth. To achieve this, you need to invest resources in building a product that genuinely addresses <span className="font-medium text-foreground">real customer needs</span>. The most effective approach is to iterate quickly through development and market testing. This is where <span className="font-medium text-foreground">Alpha</span> excels.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                    <div className="my-16 md:my-24">
                        <BentoGrid />
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Hero

