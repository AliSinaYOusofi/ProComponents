"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ComponentSidebar from "../../components/components-sidebar";
import { SparklesCore } from "../../components/Sparkles";
import ButtonsShowcase from "../../components/showcase/buttons-showcase";
import CardsShowcase from "../../components/showcase/cards-showcase";
import FormsShowcase from "../../components/showcase/form-showcase";
import TablesShowcase from "../../components/showcase/tables-showcase";
import ChartsShowcase from "../../components/showcase/charts-showcase";

// Define the component categories and their showcase components
const COMPONENT_CATEGORIES = {
    buttons: {
        title: "Buttons",
        description:
            "Customizable button components with various styles and animations",
        component: ButtonsShowcase,
    },
    cards: {
        title: "Cards",
        description: "Flexible card layouts for displaying content and data",
        component: CardsShowcase,
    },
    forms: {
        title: "Forms & Inputs",
        description: "Form components with validation and interactive elements",
        component: FormsShowcase,
    },
    tables: {
        title: "Tables & Data",
        description: "Responsive tables and data presentation components",
        component: TablesShowcase,
    },
    charts: {
        title: "Charts & Graphs",
        description: "Interactive data visualization components",
        component: ChartsShowcase,
    },
};

export default function ComponentsPage() {
    const [activeCategory, setActiveCategory] = useState("buttons");

    // Get the component for the active category
    const ActiveShowcase = COMPONENT_CATEGORIES[activeCategory].component;

    return (
        <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden flex">
            {/* Ambient background with moving particles */}
            <div className="h-full w-full absolute inset-0 z-0">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
            </div>

            <div className="relative z-10 flex w-full">
                {/* Sidebar */}
                <ComponentSidebar
                    activeCategory={activeCategory}
                    onCategoryChange={setActiveCategory}
                    categories={COMPONENT_CATEGORIES}
                />

                {/* Main content */}
                <motion.main
                    className="flex-1 p-8"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 h-full">
                        <div className="mb-6">
                            <h1 className="text-2xl font-bold text-white">
                                {COMPONENT_CATEGORIES[activeCategory].title}
                            </h1>
                            <p className="text-gray-400 mt-1">
                                {
                                    COMPONENT_CATEGORIES[activeCategory]
                                        .description
                                }
                            </p>
                        </div>

                        <ActiveShowcase />
                    </div>
                </motion.main>
            </div>
        </div>
    );
}
