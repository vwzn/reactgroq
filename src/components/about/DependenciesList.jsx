import { motion } from 'framer-motion';

const DependenciesList = () => {
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
            className="p-6 bg-gradient-to-r from-blue-900/70 to-purple-900/70 rounded-xl border border-gray-700 shadow-xl backdrop-blur-sm"
        >
            <h3 className="text-xl font-semibold mb-3 text-center text-white">Dependencies Lengkap</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                    <h4 className="font-mono text-yellow-400 mb-2">Dependencies:</h4>
                    <ul className="space-y-1 text-gray-200">
                        <li>- @tailwindcss/vite</li>
                        <li>- framer-motion</li>
                        <li>- groq-sdk</li>
                        <li>- lucide-react</li>
                        <li>- react & react-dom</li>
                        <li>- react-icons</li>
                        <li>- react-router</li>
                        <li>- react-syntax-highlighter</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-mono text-yellow-400 mb-2">Dev Dependencies:</h4>
                    <ul className="space-y-1 text-gray-200">
                        <li>- @eslint/js</li>
                        <li>- @types/react</li>
                        <li>- @vitejs/plugin-react-swc</li>
                        <li>- autoprefixer</li>
                        <li>- eslint</li>
                        <li>- postcss</li>
                        <li>- tailwindcss</li>
                        <li>- vite</li>
                    </ul>
                </div>
            </div>
        </motion.section>
    );
};

export default DependenciesList;