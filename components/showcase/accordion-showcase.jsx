"use client";

import ComponentPreview from "../ui/ComponentPreview";
import Head from 'next/head';
import { useState } from 'react';

const icons = {
    chevronDown: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
    ),
    info: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
    settings: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    ),
    star: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
    ),
    check: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
    ),
    warning: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
    ),
    arrowRight: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
    )
};

const BasicAccordions = () => {
    const [openItems, setOpenItems] = useState({});

    const toggleItem = (id) => {
        setOpenItems(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <div className="space-y-6">
            {/* Default Accordion */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg divide-y divide-gray-200 dark:divide-gray-700">
                <div>
                    <button
                        onClick={() => toggleItem('default-1')}
                        className="flex items-center justify-between w-full p-4 text-left text-gray-900 dark:text-white"
                    >
                        <span className="font-medium">What is ProComponents?</span>
                        <span className={`transform transition-transform duration-200 ${openItems['default-1'] ? 'rotate-180' : ''}`}>
                            {icons.chevronDown}
                        </span>
                    </button>
                    <div className={`transition-all duration-200 ${openItems['default-1'] ? 'max-h-40' : 'max-h-0'} overflow-hidden`}>
                        <div className="p-4 pt-0">
                            <p className="text-gray-600 dark:text-gray-400">
                                ProComponents is a comprehensive UI library built with React and Tailwind CSS.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Icon Accordion */}
            <div className="space-y-2">
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg">
                    <button
                        onClick={() => toggleItem('icon-1')}
                        className="flex items-center justify-between w-full p-4 text-left text-gray-900 dark:text-white"
                    >
                        <div className="flex items-center gap-3">
                            <span className="flex-shrink-0 w-5 h-5 text-primary-500 dark:text-primary-400">
                                {icons.info}
                            </span>
                            <span className="font-medium">About the product</span>
                        </div>
                        <span className={`transform transition-transform duration-200 ${openItems['icon-1'] ? 'rotate-180' : ''}`}>
                            {icons.chevronDown}
                        </span>
                    </button>
                    <div className={`transition-all duration-200 ${openItems['icon-1'] ? 'max-h-40' : 'max-h-0'} overflow-hidden`}>
                        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                            <p className="text-gray-600 dark:text-gray-400">
                                Learn more about our product features and capabilities.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const StyledAccordions = () => {
    const [openItems, setOpenItems] = useState({});

    const toggleItem = (id) => {
        setOpenItems(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <div className="space-y-6">
            {/* Rounded Accordion */}
            <div className="space-y-3">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl">
                    <button
                        onClick={() => toggleItem('rounded-1')}
                        className="flex items-center justify-between w-full p-4 text-left text-gray-900 dark:text-white rounded-xl"
                    >
                        <span className="font-medium">Pricing Plans</span>
                        <span className={`transform transition-transform duration-200 ${openItems['rounded-1'] ? 'rotate-180' : ''}`}>
                            {icons.chevronDown}
                        </span>
                    </button>
                    <div className={`transition-all duration-200 ${openItems['rounded-1'] ? 'max-h-40' : 'max-h-0'} overflow-hidden`}>
                        <div className="px-4 pb-4">
                            <p className="text-gray-600 dark:text-gray-400">
                                Choose from our flexible pricing plans for your needs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Colored Accordion */}
            <div className="space-y-3">
                <div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-lg">
                    <button
                        onClick={() => toggleItem('colored-1')}
                        className="flex items-center justify-between w-full p-4 text-left text-primary-900 dark:text-primary-100"
                    >
                        <span className="font-medium">Features</span>
                        <span className={`transform transition-transform duration-200 text-primary-500 ${openItems['colored-1'] ? 'rotate-180' : ''}`}>
                            {icons.chevronDown}
                        </span>
                    </button>
                    <div className={`transition-all duration-200 ${openItems['colored-1'] ? 'max-h-40' : 'max-h-0'} overflow-hidden`}>
                        <div className="p-4 border-t border-primary-200 dark:border-primary-800">
                            <p className="text-primary-700 dark:text-primary-300">
                                Explore our comprehensive feature set.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const InteractiveAccordions = () => {
    const [openItems, setOpenItems] = useState({});

    const toggleItem = (id) => {
        setOpenItems(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <div className="space-y-6">
            {/* List Accordion */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg">
                <button
                    onClick={() => toggleItem('list-1')}
                    className="flex items-center justify-between w-full p-4 text-left text-gray-900 dark:text-white"
                >
                    <span className="font-medium">Available Integrations</span>
                    <span className={`transform transition-transform duration-200 ${openItems['list-1'] ? 'rotate-180' : ''}`}>
                        {icons.chevronDown}
                    </span>
                </button>
                <div className={`transition-all duration-200 ${openItems['list-1'] ? 'max-h-60' : 'max-h-0'} overflow-hidden`}>
                    <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                <span className="text-primary-500">{icons.check}</span>
                                <span>GitHub Integration</span>
                            </li>
                            <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                <span className="text-primary-500">{icons.check}</span>
                                <span>Slack Integration</span>
                            </li>
                            <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                <span className="text-primary-500">{icons.check}</span>
                                <span>Discord Integration</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Card Accordion */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                    <div>
                        <button
                            onClick={() => toggleItem('card-1')}
                            className="flex items-center justify-between w-full p-4 text-left text-gray-900 dark:text-white"
                        >
                            <div className="flex items-center gap-3">
                                <span className="flex-shrink-0 w-8 h-8 bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 rounded-lg flex items-center justify-center">
                                    {icons.star}
                                </span>
                                <div>
                                    <div className="font-medium">Premium Features</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">Unlock advanced capabilities</div>
                                </div>
                            </div>
                            <span className={`transform transition-transform duration-200 ${openItems['card-1'] ? 'rotate-180' : ''}`}>
                                {icons.chevronDown}
                            </span>
                        </button>
                        <div className={`transition-all duration-200 ${openItems['card-1'] ? 'max-h-40' : 'max-h-0'} overflow-hidden`}>
                            <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                                <p className="text-gray-600 dark:text-gray-400">
                                    Access premium features and priority support.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const FunctionalAccordions = () => {
    const [openItems, setOpenItems] = useState({});

    const toggleItem = (id) => {
        setOpenItems(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <div className="space-y-6">
            {/* FAQ Accordion */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg divide-y divide-gray-200 dark:divide-gray-700">
                <div>
                    <button
                        onClick={() => toggleItem('faq-1')}
                        className="flex items-center justify-between w-full p-4 text-left text-gray-900 dark:text-white"
                    >
                        <span className="font-medium">How do I contact support?</span>
                        <span className={`transform transition-transform duration-200 ${openItems['faq-1'] ? 'rotate-180' : ''}`}>
                            {icons.chevronDown}
                        </span>
                    </button>
                    <div className={`transition-all duration-200 ${openItems['faq-1'] ? 'max-h-40' : 'max-h-0'} overflow-hidden`}>
                        <div className="p-4 pt-0">
                            <p className="text-gray-600 dark:text-gray-400">
                                You can reach our support team through email, chat, or phone during business hours.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Steps Accordion */}
            <div className="space-y-2">
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg">
                    <button
                        onClick={() => toggleItem('steps-1')}
                        className="flex items-center justify-between w-full p-4 text-left text-gray-900 dark:text-white"
                    >
                        <div className="flex items-center gap-3">
                            <span className="flex-shrink-0 w-6 h-6 bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center text-sm font-medium">
                                1
                            </span>
                            <span className="font-medium">Installation</span>
                        </div>
                        <span className={`transform transition-transform duration-200 ${openItems['steps-1'] ? 'rotate-180' : ''}`}>
                            {icons.chevronDown}
                        </span>
                    </button>
                    <div className={`transition-all duration-200 ${openItems['steps-1'] ? 'max-h-40' : 'max-h-0'} overflow-hidden`}>
                        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                            <p className="text-gray-600 dark:text-gray-400">
                                Install the package using npm or yarn package manager.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SpecialAccordions = () => {
    const [openItems, setOpenItems] = useState({});

    const toggleItem = (id) => {
        setOpenItems(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <div className="space-y-6">
            {/* Notification Accordion */}
            <div className="space-y-3">
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                    <button
                        onClick={() => toggleItem('notification-1')}
                        className="flex items-center justify-between w-full p-4 text-left text-blue-900 dark:text-blue-100"
                    >
                        <div className="flex items-center gap-3">
                            <span className="flex-shrink-0 w-5 h-5 text-blue-500 dark:text-blue-400">
                                {icons.info}
                            </span>
                            <span className="font-medium">System Update</span>
                        </div>
                        <span className={`transform transition-transform duration-200 text-blue-500 ${openItems['notification-1'] ? 'rotate-180' : ''}`}>
                            {icons.chevronDown}
                        </span>
                    </button>
                    <div className={`transition-all duration-200 ${openItems['notification-1'] ? 'max-h-40' : 'max-h-0'} overflow-hidden`}>
                        <div className="p-4 border-t border-blue-200 dark:border-blue-800">
                            <p className="text-blue-700 dark:text-blue-300">
                                A new system update is available with performance improvements.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Table of Contents Accordion */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg">
                <button
                    onClick={() => toggleItem('toc-1')}
                    className="flex items-center justify-between w-full p-4 text-left text-gray-900 dark:text-white"
                >
                    <span className="font-medium">Table of Contents</span>
                    <span className={`transform transition-transform duration-200 ${openItems['toc-1'] ? 'rotate-180' : ''}`}>
                        {icons.chevronDown}
                    </span>
                </button>
                <div className={`transition-all duration-200 ${openItems['toc-1'] ? 'max-h-60' : 'max-h-0'} overflow-hidden`}>
                    <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                <span className="text-primary-500">{icons.arrowRight}</span>
                                <a href="#introduction" className="hover:text-primary-500 transition-colors">Introduction</a>
                            </li>
                            <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                <span className="text-primary-500">{icons.arrowRight}</span>
                                <a href="#getting-started" className="hover:text-primary-500 transition-colors">Getting Started</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function AccordionShowcase() {
    return (
        <>
            <Head>
                <title>React Accordion Components - Interactive Accordion Showcase</title>
                <meta name="description" content="Explore our comprehensive collection of React accordion components featuring various styles and interactive effects." />
                <meta name="keywords" content="react accordions, UI components, interactive accordions, customizable accordions" />
                <meta property="og:title" content="React Accordion Components - Interactive Accordion Showcase" />
                <meta property="og:description" content="Collection of React accordion components with various styles" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="React Accordion Components - Interactive Accordion Showcase" />
                <meta name="twitter:description" content="Explore our collection of React accordion components" />
            </Head>
            <main className="accordion-showcase" role="main" aria-label="Accordion Components Showcase">
                <h1 className="sr-only">React Accordion Components Showcase</h1>
                <div className="space-y-8">
                    <section aria-labelledby="basic-accordions-title">
                        <h2 id="basic-accordions-title" className="text-lg font-semibold mb-4">Basic Accordions</h2>
                        <ComponentPreview
                            title="Default & Icon Accordions"
                            description="Simple and clean accordion components with basic styling"
                            component={BasicAccordions}
                            code={`// Default Accordion
<div className="border border-gray-200 dark:border-gray-700 rounded-lg divide-y divide-gray-200 dark:divide-gray-700">
    <div>
        <button
            onClick={() => toggleItem('default-1')}
            className="flex items-center justify-between w-full p-4 text-left text-gray-900 dark:text-white"
        >
            <span className="font-medium">What is ProComponents?</span>
            <span className={\`transform transition-transform duration-200 \${openItems['default-1'] ? 'rotate-180' : ''}\`}>
                {icons.chevronDown}
            </span>
        </button>
        <div className={\`transition-all duration-200 \${openItems['default-1'] ? 'max-h-40' : 'max-h-0'} overflow-hidden\`}>
            <div className="p-4 pt-0">
                <p className="text-gray-600 dark:text-gray-400">
                    ProComponents is a comprehensive UI library built with React and Tailwind CSS.
                </p>
            </div>
        </div>
    </div>
</div>

// Icon Accordion
<div className="space-y-2">
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg">
        <button
            onClick={() => toggleItem('icon-1')}
            className="flex items-center justify-between w-full p-4 text-left text-gray-900 dark:text-white"
        >
            <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-5 h-5 text-primary-500 dark:text-primary-400">
                    {icons.info}
                </span>
                <span className="font-medium">About the product</span>
            </div>
            <span className={\`transform transition-transform duration-200 \${openItems['icon-1'] ? 'rotate-180' : ''}\`}>
                {icons.chevronDown}
            </span>
        </button>
        <div className={\`transition-all duration-200 \${openItems['icon-1'] ? 'max-h-40' : 'max-h-0'} overflow-hidden\`}>
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-400">
                    Learn more about our product features and capabilities.
                </p>
            </div>
        </div>
    </div>
</div>`}
                            sizes={["default", "full"]}
                        />
                    </section>

                    <section aria-labelledby="styled-accordions-title">
                        <h2 id="styled-accordions-title" className="text-lg font-semibold mb-4">Styled Accordions</h2>
                        <ComponentPreview
                            title="Rounded & Colored Accordions"
                            description="Accordions with enhanced visual styling"
                            component={StyledAccordions}
                            code={`// Rounded Accordion
<div className="space-y-3">
    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl">
        <button
            onClick={() => toggleItem('rounded-1')}
            className="flex items-center justify-between w-full p-4 text-left text-gray-900 dark:text-white rounded-xl"
        >
            <span className="font-medium">Pricing Plans</span>
            <span className={\`transform transition-transform duration-200 \${openItems['rounded-1'] ? 'rotate-180' : ''}\`}>
                {icons.chevronDown}
            </span>
        </button>
        <div className={\`transition-all duration-200 \${openItems['rounded-1'] ? 'max-h-40' : 'max-h-0'} overflow-hidden\`}>
            <div className="px-4 pb-4">
                <p className="text-gray-600 dark:text-gray-400">
                    Choose from our flexible pricing plans for your needs.
                </p>
            </div>
        </div>
    </div>
</div>

// Colored Accordion
<div className="space-y-3">
    <div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-lg">
        <button
            onClick={() => toggleItem('colored-1')}
            className="flex items-center justify-between w-full p-4 text-left text-primary-900 dark:text-primary-100"
        >
            <span className="font-medium">Features</span>
            <span className={\`transform transition-transform duration-200 text-primary-500 \${openItems['colored-1'] ? 'rotate-180' : ''}\`}>
                {icons.chevronDown}
            </span>
        </button>
        <div className={\`transition-all duration-200 \${openItems['colored-1'] ? 'max-h-40' : 'max-h-0'} overflow-hidden\`}>
            <div className="p-4 border-t border-primary-200 dark:border-primary-800">
                <p className="text-primary-700 dark:text-primary-300">
                    Explore our comprehensive feature set.
                </p>
            </div>
        </div>
    </div>
</div>`}
                            sizes={["default", "full"]}
                        />
                    </section>

                    <section aria-labelledby="interactive-accordions-title">
                        <h2 id="interactive-accordions-title" className="text-lg font-semibold mb-4">Interactive Accordions</h2>
                        <ComponentPreview
                            title="List & Card Accordions"
                            description="Accordions with enhanced interaction patterns"
                            component={InteractiveAccordions}
                            code={`// List Accordion
<div className="border border-gray-200 dark:border-gray-700 rounded-lg">
    <button
        onClick={() => toggleItem('list-1')}
        className="flex items-center justify-between w-full p-4 text-left text-gray-900 dark:text-white"
    >
        <span className="font-medium">Available Integrations</span>
        <span className={\`transform transition-transform duration-200 \${openItems['list-1'] ? 'rotate-180' : ''}\`}>
            {icons.chevronDown}
        </span>
    </button>
    <div className={\`transition-all duration-200 \${openItems['list-1'] ? 'max-h-60' : 'max-h-0'} overflow-hidden\`}>
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <span className="text-primary-500">{icons.check}</span>
                    <span>GitHub Integration</span>
                </li>
                <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <span className="text-primary-500">{icons.check}</span>
                    <span>Slack Integration</span>
                </li>
                <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <span className="text-primary-500">{icons.check}</span>
                    <span>Discord Integration</span>
                </li>
            </ul>
        </div>
    </div>
</div>

// Card Accordion
<div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div>
            <button
                onClick={() => toggleItem('card-1')}
                className="flex items-center justify-between w-full p-4 text-left text-gray-900 dark:text-white"
            >
                <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 rounded-lg flex items-center justify-center">
                        {icons.star}
                    </span>
                    <div>
                        <div className="font-medium">Premium Features</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Unlock advanced capabilities</div>
                    </div>
                </div>
                <span className={\`transform transition-transform duration-200 \${openItems['card-1'] ? 'rotate-180' : ''}\`}>
                    {icons.chevronDown}
                </span>
            </button>
            <div className={\`transition-all duration-200 \${openItems['card-1'] ? 'max-h-40' : 'max-h-0'} overflow-hidden\`}>
                <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                    <p className="text-gray-600 dark:text-gray-400">
                        Access premium features and priority support.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>`}
                            sizes={["default", "full"]}
                        />
                    </section>

                    <section aria-labelledby="functional-accordions-title">
                        <h2 id="functional-accordions-title" className="text-lg font-semibold mb-4">Functional Accordions</h2>
                        <ComponentPreview
                            title="FAQ & Steps Accordions"
                            description="Purpose-built accordion components for specific use cases"
                            component={FunctionalAccordions}
                            code={`// FAQ Accordion
<div className="border border-gray-200 dark:border-gray-700 rounded-lg divide-y divide-gray-200 dark:divide-gray-700">
    <div>
        <button
            onClick={() => toggleItem('faq-1')}
            className="flex items-center justify-between w-full p-4 text-left text-gray-900 dark:text-white"
        >
            <span className="font-medium">How do I contact support?</span>
            <span className={\`transform transition-transform duration-200 \${openItems['faq-1'] ? 'rotate-180' : ''}\`}>
                {icons.chevronDown}
            </span>
        </button>
        <div className={\`transition-all duration-200 \${openItems['faq-1'] ? 'max-h-40' : 'max-h-0'} overflow-hidden\`}>
            <div className="p-4 pt-0">
                <p className="text-gray-600 dark:text-gray-400">
                    You can reach our support team through email, chat, or phone during business hours.
                </p>
            </div>
        </div>
    </div>
</div>

// Steps Accordion
<div className="space-y-2">
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg">
        <button
            onClick={() => toggleItem('steps-1')}
            className="flex items-center justify-between w-full p-4 text-left text-gray-900 dark:text-white"
        >
            <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center text-sm font-medium">
                    1
                </span>
                <span className="font-medium">Installation</span>
            </div>
            <span className={\`transform transition-transform duration-200 \${openItems['steps-1'] ? 'rotate-180' : ''}\`}>
                {icons.chevronDown}
            </span>
        </button>
        <div className={\`transition-all duration-200 \${openItems['steps-1'] ? 'max-h-40' : 'max-h-0'} overflow-hidden\`}>
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-400">
                    Install the package using npm or yarn package manager.
                </p>
            </div>
        </div>
    </div>
</div>`}
                            sizes={["default", "full"]}
                        />
                    </section>

                    <section aria-labelledby="special-accordions-title">
                        <h2 id="special-accordions-title" className="text-lg font-semibold mb-4">Special Purpose Accordions</h2>
                        <ComponentPreview
                            title="Notification & Table of Contents Accordions"
                            description="Specialized accordion components for specific content types"
                            component={SpecialAccordions}
                            code={`// Notification Accordion
<div className="space-y-3">
    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
        <button
            onClick={() => toggleItem('notification-1')}
            className="flex items-center justify-between w-full p-4 text-left text-blue-900 dark:text-blue-100"
        >
            <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-5 h-5 text-blue-500 dark:text-blue-400">
                    {icons.info}
                </span>
                <span className="font-medium">System Update</span>
            </div>
            <span className={\`transform transition-transform duration-200 text-blue-500 \${openItems['notification-1'] ? 'rotate-180' : ''}\`}>
                {icons.chevronDown}
            </span>
        </button>
        <div className={\`transition-all duration-200 \${openItems['notification-1'] ? 'max-h-40' : 'max-h-0'} overflow-hidden\`}>
            <div className="p-4 border-t border-blue-200 dark:border-blue-800">
                <p className="text-blue-700 dark:text-blue-300">
                    A new system update is available with performance improvements.
                </p>
            </div>
        </div>
    </div>
</div>

// Table of Contents Accordion
<div className="border border-gray-200 dark:border-gray-700 rounded-lg">
    <button
        onClick={() => toggleItem('toc-1')}
        className="flex items-center justify-between w-full p-4 text-left text-gray-900 dark:text-white"
    >
        <span className="font-medium">Table of Contents</span>
        <span className={\`transform transition-transform duration-200 \${openItems['toc-1'] ? 'rotate-180' : ''}\`}>
            {icons.chevronDown}
        </span>
    </button>
    <div className={\`transition-all duration-200 \${openItems['toc-1'] ? 'max-h-60' : 'max-h-0'} overflow-hidden\`}>
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <span className="text-primary-500">{icons.arrowRight}</span>
                    <a href="#introduction" className="hover:text-primary-500 transition-colors">Introduction</a>
                </li>
                <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <span className="text-primary-500">{icons.arrowRight}</span>
                    <a href="#getting-started" className="hover:text-primary-500 transition-colors">Getting Started</a>
                </li>
            </ul>
        </div>
    </div>
</div>`}
                            sizes={["default", "full"]}
                        />
                    </section>
                </div>
            </main>
        </>
    );
} 