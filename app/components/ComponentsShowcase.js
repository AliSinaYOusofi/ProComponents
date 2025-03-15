"use client"
import { motion } from "framer-motion";

const showcaseComponents = [
    {
        name: "Button Collection",
        preview: (
            <div className="flex flex-wrap gap-2">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Primary
                </button>
                <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700">
                    Secondary
                </button>
                <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white">
                    Outline
                </button>
            </div>
        ),
    },
    {
        name: "Card Components",
        preview: (
            <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
                <div className="h-32 bg-gray-700 rounded-lg mb-4"></div>
                <h3 className="text-lg font-semibold mb-2">Card Title</h3>
                <p className="text-gray-400 text-sm">
                    Card description goes here with some sample text.
                </p>
            </div>
        ),
    },
    {
        name: "Form Elements",
        preview: (
            <div className="space-y-3">
                <input
                    type="text"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <select className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500">
                    <option>Select option</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                </select>
            </div>
        ),
    },
];

export default function ComponentsShowcase() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                        Component Showcase
                    </h2>
                    <p className="text-xl text-gray-400">
                        Beautiful, responsive, and customizable components ready
                        for your next project
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {showcaseComponents.map((component, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="bg-gray-900/50 p-6 rounded-xl border border-gray-800"
                        >
                            <h3 className="text-xl font-semibold mb-4 text-white">
                                {component.name}
                            </h3>
                            <div className="bg-gray-900 p-4 rounded-lg">
                                {component.preview}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <a
                        href="/components"
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                    >
                        View All Components
                        <svg
                            className="w-5 h-5 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
