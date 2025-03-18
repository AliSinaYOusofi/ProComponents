"use client";

import ComponentPreview from "../ui/ComponentPreview";
import Head from "next/head";
import { useState } from "react";

const BasicBadges = () => {
    return (
        <div className="flex flex-wrap gap-2">
            {/* Default Badge */}
            <span className="inline-flex items-center px-2 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-sm dark:bg-blue-900 dark:text-blue-300">
                Default
            </span>

            {/* Dark Badge */}
            <span className="inline-flex items-center px-2 py-1 text-sm font-medium text-gray-800 bg-gray-100 rounded-sm dark:bg-gray-700 dark:text-gray-300">
                Dark
            </span>

            {/* Red Badge */}
            <span className="inline-flex items-center px-2 py-1 text-sm font-medium text-red-800 bg-red-100 rounded-sm dark:bg-red-900 dark:text-red-300">
                Red
            </span>

            {/* Green Badge */}
            <span className="inline-flex items-center px-2 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-sm dark:bg-green-900 dark:text-green-300">
                Green
            </span>
        </div>
    );
};

const DismissibleBadges = () => {
    const [badges, setBadges] = useState({
        default: true,
        dark: true,
        red: true,
        green: true,
        yellow: true,
        indigo: true,
        purple: true,
        pink: true
    });

    const dismissBadge = (badge) => {
        setBadges(prev => ({ ...prev, [badge]: false }));
    };

    return (
        <div className="flex flex-wrap gap-2">
            {badges.default && (
                <span id="badge-dismiss-default" className="inline-flex items-center px-2 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-sm dark:bg-blue-900 dark:text-blue-300">
                    Default
                    <button
                        type="button"
                        className="inline-flex items-center p-1 ms-2 text-sm text-blue-400 bg-transparent rounded-xs hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300"
                        onClick={() => dismissBadge('default')}
                        aria-label="Remove"
                    >
                        <svg className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span className="sr-only">Remove badge</span>
                    </button>
                </span>
            )}

            {badges.dark && (
                <span id="badge-dismiss-dark" className="inline-flex items-center px-2 py-1 text-sm font-medium text-gray-800 bg-gray-100 rounded-sm dark:bg-gray-700 dark:text-gray-300">
                    Dark
                    <button
                        type="button"
                        className="inline-flex items-center p-1 ms-2 text-sm text-gray-400 bg-transparent rounded-xs hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-300"
                        onClick={() => dismissBadge('dark')}
                        aria-label="Remove"
                    >
                        <svg className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span className="sr-only">Remove badge</span>
                    </button>
                </span>
            )}

            {badges.red && (
                <span id="badge-dismiss-red" className="inline-flex items-center px-2 py-1 text-sm font-medium text-red-800 bg-red-100 rounded-sm dark:bg-red-900 dark:text-red-300">
                    Red
                    <button
                        type="button"
                        className="inline-flex items-center p-1 ms-2 text-sm text-red-400 bg-transparent rounded-xs hover:bg-red-200 hover:text-red-900 dark:hover:bg-red-800 dark:hover:text-red-300"
                        onClick={() => dismissBadge('red')}
                        aria-label="Remove"
                    >
                        <svg className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span className="sr-only">Remove badge</span>
                    </button>
                </span>
            )}

            {badges.green && (
                <span id="badge-dismiss-green" className="inline-flex items-center px-2 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-sm dark:bg-green-900 dark:text-green-300">
                    Green
                    <button
                        type="button"
                        className="inline-flex items-center p-1 ms-2 text-sm text-green-400 bg-transparent rounded-xs hover:bg-green-200 hover:text-green-900 dark:hover:bg-green-800 dark:hover:text-green-300"
                        onClick={() => dismissBadge('green')}
                        aria-label="Remove"
                    >
                        <svg className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span className="sr-only">Remove badge</span>
                    </button>
                </span>
            )}
        </div>
    );
};

const IconBadges = () => {
    return (
        <div className="flex flex-wrap gap-2">
            {/* Badge with Icon */}
            <span className="inline-flex items-center px-2 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-sm dark:bg-blue-900 dark:text-blue-300">
                <svg className="w-3 h-3 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 5V10M10 10V15M10 5V5M10 10H5M10 10H15"/>
                </svg>
                New
            </span>

            {/* Badge with Status Icon */}
            <span className="inline-flex items-center px-2 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-sm dark:bg-green-900 dark:text-green-300">
                <svg className="w-3 h-3 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.707-9.293a1 1 0 0 0-1.414-1.414L9 10.586 7.707 9.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4Z"/>
                </svg>
                Active
            </span>

            {/* Badge with Warning Icon */}
            <span className="inline-flex items-center px-2 py-1 text-sm font-medium text-yellow-800 bg-yellow-100 rounded-sm dark:bg-yellow-900 dark:text-yellow-300">
                <svg className="w-3 h-3 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
                Warning
            </span>
        </div>
    );
};

const PillBadges = () => {
    return (
        <div className="flex flex-wrap gap-2">
            {/* Default Pill */}
            <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                Default
            </span>

            {/* Dark Pill */}
            <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                Dark
            </span>

            {/* Red Pill */}
            <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium text-red-800 bg-red-100 rounded-full dark:bg-red-900 dark:text-red-300">
                Red
            </span>

            {/* Green Pill */}
            <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium text-green-800 bg-green-100 rounded-full dark:bg-green-900 dark:text-green-300">
                Green
            </span>
        </div>
    );
};

const GradientBadges = () => {
    return (
        <div className="flex flex-wrap gap-2">
            {/* Blue Gradient */}
            <span className="inline-flex items-center px-2 py-1 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-sm">
                Blue Gradient
            </span>

            {/* Purple Gradient */}
            <span className="inline-flex items-center px-2 py-1 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-purple-600 rounded-sm">
                Purple Gradient
            </span>

            {/* Pink Gradient */}
            <span className="inline-flex items-center px-2 py-1 text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-pink-600 rounded-sm">
                Pink Gradient
            </span>

            {/* Green Gradient */}
            <span className="inline-flex items-center px-2 py-1 text-sm font-medium text-white bg-gradient-to-r from-green-500 to-green-600 rounded-sm">
                Green Gradient
            </span>
        </div>
    );
};

export default function BadgeShowcase() {
    return (
        <>
            <Head>
                <title>React Badge Components - Modern Badge Showcase</title>
                <meta
                    name="description"
                    content="Explore our collection of React badge components featuring various styles, colors, and interactive effects."
                />
                <meta
                    name="keywords"
                    content="react badges, UI components, status badges, notification badges, pill badges"
                />
                <meta
                    property="og:title"
                    content="React Badge Components - Modern Badge Showcase"
                />
                <meta
                    property="og:description"
                    content="Collection of React badge components with various styles and interactions"
                />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="React Badge Components - Modern Badge Showcase"
                />
                <meta
                    name="twitter:description"
                    content="Explore our collection of React badge components"
                />
            </Head>
            <main
                className="badge-showcase"
                role="main"
                aria-label="Badge Components Showcase"
            >
                <h1 className="sr-only">React Badge Components Showcase</h1>
                <div className="space-y-8">
                    <section aria-labelledby="basic-badges-title">
                        <h2
                            id="basic-badges-title"
                            className="text-lg font-semibold mb-4"
                        >
                            Basic Badges
                        </h2>
                        <ComponentPreview
                            title="Default, Dark, Red & Green"
                            description="Simple badge components with basic styling"
                            component={BasicBadges}
                            code={`// Default Badge
<span className="inline-flex items-center px-2 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-sm dark:bg-blue-900 dark:text-blue-300">
    Default
</span>

// Dark Badge
<span className="inline-flex items-center px-2 py-1 text-sm font-medium text-gray-800 bg-gray-100 rounded-sm dark:bg-gray-700 dark:text-gray-300">
    Dark
</span>

// Red Badge
<span className="inline-flex items-center px-2 py-1 text-sm font-medium text-red-800 bg-red-100 rounded-sm dark:bg-red-900 dark:text-red-300">
    Red
</span>

// Green Badge
<span className="inline-flex items-center px-2 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-sm dark:bg-green-900 dark:text-green-300">
    Green
</span>`}
                            sizes={["default", "full"]}
                        />
                    </section>

                    <section aria-labelledby="dismissible-badges-title">
                        <h2
                            id="dismissible-badges-title"
                            className="text-lg font-semibold mb-4"
                        >
                            Dismissible Badges
                        </h2>
                        <ComponentPreview
                            title="Interactive Badges with Dismiss Button"
                            description="Badges that can be dismissed with a click"
                            component={DismissibleBadges}
                            code={`// Dismissible Badge
<span className="inline-flex items-center px-2 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-sm dark:bg-blue-900 dark:text-blue-300">
    Default
    <button
        type="button"
        className="inline-flex items-center p-1 ms-2 text-sm text-blue-400 bg-transparent rounded-xs hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300"
        onClick={() => dismissBadge('default')}
        aria-label="Remove"
    >
        <svg className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
        </svg>
        <span className="sr-only">Remove badge</span>
    </button>
</span>`}
                            sizes={["default", "full"]}
                        />
                    </section>

                    <section aria-labelledby="icon-badges-title">
                        <h2
                            id="icon-badges-title"
                            className="text-lg font-semibold mb-4"
                        >
                            Icon Badges
                        </h2>
                        <ComponentPreview
                            title="Badges with Icons"
                            description="Badges that include icons for better visual communication"
                            component={IconBadges}
                            code={`// Badge with Icon
<span className="inline-flex items-center px-2 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-sm dark:bg-blue-900 dark:text-blue-300">
    <svg className="w-3 h-3 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 5V10M10 10V15M10 5V5M10 10H5M10 10H15"/>
    </svg>
    New
</span>

// Badge with Status Icon
<span className="inline-flex items-center px-2 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-sm dark:bg-green-900 dark:text-green-300">
    <svg className="w-3 h-3 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.707-9.293a1 1 0 0 0-1.414-1.414L9 10.586 7.707 9.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4Z"/>
    </svg>
    Active
</span>`}
                            sizes={["default", "full"]}
                        />
                    </section>

                    <section aria-labelledby="pill-badges-title">
                        <h2
                            id="pill-badges-title"
                            className="text-lg font-semibold mb-4"
                        >
                            Pill Badges
                        </h2>
                        <ComponentPreview
                            title="Rounded Pill Badges"
                            description="Badges with fully rounded corners for a pill-like appearance"
                            component={PillBadges}
                            code={`// Default Pill
<span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
    Default
</span>

// Dark Pill
<span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
    Dark
</span>

// Red Pill
<span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium text-red-800 bg-red-100 rounded-full dark:bg-red-900 dark:text-red-300">
    Red
</span>

// Green Pill
<span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium text-green-800 bg-green-100 rounded-full dark:bg-green-900 dark:text-green-300">
    Green
</span>`}
                            sizes={["default", "full"]}
                        />
                    </section>

                    <section aria-labelledby="gradient-badges-title">
                        <h2
                            id="gradient-badges-title"
                            className="text-lg font-semibold mb-4"
                        >
                            Gradient Badges
                        </h2>
                        <ComponentPreview
                            title="Gradient Background Badges"
                            description="Badges with gradient backgrounds for a modern look"
                            component={GradientBadges}
                            code={`// Blue Gradient
<span className="inline-flex items-center px-2 py-1 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-sm">
    Blue Gradient
</span>

// Purple Gradient
<span className="inline-flex items-center px-2 py-1 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-purple-600 rounded-sm">
    Purple Gradient
</span>

// Pink Gradient
<span className="inline-flex items-center px-2 py-1 text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-pink-600 rounded-sm">
    Pink Gradient
</span>

// Green Gradient
<span className="inline-flex items-center px-2 py-1 text-sm font-medium text-white bg-gradient-to-r from-green-500 to-green-600 rounded-sm">
    Green Gradient
</span>`}
                            sizes={["default", "full"]}
                        />
                    </section>
                </div>
            </main>
        </>
    );
} 