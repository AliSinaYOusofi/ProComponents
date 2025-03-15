"use client"
import { motion } from "framer-motion";
import React from "react";
function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"
                animate={{
                    opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                        Pro Components
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8">
                        Production-Ready React Components
                        <br />
                        Built with Tailwind CSS & Bootstrap
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a
                        href="/docs"
                        className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold"
                    >
                        Get Started
                    </a>
                    <a
                        href="/components"
                        className="px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300 font-semibold"
                    >
                        Browse Components
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-12"
                >
                    <div className="flex items-center justify-center gap-8">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-500">
                                50+
                            </div>
                            <div className="text-gray-400">Components</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-purple-500">
                                100%
                            </div>
                            <div className="text-gray-400">Customizable</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-500">
                                MIT
                            </div>
                            <div className="text-gray-400">Licensed</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default HeroSection;
