import ComponentPreview from "../ui/ComponentPreview";
import Head from "next/head";

const BasicCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Simple Card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Simple Card</h3>
                    <p className="text-gray-600 dark:text-gray-300">A basic card with a title and description.</p>
                </div>
            </div>

            {/* Card with Image */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="aspect-video bg-gray-100 dark:bg-gray-700"></div>
                <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Card with Image</h3>
                    <p className="text-gray-600 dark:text-gray-300">A card featuring an image header.</p>
                </div>
            </div>

            {/* Card with Footer */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Card with Footer</h3>
                    <p className="text-gray-600 dark:text-gray-300">A card with a separate footer section.</p>
                </div>
                <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-200 dark:border-gray-700">
                    <button className="text-sm text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300">
                        Learn more →
                    </button>
                </div>
            </div>
        </div>
    );
};

const StyledCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Gradient Card */}
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg shadow-sm overflow-hidden">
                <div className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">Gradient Card</h3>
                    <p className="text-white/90">A card with a beautiful gradient background.</p>
                </div>
            </div>

            {/* Glass Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-sm border border-white/20 overflow-hidden">
                <div className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">Glass Card</h3>
                    <p className="text-white/90">A card with a modern glass effect.</p>
                </div>
            </div>

            {/* Bordered Card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border-2 border-primary-500 dark:border-primary-400 overflow-hidden">
                <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Bordered Card</h3>
                    <p className="text-gray-600 dark:text-gray-300">A card with a prominent border.</p>
                </div>
            </div>
        </div>
    );
};

const InteractiveCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Hover Card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
                <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Hover Card</h3>
                    <p className="text-gray-600 dark:text-gray-300">A card with hover effects.</p>
                </div>
            </div>

            {/* Clickable Card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden cursor-pointer transition-all duration-300 active:scale-[0.98]">
                <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Clickable Card</h3>
                    <p className="text-gray-600 dark:text-gray-300">A card with click interaction.</p>
                </div>
            </div>

            {/* Card with Actions */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Card with Actions</h3>
                    <p className="text-gray-600 dark:text-gray-300">A card with interactive buttons.</p>
                </div>
                <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-200 dark:border-gray-700 flex justify-end gap-2">
                    <button className="px-3 py-1 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                        Cancel
                    </button>
                    <button className="px-3 py-1 text-sm text-white bg-primary-500 hover:bg-primary-600 rounded-md transition-colors">
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default function CardShowcase() {
    return (
        <>
            <Head>
                <title>React Card Components - Card Showcase</title>
                <meta
                    name="description"
                    content="Explore our collection of React card components featuring various styles and interactions."
                />
                <meta
                    name="keywords"
                    content="react card, UI components, card styles, card layouts"
                />
                <meta
                    property="og:title"
                    content="React Card Components - Card Showcase"
                />
                <meta
                    property="og:description"
                    content="Collection of React card components with various styles and layouts"
                />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="React Card Components - Card Showcase"
                />
                <meta
                    name="twitter:description"
                    content="Explore our collection of React card components"
                />
            </Head>
            <main
                className="card-showcase"
                role="main"
                aria-label="Card Components Showcase"
            >
                <h1 className="sr-only">React Card Components Showcase</h1>
                <div className="space-y-8">
                    <section aria-labelledby="basic-cards-title">
                        <h2
                            id="basic-cards-title"
                            className="text-lg font-semibold mb-4"
                        >
                            Basic Cards
                        </h2>
                        <ComponentPreview
                            title="Simple Card Styles"
                            description="Basic card styles with different layouts"
                            component={BasicCards}
                            code={`<!-- Basic Cards -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <!-- Simple Card -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div class="p-6">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Simple Card</h3>
            <p class="text-gray-600 dark:text-gray-300">A basic card with a title and description.</p>
        </div>
    </div>

    <!-- Card with Image -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div class="aspect-video bg-gray-100 dark:bg-gray-700"></div>
        <div class="p-6">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Card with Image</h3>
            <p class="text-gray-600 dark:text-gray-300">A card featuring an image header.</p>
        </div>
    </div>

    <!-- Card with Footer -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div class="p-6">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Card with Footer</h3>
            <p class="text-gray-600 dark:text-gray-300">A card with a separate footer section.</p>
        </div>
        <div class="px-6 py-4 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-200 dark:border-gray-700">
            <button class="text-sm text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300">
                Learn more →
            </button>
        </div>
    </div>
</div>`}
                            sizes={["default", "full"]}
                        />
                    </section>

                    <section aria-labelledby="styled-cards-title">
                        <h2
                            id="styled-cards-title"
                            className="text-lg font-semibold mb-4"
                        >
                            Styled Cards
                        </h2>
                        <ComponentPreview
                            title="Custom Card Styles"
                            description="Cards with unique visual effects and styles"
                            component={StyledCards}
                            code={`<!-- Styled Cards -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <!-- Gradient Card -->
    <div class="bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg shadow-sm overflow-hidden">
        <div class="p-6">
            <h3 class="text-lg font-semibold text-white mb-2">Gradient Card</h3>
            <p class="text-white/90">A card with a beautiful gradient background.</p>
        </div>
    </div>

    <!-- Glass Card -->
    <div class="bg-white/10 backdrop-blur-md rounded-lg shadow-sm border border-white/20 overflow-hidden">
        <div class="p-6">
            <h3 class="text-lg font-semibold text-white mb-2">Glass Card</h3>
            <p class="text-white/90">A card with a modern glass effect.</p>
        </div>
    </div>

    <!-- Bordered Card -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border-2 border-primary-500 dark:border-primary-400 overflow-hidden">
        <div class="p-6">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Bordered Card</h3>
            <p class="text-gray-600 dark:text-gray-300">A card with a prominent border.</p>
        </div>
    </div>
</div>`}
                            sizes={["default", "full"]}
                        />
                    </section>

                    <section aria-labelledby="interactive-cards-title">
                        <h2
                            id="interactive-cards-title"
                            className="text-lg font-semibold mb-4"
                        >
                            Interactive Cards
                        </h2>
                        <ComponentPreview
                            title="Cards with Interactions"
                            description="Cards that respond to user interactions"
                            component={InteractiveCards}
                            code={`<!-- Interactive Cards -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <!-- Hover Card -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
        <div class="p-6">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Hover Card</h3>
            <p class="text-gray-600 dark:text-gray-300">A card with hover effects.</p>
        </div>
    </div>

    <!-- Clickable Card -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden cursor-pointer transition-all duration-300 active:scale-[0.98]">
        <div class="p-6">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Clickable Card</h3>
            <p class="text-gray-600 dark:text-gray-300">A card with click interaction.</p>
        </div>
    </div>

    <!-- Card with Actions -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div class="p-6">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Card with Actions</h3>
            <p class="text-gray-600 dark:text-gray-300">A card with interactive buttons.</p>
        </div>
        <div class="px-6 py-4 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-200 dark:border-gray-700 flex justify-end gap-2">
            <button class="px-3 py-1 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Cancel
            </button>
            <button class="px-3 py-1 text-sm text-white bg-primary-500 hover:bg-primary-600 rounded-md transition-colors">
                Confirm
            </button>
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