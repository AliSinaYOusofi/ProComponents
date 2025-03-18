"use client";

import ComponentPreview from "../ui/ComponentPreview";
import Head from "next/head";

const BasicAvatars = () => {
    return (
        <div className="flex items-center space-x-4">
            {/* Basic Avatar */}
            <div className="relative w-10 h-10 overflow-hidden bg-gray-100 dark:bg-gray-700 rounded-full">
                <img
                    src="https://images.icon-icons.com/35/PNG/96/teacher_man_avatar_person_2836.png"
                    alt="User avatar"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Avatar with Status */}
            <div className="relative">
                <div className="w-10 h-10 overflow-hidden bg-gray-100 dark:bg-gray-700 rounded-full">
                    <img
                        src="https://images.icon-icons.com/35/PNG/96/teacher_man_avatar_person_2836.png"
                        alt="User avatar"
                        className="w-full h-full object-cover"
                    />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></span>
            </div>

            {/* Avatar with Initials */}
            <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center text-sm font-medium">
                JD
            </div>

            {/* Avatar with Fallback */}
            <div className="relative w-10 h-10 overflow-hidden bg-gray-100 dark:bg-gray-700 rounded-full">
                <img
                    src="/nonexistent.jpg"
                    alt="User avatar"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
};

const StyledAvatars = () => {
    return (
        <div className="flex items-center space-x-4">
            {/* Rounded Square Avatar */}
            <div className="relative w-12 h-12 overflow-hidden bg-gray-100 dark:bg-gray-700 rounded-lg">
                <img
                    src="https://images.icon-icons.com/582/PNG/96/man-2_icon-icons.com_55041.png"
                    alt="User avatar"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Avatar with Border */}
            <div className="relative w-12 h-12 overflow-hidden bg-gray-100 dark:bg-gray-700 rounded-full ring-2 ring-primary-500 dark:ring-primary-400">
                <img
                    src="https://images.icon-icons.com/582/PNG/96/man-2_icon-icons.com_55041.png"
                    alt="User avatar"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Avatar with Shadow */}
            <div className="relative w-12 h-12 overflow-hidden bg-gray-100 dark:bg-gray-700 rounded-full shadow-lg">
                <img
                    src="https://images.icon-icons.com/2630/PNG/96/avatar_man_beard_brown_hair_boy_people_icon_159121.png"
                    alt="User avatar"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Avatar with Gradient Border */}
            <div className="relative w-12 h-12">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"></div>
                <div className="relative w-full h-full m-0.5 overflow-hidden bg-gray-100 dark:bg-gray-700 rounded-full">
                    <img
                        src="https://images.icon-icons.com/2630/PNG/96/avatar_man_beard_brown_hair_boy_people_icon_159121.png"
                        alt="User avatar"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

const InteractiveAvatars = () => {
    return (
        <div className="flex items-center space-x-4">
            {/* Avatar with Tooltip */}
            <div className="relative group">
                <div className="w-12 h-12 overflow-hidden bg-gray-100 dark:bg-gray-700 rounded-full">
                    <img
                        src="https://images.icon-icons.com/35/PNG/96/teacher_man_avatar_person_2836.png"
                        alt="User avatar"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    John Doe
                </div>
            </div>

            {/* Avatar with Badge */}
            <div className="relative">
                <div className="w-12 h-12 overflow-hidden bg-gray-100 dark:bg-gray-700 rounded-full">
                    <img
                        src="https://images.icon-icons.com/582/PNG/96/man-2_icon-icons.com_55041.png"
                        alt="User avatar"
                        className="w-full h-full object-cover"
                    />
                </div>
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    3
                </span>
            </div>

            {/* Avatar with Hover Effect */}
            <div className="relative w-12 h-12 overflow-hidden bg-gray-100 dark:bg-gray-700 rounded-full group">
                <img
                    src="https://images.icon-icons.com/2630/PNG/96/avatar_man_beard_brown_hair_boy_people_icon_159121.png"
                    alt="User avatar"
                    className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-200"></div>
            </div>

            {/* Avatar with Click Effect */}
            <div className="relative w-12 h-12 overflow-hidden bg-gray-100 dark:bg-gray-700 rounded-full cursor-pointer active:scale-95 transition-transform duration-100">
                <img
                    src="https://images.icon-icons.com/35/PNG/96/teacher_man_avatar_person_2836.png"
                    alt="User avatar"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
};

const GroupAvatars = () => {
    return (
        <div className="flex items-center space-x-8">
            {/* Avatar Group */}
            <div className="flex -space-x-4">
                <div className="relative w-10 h-10 overflow-hidden bg-gray-100 dark:bg-gray-700 rounded-full border-2 border-white dark:border-gray-800">
                    <img
                        src="https://images.icon-icons.com/35/PNG/96/teacher_man_avatar_person_2836.png"
                        alt="User avatar"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative w-10 h-10 overflow-hidden bg-gray-100 dark:bg-gray-700 rounded-full border-2 border-white dark:border-gray-800">
                    <img
                        src="https://images.icon-icons.com/582/PNG/96/man-2_icon-icons.com_55041.png"
                        alt="User avatar"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative w-10 h-10 overflow-hidden bg-gray-100 dark:bg-gray-700 rounded-full border-2 border-white dark:border-gray-800">
                    <img
                        src="https://images.icon-icons.com/2630/PNG/96/avatar_man_beard_brown_hair_boy_people_icon_159121.png"
                        alt="User avatar"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative w-10 h-10 overflow-hidden bg-gray-100 dark:bg-gray-700 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center text-xs font-medium text-gray-600 dark:text-gray-400">
                    +3
                </div>
            </div>

            {/* Horizontal Avatar Group */}
            <div className="flex items-center space-x-2">
                <div className="relative w-8 h-8 overflow-hidden bg-gray-100 dark:bg-gray-700 rounded-full">
                    <img
                        src="https://images.icon-icons.com/35/PNG/96/teacher_man_avatar_person_2836.png"
                        alt="User avatar"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative w-8 h-8 overflow-hidden bg-gray-100 dark:bg-gray-700 rounded-full">
                    <img
                        src="https://images.icon-icons.com/582/PNG/96/man-2_icon-icons.com_55041.png"
                        alt="User avatar"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative w-8 h-8 overflow-hidden bg-gray-100 dark:bg-gray-700 rounded-full">
                    <img
                        src="https://images.icon-icons.com/2630/PNG/96/avatar_man_beard_brown_hair_boy_people_icon_159121.png"
                        alt="User avatar"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

const SpecialAvatars = () => {
    return (
        <div className="flex items-center space-x-4">
            {/* Avatar with Role */}
            <div className="flex flex-col items-center">
                <div className="w-16 h-16 overflow-hidden bg-gray-100 dark:bg-gray-700 rounded-full">
                    <img
                        src="https://images.icon-icons.com/35/PNG/96/teacher_man_avatar_person_2836.png"
                        alt="User avatar"
                        className="w-full h-full object-cover"
                    />
                </div>
                <span className="mt-2 text-sm font-medium text-gray-900 dark:text-white">John Doe</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">Admin</span>
            </div>

            {/* Avatar with Action */}
            <div className="relative">
                <div className="w-16 h-16 overflow-hidden bg-gray-100 dark:bg-gray-700 rounded-full">
                    <img
                        src="https://images.icon-icons.com/35/PNG/96/teacher_man_avatar_person_2836.png"
                        alt="User avatar"
                        className="w-full h-full object-cover"
                    />
                </div>
                <button className="absolute bottom-0 right-0 w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-primary-600 transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                </button>
            </div>

            {/* Avatar with Status Message */}
            <div className="flex items-center space-x-3">
                <div className="w-12 h-12 overflow-hidden bg-gray-100 dark:bg-gray-700 rounded-full">
                    <img
                        src="https://images.icon-icons.com/2630/PNG/96/avatar_man_beard_brown_hair_boy_people_icon_159121.png"
                        alt="User avatar"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">Jane Smith</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 truncate">Online</p>
                </div>
            </div>

            {/* Avatar with Progress Ring */}
            <div className="relative">
                <div className="w-16 h-16">
                    <svg className="w-full h-full" viewBox="0 0 36 36">
                        <path
                            d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#E5E7EB"
                            strokeWidth="3"
                            className="dark:stroke-gray-700"
                        />
                        <path
                            d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#3B82F6"
                            strokeWidth="3"
                            strokeDasharray="75, 100"
                        />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 overflow-hidden bg-gray-100 dark:bg-gray-700 rounded-full">
                            <img
                                src="https://images.icon-icons.com/35/PNG/96/teacher_man_avatar_person_2836.png"
                                alt="User avatar"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function AvatarShowcase() {
    return (
        <>
            <Head>
                <title>React Avatar Components - Modern Avatar Showcase</title>
                <meta
                    name="description"
                    content="Explore our collection of React avatar components featuring various styles, sizes, and interactive effects."
                />
                <meta
                    name="keywords"
                    content="react avatars, UI components, user avatars, profile pictures, avatar groups"
                />
                <meta
                    property="og:title"
                    content="React Avatar Components - Modern Avatar Showcase"
                />
                <meta
                    property="og:description"
                    content="Collection of React avatar components with various styles and interactions"
                />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="React Avatar Components - Modern Avatar Showcase"
                />
                <meta
                    name="twitter:description"
                    content="Explore our collection of React avatar components"
                />
            </Head>
            <main
                className="avatar-showcase"
                role="main"
                aria-label="Avatar Components Showcase"
            >
                <h1 className="sr-only">React Avatar Components Showcase</h1>
                <div className="space-y-8">
                    <section aria-labelledby="basic-avatars-title">
                        <h2
                            id="basic-avatars-title"
                            className="text-lg font-semibold mb-4"
                        >
                            Basic Avatars
                        </h2>
                        <ComponentPreview
                            title="Default, Status & Initials"
                            description="Simple avatar components with basic styling"
                            component={BasicAvatars}
                            code={`// Basic Avatar
<div className="relative w-10 h-10 overflow-hidden bg-gray-100 dark:bg-gray-700 rounded-full">
    <img
        src="https://images.icon-icons.com/35/PNG/96/teacher_man_avatar_person_2836.png"
        alt="User avatar"
        className="w-full h-full object-cover"
    />
</div>

// Avatar with Status
<div className="relative">
    <div className="w-10 h-10 overflow-hidden bg-gray-100 dark:bg-gray-700 rounded-full">
        <img
            src="https://images.icon-icons.com/2630/PNG/96/avatar_man_beard_brown_hair_boy_people_icon_159121.png"
            alt="User avatar"
            className="w-full h-full object-cover"
        />
    </div>
    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></span>
</div>

// Avatar with Initials
<div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center text-sm font-medium">
    JD
</div>`}
                            sizes={["default", "full"]}
                        />
                    </section>

                    <section aria-labelledby="styled-avatars-title">
                        <h2
                            id="styled-avatars-title"
                            className="text-lg font-semibold mb-4"
                        >
                            Styled Avatars
                        </h2>
                        <ComponentPreview
                            title="Rounded Square, Border & Shadow"
                            description="Avatars with enhanced visual styling"
                            component={StyledAvatars}
                            code={`// Rounded Square Avatar
<div className="relative w-12 h-12 overflow-hidden bg-gray-100 dark:bg-gray-700 rounded-lg">
    <img
        src="https://images.icon-icons.com/35/PNG/96/teacher_man_avatar_person_2836.png"
        alt="User avatar"
        className="w-full h-full object-cover"
    />
</div>

// Avatar with Border
<div className="relative w-12 h-12 overflow-hidden bg-gray-100 dark:bg-gray-700 rounded-full ring-2 ring-primary-500 dark:ring-primary-400">
    <img
        src="https://images.icon-icons.com/582/PNG/96/man-2_icon-icons.com_55041.png"
        alt="User avatar"
        className="w-full h-full object-cover"
    />
</div>

// Avatar with Shadow
<div className="relative w-12 h-12 overflow-hidden bg-gray-100 dark:bg-gray-700 rounded-full shadow-lg">
    <img
        src="https://images.icon-icons.com/2630/PNG/96/avatar_man_beard_brown_hair_boy_people_icon_159121.png"
        alt="User avatar"
        className="w-full h-full object-cover"
    />
</div>`}
                            sizes={["default", "full"]}
                        />
                    </section>

                    <section aria-labelledby="interactive-avatars-title">
                        <h2
                            id="interactive-avatars-title"
                            className="text-lg font-semibold mb-4"
                        >
                            Interactive Avatars
                        </h2>
                        <ComponentPreview
                            title="Tooltip, Badge & Hover Effects"
                            description="Avatars with interactive elements and effects"
                            component={InteractiveAvatars}
                            code={`// Avatar with Tooltip
<div className="relative group">
    <div className="w-12 h-12 overflow-hidden bg-gray-100 dark:bg-gray-700 rounded-full">
        <img
            src="https://images.icon-icons.com/35/PNG/96/teacher_man_avatar_person_2836.png"
            alt="User avatar"
            className="w-full h-full object-cover"
        />
    </div>
    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        John Doe
    </div>
</div>

// Avatar with Badge
<div className="relative">
    <div className="w-12 h-12 overflow-hidden bg-gray-100 dark:bg-gray-700 rounded-full">
        <img
            src="https://images.icon-icons.com/582/PNG/96/man-2_icon-icons.com_55041.png"
            alt="User avatar"
            className="w-full h-full object-cover"
        />
    </div>
    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
        3
    </span>
</div>

// Avatar with Hover Effect
<div className="relative w-12 h-12 overflow-hidden bg-gray-100 dark:bg-gray-700 rounded-full group">
    <img
        src="https://images.icon-icons.com/2630/PNG/96/avatar_man_beard_brown_hair_boy_people_icon_159121.png"
        alt="User avatar"
        className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-200"></div>
</div>`}
                            sizes={["default", "full"]}
                        />
                    </section>

                    <section aria-labelledby="group-avatars-title">
                        <h2
                            id="group-avatars-title"
                            className="text-lg font-semibold mb-4"
                        >
                            Group Avatars
                        </h2>
                        <ComponentPreview
                            title="Stacked Avatar Group"
                            description="Group of avatars with overlapping effect"
                            component={GroupAvatars}
                            code={`// Avatar Group
<div className="flex -space-x-4">
    <div className="relative w-10 h-10 overflow-hidden bg-gray-100 dark:bg-gray-700 rounded-full border-2 border-white dark:border-gray-800">
        <img
            src="https://images.icon-icons.com/35/PNG/96/teacher_man_avatar_person_2836.png"
            alt="User avatar"
            className="w-full h-full object-cover"
        />
    </div>
    <div className="relative w-10 h-10 overflow-hidden bg-gray-100 dark:bg-gray-700 rounded-full border-2 border-white dark:border-gray-800">
        <img
            src="https://images.icon-icons.com/582/PNG/96/man-2_icon-icons.com_55041.png"
            alt="User avatar"
            className="w-full h-full object-cover"
        />
    </div>
    <div className="relative w-10 h-10 overflow-hidden bg-gray-100 dark:bg-gray-700 rounded-full border-2 border-white dark:border-gray-800">
        <img
            src="https://images.icon-icons.com/2630/PNG/96/avatar_man_beard_brown_hair_boy_people_icon_159121.png"
            alt="User avatar"
            className="w-full h-full object-cover"
        />
    </div>
    <div className="relative w-10 h-10 overflow-hidden bg-gray-100 dark:bg-gray-700 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center text-xs font-medium text-gray-600 dark:text-gray-400">
        +3
    </div>
</div>`}
                            sizes={["default", "full"]}
                        />
                    </section>

                    <section aria-labelledby="special-avatars-title">
                        <h2
                            id="special-avatars-title"
                            className="text-lg font-semibold mb-4"
                        >
                            Special Purpose Avatars
                        </h2>
                        <ComponentPreview
                            title="Role, Action & Status Message"
                            description="Specialized avatar components for specific use cases"
                            component={SpecialAvatars}
                            code={`// Avatar with Role
<div className="flex flex-col items-center">
    <div className="w-16 h-16 overflow-hidden bg-gray-100 dark:bg-gray-700 rounded-full">
        <img
            src="https://images.icon-icons.com/35/PNG/96/teacher_man_avatar_person_2836.png"
            alt="User avatar"
            className="w-full h-full object-cover"
        />
    </div>
    <span className="mt-2 text-sm font-medium text-gray-900 dark:text-white">John Doe</span>
    <span className="text-xs text-gray-500 dark:text-gray-400">Admin</span>
</div>

// Avatar with Action
<div className="relative">
    <div className="w-16 h-16 overflow-hidden bg-gray-100 dark:bg-gray-700 rounded-full">
        <img
            src="https://images.icon-icons.com/582/PNG/96/man-2_icon-icons.com_55041.png"
            alt="User avatar"
            className="w-full h-full object-cover"
        />
    </div>
    <button className="absolute bottom-0 right-0 w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-primary-600 transition-colors duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
    </button>
</div>

// Avatar with Status Message
<div className="flex items-center space-x-3">
    <div className="w-12 h-12 overflow-hidden bg-gray-100 dark:bg-gray-700 rounded-full">
        <img
            src="https://images.icon-icons.com/2630/PNG/96/avatar_man_beard_brown_hair_boy_people_icon_159121.png"
            alt="User avatar"
            className="w-full h-full object-cover"
        />
    </div>
    <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 dark:text-white truncate">Jane Smith</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 truncate">Online</p>
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