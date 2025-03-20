"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ChevronLeft,
    ChevronRight,
    Square,
    Layout,
    FormInput,
    Table,
    BarChart3,
    Package,
    AlertCircle,
    User2,
    BadgeAlert,
    Navigation,
    Badge,
    FormInputIcon,
    Menu,
    Loader2,
    HelpCircle,
    IdCard,
} from "lucide-react";
import Link from "next/link";
import Button from "./ui/Button";

// Map of category keys to their icons
const CATEGORY_ICONS = {
    buttons: Square,
    alerts: AlertCircle,
    accordions: FormInput,
    avatars: User2,
    badges: Badge,
    bottomnavigation: Navigation,
    inputs: FormInputIcon,
    dropdowns: Menu,
    spinners: Loader2,
    tooltips: HelpCircle,
    cards: IdCard
};

export default function ComponentSidebar({
    activeCategory,
    onCategoryChange,
    categories,
}) {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <motion.div
            className="h-screen bg-black/50 backdrop-blur-md border-r border-white/10 relative flex flex-col"
            initial={{ width: 240 }}
            animate={{ width: collapsed ? 80 : 240 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            {/* Logo */}
            <div className="flex items-center p-4 border-b border-white/10 h-16">
                <Package className="w-8 h-8 text-purple-500" />
                <AnimatePresence>
                    {!collapsed && (
                        <motion.span
                            className="text-white font-medium text-xl ml-2"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            Components
                        </motion.span>
                    )}
                </AnimatePresence>
            </div>

            {/* Scrollable Navigation */}
            <div className="flex-1 overflow-y-auto">
                <nav className="p-3 space-y-2">
                    {Object.entries(categories).map(([key, { title }]) => {
                        const Icon = CATEGORY_ICONS[key];
                        const isActive = activeCategory === key;

                        return (
                            <motion.button
                                key={key}
                                onClick={() => onCategoryChange(key)}
                                className={`w-full flex items-center rounded-lg p-3 transition-colors ${
                                    isActive
                                        ? "bg-purple-600 text-white"
                                        : "text-gray-400 hover:bg-white/10 hover:text-white"
                                }`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Icon className="w-5 h-5" />
                                <AnimatePresence>
                                    {!collapsed && (
                                        <motion.span
                                            className="ml-3 font-medium"
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -10 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {title}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </motion.button>
                        );
                    })}
                </nav>
            </div>

            {/* Collapse Toggle Button */}
            <Button
                variant="ghost"
                size="icon"
                className="absolute -right-3 top-20 bg-purple-600 text-white rounded-full w-6 h-6 p-1 border border-white/20 shadow-lg"
                onClick={() => setCollapsed(!collapsed)}
            >
                {collapsed ? (
                    <ChevronRight className="w-4 h-4" />
                ) : (
                    <ChevronLeft className="w-4 h-4" />
                )}
            </Button>

            {/* Footer */}
            <div className="p-4 border-t border-white/10">
                <Link href="/">
                    <Button
                        variant="ghost"
                        className="w-full justify-start text-gray-400 hover:text-white hover:bg-white/10"
                    >
                        <ChevronLeft className="w-5 h-5" />
                        <AnimatePresence>
                            {!collapsed && (
                                <motion.span
                                    className="ml-2"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    Back to Home
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </Button>
                </Link>
            </div>
        </motion.div>
    );
}
