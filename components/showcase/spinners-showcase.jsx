import ComponentPreview from "../ui/ComponentPreview";
import Head from "next/head";

const BasicSpinners = () => {
    return (
        <div className="flex items-center justify-center gap-8">
            {/* Simple Spinner */}
            <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
                <span className="text-sm text-gray-600 dark:text-gray-300">Simple</span>
            </div>

            {/* Dotted Spinner */}
            <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 border-4 border-dashed border-primary-500 border-t-transparent rounded-full animate-spin"></div>
                <span className="text-sm text-gray-600 dark:text-gray-300">Dotted</span>
            </div>

            {/* Pulse Spinner */}
            <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 bg-primary-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600 dark:text-gray-300">Pulse</span>
            </div>
        </div>
    );
};

const ColoredSpinners = () => {
    return (
        <div className="flex items-center justify-center gap-8">
            {/* Primary Spinner */}
            <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
                <span className="text-sm text-gray-600 dark:text-gray-300">Primary</span>
            </div>

            {/* Success Spinner */}
            <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
                <span className="text-sm text-gray-600 dark:text-gray-300">Success</span>
            </div>

            {/* Warning Spinner */}
            <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
                <span className="text-sm text-gray-600 dark:text-gray-300">Warning</span>
            </div>

            {/* Error Spinner */}
            <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
                <span className="text-sm text-gray-600 dark:text-gray-300">Error</span>
            </div>
        </div>
    );
};

const SizeSpinners = () => {
    return (
        <div className="flex items-center justify-center gap-8">
            {/* Small Spinner */}
            <div className="flex flex-col items-center gap-2">
                <div className="w-4 h-4 border-2 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
                <span className="text-sm text-gray-600 dark:text-gray-300">Small</span>
            </div>

            {/* Medium Spinner */}
            <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
                <span className="text-sm text-gray-600 dark:text-gray-300">Medium</span>
            </div>

            {/* Large Spinner */}
            <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
                <span className="text-sm text-gray-600 dark:text-gray-300">Large</span>
            </div>
        </div>
    );
};

const StyleSpinners = () => {
    return (
        <div className="flex flex-wrap items-center justify-center gap-8">
            {/* Double Ring Spinner */}
            <div className="flex flex-col items-center gap-2">
                <div className="relative">
                    <div className="w-8 h-8 border-4 border-primary-500/30 rounded-full"></div>
                    <div className="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300">Double Ring</span>
            </div>

            {/* Square Spinner */}
            <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 border-4 border-primary-500 border-t-transparent animate-spin"></div>
                <span className="text-sm text-gray-600 dark:text-gray-300">Square</span>
            </div>

            {/* Triangle Spinner */}
            <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 border-4 border-primary-500 border-t-transparent animate-spin clip-path-triangle"></div>
                <span className="text-sm text-gray-600 dark:text-gray-300">Triangle</span>
            </div>

            {/* Gradient Spinner */}
            <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 border-4 border-transparent border-t-primary-500 border-r-primary-300 border-b-primary-400 border-l-primary-200 rounded-full animate-spin"></div>
                <span className="text-sm text-gray-600 dark:text-gray-300">Gradient</span>
            </div>

            {/* Thick Border Spinner */}
            <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 border-8 border-primary-500/20 border-t-primary-500 rounded-full animate-spin"></div>
                <span className="text-sm text-gray-600 dark:text-gray-300">Thick Border</span>
            </div>

            {/* Dotted Border Spinner */}
            <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 border-4 border-dashed border-primary-500 rounded-full animate-spin"></div>
                <span className="text-sm text-gray-600 dark:text-gray-300">Dotted Border</span>
            </div>
        </div>
    );
};

export default function SpinnersShowcase() {
    return (
        <>
            <Head>
                <title>React Spinner Components - Loading Spinner Showcase</title>
                <meta
                    name="description"
                    content="Explore our collection of React spinner components featuring various styles, animations, and theme support."
                />
                <meta
                    name="keywords"
                    content="react spinner, loading component, UI components, loading animation"
                />
                <meta
                    property="og:title"
                    content="React Spinner Components - Loading Spinner Showcase"
                />
                <meta
                    property="og:description"
                    content="Collection of React spinner components with various styles and animations"
                />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="React Spinner Components - Loading Spinner Showcase"
                />
                <meta
                    name="twitter:description"
                    content="Explore our collection of React spinner components"
                />
            </Head>
            <main
                className="spinners-showcase"
                role="main"
                aria-label="Spinner Components Showcase"
            >
                <h1 className="sr-only">React Spinner Components Showcase</h1>
                <div className="space-y-8">
                    <section aria-labelledby="basic-spinners-title">
                        <h2
                            id="basic-spinners-title"
                            className="text-lg font-semibold mb-4"
                        >
                            Basic Spinners
                        </h2>
                        <ComponentPreview
                            title="Simple Loading Spinners"
                            description="Basic spinner styles with different animations"
                            component={BasicSpinners}
                            code={`<!-- Basic Spinners -->
<div class="flex items-center justify-center gap-8">
    <!-- Simple Spinner -->
    <div class="flex flex-col items-center gap-2">
        <div class="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
        <span class="text-sm text-gray-600 dark:text-gray-300">Simple</span>
    </div>

    <!-- Dotted Spinner -->
    <div class="flex flex-col items-center gap-2">
        <div class="w-8 h-8 border-4 border-dashed border-primary-500 border-t-transparent rounded-full animate-spin"></div>
        <span class="text-sm text-gray-600 dark:text-gray-300">Dotted</span>
    </div>

    <!-- Pulse Spinner -->
    <div class="flex flex-col items-center gap-2">
        <div class="w-8 h-8 bg-primary-500 rounded-full animate-pulse"></div>
        <span class="text-sm text-gray-600 dark:text-gray-300">Pulse</span>
    </div>
</div>`}
                            sizes={["default", "full"]}
                        />
                    </section>

                    <section aria-labelledby="colored-spinners-title">
                        <h2
                            id="colored-spinners-title"
                            className="text-lg font-semibold mb-4"
                        >
                            Colored Spinners
                        </h2>
                        <ComponentPreview
                            title="Spinners with Different Colors"
                            description="Spinners available in various colors for different states"
                            component={ColoredSpinners}
                            code={`<!-- Colored Spinners -->
<div class="flex items-center justify-center gap-8">
    <!-- Primary Spinner -->
    <div class="flex flex-col items-center gap-2">
        <div class="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
        <span class="text-sm text-gray-600 dark:text-gray-300">Primary</span>
    </div>

    <!-- Success Spinner -->
    <div class="flex flex-col items-center gap-2">
        <div class="w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
        <span class="text-sm text-gray-600 dark:text-gray-300">Success</span>
    </div>

    <!-- Warning Spinner -->
    <div class="flex flex-col items-center gap-2">
        <div class="w-8 h-8 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
        <span class="text-sm text-gray-600 dark:text-gray-300">Warning</span>
    </div>

    <!-- Error Spinner -->
    <div class="flex flex-col items-center gap-2">
        <div class="w-8 h-8 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
        <span class="text-sm text-gray-600 dark:text-gray-300">Error</span>
    </div>
</div>`}
                            sizes={["default", "full"]}
                        />
                    </section>

                    <section aria-labelledby="size-spinners-title">
                        <h2
                            id="size-spinners-title"
                            className="text-lg font-semibold mb-4"
                        >
                            Size Variations
                        </h2>
                        <ComponentPreview
                            title="Spinners in Different Sizes"
                            description="Spinners available in small, medium, and large sizes"
                            component={SizeSpinners}
                            code={`<!-- Size Variations -->
<div class="flex items-center justify-center gap-8">
    <!-- Small Spinner -->
    <div class="flex flex-col items-center gap-2">
        <div class="w-4 h-4 border-2 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
        <span class="text-sm text-gray-600 dark:text-gray-300">Small</span>
    </div>

    <!-- Medium Spinner -->
    <div class="flex flex-col items-center gap-2">
        <div class="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
        <span class="text-sm text-gray-600 dark:text-gray-300">Medium</span>
    </div>

    <!-- Large Spinner -->
    <div class="flex flex-col items-center gap-2">
        <div class="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
        <span class="text-sm text-gray-600 dark:text-gray-300">Large</span>
    </div>
</div>`}
                            sizes={["default", "full"]}
                        />
                    </section>

                    <section aria-labelledby="style-spinners-title">
                        <h2
                            id="style-spinners-title"
                            className="text-lg font-semibold mb-4"
                        >
                            Style Variations
                        </h2>
                        <ComponentPreview
                            title="Different Spinner Styles"
                            description="Various spinner styles with unique visual effects"
                            component={StyleSpinners}
                            code={`<!-- Style Variations -->
<div class="flex flex-wrap items-center justify-center gap-8">
    <!-- Double Ring Spinner -->
    <div class="flex flex-col items-center gap-2">
        <div class="relative">
            <div class="w-8 h-8 border-4 border-primary-500/30 rounded-full"></div>
            <div class="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
        </div>
        <span class="text-sm text-gray-600 dark:text-gray-300">Double Ring</span>
    </div>

    <!-- Square Spinner -->
    <div class="flex flex-col items-center gap-2">
        <div class="w-8 h-8 border-4 border-primary-500 border-t-transparent animate-spin"></div>
        <span class="text-sm text-gray-600 dark:text-gray-300">Square</span>
    </div>

    <!-- Triangle Spinner -->
    <div class="flex flex-col items-center gap-2">
        <div class="w-8 h-8 border-4 border-primary-500 border-t-transparent animate-spin clip-path-triangle"></div>
        <span class="text-sm text-gray-600 dark:text-gray-300">Triangle</span>
    </div>

    <!-- Gradient Spinner -->
    <div class="flex flex-col items-center gap-2">
        <div class="w-8 h-8 border-4 border-transparent border-t-primary-500 border-r-primary-300 border-b-primary-400 border-l-primary-200 rounded-full animate-spin"></div>
        <span class="text-sm text-gray-600 dark:text-gray-300">Gradient</span>
    </div>

    <!-- Thick Border Spinner -->
    <div class="flex flex-col items-center gap-2">
        <div class="w-8 h-8 border-8 border-primary-500/20 border-t-primary-500 rounded-full animate-spin"></div>
        <span class="text-sm text-gray-600 dark:text-gray-300">Thick Border</span>
    </div>

    <!-- Dotted Border Spinner -->
    <div class="flex flex-col items-center gap-2">
        <div class="w-8 h-8 border-4 border-dashed border-primary-500 rounded-full animate-spin"></div>
        <span class="text-sm text-gray-600 dark:text-gray-300">Dotted Border</span>
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