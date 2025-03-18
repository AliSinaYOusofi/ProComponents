"use client";

import ComponentPreview from "../ui/ComponentPreview";
import Head from "next/head";

const BasicInputs = () => {
    return (
        <div className="space-y-4">
            <div>
                <label htmlFor="basic-input" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Basic Input
                </label>
                <input
                    type="text"
                    id="basic-input"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:focus:ring-gray-400 dark:focus:border-gray-400"
                    placeholder="Enter text..."
                />
            </div>
            <div>
                <label htmlFor="disabled-input" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Disabled Input
                </label>
                <input
                    type="text"
                    id="disabled-input"
                    disabled
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 cursor-not-allowed dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                    placeholder="Disabled input"
                />
            </div>
            <div>
                <label htmlFor="readonly-input" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Readonly Input
                </label>
                <input
                    type="text"
                    id="readonly-input"
                    readOnly
                    value="Readonly value"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
                />
            </div>
        </div>
    );
};

const StyledInputs = () => {
    return (
        <div className="space-y-4">
            <div>
                <label htmlFor="rounded-input" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Rounded Input
                </label>
                <input
                    type="text"
                    id="rounded-input"
                    className="w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:focus:ring-gray-400 dark:focus:border-gray-400"
                    placeholder="Rounded corners..."
                />
            </div>
            <div>
                <label htmlFor="bordered-input" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Bordered Input
                </label>
                <input
                    type="text"
                    id="bordered-input"
                    className="w-full px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:focus:ring-gray-400 dark:focus:border-gray-400"
                    placeholder="Thick border..."
                />
            </div>
            <div>
                <label htmlFor="shadow-input" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Shadow Input
                </label>
                <input
                    type="text"
                    id="shadow-input"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:focus:ring-gray-400 dark:focus:border-gray-400"
                    placeholder="With shadow..."
                />
            </div>
        </div>
    );
};

const InputWithIcons = () => {
    return (
        <div className="space-y-4">
            <div>
                <label htmlFor="search-input" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Search Input
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        id="search-input"
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:focus:ring-gray-400 dark:focus:border-gray-400"
                        placeholder="Search..."
                    />
                </div>
            </div>
            <div>
                <label htmlFor="email-input" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email Input
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                    </div>
                    <input
                        type="email"
                        id="email-input"
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:focus:ring-gray-400 dark:focus:border-gray-400"
                        placeholder="Enter email..."
                    />
                </div>
            </div>
            <div>
                <label htmlFor="password-input" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Password Input
                </label>
                <div className="relative">
                    <input
                        type="password"
                        id="password-input"
                        className="w-full pr-10 pl-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:focus:ring-gray-400 dark:focus:border-gray-400"
                        placeholder="Enter password..."
                    />
                    <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                        <svg className="h-5 w-5 text-gray-400 hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

const InputWithValidation = () => {
    return (
        <div className="space-y-4">
            <div>
                <label htmlFor="valid-input" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Valid Input
                </label>
                <input
                    type="text"
                    id="valid-input"
                    className="w-full px-3 py-2 border border-green-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-800 dark:border-green-500 dark:text-gray-300 dark:focus:ring-green-400 dark:focus:border-green-400"
                    placeholder="Valid input..."
                />
                <p className="mt-1 text-sm text-green-600 dark:text-green-400">This field is valid</p>
            </div>
            <div>
                <label htmlFor="invalid-input" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Invalid Input
                </label>
                <input
                    type="text"
                    id="invalid-input"
                    className="w-full px-3 py-2 border border-red-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 dark:bg-gray-800 dark:border-red-500 dark:text-gray-300 dark:focus:ring-red-400 dark:focus:border-red-400"
                    placeholder="Invalid input..."
                />
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">This field is required</p>
            </div>
            <div>
                <label htmlFor="loading-input" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Loading Input
                </label>
                <div className="relative">
                    <input
                        type="text"
                        id="loading-input"
                        className="w-full pr-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:focus:ring-gray-400 dark:focus:border-gray-400"
                        placeholder="Loading..."
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <svg className="animate-spin h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function InputShowcase() {
    return (
        <>
            <Head>
                <title>React Input Components - Modern Input Showcase</title>
                <meta
                    name="description"
                    content="Explore our collection of React input components featuring various styles, validations, and interactions."
                />
                <meta
                    name="keywords"
                    content="react input components, form inputs, text inputs, input validation, input styles"
                />
                <meta
                    property="og:title"
                    content="React Input Components - Modern Input Showcase"
                />
                <meta
                    property="og:description"
                    content="Collection of React input components with various styles and validations"
                />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="React Input Components - Modern Input Showcase"
                />
                <meta
                    name="twitter:description"
                    content="Explore our collection of React input components"
                />
            </Head>
            <main
                className="input-showcase"
                role="main"
                aria-label="Input Components Showcase"
            >
                <h1 className="sr-only">React Input Components Showcase</h1>
                <div className="space-y-8">
                    <section aria-labelledby="basic-inputs-title">
                        <h2
                            id="basic-inputs-title"
                            className="text-lg font-semibold mb-4"
                        >
                            Basic Inputs
                        </h2>
                        <ComponentPreview
                            title="Standard Input Variations"
                            description="Basic input components with different states"
                            component={BasicInputs}
                            code={`<!-- Basic Inputs -->
<div class="space-y-4">
    <div>
        <label for="basic-input" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Basic Input
        </label>
        <input
            type="text"
            id="basic-input"
            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:focus:ring-gray-400 dark:focus:border-gray-400"
            placeholder="Enter text..."
        />
    </div>
    <div>
        <label for="disabled-input" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Disabled Input
        </label>
        <input
            type="text"
            id="disabled-input"
            disabled
            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 cursor-not-allowed dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
            placeholder="Disabled input"
        />
    </div>
    <div>
        <label for="readonly-input" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Readonly Input
        </label>
        <input
            type="text"
            id="readonly-input"
            readonly
            value="Readonly value"
            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
        />
    </div>
</div>`}
                            sizes={["default", "full"]}
                        />
                    </section>

                    <section aria-labelledby="styled-inputs-title">
                        <h2
                            id="styled-inputs-title"
                            className="text-lg font-semibold mb-4"
                        >
                            Styled Inputs
                        </h2>
                        <ComponentPreview
                            title="Custom Styled Inputs"
                            description="Input components with different visual styles"
                            component={StyledInputs}
                            code={`<!-- Styled Inputs -->
<div class="space-y-4">
    <div>
        <label for="rounded-input" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Rounded Input
        </label>
        <input
            type="text"
            id="rounded-input"
            class="w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:focus:ring-gray-400 dark:focus:border-gray-400"
            placeholder="Rounded corners..."
        />
    </div>
    <div>
        <label for="bordered-input" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Bordered Input
        </label>
        <input
            type="text"
            id="bordered-input"
            class="w-full px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:focus:ring-gray-400 dark:focus:border-gray-400"
            placeholder="Thick border..."
        />
    </div>
    <div>
        <label for="shadow-input" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Shadow Input
        </label>
        <input
            type="text"
            id="shadow-input"
            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:focus:ring-gray-400 dark:focus:border-gray-400"
            placeholder="With shadow..."
        />
    </div>
</div>`}
                            sizes={["default", "full"]}
                        />
                    </section>

                    <section aria-labelledby="icon-inputs-title">
                        <h2
                            id="icon-inputs-title"
                            className="text-lg font-semibold mb-4"
                        >
                            Inputs with Icons
                        </h2>
                        <ComponentPreview
                            title="Icon Input Components"
                            description="Input components with leading and trailing icons"
                            component={InputWithIcons}
                            code={`<!-- Inputs with Icons -->
<div class="space-y-4">
    <div>
        <label for="search-input" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Search Input
        </label>
        <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                </svg>
            </div>
            <input
                type="text"
                id="search-input"
                class="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:focus:ring-gray-400 dark:focus:border-gray-400"
                placeholder="Search..."
            />
        </div>
    </div>
    <div>
        <label for="email-input" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email Input
        </label>
        <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
            </div>
            <input
                type="email"
                id="email-input"
                class="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:focus:ring-gray-400 dark:focus:border-gray-400"
                placeholder="Enter email..."
            />
        </div>
    </div>
    <div>
        <label for="password-input" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Password Input
        </label>
        <div class="relative">
            <input
                type="password"
                id="password-input"
                class="w-full pr-10 pl-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:focus:ring-gray-400 dark:focus:border-gray-400"
                placeholder="Enter password..."
            />
            <button
                type="button"
                class="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
                <svg class="h-5 w-5 text-gray-400 hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                </svg>
            </button>
        </div>
    </div>
</div>`}
                            sizes={["default", "full"]}
                        />
                    </section>

                    <section aria-labelledby="validation-inputs-title">
                        <h2
                            id="validation-inputs-title"
                            className="text-lg font-semibold mb-4"
                        >
                            Inputs with Validation
                        </h2>
                        <ComponentPreview
                            title="Validation Input Components"
                            description="Input components with validation states and feedback"
                            component={InputWithValidation}
                            code={`<!-- Inputs with Validation -->
<div class="space-y-4">
    <div>
        <label for="valid-input" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Valid Input
        </label>
        <input
            type="text"
            id="valid-input"
            class="w-full px-3 py-2 border border-green-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-800 dark:border-green-500 dark:text-gray-300 dark:focus:ring-green-400 dark:focus:border-green-400"
            placeholder="Valid input..."
        />
        <p class="mt-1 text-sm text-green-600 dark:text-green-400">This field is valid</p>
    </div>
    <div>
        <label for="invalid-input" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Invalid Input
        </label>
        <input
            type="text"
            id="invalid-input"
            class="w-full px-3 py-2 border border-red-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 dark:bg-gray-800 dark:border-red-500 dark:text-gray-300 dark:focus:ring-red-400 dark:focus:border-red-400"
            placeholder="Invalid input..."
        />
        <p class="mt-1 text-sm text-red-600 dark:text-red-400">This field is required</p>
    </div>
    <div>
        <label for="loading-input" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Loading Input
        </label>
        <div class="relative">
            <input
                type="text"
                id="loading-input"
                class="w-full pr-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:focus:ring-gray-400 dark:focus:border-gray-400"
                placeholder="Loading..."
            />
            <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
                <svg class="animate-spin h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            </div>
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