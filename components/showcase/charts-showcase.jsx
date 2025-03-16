"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import  Button  from "../ui/Button";

export default function ChartsShowcase() {
    const [activeChart, setActiveChart] = useState("bar");

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
        >
            <div className="flex flex-wrap gap-2">
                {["bar", "line", "pie", "radar", "doughnut"].map((chart) => (
                    <Button
                        key={chart}
                        variant={activeChart === chart ? "default" : "outline"}
                        className={
                            activeChart === chart
                                ? "bg-purple-600 hover:bg-purple-700 text-white"
                                : "border-white/10 text-white hover:bg-white/10"
                        }
                        onClick={() => setActiveChart(chart)}
                    >
                        {chart.charAt(0).toUpperCase() + chart.slice(1)} Chart
                    </Button>
                ))}
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6">
                <div className="text-center mb-4">
                    <h3 className="text-lg font-medium text-white">
                        {activeChart.charAt(0).toUpperCase() +
                            activeChart.slice(1)}{" "}
                        Chart Example
                    </h3>
                    <p className="text-gray-400">
                        Interactive and responsive chart component
                    </p>
                </div>

                <div className="h-64 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                        <p>Chart visualization would appear here</p>
                        <p className="text-sm mt-2">
                            Implement with Chart.js, Recharts, or other
                            libraries
                        </p>
                    </div>
                </div>

                <div className="mt-6 p-4 bg-black/30 rounded-md">
                    <pre className="text-gray-300 text-sm overflow-x-auto">
                        <code>{`// Example with Chart.js
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Sales',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgba(124, 58, 237, 0.5)',
      borderColor: 'rgba(124, 58, 237, 1)',
      borderWidth: 1,
    },
  ],
};

<Bar data={data} options={options} />`}</code>
                    </pre>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6"
                >
                    <h3 className="text-lg font-medium text-white mb-4">
                        Chart Customization
                    </h3>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">
                                Chart Title
                            </label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                defaultValue="Monthly Sales Data"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">
                                    X-Axis Label
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    defaultValue="Month"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">
                                    Y-Axis Label
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    defaultValue="Sales ($)"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">
                                Color Scheme
                            </label>
                            <div className="flex gap-2">
                                <button className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white"></button>
                                <button className="w-8 h-8 rounded-full bg-blue-500"></button>
                                <button className="w-8 h-8 rounded-full bg-green-500"></button>
                                <button className="w-8 h-8 rounded-full bg-red-500"></button>
                                <button className="w-8 h-8 rounded-full bg-yellow-500"></button>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6"
                >
                    <h3 className="text-lg font-medium text-white mb-4">
                        Chart Data
                    </h3>
                    <div className="space-y-4">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-white/5 border-b border-white/10">
                                    <tr>
                                        <th className="px-4 py-2 text-sm font-medium text-gray-300">
                                            Month
                                        </th>
                                        <th className="px-4 py-2 text-sm font-medium text-gray-300">
                                            Sales
                                        </th>
                                        <th className="px-4 py-2 text-sm font-medium text-gray-300">
                                            Expenses
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {[
                                        "Jan",
                                        "Feb",
                                        "Mar",
                                        "Apr",
                                        "May",
                                        "Jun",
                                    ].map((month, i) => (
                                        <tr
                                            key={month}
                                            className="hover:bg-white/5"
                                        >
                                            <td className="px-4 py-2 text-sm text-white">
                                                {month}
                                            </td>
                                            <td className="px-4 py-2 text-sm text-gray-400">
                                                $
                                                {Math.floor(
                                                    Math.random() * 5000
                                                ) + 1000}
                                            </td>
                                            <td className="px-4 py-2 text-sm text-gray-400">
                                                $
                                                {Math.floor(
                                                    Math.random() * 3000
                                                ) + 500}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="flex justify-end">
                            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                                Update Chart
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6">
                <h3 className="text-lg font-medium text-white mb-4">
                    Chart Export Options
                </h3>
                <div className="flex flex-wrap gap-3">
                    <Button
                        variant="outline"
                        className="border-white/10 text-white hover:bg-white/10"
                    >
                        Export as PNG
                    </Button>
                    <Button
                        variant="outline"
                        className="border-white/10 text-white hover:bg-white/10"
                    >
                        Export as JPEG
                    </Button>
                    <Button
                        variant="outline"
                        className="border-white/10 text-white hover:bg-white/10"
                    >
                        Export as SVG
                    </Button>
                    <Button
                        variant="outline"
                        className="border-white/10 text-white hover:bg-white/10"
                    >
                        Export Data as CSV
                    </Button>
                    <Button
                        variant="outline"
                        className="border-white/10 text-white hover:bg-white/10"
                    >
                        Print Chart
                    </Button>
                </div>
            </div>
        </motion.div>
    );
}
