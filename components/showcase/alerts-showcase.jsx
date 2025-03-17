"use client";

import { motion } from "framer-motion";
import ComponentPreview from "../ui/ComponentPreview";
import Head from 'next/head';
import { icons } from './buttons-showcase';

const BasicAlerts = () => {
    return (
        <div className="flex flex-col space-y-4">
            {/* Success Alert */}
            <div className="bg-green-50 border-l-4 border-green-500 p-4 dark:bg-green-900/20">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        {icons.check}
                    </div>
                    <div className="ml-3">
                        <p className="text-sm text-green-700 dark:text-green-200">
                            Successfully saved your changes!
                        </p>
                    </div>
                </div>
            </div>

            {/* Error Alert */}
            <div className="bg-red-50 border-l-4 border-red-500 p-4 dark:bg-red-900/20">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        {icons.x}
                    </div>
                    <div className="ml-3">
                        <p className="text-sm text-red-700 dark:text-red-200">
                            An error occurred while processing your request.
                        </p>
                    </div>
                </div>
            </div>

            {/* Warning Alert */}
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 dark:bg-yellow-900/20">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        {icons.warning}
                    </div>
                    <div className="ml-3">
                        <p className="text-sm text-yellow-700 dark:text-yellow-200">
                            Please review your information before continuing.
                        </p>
                    </div>
                </div>
            </div>

            {/* Info Alert */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 dark:bg-blue-900/20">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        {icons.info}
                    </div>
                    <div className="ml-3">
                        <p className="text-sm text-blue-700 dark:text-blue-200">
                            A new software update is available.
                        </p>
                    </div>
                </div>
            </div>

            {/* Neutral Alert */}
            <div className="bg-gray-50 border-l-4 border-gray-500 p-4 dark:bg-gray-900/20">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        {icons.bell}
                    </div>
                    <div className="ml-3">
                        <p className="text-sm text-gray-700 dark:text-gray-200">
                            You have new notifications.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const DismissibleAlerts = () => {
    return (
        <div className="flex flex-col space-y-4">
            {/* Dismissible Success Alert */}
            <div className="bg-green-50 p-4 rounded-lg flex items-center justify-between dark:bg-green-900/20">
                <div className="flex items-center">
                    <div className="flex-shrink-0 text-green-400">
                        {icons.check}
                    </div>
                    <div className="ml-3">
                        <p className="text-sm text-green-700 dark:text-green-200">
                            Changes saved successfully!
                        </p>
                    </div>
                </div>
                <button className="text-green-500 hover:text-green-600 dark:text-green-400">
                    {icons.x}
                </button>
            </div>

            {/* Dismissible Error Alert with Action */}
            <div className="bg-red-50 p-4 rounded-lg flex items-center justify-between dark:bg-red-900/20">
                <div className="flex items-center">
                    <div className="flex-shrink-0 text-red-400">
                        {icons.x}
                    </div>
                    <div className="ml-3">
                        <p className="text-sm text-red-700 dark:text-red-200">
                            Failed to upload file.
                            <button className="ml-2 text-red-700 underline hover:text-red-800 dark:text-red-300">
                                Try again
                            </button>
                        </p>
                    </div>
                </div>
                <button className="text-red-500 hover:text-red-600 dark:text-red-400">
                    {icons.x}
                </button>
            </div>
        </div>
    );
};

const AnimatedAlerts = () => {
    return (
        <div className="flex flex-col space-y-4">
            {/* Slide-in Alert */}
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                className="bg-indigo-50 p-4 rounded-lg flex items-center dark:bg-indigo-900/20"
            >
                <div className="flex-shrink-0 text-indigo-400">
                    {icons.bell}
                </div>
                <div className="ml-3">
                    <p className="text-sm text-indigo-700 dark:text-indigo-200">
                        New message received!
                    </p>
                </div>
            </motion.div>

            {/* Fade-in Alert with Scale */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-purple-50 p-4 rounded-lg flex items-center dark:bg-purple-900/20"
            >
                <div className="flex-shrink-0 text-purple-400">
                    {icons.info}
                </div>
                <div className="ml-3">
                    <p className="text-sm text-purple-700 dark:text-purple-200">
                        Your profile has been updated.
                    </p>
                </div>
            </motion.div>

            {/* Bounce-in Alert */}
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", bounce: 0.5 }}
                className="bg-teal-50 p-4 rounded-lg flex items-center dark:bg-teal-900/20"
            >
                <div className="flex-shrink-0 text-teal-400">
                    {icons.check}
                </div>
                <div className="ml-3">
                    <p className="text-sm text-teal-700 dark:text-teal-200">
                        Task completed successfully!
                    </p>
                </div>
            </motion.div>

            {/* Flip-in Alert */}
            <motion.div
                initial={{ rotateX: 90, opacity: 0 }}
                animate={{ rotateX: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-amber-50 p-4 rounded-lg flex items-center dark:bg-amber-900/20"
            >
                <div className="flex-shrink-0 text-amber-400">
                    {icons.warning}
                </div>
                <div className="ml-3">
                    <p className="text-sm text-amber-700 dark:text-amber-200">
                        Please review your changes.
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

const InteractiveAlerts = () => {
    return (
        <div className="flex flex-col space-y-4">
            {/* Expandable Alert */}
            <div className="bg-blue-50 p-4 rounded-lg space-y-2 dark:bg-blue-900/20">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 text-blue-400">
                            {icons.info}
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-blue-700 dark:text-blue-200">
                                System Update Available
                            </p>
                        </div>
                    </div>
                    <button className="text-blue-500 hover:text-blue-600 dark:text-blue-400">
                        {icons.chevronDown}
                    </button>
                </div>
                <div className="pl-8">
                    <p className="text-sm text-blue-600 dark:text-blue-300">
                        A new system update is available. This update includes security improvements and bug fixes.
                    </p>
                    <div className="mt-2 flex space-x-2">
                        <button className="text-sm text-white bg-blue-500 px-3 py-1 rounded hover:bg-blue-600">
                            Update Now
                        </button>
                        <button className="text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            {/* Multi-Step Alert */}
            <div className="bg-emerald-50 p-4 rounded-lg space-y-3 dark:bg-emerald-900/20">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 text-emerald-400">
                            {icons.check}
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-emerald-700 dark:text-emerald-200">
                                Backup Complete
                            </p>
                        </div>
                    </div>
                    <div className="flex space-x-2">
                        <button className="text-emerald-500 hover:text-emerald-600 dark:text-emerald-400">
                            View Details
                        </button>
                        <button className="text-emerald-500 hover:text-emerald-600 dark:text-emerald-400">
                            {icons.x}
                        </button>
                    </div>
                </div>
                <div className="pl-8">
                    <div className="flex items-center space-x-2">
                        <div className="h-2 w-2 bg-emerald-400 rounded-full"></div>
                        <p className="text-sm text-emerald-600 dark:text-emerald-300">Files backed up: 1,234</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="h-2 w-2 bg-emerald-400 rounded-full"></div>
                        <p className="text-sm text-emerald-600 dark:text-emerald-300">Total size: 2.5 GB</p>
                    </div>
                </div>
            </div>

            {/* Interactive Poll Alert */}
            <div className="bg-rose-50 p-4 rounded-lg space-y-3 dark:bg-rose-900/20">
                <div className="flex items-center">
                    <div className="flex-shrink-0 text-rose-400">
                        {icons.heart}
                    </div>
                    <div className="ml-3">
                        <p className="text-sm font-medium text-rose-700 dark:text-rose-200">
                            How would you rate your experience?
                        </p>
                    </div>
                </div>
                <div className="pl-8 flex space-x-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                        <button
                            key={rating}
                            className="w-8 h-8 rounded-full bg-rose-100 hover:bg-rose-200 text-rose-600 flex items-center justify-center text-sm font-medium dark:bg-rose-800 dark:text-rose-200"
                        >
                            {rating}
                        </button>
                    ))}
                </div>
            </div>

            {/* Collapsible Steps Alert */}
            <div className="bg-violet-50 p-4 rounded-lg space-y-2 dark:bg-violet-900/20">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 text-violet-400">
                            {icons.info}
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-violet-700 dark:text-violet-200">
                                Getting Started Guide
                            </p>
                        </div>
                    </div>
                    <button className="text-violet-500 hover:text-violet-600 dark:text-violet-400">
                        {icons.chevronDown}
                    </button>
                </div>
                <div className="pl-8 space-y-3">
                    <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 rounded-full bg-violet-200 flex items-center justify-center text-violet-600 text-sm dark:bg-violet-800 dark:text-violet-200">
                            1
                        </div>
                        <p className="text-sm text-violet-600 dark:text-violet-300">Create your account</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 rounded-full bg-violet-200 flex items-center justify-center text-violet-600 text-sm dark:bg-violet-800 dark:text-violet-200">
                            2
                        </div>
                        <p className="text-sm text-violet-600 dark:text-violet-300">Set up your profile</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 rounded-full bg-violet-200 flex items-center justify-center text-violet-600 text-sm dark:bg-violet-800 dark:text-violet-200">
                            3
                        </div>
                        <p className="text-sm text-violet-600 dark:text-violet-300">Start exploring</p>
                    </div>
                </div>
            </div>

            {/* Interactive Timer Alert */}
            <div className="bg-cyan-50 p-4 rounded-lg space-y-2 dark:bg-cyan-900/20">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 text-cyan-400">
                            {icons.clock}
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-cyan-700 dark:text-cyan-200">
                                Session Timeout Warning
                            </p>
                        </div>
                    </div>
                </div>
                <div className="pl-8">
                    <p className="text-sm text-cyan-600 dark:text-cyan-300">
                        Your session will expire in 5 minutes.
                    </p>
                    <div className="mt-2 flex space-x-2">
                        <button className="text-sm text-white bg-cyan-500 px-3 py-1 rounded hover:bg-cyan-600">
                            Extend Session
                        </button>
                        <button className="text-sm text-cyan-500 hover:text-cyan-600 dark:text-cyan-400">
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProgressAlerts = () => {
    return (
        <div className="flex flex-col space-y-4">
            {/* Progress Alert */}
            <div className="bg-green-50 p-4 rounded-lg space-y-2 dark:bg-green-900/20">
                <div className="flex items-center">
                    <div className="flex-shrink-0 text-green-400 animate-spin">
                        {icons.loading}
                    </div>
                    <div className="ml-3">
                        <p className="text-sm text-green-700 dark:text-green-200">
                            Uploading files...
                        </p>
                    </div>
                </div>
                <div className="w-full bg-green-200 rounded-full h-2 dark:bg-green-800">
                    <div className="bg-green-500 h-2 rounded-full w-2/3"></div>
                </div>
            </div>

            {/* Processing Alert */}
            <div className="bg-purple-50 p-4 rounded-lg dark:bg-purple-900/20">
                <div className="flex items-center">
                    <div className="flex-shrink-0 text-purple-400">
                        <svg className="animate-pulse h-5 w-5" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.3" />
                            <circle cx="12" cy="12" r="5" fill="currentColor" />
                        </svg>
                    </div>
                    <div className="ml-3">
                        <p className="text-sm text-purple-700 dark:text-purple-200">
                            Processing your request...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function AlertsShowcase() {
    return (
        <>
            <Head>
                <title>React Alert Components - Interactive Alert Showcase</title>
                <meta name="description" content="Explore our comprehensive collection of React alert components featuring various styles, animations, and interactive effects. Includes basic alerts, dismissible alerts, animated alerts, and more." />
                <meta name="keywords" content="react alerts, UI components, alert designs, interactive alerts, dismissible alerts, animated alerts, progress alerts, notification components" />
                <meta property="og:title" content="React Alert Components - Interactive Alert Showcase" />
                <meta property="og:description" content="Comprehensive collection of React alert components with various styles and animations" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="React Alert Components - Interactive Alert Showcase" />
                <meta name="twitter:description" content="Explore our collection of React alert components" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "React Alert Components Showcase",
                        "description": "A comprehensive collection of React alert components with various styles and interactions",
                        "keywords": "react alerts, UI components, alert designs, interactive alerts",
                        "mainEntity": {
                            "@type": "SoftwareSourceCode",
                            "programmingLanguage": "React",
                            "name": "Alert Components",
                            "description": "Collection of reusable alert components with different styles and animations",
                            "applicationCategory": "Web Development",
                            "offers": {
                                "@type": "Offer",
                                "availability": "https://schema.org/InStock",
                                "price": "0",
                                "priceCurrency": "USD"
                            }
                        }
                    })}
                </script>
            </Head>
            <main className="alert-showcase" role="main" aria-label="Alert Components Showcase">
                <h1 className="sr-only">React Alert Components Showcase</h1>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8"
                >
                    <section aria-labelledby="basic-alerts-title">
                        <h2 id="basic-alerts-title" className="sr-only">Basic Alert Components</h2>
                        <ComponentPreview
                            title="Basic Alerts"
                            description="A collection of alert variants for different purposes"
                            component={BasicAlerts}
                            code={`// Success Alert
<div className="bg-green-50 border-l-4 border-green-500 p-4">
    <div className="flex items-center">
        <div className="flex-shrink-0">{icons.check}</div>
        <div className="ml-3">
            <p className="text-sm text-green-700">Successfully saved your changes!</p>
        </div>
    </div>
</div>

// Error Alert
<div className="bg-red-50 border-l-4 border-red-500 p-4">
    <div className="flex items-center">
        <div className="flex-shrink-0">{icons.x}</div>
        <div className="ml-3">
            <p className="text-sm text-red-700">An error occurred while processing your request.</p>
        </div>
    </div>
</div>

// Warning Alert
<div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
    <div className="flex items-center">
        <div className="flex-shrink-0">{icons.warning}</div>
        <div className="ml-3">
            <p className="text-sm text-yellow-700">Please review your information before continuing.</p>
        </div>
    </div>
</div>

// Info Alert
<div className="bg-blue-50 border-l-4 border-blue-500 p-4">
    <div className="flex items-center">
        <div className="flex-shrink-0">{icons.info}</div>
        <div className="ml-3">
            <p className="text-sm text-blue-700">A new software update is available.</p>
        </div>
    </div>
</div>

// Neutral Alert
<div className="bg-gray-50 border-l-4 border-gray-500 p-4">
    <div className="flex items-center">
        <div className="flex-shrink-0">{icons.bell}</div>
        <div className="ml-3">
            <p className="text-sm text-gray-700">You have new notifications.</p>
        </div>
    </div>
</div>`}
                            sizes={["sm", "default", "lg", "full"]}
                        />
                    </section>

                    <section aria-labelledby="dismissible-alerts-title">
                        <h2 id="dismissible-alerts-title" className="sr-only">Dismissible Alert Components</h2>
                        <ComponentPreview
                            title="Dismissible Alerts"
                            description="Alerts that can be dismissed by the user"
                            component={DismissibleAlerts}
                            code={`// Dismissible Success Alert
<div className="bg-green-50 p-4 rounded-lg flex items-center justify-between">
    <div className="flex items-center">
        <div className="flex-shrink-0 text-green-400">{icons.check}</div>
        <div className="ml-3">
            <p className="text-sm text-green-700">Changes saved successfully!</p>
        </div>
    </div>
    <button className="text-green-500 hover:text-green-600">{icons.x}</button>
</div>

// Dismissible Error Alert with Action
<div className="bg-red-50 p-4 rounded-lg flex items-center justify-between">
    <div className="flex items-center">
        <div className="flex-shrink-0 text-red-400">{icons.x}</div>
        <div className="ml-3">
            <p className="text-sm text-red-700">
                Failed to upload file.
                <button className="ml-2 text-red-700 underline hover:text-red-800">
                    Try again
                </button>
            </p>
        </div>
    </div>
    <button className="text-red-500 hover:text-red-600">{icons.x}</button>
</div>`}
                            sizes={["default", "full"]}
                        />
                    </section>

                    <section aria-labelledby="animated-alerts-title">
                        <h2 id="animated-alerts-title" className="sr-only">Animated Alert Components</h2>
                        <ComponentPreview
                            title="Animated Alerts"
                            description="Alerts with smooth animations and transitions"
                            component={AnimatedAlerts}
                            code={`// Slide-in Alert
<motion.div
    initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
    className="bg-indigo-50 p-4 rounded-lg flex items-center"
>
    <div className="flex-shrink-0 text-indigo-400">{icons.bell}</div>
    <div className="ml-3">
        <p className="text-sm text-indigo-700">New message received!</p>
    </div>
</motion.div>

// Fade-in Alert with Scale
<motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
    className="bg-purple-50 p-4 rounded-lg flex items-center"
>
    <div className="flex-shrink-0 text-purple-400">{icons.info}</div>
    <div className="ml-3">
        <p className="text-sm text-purple-700">Your profile has been updated.</p>
    </div>
</motion.div>

// Bounce-in Alert
<motion.div
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ type: "spring", bounce: 0.5 }}
    className="bg-teal-50 p-4 rounded-lg flex items-center"
>
    <div className="flex-shrink-0 text-teal-400">{icons.check}</div>
    <div className="ml-3">
        <p className="text-sm text-teal-700">Task completed successfully!</p>
    </div>
</motion.div>

// Flip-in Alert
<motion.div
    initial={{ rotateX: 90, opacity: 0 }}
    animate={{ rotateX: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="bg-amber-50 p-4 rounded-lg flex items-center"
>
    <div className="flex-shrink-0 text-amber-400">{icons.warning}</div>
    <div className="ml-3">
        <p className="text-sm text-amber-700">Please review your changes.</p>
    </div>
</motion.div>`}
                            sizes={["default", "full"]}
                        />
                    </section>

                    <section aria-labelledby="interactive-alerts-title">
                        <h2 id="interactive-alerts-title" className="sr-only">Interactive Alert Components</h2>
                        <ComponentPreview
                            title="Interactive Alerts"
                            description="Alerts with interactive elements and expandable content"
                            component={InteractiveAlerts}
                            code={`// Expandable Alert
<div className="bg-blue-50 p-4 rounded-lg space-y-2">
    <div className="flex items-center justify-between">
        <div className="flex items-center">
            <div className="flex-shrink-0 text-blue-400">{icons.info}</div>
            <div className="ml-3">
                <p className="text-sm font-medium text-blue-700">System Update Available</p>
            </div>
        </div>
        <button className="text-blue-500 hover:text-blue-600">{icons.chevronDown}</button>
    </div>
    <div className="pl-8">
        <p className="text-sm text-blue-600">
            A new system update is available. This update includes security improvements and bug fixes.
        </p>
        <div className="mt-2 flex space-x-2">
            <button className="text-sm text-white bg-blue-500 px-3 py-1 rounded hover:bg-blue-600">
                Update Now
            </button>
            <button className="text-sm text-blue-500 hover:text-blue-600">
                Learn More
            </button>
        </div>
    </div>
</div>

// Multi-Step Alert
<div className="bg-emerald-50 p-4 rounded-lg space-y-3">
    <div className="flex items-center justify-between">
        <div className="flex items-center">
            <div className="flex-shrink-0 text-emerald-400">{icons.check}</div>
            <div className="ml-3">
                <p className="text-sm font-medium text-emerald-700">Backup Complete</p>
            </div>
        </div>
        <div className="flex space-x-2">
            <button className="text-emerald-500 hover:text-emerald-600">{icons.x}</button>
            <button className="text-emerald-500 hover:text-emerald-600">{icons.x}</button>
        </div>
    </div>
    <div className="pl-8">
        <div className="flex items-center space-x-2">
            <div className="h-2 w-2 bg-emerald-400 rounded-full"></div>
            <p className="text-sm text-emerald-600">Files backed up: 1,234</p>
        </div>
        <div className="flex items-center space-x-2">
            <div className="h-2 w-2 bg-emerald-400 rounded-full"></div>
            <p className="text-sm text-emerald-600">Total size: 2.5 GB</p>
        </div>
    </div>
</div>

// Interactive Poll Alert
<div className="bg-rose-50 p-4 rounded-lg space-y-3">
    <div className="flex items-center">
        <div className="flex-shrink-0 text-rose-400">{icons.heart}</div>
        <div className="ml-3">
            <p className="text-sm font-medium text-rose-700">How would you rate your experience?</p>
        </div>
    </div>
    <div className="pl-8 flex space-x-2">
        {[1, 2, 3, 4, 5].map((rating) => (
            <button
                key={rating}
                className="w-8 h-8 rounded-full bg-rose-100 hover:bg-rose-200 text-rose-600 flex items-center justify-center text-sm font-medium"
            >
                {rating}
            </button>
        ))}
    </div>
</div>

// Collapsible Steps Alert
<div className="bg-violet-50 p-4 rounded-lg space-y-2">
    <div className="flex items-center justify-between">
        <div className="flex items-center">
            <div className="flex-shrink-0 text-violet-400">{icons.info}</div>
            <div className="ml-3">
                <p className="text-sm font-medium text-violet-700">Getting Started Guide</p>
            </div>
        </div>
        <button className="text-violet-500 hover:text-violet-600">{icons.chevronDown}</button>
    </div>
    <div className="pl-8 space-y-3">
        <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full bg-violet-200 flex items-center justify-center text-violet-600 text-sm">{icons.check}</div>
            <p className="text-sm text-violet-600">Create your account</p>
        </div>
        <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full bg-violet-200 flex items-center justify-center text-violet-600 text-sm">{icons.check}</div>
            <p className="text-sm text-violet-600">Set up your profile</p>
        </div>
        <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full bg-violet-200 flex items-center justify-center text-violet-600 text-sm">{icons.check}</div>
            <p className="text-sm text-violet-600">Start exploring</p>
        </div>
    </div>
</div>

// Interactive Timer Alert
<div className="bg-cyan-50 p-4 rounded-lg space-y-2">
    <div className="flex items-center justify-between">
        <div className="flex items-center">
            <div className="flex-shrink-0 text-cyan-400">{icons.clock}</div>
            <div className="ml-3">
                <p className="text-sm font-medium text-cyan-700">Session Timeout Warning</p>
            </div>
        </div>
    </div>
    <div className="pl-8">
        <p className="text-sm text-cyan-600">Your session will expire in 5 minutes.</p>
        <div className="mt-2 flex space-x-2">
            <button className="text-sm text-white bg-cyan-500 px-3 py-1 rounded hover:bg-cyan-600">Extend Session</button>
            <button className="text-sm text-cyan-500 hover:text-cyan-600">{icons.x}</button>
        </div>
    </div>
</div>`}
                            sizes={["default", "full"]}
                        />
                    </section>

                    <section aria-labelledby="progress-alerts-title">
                        <h2 id="progress-alerts-title" className="sr-only">Progress Alert Components</h2>
                        <ComponentPreview
                            title="Progress Alerts"
                            description="Alerts showing progress and loading states"
                            component={ProgressAlerts}
                            code={`// Progress Alert
<div className="bg-green-50 p-4 rounded-lg space-y-2">
    <div className="flex items-center">
        <div className="flex-shrink-0 text-green-400 animate-spin">{icons.loading}</div>
        <div className="ml-3">
            <p className="text-sm text-green-700">Uploading files...</p>
        </div>
    </div>
    <div className="w-full bg-green-200 rounded-full h-2">
        <div className="bg-green-500 h-2 rounded-full w-2/3"></div>
    </div>
</div>

// Processing Alert
<div className="bg-purple-50 p-4 rounded-lg">
    <div className="flex items-center">
        <div className="flex-shrink-0 text-purple-400">
            <svg className="animate-pulse h-5 w-5" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.3" />
                <circle cx="12" cy="12" r="5" fill="currentColor" />
            </svg>
        </div>
        <div className="ml-3">
            <p className="text-sm text-purple-700">Processing your request...</p>
        </div>
    </div>
</div>`}
                            sizes={["default", "full"]}
                        />
                    </section>
                </motion.div>
            </main>
        </>
    );
} 