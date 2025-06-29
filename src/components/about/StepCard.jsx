import { motion } from 'framer-motion';

const StepCard = ({ icon, title, content, color = 'blue', children }) => {
    const colorClasses = {
        blue: 'text-blue-400',
        yellow: 'text-yellow-400',
        purple: 'text-purple-400',
        pink: 'text-pink-400',
        green: 'text-green-400'
    };

    return (
        <motion.div
            className="md:w-1/2 bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700 shadow-lg"
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
            <div className={`flex items-center gap-2 ${colorClasses[color]} mb-2`}>
                {icon}
                <span className="font-mono">{title}</span>
            </div>
            {content && <p className="text-gray-200">{content}</p>}
            {children}
        </motion.div>
    );
};

export default StepCard;