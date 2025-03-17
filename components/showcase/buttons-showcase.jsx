"use client";

import { motion } from "framer-motion";
import ComponentPreview from "../ui/ComponentPreview";

// Additional SVG Icons
export const icons = {
    download: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>,
    arrowRight: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>,
    plus: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>,
    trash: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>,
    check: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>,
    edit: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>,
    settings: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>,
    share: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>,
    search: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>,
    notification: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
};

// Basic Buttons with more variants
const BasicButtons = () => (
    <div className="flex flex-wrap gap-4">
        <button className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-medium transition-colors">Primary</button>
        <button className="px-4 py-2 rounded-lg border-2 border-purple-500 text-purple-400 dark:text-purple-300 hover:bg-purple-500/20 dark:hover:bg-purple-400/20 font-medium transition-colors">Secondary</button>
        <button className="px-4 py-2 rounded-lg text-white hover:bg-white/10 dark:hover:bg-white/5 font-medium transition-colors">Ghost</button>
        <button className="px-4 py-2 text-purple-400 dark:text-purple-300 hover:underline font-medium">Link</button>
        <button className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white font-medium transition-colors">Danger</button>
        <button className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-medium transition-colors">Success</button>
        <button className="px-4 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-400 dark:hover:bg-yellow-500 text-black dark:text-black font-medium transition-colors">Warning</button>
        <button className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium transition-colors">Info</button>
        <button className="px-4 py-2 rounded-lg bg-gray-600 hover:bg-gray-700 dark:bg-gray-500 dark:hover:bg-gray-600 text-white font-medium transition-colors">Neutral</button>
        <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 dark:from-purple-400 dark:to-pink-400 dark:hover:from-purple-500 dark:hover:to-pink-500 text-white font-medium transition-colors">Gradient</button>
    </div>
);

// Button Sizes with more options
const ButtonSizes = () => (
    <div className="flex flex-wrap items-center gap-4">
        <button className="px-2 py-0.5 text-xs rounded bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-medium transition-colors">Tiny</button>
        <button className="px-3 py-1 text-sm rounded-lg bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-medium transition-colors">Small</button>
        <button className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-medium transition-colors">Default</button>
        <button className="px-6 py-3 text-lg rounded-lg bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-medium transition-colors">Large</button>
        <button className="px-8 py-4 text-xl rounded-lg bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-medium transition-colors">XL</button>
        <button className="w-full px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-medium transition-colors">Full Width</button>
        <button className="w-32 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-medium transition-colors">Fixed Width</button>
        <button className="h-12 aspect-square rounded-lg bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-medium transition-colors">Square</button>
        <button className="h-12 aspect-square rounded-full bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-medium transition-colors">Round</button>
        <button className="px-8 py-3 rounded-full bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-medium transition-colors">Pill</button>
    </div>
);

// Icon Buttons with more variations
const IconButtons = () => (
    <div className="flex flex-wrap gap-4">
        {Object.entries(icons).map(([name, icon]) => (
            <button key={name} className="p-2 rounded-lg bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white transition-colors">
                {icon}
            </button>
        ))}
        {Object.entries(icons).map(([name, icon]) => (
            <button key={`text-${name}`} className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-medium transition-colors inline-flex items-center gap-2">
                {icon}
                {name.charAt(0).toUpperCase() + name.slice(1)}
            </button>
        ))}
    </div>
);

// Loading States with more variations
const LoadingButtons = () => (
    <div className="flex flex-wrap gap-4">
        <button className="px-4 py-2 rounded-lg bg-purple-600 dark:bg-purple-500 text-white font-medium transition-colors inline-flex items-center opacity-70 cursor-not-allowed" disabled>
            <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
            Loading...
        </button>
        <button className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-medium transition-colors inline-flex items-center">
            <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
            Processing
        </button>
        <button className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-medium transition-colors inline-flex items-center">
            <span className="mr-2">{icons.check}</span>
            Completed
        </button>
        <button className="relative px-4 py-2 rounded-lg bg-purple-600 dark:bg-purple-500 text-white font-medium overflow-hidden">
            <span className="relative z-10">Uploading 50%</span>
            <div className="absolute inset-0 bg-purple-800 dark:bg-purple-700 transition-all duration-300" style={{ width: '50%' }}></div>
        </button>
        <button className="px-4 py-2 rounded-lg bg-purple-600 dark:bg-purple-500 text-white font-medium transition-all inline-flex items-center">
            <div className="mr-2 h-4 w-4">
                <div className="h-1 w-1 bg-white rounded-full animate-bounce"></div>
            </div>
            Connecting
        </button>
        <button className="px-4 py-2 rounded-lg bg-yellow-500 dark:bg-yellow-400 text-black font-medium transition-colors inline-flex items-center">
            <div className="mr-2 h-4 w-4 animate-pulse bg-black rounded-full"></div>
            Waiting
        </button>
        <button className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium transition-colors inline-flex items-center">
            <div className="mr-2 h-4 w-4 animate-spin">
                {icons.settings}
            </div>
            Configuring
        </button>
        <button className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-medium transition-colors inline-flex items-center gap-2">
            <span className="animate-ping">{icons.notification}</span>
            Notifying
        </button>
        <button className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white font-medium transition-colors inline-flex items-center">
            <div className="mr-2 h-4 w-4 animate-spin">
                {icons.search}
            </div>
            Searching
        </button>
        <button className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-medium transition-colors inline-flex items-center">
            <div className="mr-2 h-4 w-4 animate-bounce">
                {icons.download}
            </div>
            Downloading
        </button>
    </div>
);

// New: Special Effect Buttons
const SpecialButtons = () => (
    <div className="flex flex-wrap gap-4">
        <button className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-medium transition-all hover:scale-105">
            Scale on Hover
        </button>
        <button className="px-4 py-2 rounded-lg bg-purple-600 dark:bg-purple-500 text-white font-medium transition-all hover:rotate-3">
            Rotate on Hover
        </button>
        <button className="relative px-4 py-2 rounded-lg bg-purple-600 dark:bg-purple-500 text-white font-medium overflow-hidden group">
            <span className="relative z-10">Slide Up</span>
            <div className="absolute inset-0 bg-purple-800 dark:bg-purple-700 translate-y-full transition-transform group-hover:translate-y-0"></div>
        </button>
        <button className="relative px-4 py-2 rounded-lg text-white font-medium overflow-hidden group">
            <span className="relative z-10">Gradient Shift</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-500 dark:to-pink-500 group-hover:from-pink-600 group-hover:to-purple-600 dark:group-hover:from-pink-500 dark:group-hover:to-purple-500 transition-all"></div>
        </button>
        <button className="px-4 py-2 rounded-lg border-2 border-purple-500 dark:border-purple-400 text-purple-500 dark:text-purple-400 hover:bg-purple-500 dark:hover:bg-purple-400 hover:text-white font-medium transition-colors">
            Color Swap
        </button>
        <button className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 shadow-[0_0_0_3px_#9333ea_inset] dark:shadow-[0_0_0_3px_#a855f7_inset] hover:shadow-[0_0_0_3px_#9333ea] dark:hover:shadow-[0_0_0_3px_#a855f7] hover:bg-transparent font-medium transition-all">
            Outline Shift
        </button>
        <button className="group relative px-4 py-2 font-medium text-white">
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-purple-600 dark:bg-purple-500 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-black dark:bg-gray-800 border-2 border-purple-600 dark:border-purple-500 group-hover:bg-purple-600 dark:group-hover:bg-purple-500"></span>
            <span className="relative">Offset</span>
        </button>
        <button className="relative px-4 py-2 rounded-lg bg-purple-600 dark:bg-purple-500 text-white font-medium overflow-hidden group">
            <span className="relative z-10">Shine Effect</span>
            <div className="absolute inset-0 transform translate-x-full transition-transform group-hover:-translate-x-full duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </button>
        <button className="px-4 py-2 rounded-lg bg-purple-600 dark:bg-purple-500 text-white font-medium transition-shadow hover:shadow-lg hover:shadow-purple-500/50 dark:hover:shadow-purple-400/50">
            Glow Effect
        </button>
        <button className="relative px-4 py-2 rounded-lg bg-purple-600 dark:bg-purple-500 text-white font-medium group">
            <span className="absolute inset-0 rounded-lg opacity-25 bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 dark:from-purple-500 dark:via-purple-400 dark:to-pink-400 blur transition-all group-hover:opacity-100 group-hover:blur-xl"></span>
            <span className="relative">Blur Glow</span>
        </button>
    </div>
);

// Additional Basic Buttons
const AdditionalBasicButtons = () => (
    <div className="flex flex-wrap gap-4">
        <button className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors">Indigo</button>
        <button className="px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-medium transition-colors">Teal</button>
        <button className="px-4 py-2 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-medium transition-colors">Orange</button>
        <button className="px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-medium transition-colors">Rose</button>
        <button className="px-4 py-2 rounded-lg bg-lime-600 hover:bg-lime-700 text-white font-medium transition-colors">Lime</button>
        <button className="px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white font-medium transition-colors">Cyan</button>
        <button className="px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-medium transition-colors">Amber</button>
        <button className="px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-700 text-white font-medium transition-colors">Violet</button>
        <button className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium transition-colors">Emerald</button>
        <button className="px-4 py-2 rounded-lg bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-medium transition-colors">Fuchsia</button>
    </div>
);

// Additional Size Variations
const AdditionalSizeButtons = () => (
    <div className="flex flex-wrap items-center gap-4">
        <button className="px-2 py-1 text-[10px] rounded bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors">2XS</button>
        <button className="px-16 py-8 text-2xl rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors">2XL</button>
        <button className="w-48 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors">12rem Width</button>
        <button className="w-64 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors">16rem Width</button>
        <button className="h-24 aspect-square rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors">Large Square</button>
        <button className="h-24 aspect-square rounded-[2rem] bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors">Large Round</button>
        <button className="px-12 py-6 rounded-[2rem] bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors">Large Pill</button>
        <button className="w-full h-24 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors">Full Block</button>
        <button className="px-4 py-2 w-1/2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors">Half Width</button>
        <button className="px-4 py-2 w-1/3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors">Third Width</button>
    </div>
);

// Additional Icon Variations
const AdditionalIconButtons = () => (
    <div className="flex flex-wrap gap-4">
        <button className="p-2 rounded-lg border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
        </button>
        <button className="p-2 rounded-lg border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
            </svg>
        </button>
        <button className="p-2 rounded-lg border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
        </button>
        <button className="p-2 rounded-lg border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="3 6 5 6 21 6" />
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            </svg>
        </button>
        <button className="p-2 rounded-lg border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
            </svg>
        </button>
        <button className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
        </button>
        <button className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
        </button>
        <button className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
        </button>
        <button className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
        </button>
        <button className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
        </button>
    </div>
);

// Additional Loading States
const AdditionalLoadingButtons = () => (
    <div className="flex flex-wrap gap-4">
        <button className="px-4 py-2 rounded-lg bg-purple-600 text-white font-medium transition-colors inline-flex items-center">
            <div className="mr-2 h-4 w-4 animate-[spin_3s_linear_infinite]">
                <div className="h-2 w-2 bg-white rounded-full"></div>
            </div>
            Slow Spin
        </button>
        <button className="px-4 py-2 rounded-lg bg-purple-600 text-white font-medium transition-colors inline-flex items-center">
            <div className="mr-2 flex space-x-1">
                <div className="h-2 w-2 bg-white rounded-full animate-bounce"></div>
                <div className="h-2 w-2 bg-white rounded-full animate-bounce delay-100"></div>
                <div className="h-2 w-2 bg-white rounded-full animate-bounce delay-200"></div>
            </div>
            Typing
        </button>
        <button className="relative px-4 py-2 rounded-lg bg-purple-600 text-white font-medium overflow-hidden">
            <span className="relative z-10">Syncing 75%</span>
            <div className="absolute inset-0 bg-purple-800">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]" style={{ width: '75%' }}></div>
            </div>
        </button>
        <button className="px-4 py-2 rounded-lg bg-purple-600 text-white font-medium transition-colors inline-flex items-center">
            <div className="mr-2 relative h-4 w-4">
                <div className="absolute inset-0 rounded-full border-2 border-white animate-ping"></div>
                <div className="absolute inset-0 rounded-full border-2 border-white"></div>
            </div>
            Pinging
        </button>
        <button className="px-4 py-2 rounded-lg bg-purple-600 text-white font-medium transition-colors inline-flex items-center">
            <div className="mr-2 h-4 w-4 border-2 border-white rounded animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
            Heartbeat
        </button>
        <button className="px-4 py-2 rounded-lg bg-purple-600 text-white font-medium transition-colors inline-flex items-center">
            <div className="mr-2 flex space-x-1">
                <div className="h-4 w-1 bg-white animate-[wave_1s_ease-in-out_infinite]"></div>
                <div className="h-4 w-1 bg-white animate-[wave_1s_ease-in-out_0.1s_infinite]"></div>
                <div className="h-4 w-1 bg-white animate-[wave_1s_ease-in-out_0.2s_infinite]"></div>
            </div>
            Processing
        </button>
        <button className="px-4 py-2 rounded-lg bg-purple-600 text-white font-medium transition-colors inline-flex items-center">
            <div className="mr-2 h-4 w-4 rounded-full border-2 border-white border-l-transparent animate-spin"></div>
            Buffering
        </button>
        <button className="px-4 py-2 rounded-lg bg-purple-600 text-white font-medium transition-colors inline-flex items-center">
            <div className="mr-2 grid grid-cols-2 gap-1">
                <div className="h-1.5 w-1.5 bg-white rounded-full animate-pulse"></div>
                <div className="h-1.5 w-1.5 bg-white rounded-full animate-pulse delay-100"></div>
                <div className="h-1.5 w-1.5 bg-white rounded-full animate-pulse delay-200"></div>
                <div className="h-1.5 w-1.5 bg-white rounded-full animate-pulse delay-300"></div>
            </div>
            Computing
        </button>
        <button className="px-4 py-2 rounded-lg bg-purple-600 text-white font-medium transition-colors inline-flex items-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing
        </button>
        <button className="px-4 py-2 rounded-lg bg-purple-600 text-white font-medium transition-colors inline-flex items-center">
            <div className="mr-2 relative h-4 w-4">
                <div className="absolute inset-0 rounded-full border-2 border-white animate-ping"></div>
                <div className="absolute inset-0 rounded-full border-2 border-white"></div>
            </div>
            Scanning
        </button>
    </div>
);

// Additional Special Effects
const AdditionalSpecialButtons = () => (
    <div className="flex flex-wrap gap-4">
        <button className="px-4 py-2 rounded-lg bg-purple-600 text-white font-medium transition-all hover:skew-x-12">
            Skew Effect
        </button>
        <button className="relative px-4 py-2 rounded-lg bg-purple-600 text-white font-medium group">
            <span className="relative z-10">3D Push</span>
            <span className="absolute inset-0 rounded-lg bg-purple-800 transition-transform group-hover:translate-x-1 group-hover:translate-y-1"></span>
        </button>
        <button className="px-4 py-2 rounded-lg bg-purple-600 text-white font-medium transition-all hover:[transform:perspective(100px)_rotateX(10deg)]">
            Perspective Tilt
        </button>
        <button className="relative px-4 py-2 rounded-lg text-white font-medium overflow-hidden">
            <span className="relative z-10">Rainbow Border</span>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 animate-[rainbow_2s_linear_infinite]"></div>
            <div className="absolute inset-[2px] rounded-lg bg-purple-600"></div>
        </button>
        <button className="px-4 py-2 rounded-lg bg-purple-600 text-white font-medium transition-all hover:animate-[shake_0.5s_ease-in-out_infinite]">
            Shake Effect
        </button>
        <button className="relative px-4 py-2 rounded-lg bg-purple-600 text-white font-medium group overflow-hidden">
            <span className="relative z-10">Ripple</span>
            <div className="absolute inset-0 scale-0 rounded-full bg-white/30 group-hover:animate-ripple"></div>
        </button>
        <button className="relative px-4 py-2 rounded-lg bg-purple-600 text-white font-medium transition-all hover:[text-shadow:0_0_10px_white]">
            Text Glow
        </button>
        <button className="relative px-4 py-2 rounded-lg bg-purple-600 text-white font-medium group">
            <span className="relative z-10">Neon Pulse</span>
            <div className="absolute inset-0 rounded-lg opacity-0 bg-purple-400 mix-blend-overlay group-hover:animate-pulse"></div>
        </button>
        <button className="relative px-4 py-2 rounded-lg bg-purple-600 text-white font-medium transition-all hover:tracking-[0.2em]">
            Letter Spacing
        </button>
        <button className="relative px-4 py-2 rounded-lg bg-purple-600 text-white font-medium group">
            <span className="relative z-10 group-hover:animate-[bounce_1s_infinite]">Bounce Text</span>
        </button>
    </div>
);

export default function ButtonsShowcase() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
        >
            <ComponentPreview
                title="Basic Buttons"
                description="A collection of button variants for different purposes"
                component={BasicButtons}
                code={`// Primary Button
<button className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-medium transition-colors">
                            Primary
</button>

// Secondary Button
<button className="px-4 py-2 rounded-lg border-2 border-purple-500 text-purple-400 dark:text-purple-300 hover:bg-purple-500/20 dark:hover:bg-purple-400/20 font-medium transition-colors">
                            Secondary
</button>

// Ghost Button
<button className="px-4 py-2 rounded-lg text-white hover:bg-white/10 dark:hover:bg-white/5 font-medium transition-colors">
                            Ghost
</button>

// Link Button
<button className="px-4 py-2 text-purple-400 dark:text-purple-300 hover:underline font-medium">
  Link
</button>

// Danger Button
<button className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white font-medium transition-colors">
                            Danger
</button>

// Success Button
<button className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-medium transition-colors">
                            Success
</button>

// Warning Button
<button className="px-4 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-400 dark:hover:bg-yellow-500 text-black dark:text-black font-medium transition-colors">
  Warning
</button>

// Info Button
<button className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium transition-colors">
  Info
</button>

// Neutral Button
<button className="px-4 py-2 rounded-lg bg-gray-600 hover:bg-gray-700 dark:bg-gray-500 dark:hover:bg-gray-600 text-white font-medium transition-colors">
  Neutral
</button>

// Gradient Button
<button className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 dark:from-purple-400 dark:to-pink-400 dark:hover:from-purple-500 dark:hover:to-pink-500 text-white font-medium transition-colors">
  Gradient
</button>`}
                sizes={["sm", "default", "lg", "full"]}
            />

            <ComponentPreview
                title="Button Sizes"
                description="Different button sizes and shapes for various contexts"
                component={ButtonSizes}
                code={`// Tiny Button
<button className="px-2 py-0.5 text-xs rounded bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-medium transition-colors">
  Tiny
</button>

// Small Button
<button className="px-3 py-1 text-sm rounded-lg bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-medium transition-colors">
                            Small
</button>

// Default Button
<button className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-medium transition-colors">
                            Default
</button>

// Large Button
<button className="px-6 py-3 text-lg rounded-lg bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-medium transition-colors">
                            Large
</button>

// Extra Large Button
<button className="px-8 py-4 text-xl rounded-lg bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-medium transition-colors">
  XL
</button>

// Full Width Button
<button className="w-full px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-medium transition-colors">
  Full Width
</button>

// Fixed Width Button
<button className="w-32 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-medium transition-colors">
  Fixed Width
</button>

// Square Button
<button className="h-12 aspect-square rounded-lg bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-medium transition-colors">
  Square
</button>

// Round Button
<button className="h-12 aspect-square rounded-full bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-medium transition-colors">
  Round
</button>

// Pill Button
<button className="px-8 py-3 rounded-full bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-medium transition-colors">
  Pill
</button>`}
                sizes={["default", "full"]}
            />

            <ComponentPreview
                title="Icon Buttons"
                description="Buttons with icons for enhanced visual communication"
                component={IconButtons}
                code={`// Icon-only buttons
<button className="p-2 rounded-lg bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white transition-colors">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
</button>

<button className="p-2 rounded-lg bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white transition-colors">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
</button>

<button className="p-2 rounded-lg bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white transition-colors">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
</button>

// Text with icon buttons
<button className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-medium transition-colors inline-flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
  Download
</button>

<button className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-medium transition-colors inline-flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
  Continue
</button>

<button className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-medium transition-colors inline-flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
  Add New
</button>

// Outline icon button
<button className="p-2 rounded-lg border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-colors">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>
</button>

// Gradient icon button
<button className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-colors">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
</button>

// Icon with text and gradient
<button className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium transition-colors inline-flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
  Confirm
</button>

// Icon with outline and text
<button className="px-4 py-2 rounded-lg border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white font-medium transition-colors inline-flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>
  Delete
</button>`}
                sizes={["default", "full"]}
            />

            <ComponentPreview
                title="Loading States"
                description="Various loading and state indicators for buttons"
                component={LoadingButtons}
                code={`// Disabled loading state
<button className="px-4 py-2 rounded-lg bg-purple-600 dark:bg-purple-500 text-white font-medium transition-colors inline-flex items-center opacity-70 cursor-not-allowed" disabled>
  <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
  Loading...
</button>

// Processing with spinner
<button className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-medium transition-colors inline-flex items-center">
  <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
  Processing
</button>

// Completed state
<button className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-medium transition-colors inline-flex items-center">
  <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
  Completed
</button>

// Progress bar
<button className="relative px-4 py-2 rounded-lg bg-purple-600 dark:bg-purple-500 text-white font-medium overflow-hidden">
  <span className="relative z-10">Uploading 50%</span>
  <div className="absolute inset-0 bg-purple-800 dark:bg-purple-700 transition-all duration-300" style={{ width: '50%' }}></div>
</button>

// Bouncing dot
<button className="px-4 py-2 rounded-lg bg-purple-600 dark:bg-purple-500 text-white font-medium transition-all inline-flex items-center">
  <div className="mr-2 h-4 w-4">
    <div className="h-1 w-1 bg-white rounded-full animate-bounce"></div>
  </div>
  Connecting
</button>

// Pulsing dot
<button className="px-4 py-2 rounded-lg bg-yellow-500 dark:bg-yellow-400 text-black font-medium transition-colors inline-flex items-center">
  <div className="mr-2 h-4 w-4 animate-pulse bg-black rounded-full"></div>
  Waiting
</button>

// Spinning gear
<button className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium transition-colors inline-flex items-center">
  <div className="mr-2 h-4 w-4 animate-spin">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  </div>
  Configuring
</button>

// Pinging notification
<button className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-medium transition-colors inline-flex items-center gap-2">
  <span className="animate-ping">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  </span>
  Notifying
</button>

// Spinning search
<button className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white font-medium transition-colors inline-flex items-center">
  <div className="mr-2 h-4 w-4 animate-spin">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  </div>
  Searching
</button>

// Bouncing download
<button className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-medium transition-colors inline-flex items-center">
  <div className="mr-2 h-4 w-4 animate-bounce">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  </div>
  Downloading
</button>`}
                sizes={["default", "full"]}
            />

            <ComponentPreview
                title="Special Effects"
                description="Buttons with unique hover and interaction effects"
                component={SpecialButtons}
                code={`// Scale effect
<button className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-medium transition-all hover:scale-105">
  Scale on Hover
</button>

// Rotate effect
<button className="px-4 py-2 rounded-lg bg-purple-600 dark:bg-purple-500 text-white font-medium transition-all hover:rotate-3">
  Rotate on Hover
</button>

// Slide up overlay
<button className="relative px-4 py-2 rounded-lg bg-purple-600 dark:bg-purple-500 text-white font-medium overflow-hidden group">
  <span className="relative z-10">Slide Up</span>
  <div className="absolute inset-0 bg-purple-800 dark:bg-purple-700 translate-y-full transition-transform group-hover:translate-y-0"></div>
</button>

// Gradient shift
<button className="relative px-4 py-2 rounded-lg text-white font-medium overflow-hidden group">
  <span className="relative z-10">Gradient Shift</span>
  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-500 dark:to-pink-500 group-hover:from-pink-600 group-hover:to-purple-600 dark:group-hover:from-pink-500 dark:group-hover:to-purple-500 transition-all"></div>
</button>

// Color swap
<button className="px-4 py-2 rounded-lg border-2 border-purple-500 dark:border-purple-400 text-purple-500 dark:text-purple-400 hover:bg-purple-500 dark:hover:bg-purple-400 hover:text-white font-medium transition-colors">
  Color Swap
</button>

// Outline shift
<button className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 shadow-[0_0_0_3px_#9333ea_inset] dark:shadow-[0_0_0_3px_#a855f7_inset] hover:shadow-[0_0_0_3px_#9333ea] dark:hover:shadow-[0_0_0_3px_#a855f7] hover:bg-transparent font-medium transition-all">
  Outline Shift
</button>

// 3D offset
<button className="group relative px-4 py-2 font-medium text-white">
  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-purple-600 dark:bg-purple-500 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
  <span className="absolute inset-0 w-full h-full bg-black dark:bg-gray-800 border-2 border-purple-600 dark:border-purple-500 group-hover:bg-purple-600 dark:group-hover:bg-purple-500"></span>
  <span className="relative">Offset</span>
</button>

// Shine effect
<button className="relative px-4 py-2 rounded-lg bg-purple-600 dark:bg-purple-500 text-white font-medium overflow-hidden group">
  <span className="relative z-10">Shine Effect</span>
  <div className="absolute inset-0 transform translate-x-full transition-transform group-hover:-translate-x-full duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
</button>

// Glow effect
<button className="px-4 py-2 rounded-lg bg-purple-600 dark:bg-purple-500 text-white font-medium transition-shadow hover:shadow-lg hover:shadow-purple-500/50 dark:hover:shadow-purple-400/50">
  Glow Effect
</button>

// Blur glow
<button className="relative px-4 py-2 rounded-lg bg-purple-600 dark:bg-purple-500 text-white font-medium group">
  <span className="absolute inset-0 rounded-lg opacity-25 bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 dark:from-purple-500 dark:via-purple-400 dark:to-pink-400 blur transition-all group-hover:opacity-100 group-hover:blur-xl"></span>
  <span className="relative">Blur Glow</span>
</button>`}
                sizes={["default", "full"]}
            />

            <ComponentPreview
                title="Additional Basic Buttons"
                description="Extended collection of button colors and styles"
                component={AdditionalBasicButtons}
                code={`// Additional color variations
<button className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors">
  Indigo
</button>

<button className="px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-medium transition-colors">
  Teal
</button>

<button className="px-4 py-2 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-medium transition-colors">
  Orange
</button>

<button className="px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-medium transition-colors">
  Rose
</button>

<button className="px-4 py-2 rounded-lg bg-lime-600 hover:bg-lime-700 text-white font-medium transition-colors">
  Lime
</button>

<button className="px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white font-medium transition-colors">
  Cyan
</button>

<button className="px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-medium transition-colors">
  Amber
</button>

<button className="px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-700 text-white font-medium transition-colors">
  Violet
</button>

<button className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium transition-colors">
  Emerald
</button>

<button className="px-4 py-2 rounded-lg bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-medium transition-colors">
  Fuchsia
</button>`}
                sizes={["default", "full"]}
            />

            <ComponentPreview
                title="Additional Size Variations"
                description="Extended size and dimension variations"
                component={AdditionalSizeButtons}
                code={`// Extended size variations
<button className="px-2 py-1 text-[10px] rounded bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors">
  2XS
</button>

<button className="px-16 py-8 text-2xl rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors">
  2XL
</button>

<button className="w-48 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors">
  12rem Width
</button>

<button className="w-64 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors">
  16rem Width
</button>

<button className="h-24 aspect-square rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors">
  Large Square
</button>

<button className="h-24 aspect-square rounded-[2rem] bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors">
  Large Round
</button>

<button className="px-12 py-6 rounded-[2rem] bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors">
  Large Pill
</button>

<button className="w-full h-24 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors">
  Full Block
</button>

<button className="px-4 py-2 w-1/2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors">
  Half Width
</button>

<button className="px-4 py-2 w-1/3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors">
  Third Width
</button>`}
                sizes={["default", "full"]}
            />

            <ComponentPreview
                title="Additional Loading States"
                description="Extended loading animations and states"
                component={AdditionalLoadingButtons}
                code={`// Advanced loading animations
<button className="px-4 py-2 rounded-lg bg-purple-600 text-white font-medium transition-colors inline-flex items-center">
  <div className="mr-2 h-4 w-4 animate-[spin_3s_linear_infinite]">
    <div className="h-2 w-2 bg-white rounded-full"></div>
  </div>
  Slow Spin
</button>

<button className="px-4 py-2 rounded-lg bg-purple-600 text-white font-medium transition-colors inline-flex items-center">
  <div className="mr-2 flex space-x-1">
    <div className="h-2 w-2 bg-white rounded-full animate-bounce"></div>
    <div className="h-2 w-2 bg-white rounded-full animate-bounce delay-100"></div>
    <div className="h-2 w-2 bg-white rounded-full animate-bounce delay-200"></div>
  </div>
  Typing
</button>

<button className="relative px-4 py-2 rounded-lg bg-purple-600 text-white font-medium overflow-hidden">
  <span className="relative z-10">Syncing 75%</span>
  <div className="absolute inset-0 bg-purple-800">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]" style={{ width: '75%' }}></div>
  </div>
</button>

<button className="px-4 py-2 rounded-lg bg-purple-600 text-white font-medium transition-colors inline-flex items-center">
  <div className="mr-2 relative h-4 w-4">
    <div className="absolute inset-0 rounded-full border-2 border-white animate-ping"></div>
    <div className="absolute inset-0 rounded-full border-2 border-white"></div>
  </div>
  Pinging
</button>

<button className="px-4 py-2 rounded-lg bg-purple-600 text-white font-medium transition-colors inline-flex items-center">
  <div className="mr-2 h-4 w-4 border-2 border-white rounded animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
  Heartbeat
</button>

<button className="px-4 py-2 rounded-lg bg-purple-600 text-white font-medium transition-colors inline-flex items-center">
  <div className="mr-2 flex space-x-1">
    <div className="h-4 w-1 bg-white animate-[wave_1s_ease-in-out_infinite]"></div>
    <div className="h-4 w-1 bg-white animate-[wave_1s_ease-in-out_0.1s_infinite]"></div>
    <div className="h-4 w-1 bg-white animate-[wave_1s_ease-in-out_0.2s_infinite]"></div>
                    </div>
  Processing
</button>

<button className="px-4 py-2 rounded-lg bg-purple-600 text-white font-medium transition-colors inline-flex items-center">
  <div className="mr-2 h-4 w-4 rounded-full border-2 border-white border-l-transparent animate-spin"></div>
  Buffering
</button>

<button className="px-4 py-2 rounded-lg bg-purple-600 text-white font-medium transition-colors inline-flex items-center">
  <div className="mr-2 grid grid-cols-2 gap-1">
    <div className="h-1.5 w-1.5 bg-white rounded-full animate-pulse"></div>
    <div className="h-1.5 w-1.5 bg-white rounded-full animate-pulse delay-100"></div>
    <div className="h-1.5 w-1.5 bg-white rounded-full animate-pulse delay-200"></div>
    <div className="h-1.5 w-1.5 bg-white rounded-full animate-pulse delay-300"></div>
                </div>
  Computing
</button>

<button className="px-4 py-2 rounded-lg bg-purple-600 text-white font-medium transition-colors inline-flex items-center">
  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
  Processing
</button>

<button className="px-4 py-2 rounded-lg bg-purple-600 text-white font-medium transition-colors inline-flex items-center">
  <div className="mr-2 relative h-4 w-4">
    <div className="absolute inset-0 rounded-full border-2 border-white animate-ping"></div>
    <div className="absolute inset-0 rounded-full border-2 border-white"></div>
            </div>
  Scanning
</button>`}
                sizes={["default", "full"]}
            />

            <ComponentPreview
                title="Additional Special Effects"
                description="Extended collection of button effects and animations"
                component={AdditionalSpecialButtons}
                code={`// Advanced hover and interaction effects
<button className="px-4 py-2 rounded-lg bg-purple-600 text-white font-medium transition-all hover:skew-x-12">
  Skew Effect
</button>

<button className="relative px-4 py-2 rounded-lg bg-purple-600 text-white font-medium group">
  <span className="relative z-10">3D Push</span>
  <span className="absolute inset-0 rounded-lg bg-purple-800 transition-transform group-hover:translate-x-1 group-hover:translate-y-1"></span>
</button>

<button className="px-4 py-2 rounded-lg bg-purple-600 text-white font-medium transition-all hover:[transform:perspective(100px)_rotateX(10deg)]">
  Perspective Tilt
</button>

<button className="relative px-4 py-2 rounded-lg text-white font-medium overflow-hidden">
  <span className="relative z-10">Rainbow Border</span>
  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 animate-[rainbow_2s_linear_infinite]"></div>
  <div className="absolute inset-[2px] rounded-lg bg-purple-600"></div>
</button>

<button className="px-4 py-2 rounded-lg bg-purple-600 text-white font-medium transition-all hover:animate-[shake_0.5s_ease-in-out_infinite]">
  Shake Effect
</button>

<button className="relative px-4 py-2 rounded-lg bg-purple-600 text-white font-medium group overflow-hidden">
  <span className="relative z-10">Ripple</span>
  <div className="absolute inset-0 scale-0 rounded-full bg-white/30 group-hover:animate-ripple"></div>
</button>

<button className="relative px-4 py-2 rounded-lg bg-purple-600 text-white font-medium transition-all hover:[text-shadow:0_0_10px_white]">
  Text Glow
</button>

<button className="relative px-4 py-2 rounded-lg bg-purple-600 text-white font-medium group">
  <span className="relative z-10">Neon Pulse</span>
  <div className="absolute inset-0 rounded-lg opacity-0 bg-purple-400 mix-blend-overlay group-hover:animate-pulse"></div>
</button>

<button className="relative px-4 py-2 rounded-lg bg-purple-600 text-white font-medium transition-all hover:tracking-[0.2em]">
  Letter Spacing
</button>

<button className="relative px-4 py-2 rounded-lg bg-purple-600 text-white font-medium group">
  <span className="relative z-10 group-hover:animate-[bounce_1s_infinite]">Bounce Text</span>
</button>`}
                sizes={["default", "full"]}
            />

            <ComponentPreview
                title="Additional Icon Variations"
                description="Extended icon button styles and effects"
                component={AdditionalIconButtons}
                code={`// Outline style icon buttons
<button className="p-2 rounded-lg border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-colors">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
</button>

<button className="p-2 rounded-lg border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-colors">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
</button>

<button className="p-2 rounded-lg border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-colors">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
</button>

<button className="p-2 rounded-lg border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-colors">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>
</button>

<button className="p-2 rounded-lg border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-colors">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
</button>

// Gradient style icon buttons
<button className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-colors">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
</button>

<button className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-colors">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
</button>

<button className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-colors">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
</button>

<button className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-colors">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
</button>

<button className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-colors">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
</button>`}
                sizes={["default", "full"]}
            />
        </motion.div>
    );
}

