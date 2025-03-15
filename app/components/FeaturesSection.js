"use client"
import { motion } from "framer-motion";

const features = [
    {
        title: "Tailwind & Bootstrap Ready",
        description:
            "Seamlessly integrate with both Tailwind CSS and Bootstrap frameworks.",
        icon: "🎨",
    },
    {
        title: "Production Optimized",
        description:
            "Thoroughly tested and optimized for production environments.",
        icon: "⚡",
    },
    {
        title: "Fully Customizable",
        description: "Easy to customize with comprehensive theming support.",
        icon: "🎯",
    },
    {
        title: "Responsive Design",
        description:
            "Mobile-first components that work perfectly on all devices.",
        icon: "📱",
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function FeaturesSection() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                        Why Choose Pro Components?
                    </h2>
                    <p className="text-xl text-gray-400">
                        Built with modern web development best practices in mind
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800/70 transition-colors duration-300"
                        >
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-2 text-white">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
