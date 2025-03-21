"use client"

import React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bot, ChevronLeft, ChevronRight, FileText, BarChart3, Settings, User } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const ITEM_ICONS = {
  papers: FileText,
  analytics: BarChart3,
  settings: Settings,
  profile: User,
}

export default function DashboardSidebar({ activeItem, onItemClick, items }) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <motion.div
      className="h-screen bg-black/50 backdrop-blur-md border-r border-white/10 relative"
      initial={{ width: 240 }}
      animate={{ width: collapsed ? 80 : 240 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Logo */}
      <div className="flex items-center p-4 border-b border-white/10 h-16">
        <Bot className="w-8 h-8 text-purple-500" />
        <AnimatePresence>
          {!collapsed && (
            <motion.span
              className="text-white font-medium text-xl ml-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
            >
              ResearchAI
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Sidebar Items */}
      <nav className="p-3 space-y-2">
        {Object.entries(items).map(([key, { title }]) => {
          const Icon = ITEM_ICONS[key]
          const isActive = activeItem === key

          return (
            <motion.button
              key={key}
              onClick={() => onItemClick(key)}
              className={`w-full flex items-center rounded-lg p-3 transition-colors ${
                isActive ? "bg-purple-600 text-white" : "text-gray-400 hover:bg-white/10 hover:text-white"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Icon className="w-5 h-5" />
              <AnimatePresence>
                {!collapsed && (
                  <motion.span
                    className="ml-3 font-medium"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {title}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          )
        })}
      </nav>

      {/* Collapse Toggle Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute -right-3 top-20 bg-purple-600 text-white rounded-full w-6 h-6 p-1 border border-white/20 shadow-lg"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
      </Button>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
        <Link href="/">
          <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white hover:bg-white/10">
            <ChevronLeft className="w-5 h-5" />
            <AnimatePresence>
              {!collapsed && (
                <motion.span
                  className="ml-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  Back to Home
                </motion.span>
              )}
            </AnimatePresence>
          </Button>
        </Link>
      </div>
    </motion.div>
  )
}

