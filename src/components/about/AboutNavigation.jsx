import { motion } from 'framer-motion';
import { Link } from 'react-router'; 

const AboutNavigation = ({ title = "About App" }) => {
    const navItems = [
        { to: "/", label: "App", className: "text-blue-400 hover:text-purple-400" },
        { to: "/Team", label: "Team", className: "text-blue-400 hover:text-purple-400" },
        { 
            to: "/About", 
            label: "Documentation", 
            className: "text-purple-400 underline decoration-2" 
        },
    ];

    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 w-full bg-black/20 backdrop-blur-md z-30 py-2 px-4 sm:py-3 md:py-4 sm:px-6 md:px-8 flex flex-col sm:flex-row justify-between items-center border-b border-gray-700/50 shadow-lg"
            role="banner" 
        >
            {/* Title */}
            <motion.h1 
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="py-1 sm:py-2 text-xs xs:text-sm sm:text-base md:text-lg font-semibold bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent drop-shadow-lg whitespace-nowrap overflow-hidden "
            >
                {title}
            </motion.h1>
            
            {/* Navigation Links */}
            <nav 
                className="flex space-x-3 sm:space-x-4 md:space-x-6 mt-1 sm:mt-0"
                aria-label="Main navigation" 
            >
                {navItems.map((item, index) => (
                    <Link
                        key={index}
                        to={item.to}
                        className={`hover:underline transition-colors duration-200 text-xs xs:text-sm sm:text-base md:text-lg font-medium px-1 py-1 ${item.className}`}
                        aria-current={item.to === "/About" ? "page" : undefined} 
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>
        </motion.header>
    );
};

export default AboutNavigation;