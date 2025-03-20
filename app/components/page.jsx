"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ComponentSidebar from "../../components/components-sidebar";
import { SparklesCore } from "../../components/Sparkles";
import ButtonsShowcase from "../../components/showcase/buttons-showcase";
import CardsShowcase from "../../components/showcase/card-showcase";
import FormsShowcase from "../../components/showcase/form-showcase";
import TablesShowcase from "../../components/showcase/tables-showcase";
import ChartsShowcase from "../../components/showcase/charts-showcase";
import AlertsShowcase from "../../components/showcase/alerts-showcase";
import AccordionShowcase from "../../components/showcase/accordion-showcase";
import AvatarShowcase from "../../components/showcase/avatar-showcase";
import BadgeShowcase from "../../components/showcase/badge-showcase";
import BottomNavigationShowcase from "../../components/showcase/bottomnavigation-showcase";
import InputShowcase from "../../components/showcase/input-showcase";
import DropdownShowcase from "../../components/showcase/dropdown-showcase";
import SpinnersShowcase from "../../components/showcase/spinners-showcase";
import TooltipShowcase from "../../components/showcase/tooltip-showcase";

// Define the component categories and their showcase components
const COMPONENT_CATEGORIES = {
    buttons: {
        title: "Buttons",
        description:
            "Customizable button components with various styles and animations",
        component: ButtonsShowcase,
    },
    alerts: {
        title: "Alerts",
        description:
            "Customizable button components with various styles and animations",
        component: AlertsShowcase,
    },
    accordions: {
        title: "Accordions",
        description:
            "Customizable accordion components with various styles and animations",
        component: AccordionShowcase,
    },
    avatars: {
        title: "Avatars",
        description:
            "Customizable avatar components with various styles and animations",
        component: AvatarShowcase,
    },
    badges: {
        title: "Badges",
        description:
            "Customizable badge components with various styles and animations",
        component: BadgeShowcase,
    },
    bottomnavigation: {
        title: "Bottom Navigation",
        description:
            "Customizable bottom navigation components with various styles and animations",
        component: BottomNavigationShowcase,
    },
    inputs: {
        title: "Inputs",
        description: "",
        component: InputShowcase
    },
    dropdowns: {
        title: "Dropdowns",
        description: "Customizable dropdown components with various styles and options",
        component: DropdownShowcase
    },
    spinners: {
        title: "Spinners",
        description: "Loading spinner components with various styles and animations",
        component: SpinnersShowcase
    },
    tooltips: {
        title: "Tooltips",
        description: "Customizable tooltip components with various styles and positions",
        component: TooltipShowcase
    },
    cards: {
        title: "Cards",
        description: "Versatile card components with various layouts and interactions",
        component: CardsShowcase
    }
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
