"use client";

import ComponentPreview from "../ui/ComponentPreview";
import Head from "next/head";

const BasicBottomNav = () => {
    return (
        <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white/95 border-t border-gray-100 dark:bg-gray-900/95 dark:border-gray-800">
            <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
                <a
                    href="#home"
                    className="inline-flex flex-col items-center justify-center px-5 border-gray-100 border-x hover:bg-gray-50/50 dark:hover:bg-gray-800/50 group dark:border-gray-800 text-gray-700 dark:text-gray-300"
                >
                    <svg className="w-5 h-5 mb-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span className="text-sm">Home</span>
                </a>
                <a
                    href="#wallet"
                    className="inline-flex flex-col items-center justify-center px-5 border-e border-gray-100 hover:bg-gray-50/50 dark:hover:bg-gray-800/50 group dark:border-gray-800 text-gray-500 dark:text-gray-400"
                >
                    <svg className="w-5 h-5 mb-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    <span className="text-sm">Wallet</span>
                </a>
                <a
                    href="#settings"
                    className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50/50 dark:hover:bg-gray-800/50 group text-gray-500 dark:text-gray-400"
                >
                    <svg className="w-5 h-5 mb-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm">Settings</span>
                </a>
                <a
                    href="#profile"
                    className="inline-flex flex-col items-center justify-center px-5 border-gray-100 hover:bg-gray-50/50 dark:hover:bg-gray-800/50 group border-x dark:border-gray-800 text-gray-500 dark:text-gray-400"
                >
                    <svg className="w-5 h-5 mb-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="text-sm">Profile</span>
                </a>
            </div>
        </div>
    );
};

const GradientBottomNav = () => {
    return (
        <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-gradient-to-r from-gray-900 to-gray-800">
            <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
                <a
                    href="#home"
                    className="inline-flex flex-col items-center justify-center px-5 hover:bg-white/5 group text-gray-300"
                >
                    <svg className="w-5 h-5 mb-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span className="text-sm">Home</span>
                </a>
                <a
                    href="#wallet"
                    className="inline-flex flex-col items-center justify-center px-5 hover:bg-white/5 group text-gray-400"
                >
                    <svg className="w-5 h-5 mb-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    <span className="text-sm">Wallet</span>
                </a>
                <a
                    href="#settings"
                    className="inline-flex flex-col items-center justify-center px-5 hover:bg-white/5 group text-gray-400"
                >
                    <svg className="w-5 h-5 mb-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm">Settings</span>
                </a>
                <a
                    href="#profile"
                    className="inline-flex flex-col items-center justify-center px-5 hover:bg-white/5 group text-gray-400"
                >
                    <svg className="w-5 h-5 mb-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="text-sm">Profile</span>
                </a>
            </div>
        </div>
    );
};

const GlassBottomNav = () => {
    return (
        <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border-t border-gray-200/30 dark:border-gray-800/30">
            <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
                <a
                    href="#home"
                    className="inline-flex flex-col items-center justify-center px-5 hover:bg-white/50 dark:hover:bg-gray-800/50 group text-gray-700 dark:text-gray-300"
                >
                    <svg className="w-5 h-5 mb-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span className="text-sm">Home</span>
                </a>
                <a
                    href="#wallet"
                    className="inline-flex flex-col items-center justify-center px-5 hover:bg-white/50 dark:hover:bg-gray-800/50 group text-gray-500 dark:text-gray-400"
                >
                    <svg className="w-5 h-5 mb-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    <span className="text-sm">Wallet</span>
                </a>
                <a
                    href="#settings"
                    className="inline-flex flex-col items-center justify-center px-5 hover:bg-white/50 dark:hover:bg-gray-800/50 group text-gray-500 dark:text-gray-400"
                >
                    <svg className="w-5 h-5 mb-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm">Settings</span>
                </a>
                <a
                    href="#profile"
                    className="inline-flex flex-col items-center justify-center px-5 hover:bg-white/50 dark:hover:bg-gray-800/50 group text-gray-500 dark:text-gray-400"
                >
                    <svg className="w-5 h-5 mb-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="text-sm">Profile</span>
                </a>
            </div>
        </div>
    );
};

const CompactBottomNav = () => {
    return (
        <div className="fixed bottom-0 left-0 z-50 w-full h-14 bg-white/95 border-t border-gray-100 dark:bg-gray-900/95 dark:border-gray-800">
            <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
                <a
                    href="#home"
                    className="inline-flex flex-col items-center justify-center px-3 hover:bg-gray-50/50 dark:hover:bg-gray-800/50 group text-gray-700 dark:text-gray-300"
                >
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                </a>
                <a
                    href="#wallet"
                    className="inline-flex flex-col items-center justify-center px-3 hover:bg-gray-50/50 dark:hover:bg-gray-800/50 group text-gray-500 dark:text-gray-400"
                >
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                </a>
                <a
                    href="#add"
                    className="inline-flex items-center justify-center w-10 h-10 mx-auto -mt-4 bg-gray-900 dark:bg-gray-100 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 group"
                >
                    <svg className="w-6 h-6 text-white dark:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v16m8-8H4" />
                    </svg>
                </a>
                <a
                    href="#settings"
                    className="inline-flex flex-col items-center justify-center px-3 hover:bg-gray-50/50 dark:hover:bg-gray-800/50 group text-gray-500 dark:text-gray-400"
                >
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </a>
                <a
                    href="#profile"
                    className="inline-flex flex-col items-center justify-center px-3 hover:bg-gray-50/50 dark:hover:bg-gray-800/50 group text-gray-500 dark:text-gray-400"
                >
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default function BottomNavigationShowcase() {
    return (
        <>
            <Head>
                <title>React Bottom Navigation Components - Modern Navigation Showcase</title>
                <meta
                    name="description"
                    content="Explore our collection of React bottom navigation components featuring various styles, interactions, and mobile-first design."
                />
                <meta
                    name="keywords"
                    content="react bottom navigation, mobile navigation, navigation bar, bottom bar, mobile UI"
                />
                <meta
                    property="og:title"
                    content="React Bottom Navigation Components - Modern Navigation Showcase"
                />
                <meta
                    property="og:description"
                    content="Collection of React bottom navigation components with various styles and interactions"
                />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="React Bottom Navigation Components - Modern Navigation Showcase"
                />
                <meta
                    name="twitter:description"
                    content="Explore our collection of React bottom navigation components"
                />
            </Head>
            <main
                className="bottom-navigation-showcase"
                role="main"
                aria-label="Bottom Navigation Components Showcase"
            >
                <h1 className="sr-only">React Bottom Navigation Components Showcase</h1>
                <div className="space-y-8">
                    <section aria-labelledby="basic-nav-title">
                        <h2
                            id="basic-nav-title"
                            className="text-lg font-semibold mb-4"
                        >
                            Basic Bottom Navigation
                        </h2>
                        <ComponentPreview
                            title="Default Navigation with Icons and Labels"
                            description="Standard bottom navigation with icons and text labels"
                            component={BasicBottomNav}
                            code={`<!-- Basic Bottom Navigation -->
<div class="fixed bottom-0 left-0 z-50 w-full h-16 bg-white/95 border-t border-gray-100 dark:bg-gray-900/95 dark:border-gray-800">
    <div class="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        <a
            href="#home"
            class="inline-flex flex-col items-center justify-center px-5 border-gray-100 border-x hover:bg-gray-50/50 dark:hover:bg-gray-800/50 group dark:border-gray-800 text-gray-700 dark:text-gray-300"
        >
            <svg class="w-5 h-5 mb-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span class="text-sm">Home</span>
        </a>
        <a
            href="#wallet"
            class="inline-flex flex-col items-center justify-center px-5 border-e border-gray-100 hover:bg-gray-50/50 dark:hover:bg-gray-800/50 group dark:border-gray-800 text-gray-500 dark:text-gray-400"
        >
            <svg class="w-5 h-5 mb-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            <span class="text-sm">Wallet</span>
        </a>
        <a
            href="#settings"
            class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50/50 dark:hover:bg-gray-800/50 group text-gray-500 dark:text-gray-400"
        >
            <svg class="w-5 h-5 mb-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span class="text-sm">Settings</span>
        </a>
        <a
            href="#profile"
            class="inline-flex flex-col items-center justify-center px-5 border-gray-100 hover:bg-gray-50/50 dark:hover:bg-gray-800/50 group border-x dark:border-gray-800 text-gray-500 dark:text-gray-400"
        >
            <svg class="w-5 h-5 mb-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span class="text-sm">Profile</span>
        </a>
    </div>
</div>`}
                            sizes={["default", "full"]}
                        />
                    </section>

                    <section aria-labelledby="gradient-nav-title">
                        <h2
                            id="gradient-nav-title"
                            className="text-lg font-semibold mb-4"
                        >
                            Gradient Bottom Navigation
                        </h2>
                        <ComponentPreview
                            title="Gradient Background Navigation"
                            description="Bottom navigation with gradient background and hover effects"
                            component={GradientBottomNav}
                            code={`<!-- Gradient Bottom Navigation -->
<div class="fixed bottom-0 left-0 z-50 w-full h-16 bg-gradient-to-r from-gray-900 to-gray-800">
    <div class="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        <a
            href="#home"
            class="inline-flex flex-col items-center justify-center px-5 hover:bg-white/5 group text-gray-300"
        >
            <svg class="w-5 h-5 mb-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span class="text-sm">Home</span>
        </a>
        <a
            href="#wallet"
            class="inline-flex flex-col items-center justify-center px-5 hover:bg-white/5 group text-gray-400"
        >
            <svg class="w-5 h-5 mb-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            <span class="text-sm">Wallet</span>
        </a>
        <a
            href="#settings"
            class="inline-flex flex-col items-center justify-center px-5 hover:bg-white/5 group text-gray-400"
        >
            <svg class="w-5 h-5 mb-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span class="text-sm">Settings</span>
        </a>
        <a
            href="#profile"
            class="inline-flex flex-col items-center justify-center px-5 hover:bg-white/5 group text-gray-400"
        >
            <svg class="w-5 h-5 mb-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span class="text-sm">Profile</span>
        </a>
    </div>
</div>`}
                            sizes={["default", "full"]}
                        />
                    </section>

                    <section aria-labelledby="glass-nav-title">
                        <h2
                            id="glass-nav-title"
                            className="text-lg font-semibold mb-4"
                        >
                            Glass Effect Navigation
                        </h2>
                        <ComponentPreview
                            title="Glassmorphism Bottom Navigation"
                            description="Bottom navigation with glass effect and backdrop blur"
                            component={GlassBottomNav}
                            code={`<!-- Glass Effect Bottom Navigation -->
<div class="fixed bottom-0 left-0 z-50 w-full h-16 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border-t border-gray-200/30 dark:border-gray-800/30">
    <div class="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        <a
            href="#home"
            class="inline-flex flex-col items-center justify-center px-5 hover:bg-white/50 dark:hover:bg-gray-800/50 group text-gray-700 dark:text-gray-300"
        >
            <svg class="w-5 h-5 mb-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span class="text-sm">Home</span>
        </a>
        <a
            href="#wallet"
            class="inline-flex flex-col items-center justify-center px-5 hover:bg-white/50 dark:hover:bg-gray-800/50 group text-gray-500 dark:text-gray-400"
        >
            <svg class="w-5 h-5 mb-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            <span class="text-sm">Wallet</span>
        </a>
        <a
            href="#settings"
            class="inline-flex flex-col items-center justify-center px-5 hover:bg-white/50 dark:hover:bg-gray-800/50 group text-gray-500 dark:text-gray-400"
        >
            <svg class="w-5 h-5 mb-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span class="text-sm">Settings</span>
        </a>
        <a
            href="#profile"
            class="inline-flex flex-col items-center justify-center px-5 hover:bg-white/50 dark:hover:bg-gray-800/50 group text-gray-500 dark:text-gray-400"
        >
            <svg class="w-5 h-5 mb-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span class="text-sm">Profile</span>
        </a>
    </div>
</div>`}
                            sizes={["default", "full"]}
                        />
                    </section>

                    <section aria-labelledby="compact-nav-title">
                        <h2
                            id="compact-nav-title"
                            className="text-lg font-semibold mb-4"
                        >
                            Compact Bottom Navigation
                        </h2>
                        <ComponentPreview
                            title="Compact Navigation with Center Action"
                            description="Compact bottom navigation with a prominent center action button"
                            component={CompactBottomNav}
                            code={`<!-- Compact Bottom Navigation -->
<div class="fixed bottom-0 left-0 z-50 w-full h-14 bg-white/95 border-t border-gray-100 dark:bg-gray-900/95 dark:border-gray-800">
    <div class="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
        <a
            href="#home"
            class="inline-flex flex-col items-center justify-center px-3 hover:bg-gray-50/50 dark:hover:bg-gray-800/50 group text-gray-700 dark:text-gray-300"
        >
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        </a>
        <a
            href="#wallet"
            class="inline-flex flex-col items-center justify-center px-3 hover:bg-gray-50/50 dark:hover:bg-gray-800/50 group text-gray-500 dark:text-gray-400"
        >
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
        </a>
        <a
            href="#add"
            class="inline-flex items-center justify-center w-10 h-10 mx-auto -mt-4 bg-gray-900 dark:bg-gray-100 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 group"
        >
            <svg class="w-6 h-6 text-white dark:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v16m8-8H4" />
            </svg>
        </a>
        <a
            href="#settings"
            class="inline-flex flex-col items-center justify-center px-3 hover:bg-gray-50/50 dark:hover:bg-gray-800/50 group text-gray-500 dark:text-gray-400"
        >
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        </a>
        <a
            href="#profile"
            class="inline-flex flex-col items-center justify-center px-3 hover:bg-gray-50/50 dark:hover:bg-gray-800/50 group text-gray-500 dark:text-gray-400"
        >
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
        </a>
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