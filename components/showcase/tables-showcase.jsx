"use client";

import { motion } from "framer-motion";
import {
    ArrowUpDown,
    MoreHorizontal,
    ChevronDown,
    ChevronUp,
    Search,
} from "lucide-react";
import  Button  from "../ui/Button";
import { useState } from "react";

const users = [
    {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        role: "Admin",
        status: "Active",
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        role: "User",
        status: "Active",
    },
    {
        id: 3,
        name: "Bob Johnson",
        email: "bob@example.com",
        role: "User",
        status: "Inactive",
    },
    {
        id: 4,
        name: "Alice Brown",
        email: "alice@example.com",
        role: "Editor",
        status: "Active",
    },
    {
        id: 5,
        name: "Charlie Wilson",
        email: "charlie@example.com",
        role: "User",
        status: "Pending",
    },
];

export default function TablesShowcase() {
    const [sortField, setSortField] = useState("name");
    const [sortDirection, setSortDirection] = useState("asc");
    const [searchTerm, setSearchTerm] = useState("");

    const handleSort = (field) => {
        if (sortField === field) {
            setSortDirection(sortDirection === "asc" ? "desc" : "asc");
        } else {
            setSortField(field);
            setSortDirection("asc");
        }
    };

    // Filter and sort users
    const filteredUsers = users
        .filter(
            (user) =>
                user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.role.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
            if (sortDirection === "asc") {
                return a[sortField] > b[sortField] ? 1 : -1;
            } else {
                return a[sortField] < b[sortField] ? 1 : -1;
            }
        });

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
        >
            {/* Basic Table */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold text-white">
                    Basic Table
                </h2>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden">
                    <table className="w-full text-left">
                        <thead className="bg-white/5 border-b border-white/10">
                            <tr>
                                <th className="px-4 py-3 text-sm font-medium text-gray-300">
                                    Name
                                </th>
                                <th className="px-4 py-3 text-sm font-medium text-gray-300">
                                    Email
                                </th>
                                <th className="px-4 py-3 text-sm font-medium text-gray-300">
                                    Role
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {users.slice(0, 3).map((user) => (
                                <tr key={user.id} className="hover:bg-white/5">
                                    <td className="px-4 py-3 text-sm text-white">
                                        {user.name}
                                    </td>
                                    <td className="px-4 py-3 text-sm text-gray-400">
                                        {user.email}
                                    </td>
                                    <td className="px-4 py-3 text-sm text-gray-400">
                                        {user.role}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="p-4 bg-black/30 rounded-md">
                    <pre className="text-gray-300 text-sm overflow-x-auto">
                        <code>{`<table className="w-full text-left">
  <thead className="bg-white/5 border-b border-white/10">
    <tr>
      <th className="px-4 py-3 text-sm font-medium text-gray-300">Name</th>
      <th className="px-4 py-3 text-sm font-medium text-gray-300">Email</th>
      <th className="px-4 py-3 text-sm font-medium text-gray-300">Role</th>
    </tr>
  </thead>
  <tbody className="divide-y divide-white/5">
    {users.map((user) => (
      <tr key={user.id} className="hover:bg-white/5">
        <td className="px-4 py-3 text-sm text-white">{user.name}</td>
        <td className="px-4 py-3 text-sm text-gray-400">{user.email}</td>
        <td className="px-4 py-3 text-sm text-gray-400">{user.role}</td>
      </tr>
    ))}
  </tbody>
</table>`}</code>
                    </pre>
                </div>
            </div>

            {/* Advanced Table with Sorting and Filtering */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold text-white">
                    Advanced Table
                </h2>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden">
                    <div className="p-4 border-b border-white/10">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                            <input
                                type="text"
                                placeholder="Search users..."
                                className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-md text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>

                    <table className="w-full text-left">
                        <thead className="bg-white/5 border-b border-white/10">
                            <tr>
                                <th
                                    className="px-4 py-3 text-sm font-medium text-gray-300 cursor-pointer"
                                    onClick={() => handleSort("name")}
                                >
                                    <div className="flex items-center">
                                        Name
                                        {sortField === "name" ? (
                                            sortDirection === "asc" ? (
                                                <ChevronUp className="ml-1 h-4 w-4" />
                                            ) : (
                                                <ChevronDown className="ml-1 h-4 w-4" />
                                            )
                                        ) : (
                                            <ArrowUpDown className="ml-1 h-4 w-4 opacity-50" />
                                        )}
                                    </div>
                                </th>
                                <th
                                    className="px-4 py-3 text-sm font-medium text-gray-300 cursor-pointer"
                                    onClick={() => handleSort("email")}
                                >
                                    <div className="flex items-center">
                                        Email
                                        {sortField === "email" ? (
                                            sortDirection === "asc" ? (
                                                <ChevronUp className="ml-1 h-4 w-4" />
                                            ) : (
                                                <ChevronDown className="ml-1 h-4 w-4" />
                                            )
                                        ) : (
                                            <ArrowUpDown className="ml-1 h-4 w-4 opacity-50" />
                                        )}
                                    </div>
                                </th>
                                <th
                                    className="px-4 py-3 text-sm font-medium text-gray-300 cursor-pointer"
                                    onClick={() => handleSort("role")}
                                >
                                    <div className="flex items-center">
                                        Role
                                        {sortField === "role" ? (
                                            sortDirection === "asc" ? (
                                                <ChevronUp className="ml-1 h-4 w-4" />
                                            ) : (
                                                <ChevronDown className="ml-1 h-4 w-4" />
                                            )
                                        ) : (
                                            <ArrowUpDown className="ml-1 h-4 w-4 opacity-50" />
                                        )}
                                    </div>
                                </th>
                                <th
                                    className="px-4 py-3 text-sm font-medium text-gray-300 cursor-pointer"
                                    onClick={() => handleSort("status")}
                                >
                                    <div className="flex items-center">
                                        Status
                                        {sortField === "status" ? (
                                            sortDirection === "asc" ? (
                                                <ChevronUp className="ml-1 h-4 w-4" />
                                            ) : (
                                                <ChevronDown className="ml-1 h-4 w-4" />
                                            )
                                        ) : (
                                            <ArrowUpDown className="ml-1 h-4 w-4 opacity-50" />
                                        )}
                                    </div>
                                </th>
                                <th className="px-4 py-3 text-sm font-medium text-gray-300">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {filteredUsers.map((user) => (
                                <tr key={user.id} className="hover:bg-white/5">
                                    <td className="px-4 py-3 text-sm text-white">
                                        {user.name}
                                    </td>
                                    <td className="px-4 py-3 text-sm text-gray-400">
                                        {user.email}
                                    </td>
                                    <td className="px-4 py-3 text-sm text-gray-400">
                                        {user.role}
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                        <span
                                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                                user.status === "Active"
                                                    ? "bg-green-500/20 text-green-400"
                                                    : user.status === "Inactive"
                                                    ? "bg-red-500/20 text-red-400"
                                                    : "bg-yellow-500/20 text-yellow-400"
                                            }`}
                                        >
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="text-gray-400 hover:text-white"
                                        >
                                            <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="p-4 border-t border-white/10 flex items-center justify-between">
                        <div className="text-sm text-gray-400">
                            Showing {filteredUsers.length} of {users.length}{" "}
                            users
                        </div>
                        <div className="flex space-x-2">
                            <Button
                                variant="outline"
                                size="sm"
                                className="border-white/10 text-white"
                            >
                                Previous
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                className="border-white/10 text-white"
                            >
                                Next
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Responsive Table */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold text-white">
                    Responsive Table
                </h2>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-white/5 border-b border-white/10">
                                <tr>
                                    <th className="px-4 py-3 text-sm font-medium text-gray-300">
                                        ID
                                    </th>
                                    <th className="px-4 py-3 text-sm font-medium text-gray-300">
                                        Name
                                    </th>
                                    <th className="px-4 py-3 text-sm font-medium text-gray-300">
                                        Email
                                    </th>
                                    <th className="px-4 py-3 text-sm font-medium text-gray-300">
                                        Role
                                    </th>
                                    <th className="px-4 py-3 text-sm font-medium text-gray-300">
                                        Status
                                    </th>
                                    <th className="px-4 py-3 text-sm font-medium text-gray-300">
                                        Created At
                                    </th>
                                    <th className="px-4 py-3 text-sm font-medium text-gray-300">
                                        Last Login
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {users.map((user) => (
                                    <tr
                                        key={user.id}
                                        className="hover:bg-white/5"
                                    >
                                        <td className="px-4 py-3 text-sm text-gray-400">
                                            #{user.id}
                                        </td>
                                        <td className="px-4 py-3 text-sm text-white">
                                            {user.name}
                                        </td>
                                        <td className="px-4 py-3 text-sm text-gray-400">
                                            {user.email}
                                        </td>
                                        <td className="px-4 py-3 text-sm text-gray-400">
                                            {user.role}
                                        </td>
                                        <td className="px-4 py-3 text-sm">
                                            <span
                                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                                    user.status === "Active"
                                                        ? "bg-green-500/20 text-green-400"
                                                        : user.status ===
                                                          "Inactive"
                                                        ? "bg-red-500/20 text-red-400"
                                                        : "bg-yellow-500/20 text-yellow-400"
                                                }`}
                                            >
                                                {user.status}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-sm text-gray-400">
                                            Jan 10, 2023
                                        </td>
                                        <td className="px-4 py-3 text-sm text-gray-400">
                                            2 hours ago
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="p-4 bg-black/30 rounded-md">
                    <pre className="text-gray-300 text-sm overflow-x-auto">
                        <code>{`<div className="overflow-x-auto">
  <table className="w-full text-left">
    {/* Table content */}
  </table>
</div>`}</code>
                    </pre>
                </div>
            </div>

            {/* Card Table for Mobile */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold text-white">
                    Card Table (Mobile-Friendly)
                </h2>
                <div className="space-y-4 md:hidden">
                    {users.map((user) => (
                        <motion.div
                            key={user.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-4"
                        >
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-white font-medium">
                                    {user.name}
                                </h3>
                                <span
                                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                        user.status === "Active"
                                            ? "bg-green-500/20 text-green-400"
                                            : user.status === "Inactive"
                                            ? "bg-red-500/20 text-red-400"
                                            : "bg-yellow-500/20 text-yellow-400"
                                    }`}
                                >
                                    {user.status}
                                </span>
                            </div>

                            <div className="space-y-1 text-sm">
                                <div className="flex">
                                    <span className="text-gray-400 w-20">
                                        Email:
                                    </span>
                                    <span className="text-gray-300">
                                        {user.email}
                                    </span>
                                </div>
                                <div className="flex">
                                    <span className="text-gray-400 w-20">
                                        Role:
                                    </span>
                                    <span className="text-gray-300">
                                        {user.role}
                                    </span>
                                </div>
                                <div className="flex">
                                    <span className="text-gray-400 w-20">
                                        ID:
                                    </span>
                                    <span className="text-gray-300">
                                        #{user.id}
                                    </span>
                                </div>
                            </div>

                            <div className="mt-3 flex justify-end">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="text-gray-400 hover:text-white"
                                >
                                    <MoreHorizontal className="h-4 w-4" />
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="hidden md:block text-center text-gray-400 p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                    This card table is only visible on mobile devices. Resize
                    your browser to see it.
                </div>

                <div className="p-4 bg-black/30 rounded-md">
                    <pre className="text-gray-300 text-sm overflow-x-auto">
                        <code>{`{users.map((user) => (
  <div key={user.id} className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-4">
    <div className="flex justify-between items-start mb-2">
      <h3 className="text-white font-medium">{user.name}</h3>
      <span className={\`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium \${
        user.status === "Active" ? "bg-green-500/20 text-green-400" :
        user.status === "Inactive" ? "bg-red-500/20 text-red-400" :
        "bg-yellow-500/20 text-yellow-400"
      }\`}>
        {user.status}
      </span>
    </div>
    
    <div className="space-y-1 text-sm">
      <div className="flex">
        <span className="text-gray-400 w-20">Email:</span>
        <span className="text-gray-300">{user.email}</span>
      </div>
      {/* Other fields */}
    </div>
  </div>
))}`}</code>
                    </pre>
                </div>
            </div>
        </motion.div>
    );
}
