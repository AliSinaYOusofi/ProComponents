"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight, Plus, Trash, Check } from "lucide-react";
import  Button  from "../ui/Button";

export default function ButtonsShowcase() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
        >
            {/* Basic Buttons */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold text-white">
                    Basic Buttons
                </h2>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6">
                    <div className="flex flex-wrap gap-4">
                        <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                            Primary
                        </Button>
                        <Button
                            variant="outline"
                            className="border-purple-500 text-purple-400 hover:bg-purple-500/20"
                        >
                            Secondary
                        </Button>
                        <Button
                            variant="ghost"
                            className="text-white hover:bg-white/10"
                        >
                            Ghost
                        </Button>
                        <Button variant="link" className="text-purple-400">
                            Link
                        </Button>
                        <Button className="bg-red-600 hover:bg-red-700 text-white">
                            Danger
                        </Button>
                        <Button className="bg-green-600 hover:bg-green-700 text-white">
                            Success
                        </Button>
                    </div>

                    <div className="mt-6 p-4 bg-black/30 rounded-md">
                        <pre className="text-gray-300 text-sm overflow-x-auto">
                            <code>{`<Button className="bg-purple-600 hover:bg-purple-700 text-white">
  Primary
</Button>`}</code>
                        </pre>
                    </div>
                </div>
            </div>

            {/* Button Sizes */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold text-white">
                    Button Sizes
                </h2>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6">
                    <div className="flex flex-wrap items-center gap-4">
                        <Button
                            size="sm"
                            className="bg-purple-600 hover:bg-purple-700 text-white"
                        >
                            Small
                        </Button>
                        <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                            Default
                        </Button>
                        <Button
                            size="lg"
                            className="bg-purple-600 hover:bg-purple-700 text-white"
                        >
                            Large
                        </Button>
                    </div>

                    <div className="mt-6 p-4 bg-black/30 rounded-md">
                        <pre className="text-gray-300 text-sm overflow-x-auto">
                            <code>{`<Button size="sm">Small</Button>
<Button>Default</Button>
<Button size="lg">Large</Button>`}</code>
                        </pre>
                    </div>
                </div>
            </div>

            {/* Icon Buttons */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold text-white">
                    Icon Buttons
                </h2>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6">
                    <div className="flex flex-wrap gap-4">
                        <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                            <Download className="mr-2 h-4 w-4" />
                            Download
                        </Button>
                        <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                            Continue
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button
                            size="icon"
                            className="bg-purple-600 hover:bg-purple-700 text-white"
                        >
                            <Plus className="h-4 w-4" />
                        </Button>
                        <Button
                            size="icon"
                            variant="outline"
                            className="border-red-500 text-red-400 hover:bg-red-500/20"
                        >
                            <Trash className="h-4 w-4" />
                        </Button>
                    </div>

                    <div className="mt-6 p-4 bg-black/30 rounded-md">
                        <pre className="text-gray-300 text-sm overflow-x-auto">
                            <code>{`<Button>
  <Download className="mr-2 h-4 w-4" />
  Download
</Button>

<Button size="icon">
  <Plus className="h-4 w-4" />
</Button>`}</code>
                        </pre>
                    </div>
                </div>
            </div>

            {/* Animated Buttons */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold text-white">
                    Animated Buttons
                </h2>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6">
                    <div className="flex flex-wrap gap-4">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                                Scale Animation
                            </Button>
                        </motion.div>

                        <motion.div
                            whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                            transition={{ duration: 0.5 }}
                        >
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                                Shake Animation
                            </Button>
                        </motion.div>

                        <Button className="relative bg-green-600 hover:bg-green-700 text-white overflow-hidden group">
                            <span className="relative z-10">Submit</span>
                            <span className="absolute inset-0 translate-y-full bg-green-800 transition-transform duration-300 ease-in-out group-hover:translate-y-0"></span>
                        </Button>
                    </div>

                    <div className="mt-6 p-4 bg-black/30 rounded-md">
                        <pre className="text-gray-300 text-sm overflow-x-auto">
                            <code>{`<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
  <Button className="bg-purple-600 hover:bg-purple-700 text-white">
    Scale Animation
  </Button>
</motion.div>`}</code>
                        </pre>
                    </div>
                </div>
            </div>

            {/* Loading State */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold text-white">
                    Loading State
                </h2>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6">
                    <div className="flex flex-wrap gap-4">
                        <Button
                            className="bg-purple-600 hover:bg-purple-700 text-white"
                            disabled
                        >
                            <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                            Loading...
                        </Button>

                        <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                            <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                            Processing
                        </Button>

                        <Button className="bg-green-600 hover:bg-green-700 text-white">
                            <Check className="mr-2 h-4 w-4" />
                            Completed
                        </Button>
                    </div>

                    <div className="mt-6 p-4 bg-black/30 rounded-md">
                        <pre className="text-gray-300 text-sm overflow-x-auto">
                            <code>{`<Button disabled>
  <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
  Loading...
</Button>`}</code>
                        </pre>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
