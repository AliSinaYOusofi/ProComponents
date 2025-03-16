"use client";

import { motion } from "framer-motion";
import { forwardRef } from "react";

const Button = forwardRef(({
    className = "",
    variant = "primary",
    size = "default",
    asChild = false,
    loading = false,
    disabled = false,
    children,
    ...props
}, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
    
    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500",
        secondary: "bg-gray-800 text-white hover:bg-gray-700 focus-visible:ring-gray-500",
        outline: "border-2 border-gray-300 hover:bg-gray-100 hover:text-gray-900 dark:border-gray-700 dark:hover:bg-gray-800 dark:hover:text-white",
        ghost: "hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white",
        link: "text-blue-600 underline-offset-4 hover:underline dark:text-blue-400"
    };

    const sizes = {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 text-sm",
        lg: "h-12 px-8 text-lg",
        icon: "h-10 w-10"
    };

    const Component = asChild ? motion.div : motion.button;

    return (
        <Component
            ref={ref}
            disabled={disabled || loading}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            whileHover={{ scale: disabled ? 1 : 1.02 }}
            whileTap={{ scale: disabled ? 1 : 0.98 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            {...props}
        >
            {loading ? (
                <div className="flex items-center gap-2">
                    <motion.div
                        className="h-4 w-4 rounded-full border-2 border-white border-t-transparent"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    <span>Loading...</span>
                </div>
            ) : children}
        </Component>
    );
});

Button.displayName = "Button";

export default Button;
