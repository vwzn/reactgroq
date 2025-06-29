import { motion } from 'framer-motion';

const StepSection = ({ stepNumber, title, description, image, code, reverse = false, children }) => {
    return (
        <motion.section
            initial="hidden"
            whileInView="whileInView"
            variants={{
                hidden: { opacity: 0, y: 50 },
                whileInView: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.6,
                        ease: "easeOut"
                    }
                }
            }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            className={`min-h-screen flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}
        >
            <motion.div
                className="md:w-1/2"
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: reverse ? 50 : -50, opacity: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
                <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shadow-md">
                        {stepNumber}
                    </div>
                    <h3 className="text-xl font-medium text-white">{title}</h3>
                </div>
                <p className="text-gray-200 mb-4">{description}</p>
                
                {image && (
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="overflow-hidden rounded-lg shadow-xl border border-gray-700"
                    >
                        <img src={image} alt={title} className="w-full h-auto" />
                    </motion.div>
                )}
                
                {code && (
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="overflow-hidden rounded-lg shadow-lg"
                    >
                        <pre className="bg-gray-900/90 p-4 rounded-lg text-green-400 text-sm overflow-x-auto border border-gray-700">
                            {code}
                        </pre>
                    </motion.div>
                )}
            </motion.div>
            
            {children}
        </motion.section>
    );
};

export default StepSection;