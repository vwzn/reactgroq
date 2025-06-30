import { motion } from 'framer-motion';

const StepSection = ({ stepNumber, title, description, image, code, reverse = false, children }) => {
    return (
        <motion.section
            initial="hidden"
            whileInView="whileInView"
            variants={{
                hidden: { opacity: 0 },
                whileInView: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.2,
                        delayChildren: 0.1
                    }
                }
            }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            className={`min-h-[80vh] sm:min-h-screen flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 md:gap-12 items-center justify-center py-12 px-4 sm:px-8`}
        >
            {/* Content Column */}
            <motion.div
                className="w-full md:w-1/2 max-w-2xl"
                variants={{
                    hidden: { x: reverse ? 50 : -50, opacity: 0 },
                    whileInView: { 
                        x: 0, 
                        opacity: 1,
                        transition: { 
                            type: "spring", 
                            stiffness: 120,
                            damping: 12
                        }
                    }
                }}
            >
                <motion.div 
                    className="flex items-center gap-3 mb-4"
                    variants={{
                        hidden: { opacity: 0, y: 10 },
                        whileInView: { opacity: 1, y: 0 }
                    }}
                >
                    <motion.div 
                        className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shadow-lg"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {stepNumber}
                    </motion.div>
                    <motion.h3 
                        className="text-2xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300"
                        variants={{
                            hidden: { opacity: 0, x: -10 },
                            whileInView: { opacity: 1, x: 0 }
                        }}
                    >
                        {title}
                    </motion.h3>
                </motion.div>

                <motion.p 
                    className="text-gray-300 mb-6 text-base sm:text-lg leading-relaxed"
                    variants={{
                        hidden: { opacity: 0, y: 10 },
                        whileInView: { opacity: 1, y: 0 }
                    }}
                >
                    {description}
                </motion.p>
                
                {image && (
                    <motion.div
                        className="overflow-hidden rounded-xl shadow-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                        variants={{
                            hidden: { opacity: 0, scale: 0.95 },
                            whileInView: { opacity: 1, scale: 1 }
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <img 
                            src={image} 
                            alt={title} 
                            className="w-full h-auto object-contain" 
                            loading="lazy"
                        />
                    </motion.div>
                )}
                
                {code && (
                    <motion.div
                        className="mt-6 overflow-hidden rounded-xl shadow-lg"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            whileInView: { opacity: 1, y: 0 }
                        }}
                        whileHover={{ scale: 1.01 }}
                    >
                        <pre className="bg-gray-900/90 p-4 sm:p-6 rounded-xl text-green-400/90 text-xs sm:text-sm overflow-x-auto border border-gray-700/50 font-mono">
                            {code}
                        </pre>
                    </motion.div>
                )}
            </motion.div>
            
            {/* Children Content (typically the other column) */}
            <motion.div 
                className="w-full md:w-1/2 max-w-2xl"
                variants={{
                    hidden: { x: reverse ? -50 : 50, opacity: 0 },
                    whileInView: { 
                        x: 0, 
                        opacity: 1,
                        transition: { 
                            type: "spring", 
                            stiffness: 120,
                            damping: 12,
                            delay: 0.2
                        }
                    }
                }}
            >
                {children}
            </motion.div>
        </motion.section>
    );
};

export default StepSection;