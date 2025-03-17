"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Eye, Copy, Check, Maximize2, Minimize2 } from "lucide-react";
import Button from "./Button";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function ComponentPreview({ 
    title,
    description,
    component: Component,
    code,
    sizes = ["default"],
    defaultSize = "default"
}) {
    const [view, setView] = useState("preview");
    const [copied, setCopied] = useState(false);
    const [size, setSize] = useState(defaultSize);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const getSizeClass = (currentSize) => {
        switch(currentSize) {
            case "sm": return "max-w-sm";
            case "md": return "max-w-md";
            case "lg": return "max-w-lg";
            case "xl": return "max-w-xl";
            case "2xl": return "max-w-2xl";
            case "full": return "w-full";
            default: return "max-w-md";
        }
    };

    return (
        <div className="space-y-4">
            {title && (
                <div>
                    <h3 className="text-lg font-semibold text-white">{title}</h3>
                    {description && (
                        <p className="text-sm text-gray-400 mt-1">{description}</p>
                    )}
                </div>
            )}
            
            <div className={`bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden ${isExpanded ? 'fixed inset-4 z-50' : ''}`}>
                <div className="flex items-center justify-between p-4 border-b border-white/10">
                    <div className="flex space-x-2">
                        <Button
                            variant={view === "preview" ? "default" : "outline"}
                            size="sm"
                            onClick={() => setView("preview")}
                            className={view === "preview" ? "bg-purple-600 hover:bg-purple-700 text-white" : "border-white/10 text-white hover:bg-white/10"}
                        >
                            <Eye className="w-4 h-4 mr-2" />
                            Preview
                        </Button>
                        <Button
                            variant={view === "code" ? "default" : "outline"}
                            size="sm"
                            onClick={() => setView("code")}
                            className={view === "code" ? "bg-purple-600 hover:bg-purple-700 text-white" : "border-white/10 text-white hover:bg-white/10"}
                        >
                            <Code className="w-4 h-4 mr-2" />
                            Code
                        </Button>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                        {sizes.length > 1 && view === "preview" && (
                            <select
                                value={size}
                                onChange={(e) => setSize(e.target.value)}
                                className="bg-white/5 border border-white/10 rounded-md text-sm text-white px-2 py-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            >
                                {sizes.map((s) => (
                                    <option key={s} value={s} className="bg-gray-900">
                                        {s.charAt(0).toUpperCase() + s.slice(1)}
                                    </option>
                                ))}
                            </select>
                        )}
                        
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="border-white/10 text-white hover:bg-white/10"
                        >
                            {isExpanded ? (
                                <Minimize2 className="w-4 h-4" />
                            ) : (
                                <Maximize2 className="w-4 h-4" />
                            )}
                        </Button>
                        
                        {view === "code" && (
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={handleCopy}
                                className="border-white/10 text-white hover:bg-white/10"
                            >
                                {copied ? (
                                    <Check className="w-4 h-4 text-green-500" />
                                ) : (
                                    <Copy className="w-4 h-4" />
                                )}
                            </Button>
                        )}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="p-6"
                >
                    {view === "preview" ? (
                        <div className={`mx-auto ${getSizeClass(size)}`}>
                            <Component />
                        </div>
                    ) : (
                        <div className="bg-black/20 rounded-lg overflow-x-scroll">
                            <SyntaxHighlighter
                                language="jsx"
                                style={atomDark}
                                customStyle={{
                                    margin: 0,
                                    padding: '1rem',
                                    background: 'transparent',
                                }}
                                codeTagProps={{
                                    style: {
                                        fontSize: '0.875rem',
                                        lineHeight: '1.5',
                                        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                                    }
                                }}
                            >
                                {code}
                            </SyntaxHighlighter>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
} 