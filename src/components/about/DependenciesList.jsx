import { motion } from 'framer-motion';

const DependenciesList = () => {
    return (
        <motion.section
            initial="hidden"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
                hidden: { opacity: 0, y: 30 },
                whileInView: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.5,
                        ease: "easeOut",
                        staggerChildren: 0.1
                    }
                }
            }}
            className="p-4 sm:p-6 bg-gradient-to-r from-blue-900/70 to-purple-900/70 rounded-lg sm:rounded-xl border border-gray-600/50 shadow-lg sm:shadow-xl backdrop-blur-sm mx-4 sm:mx-0"
        >
            {/* Judul section */}
            <motion.h3
                variants={{
                    hidden: { opacity: 0, y: 10 },
                    whileInView: { opacity: 1, y: 0 }
                }}
                className="text-lg sm:text-xl font-semibold mb-3 text-center text-white"
            >
                Dependencies Lengkap
            </motion.h3>

            {/* Grid daftar dependencies */}
            <motion.div
                variants={{
                    hidden: { opacity: 0 },
                    whileInView: { opacity: 1 }
                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm"
            >
                {/* Dependencies utama */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0, x: -20 },
                        whileInView: { opacity: 1, x: 0 }
                    }}
                >
                    <h4 className="font-mono text-yellow-300/90 mb-1 sm:mb-2 text-sm sm:text-base">Dependencies:</h4>
                    <ul className="space-y-1 sm:space-y-1.5 text-gray-200/90">
                        {['@tailwindcss/vite', 'framer-motion', 'groq-sdk', 'lucide-react',
                            'react & react-dom', 'react-icons', 'react-router', 'react-syntax-highlighter']
                            .map((item, index) => (
                                <motion.li
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, x: -10 },
                                        whileInView: { opacity: 1, x: 0 }
                                    }}
                                    className="flex items-start"
                                >
                                    <span className="text-gray-400 mr-1.5">-</span>
                                    <span>{item}</span>
                                </motion.li>
                            ))}
                    </ul>
                </motion.div>
                
                {/* Dev dependencies */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0, x: 20 },
                        whileInView: { opacity: 1, x: 0 }
                    }}
                >
                    <h4 className="font-mono text-yellow-300/90 mb-1 sm:mb-2 text-sm sm:text-base">Dev Dependencies:</h4>
                    <ul className="space-y-1 sm:space-y-1.5 text-gray-200/90">
                        {['@eslint/js', '@types/react', '@vitejs/plugin-react-swc', 'autoprefixer',
                            'eslint', 'postcss', 'tailwindcss', 'vite']
                            .map((item, index) => (
                                <motion.li
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, x: 10 },
                                        whileInView: { opacity: 1, x: 0 }
                                    }}
                                    className="flex items-start"
                                >
                                    <span className="text-gray-400 mr-1.5">-</span>
                                    <span>{item}</span>
                                </motion.li>
                            ))}
                    </ul>
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default DependenciesList;