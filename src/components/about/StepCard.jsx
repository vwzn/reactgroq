import { motion } from 'framer-motion';

const StepCard = ({ icon, title, content, color = 'blue', children }) => {
    const colorClasses = {
        blue: 'from-blue-500/20 to-blue-700/20 text-blue-400 border-blue-500/30',
        yellow: 'from-yellow-500/20 to-yellow-700/20 text-yellow-400 border-yellow-500/30',
        purple: 'from-purple-500/20 to-purple-700/20 text-purple-400 border-purple-500/30',
        pink: 'from-pink-500/20 to-pink-700/20 text-pink-400 border-pink-500/30',
        green: 'from-green-500/20 to-green-700/20 text-green-400 border-green-500/30'
    };

    return (
        <motion.div
            className="sm:w-5/6 md:w-full lg:w-11/12 xl:w-5/6 bg-gradient-to-br from-gray-900/80 via-gray-900/70 to-gray-900/80 backdrop-blur-sm p-5 sm:p-6 rounded-xl border shadow-lg hover:shadow-xl transition-all duration-300"
            style={{
                backgroundImage: colorClasses[color],
                borderColor: colorClasses[color].split(' ')[2]
            }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            initial={{ x: 50, opacity: 0, scale: 0.95 }}
            whileHover={{ scale: 1.02, zIndex: 10 }}
            transition={{ 
                type: "spring", 
                stiffness: 150,
                damping: 15,
                delay: 0.1
            }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
        >
            <div className={`flex items-center gap-3 ${colorClasses[color].split(' ')[2]} mb-3`}>
                <motion.div 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {icon}
                </motion.div>
                <motion.span 
                    className="font-mono text-sm sm:text-base font-semibold"
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    {title}
                </motion.span>
            </div>
            
            {content && (
                <motion.p 
                    className="text-gray-300 text-xs sm:text-sm leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    {content}
                </motion.p>
            )}
            
            {children && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-3"
                >
                    {children}
                </motion.div>
            )}
        </motion.div>
    );
};

export default StepCard;