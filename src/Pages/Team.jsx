import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router'
import Background from '../components/Background'

const Team = () => {
    return (
        <div className="min-h-screen">
            <Background />
            {/* Team */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-black/70 to-purple-900/30 backdrop-blur-sm">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <h1 className="text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 pb-2">
                        Our Dream Team
                    </h1>
                    <p className="text-lg sm:text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                        The brilliant minds behind our success
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full px-6">
                    {[
                        { name: "Ahmad Fauzan Abdurrohman", id: "22110007" },
                        { name: "Muhamad Fahim Nurul Haqi", id: "22110047" },
                        { name: "Pahni Hanawan", id: "22110062" },
                        { name: "Chandra Aprilians", id: "22110308" }
                    ].map((member, index) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all hover:shadow-lg hover:shadow-cyan-500/20"
                        >
                            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-purple-300">
                                {member.name}
                            </h3>
                            <p className="text-blue-200 mt-1 font-mono">{member.id}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-10 text-sm sm:text-base font-light text-white/60 tracking-widest"
                >
                    © 2025 TEAM INNOVATION
                </motion.p>
                <motion.p
                    className="flex items-center justify-center mt-10 gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Launch{' '}
                    <motion.span
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            to="/"
                            className="text-blue-600 hover:text-purple-600 hover:underline transition-colors"
                        >
                            App
                        </Link>
                    </motion.span>
                </motion.p>
            </div>

        </div>
    );

}

export default Team