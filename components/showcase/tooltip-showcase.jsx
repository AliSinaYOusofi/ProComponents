import ComponentPreview from "../ui/ComponentPreview";
import Head from "next/head";

const BasicTooltips = () => {
    return (
        <div className="flex items-center justify-center gap-8">
            {/* Simple Tooltip */}
            <div className="group relative">
                <button className="px-5 py-2.5 text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 transition-colors">
                    Hover me
                </button>
                <div className="absolute z-10 -top-10 left-1/2 -translate-x-1/2 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 dark:bg-gray-700">
                    Simple tooltip
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45 dark:bg-gray-700"></div>
                </div>
            </div>

            {/* Colored Tooltip */}
            <div className="group relative">
                <button className="px-5 py-2.5 text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 transition-colors">
                    Colored
                </button>
                <div className="absolute z-10 -top-10 left-1/2 -translate-x-1/2 px-3 py-2 text-sm font-medium text-white bg-primary-500 rounded-lg shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    Colored tooltip
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary-500 rotate-45"></div>
                </div>
            </div>

            {/* Icon Tooltip */}
            <div className="group relative">
                <button className="p-2.5 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-700 transition-colors">
                    <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
                <div className="absolute z-10 -top-10 left-1/2 -translate-x-1/2 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap dark:bg-gray-700">
                    Information tooltip
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45 dark:bg-gray-700"></div>
                </div>
            </div>
        </div>
    );
};

const PositionedTooltips = () => {
    return (
        <div className="flex items-center justify-center gap-8">
            {/* Top Tooltip */}
            <div className="group relative">
                <button className="px-5 py-2.5 text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 transition-colors">
                    Tooltip top
                </button>
                <div className="absolute z-10 -top-10 left-1/2 -translate-x-1/2 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 dark:bg-gray-700">
                    Tooltip on top
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45 dark:bg-gray-700"></div>
                </div>
            </div>

            {/* Right Tooltip */}
            <div className="group relative">
                <button className="px-5 py-2.5 text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 transition-colors">
                    Tooltip right
                </button>
                <div className="absolute z-10 top-1/2 -translate-y-1/2 left-full ml-2 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 dark:bg-gray-700">
                    Tooltip on right
                    <div className="absolute top-1/2 -translate-y-1/2 -left-1 w-2 h-2 bg-gray-900 rotate-45 dark:bg-gray-700"></div>
                </div>
            </div>

            {/* Bottom Tooltip */}
            <div className="group relative">
                <button className="px-5 py-2.5 text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 transition-colors">
                    Tooltip bottom
                </button>
                <div className="absolute z-10 top-full mt-2 left-1/2 -translate-x-1/2 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 dark:bg-gray-700">
                    Tooltip on bottom
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45 dark:bg-gray-700"></div>
                </div>
            </div>

            {/* Left Tooltip */}
            <div className="group relative">
                <button className="px-5 py-2.5 text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 transition-colors">
                    Tooltip left
                </button>
                <div className="absolute z-10 top-1/2 -translate-y-1/2 right-full mr-2 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 dark:bg-gray-700">
                    Tooltip on left
                    <div className="absolute top-1/2 -translate-y-1/2 -right-1 w-2 h-2 bg-gray-900 rotate-45 dark:bg-gray-700"></div>
                </div>
            </div>
        </div>
    );
};

const StyledTooltips = () => {
    return (
        <div className="flex items-center justify-center gap-8">
            {/* Gradient Tooltip */}
            <div className="group relative">
                <button className="px-5 py-2.5 text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 transition-colors">
                    Gradient
                </button>
                <div className="absolute z-10 -top-10 left-1/2 -translate-x-1/2 px-3 py-2 text-sm font-medium text-white bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    Gradient tooltip
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary-600 rotate-45"></div>
                </div>
            </div>

            {/* Glass Tooltip */}
            <div className="group relative">
                <button className="px-5 py-2.5 text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 transition-colors">
                    Glass
                </button>
                <div className="absolute z-10 -top-10 left-1/2 -translate-x-1/2 px-3 py-2 text-sm font-medium text-white bg-white/10 backdrop-blur-md rounded-lg shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-white/20">
                    Glass effect tooltip
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white/10 backdrop-blur-md rotate-45 border-r border-b border-white/20"></div>
                </div>
            </div>

            {/* Custom Shape Tooltip */}
            <div className="group relative">
                <button className="px-5 py-2.5 text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 transition-colors">
                    Custom Shape
                </button>
                <div className="absolute z-10 -top-10 left-1/2 -translate-x-1/2 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 dark:bg-gray-700">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                        Custom shape tooltip
                    </div>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45 dark:bg-gray-700"></div>
                </div>
            </div>
        </div>
    );
};

const InteractiveTooltips = () => {
    return (
        <div className="flex items-center justify-center gap-8">
            {/* Click Tooltip */}
            <div className="group relative">
                <button className="px-5 py-2.5 text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 transition-colors">
                    Click me
                </button>
                <div className="absolute z-10 -top-10 left-1/2 -translate-x-1/2 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 invisible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 dark:bg-gray-700">
                    Click to show
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45 dark:bg-gray-700"></div>
                </div>
            </div>

            {/* Icon with Tooltip */}
            <div className="group relative">
                <button className="p-2.5 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-700 transition-colors">
                    <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
                <div className="absolute z-10 -top-10 left-1/2 -translate-x-1/2 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 dark:bg-gray-700">
                    <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Time tooltip
                    </div>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45 dark:bg-gray-700"></div>
                </div>
            </div>

            {/* Link with Tooltip */}
            <div className="group relative">
                <a href="#" className="px-5 py-2.5 text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 transition-colors">
                    Hover link
                </a>
                <div className="absolute z-10 -top-10 left-1/2 -translate-x-1/2 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 dark:bg-gray-700">
                    Link tooltip
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45 dark:bg-gray-700"></div>
                </div>
            </div>
        </div>
    );
};

export default function TooltipShowcase() {
    return (
        <>
            <Head>
                <title>React Tooltip Components - Tooltip Showcase</title>
                <meta
                    name="description"
                    content="Explore our collection of React tooltip components featuring various styles, positions, and interactions."
                />
                <meta
                    name="keywords"
                    content="react tooltip, popover component, UI components, tooltip styles"
                />
                <meta
                    property="og:title"
                    content="React Tooltip Components - Tooltip Showcase"
                />
                <meta
                    property="og:description"
                    content="Collection of React tooltip components with various styles and positions"
                />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="React Tooltip Components - Tooltip Showcase"
                />
                <meta
                    name="twitter:description"
                    content="Explore our collection of React tooltip components"
                />
            </Head>
            <main
                className="tooltip-showcase"
                role="main"
                aria-label="Tooltip Components Showcase"
            >
                <h1 className="sr-only">React Tooltip Components Showcase</h1>
                <div className="space-y-8">
                    <section aria-labelledby="basic-tooltips-title">
                        <h2
                            id="basic-tooltips-title"
                            className="text-lg font-semibold mb-4"
                        >
                            Basic Tooltips
                        </h2>
                        <ComponentPreview
                            title="Simple Tooltip Styles"
                            description="Basic tooltip styles with different appearances"
                            component={BasicTooltips}
                            code={`<!-- Basic Tooltips -->
<div class="flex items-center justify-center gap-8">
    <!-- Simple Tooltip -->
    <div class="group relative">
        <button class="px-5 py-2.5 text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 transition-colors">
            Hover me
        </button>
        <div class="absolute z-10 -top-10 left-1/2 -translate-x-1/2 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 dark:bg-gray-700">
            Simple tooltip
            <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45 dark:bg-gray-700"></div>
        </div>
    </div>

    <!-- Colored Tooltip -->
    <div class="group relative">
        <button class="px-5 py-2.5 text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 transition-colors">
            Colored
        </button>
        <div class="absolute z-10 -top-10 left-1/2 -translate-x-1/2 px-3 py-2 text-sm font-medium text-white bg-primary-500 rounded-lg shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            Colored tooltip
            <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary-500 rotate-45"></div>
        </div>
    </div>

    <!-- Icon Tooltip -->
    <div class="group relative">
        <button class="p-2.5 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-700 transition-colors">
            <svg class="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </button>
        <div class="absolute z-10 -top-10 left-1/2 -translate-x-1/2 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap dark:bg-gray-700">
            Information tooltip
            <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45 dark:bg-gray-700"></div>
        </div>
    </div>
</div>`}
                            sizes={["default", "full"]}
                        />
                    </section>

                    <section aria-labelledby="positioned-tooltips-title">
                        <h2
                            id="positioned-tooltips-title"
                            className="text-lg font-semibold mb-4"
                        >
                            Positioned Tooltips
                        </h2>
                        <ComponentPreview
                            title="Tooltips in Different Positions"
                            description="Tooltips that appear in different positions relative to their trigger elements"
                            component={PositionedTooltips}
                            code={`<!-- Positioned Tooltips -->
<div class="flex items-center justify-center gap-8">
    <!-- Top Tooltip -->
    <div class="group relative">
        <button class="px-5 py-2.5 text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 transition-colors">
            Tooltip top
        </button>
        <div class="absolute z-10 -top-10 left-1/2 -translate-x-1/2 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 dark:bg-gray-700">
            Tooltip on top
            <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45 dark:bg-gray-700"></div>
        </div>
    </div>

    <!-- Right Tooltip -->
    <div class="group relative">
        <button class="px-5 py-2.5 text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 transition-colors">
            Tooltip right
        </button>
        <div class="absolute z-10 top-1/2 -translate-y-1/2 left-full ml-2 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 dark:bg-gray-700">
            Tooltip on right
            <div class="absolute top-1/2 -translate-y-1/2 -left-1 w-2 h-2 bg-gray-900 rotate-45 dark:bg-gray-700"></div>
        </div>
    </div>

    <!-- Bottom Tooltip -->
    <div class="group relative">
        <button class="px-5 py-2.5 text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 transition-colors">
            Tooltip bottom
        </button>
        <div class="absolute z-10 top-full mt-2 left-1/2 -translate-x-1/2 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 dark:bg-gray-700">
            Tooltip on bottom
            <div class="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45 dark:bg-gray-700"></div>
        </div>
    </div>

    <!-- Left Tooltip -->
    <div class="group relative">
        <button class="px-5 py-2.5 text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 transition-colors">
            Tooltip left
        </button>
        <div class="absolute z-10 top-1/2 -translate-y-1/2 right-full mr-2 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 dark:bg-gray-700">
            Tooltip on left
            <div class="absolute top-1/2 -translate-y-1/2 -right-1 w-2 h-2 bg-gray-900 rotate-45 dark:bg-gray-700"></div>
        </div>
    </div>
</div>`}
                            sizes={["default", "full"]}
                        />
                    </section>

                    <section aria-labelledby="styled-tooltips-title">
                        <h2
                            id="styled-tooltips-title"
                            className="text-lg font-semibold mb-4"
                        >
                            Styled Tooltips
                        </h2>
                        <ComponentPreview
                            title="Custom Tooltip Styles"
                            description="Tooltips with unique visual effects and styles"
                            component={StyledTooltips}
                            code={`<!-- Styled Tooltips -->
<div class="flex items-center justify-center gap-8">
    <!-- Gradient Tooltip -->
    <div class="group relative">
        <button class="px-5 py-2.5 text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 transition-colors">
            Gradient
        </button>
        <div class="absolute z-10 -top-10 left-1/2 -translate-x-1/2 px-3 py-2 text-sm font-medium text-white bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            Gradient tooltip
            <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary-600 rotate-45"></div>
        </div>
    </div>

    <!-- Glass Tooltip -->
    <div class="group relative">
        <button class="px-5 py-2.5 text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 transition-colors">
            Glass
        </button>
        <div class="absolute z-10 -top-10 left-1/2 -translate-x-1/2 px-3 py-2 text-sm font-medium text-white bg-white/10 backdrop-blur-md rounded-lg shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-white/20">
            Glass effect tooltip
            <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white/10 backdrop-blur-md rotate-45 border-r border-b border-white/20"></div>
        </div>
    </div>

    <!-- Custom Shape Tooltip -->
    <div class="group relative">
        <button class="px-5 py-2.5 text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 transition-colors">
            Custom Shape
        </button>
        <div class="absolute z-10 -top-10 left-1/2 -translate-x-1/2 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 dark:bg-gray-700">
            <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-primary-500 rounded-full"></div>
                Custom shape tooltip
            </div>
            <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45 dark:bg-gray-700"></div>
        </div>
    </div>
</div>`}
                            sizes={["default", "full"]}
                        />
                    </section>

                    <section aria-labelledby="interactive-tooltips-title">
                        <h2
                            id="interactive-tooltips-title"
                            className="text-lg font-semibold mb-4"
                        >
                            Interactive Tooltips
                        </h2>
                        <ComponentPreview
                            title="Tooltips with Different Interactions"
                            description="Tooltips that respond to different user interactions"
                            component={InteractiveTooltips}
                            code={`<!-- Interactive Tooltips -->
<div class="flex items-center justify-center gap-8">
    <!-- Click Tooltip -->
    <div class="group relative">
        <button class="px-5 py-2.5 text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 transition-colors">
            Click me
        </button>
        <div class="absolute z-10 -top-10 left-1/2 -translate-x-1/2 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 invisible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 dark:bg-gray-700">
            Click to show
            <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45 dark:bg-gray-700"></div>
        </div>
    </div>

    <!-- Icon with Tooltip -->
    <div class="group relative">
        <button class="p-2.5 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-700 transition-colors">
            <svg class="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </button>
        <div class="absolute z-10 -top-10 left-1/2 -translate-x-1/2 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 dark:bg-gray-700">
            <div class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Time tooltip
            </div>
            <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45 dark:bg-gray-700"></div>
        </div>
    </div>

    <!-- Link with Tooltip -->
    <div class="group relative">
        <a href="#" class="px-5 py-2.5 text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 transition-colors">
            Hover link
        </a>
        <div class="absolute z-10 -top-10 left-1/2 -translate-x-1/2 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 dark:bg-gray-700">
            Link tooltip
            <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45 dark:bg-gray-700"></div>
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