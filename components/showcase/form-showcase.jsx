"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Eye, EyeOff, AlertCircle } from "lucide-react";
import  Button  from "../ui/Button";

export default function FormsShowcase() {
    const [showPassword, setShowPassword] = useState(false);
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        password: "",
        remember: false,
    });

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
        >
            {/* Basic Form Inputs */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold text-white">
                    Basic Form Inputs
                </h2>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label
                                htmlFor="name"
                                className="text-sm font-medium text-gray-300"
                            >
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                value={formValues.name}
                                onChange={(e) =>
                                    setFormValues({
                                        ...formValues,
                                        name: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div className="space-y-2">
                            <label
                                htmlFor="email"
                                className="text-sm font-medium text-gray-300"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                value={formValues.email}
                                onChange={(e) =>
                                    setFormValues({
                                        ...formValues,
                                        email: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>

                    <div className="mt-6 p-4 bg-black/30 rounded-md">
                        <pre className="text-gray-300 text-sm overflow-x-auto">
                            <code>{`<input
  type="text"
  placeholder="Enter your name"
  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md text-white"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>`}</code>
                        </pre>
                    </div>
                </div>
            </div>

            {/* Password Input */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold text-white">
                    Password Input
                </h2>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6">
                    <div className="space-y-2">
                        <label
                            htmlFor="password"
                            className="text-sm font-medium text-gray-300"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 pr-10"
                                value={formValues.password}
                                onChange={(e) =>
                                    setFormValues({
                                        ...formValues,
                                        password: e.target.value,
                                    })
                                }
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
                            >
                                {showPassword ? (
                                    <EyeOff className="h-5 w-5" />
                                ) : (
                                    <Eye className="h-5 w-5" />
                                )}
                            </button>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">
                            Password must be at least 8 characters long
                        </p>
                    </div>

                    <div className="mt-6 p-4 bg-black/30 rounded-md">
                        <pre className="text-gray-300 text-sm overflow-x-auto">
                            <code>{`<div className="relative">
  <input
    type={showPassword ? "text" : "password"}
    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md text-white pr-10"
  />
  <button
    onClick={togglePasswordVisibility}
    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400"
  >
    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
  </button>
</div>`}</code>
                        </pre>
                    </div>
                </div>
            </div>

            {/* Checkbox and Radio */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold text-white">
                    Checkbox and Radio
                </h2>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <h3 className="text-white font-medium">
                                Checkboxes
                            </h3>

                            <div className="flex items-center space-x-2">
                                <input
                                    id="remember"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-white/10 bg-white/5 text-purple-600 focus:ring-purple-500"
                                    checked={formValues.remember}
                                    onChange={(e) =>
                                        setFormValues({
                                            ...formValues,
                                            remember: e.target.checked,
                                        })
                                    }
                                />
                                <label
                                    htmlFor="remember"
                                    className="text-sm text-gray-300"
                                >
                                    Remember me
                                </label>
                            </div>

                            <div className="flex items-center space-x-2">
                                <input
                                    id="terms"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-white/10 bg-white/5 text-purple-600 focus:ring-purple-500"
                                />
                                <label
                                    htmlFor="terms"
                                    className="text-sm text-gray-300"
                                >
                                    I agree to the terms and conditions
                                </label>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-white font-medium">
                                Radio Buttons
                            </h3>

                            <div className="space-y-2">
                                <div className="flex items-center space-x-2">
                                    <input
                                        id="option1"
                                        name="option"
                                        type="radio"
                                        className="h-4 w-4 border-white/10 bg-white/5 text-purple-600 focus:ring-purple-500"
                                        defaultChecked
                                    />
                                    <label
                                        htmlFor="option1"
                                        className="text-sm text-gray-300"
                                    >
                                        Option 1
                                    </label>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <input
                                        id="option2"
                                        name="option"
                                        type="radio"
                                        className="h-4 w-4 border-white/10 bg-white/5 text-purple-600 focus:ring-purple-500"
                                    />
                                    <label
                                        htmlFor="option2"
                                        className="text-sm text-gray-300"
                                    >
                                        Option 2
                                    </label>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <input
                                        id="option3"
                                        name="option"
                                        type="radio"
                                        className="h-4 w-4 border-white/10 bg-white/5 text-purple-600 focus:ring-purple-500"
                                    />
                                    <label
                                        htmlFor="option3"
                                        className="text-sm text-gray-300"
                                    >
                                        Option 3
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 p-4 bg-black/30 rounded-md">
                        <pre className="text-gray-300 text-sm overflow-x-auto">
                            <code>{`<div className="flex items-center space-x-2">
  <input
    id="remember"
    type="checkbox"
    className="h-4 w-4 rounded border-white/10 bg-white/5 text-purple-600"
    checked={remember}
    onChange={(e) => setRemember(e.target.checked)}
  />
  <label htmlFor="remember" className="text-sm text-gray-300">
    Remember me
  </label>
</div>`}</code>
                        </pre>
                    </div>
                </div>
            </div>

            {/* Form Validation */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold text-white">
                    Form Validation
                </h2>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label
                                htmlFor="email-valid"
                                className="text-sm font-medium text-gray-300"
                            >
                                Email (Valid)
                            </label>
                            <div className="relative">
                                <input
                                    id="email-valid"
                                    type="email"
                                    className="w-full px-3 py-2 bg-white/5 border border-green-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500 pr-10"
                                    defaultValue="user@example.com"
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <Check className="h-5 w-5 text-green-500" />
                                </div>
                            </div>
                            <p className="text-xs text-green-500 mt-1">
                                Email is valid
                            </p>
                        </div>

                        <div className="space-y-2">
                            <label
                                htmlFor="email-invalid"
                                className="text-sm font-medium text-gray-300"
                            >
                                Email (Invalid)
                            </label>
                            <div className="relative">
                                <input
                                    id="email-invalid"
                                    type="email"
                                    className="w-full px-3 py-2 bg-white/5 border border-red-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500 pr-10"
                                    defaultValue="invalid-email"
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <AlertCircle className="h-5 w-5 text-red-500" />
                                </div>
                            </div>
                            <p className="text-xs text-red-500 mt-1">
                                Please enter a valid email address
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 p-4 bg-black/30 rounded-md">
                        <pre className="text-gray-300 text-sm overflow-x-auto">
                            <code>{`<div className="relative">
  <input
    type="email"
    className="w-full px-3 py-2 bg-white/5 border border-red-500 rounded-md text-white pr-10"
  />
  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
    <AlertCircle className="h-5 w-5 text-red-500" />
  </div>
</div>
<p className="text-xs text-red-500 mt-1">Please enter a valid email address</p>`}</code>
                        </pre>
                    </div>
                </div>
            </div>

            {/* Complete Form */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold text-white">
                    Complete Form
                </h2>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6">
                    <form className="space-y-4">
                        <div className="space-y-2">
                            <label
                                htmlFor="full-name"
                                className="text-sm font-medium text-gray-300"
                            >
                                Full Name
                            </label>
                            <input
                                id="full-name"
                                type="text"
                                placeholder="Enter your full name"
                                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>

                        <div className="space-y-2">
                            <label
                                htmlFor="email-address"
                                className="text-sm font-medium text-gray-300"
                            >
                                Email Address
                            </label>
                            <input
                                id="email-address"
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>

                        <div className="space-y-2">
                            <label
                                htmlFor="message"
                                className="text-sm font-medium text-gray-300"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                placeholder="Enter your message"
                                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            ></textarea>
                        </div>

                        <div className="flex items-center space-x-2">
                            <input
                                id="newsletter"
                                type="checkbox"
                                className="h-4 w-4 rounded border-white/10 bg-white/5 text-purple-600 focus:ring-purple-500"
                            />
                            <label
                                htmlFor="newsletter"
                                className="text-sm text-gray-300"
                            >
                                Subscribe to newsletter
                            </label>
                        </div>

                        <div className="pt-2">
                            <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full">
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </motion.div>
    );
}
