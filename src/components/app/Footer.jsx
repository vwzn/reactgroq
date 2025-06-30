import { Sparkles } from 'lucide-react'
import { Link } from 'react-router' 

function Footer() {
    return (
        <footer className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-15 py-4 sm:py-15 text-center text-xs sm:text-sm text-white">
            <p className="flex items-center justify-center gap-1">
                Powered by{' '}
                <Link
                    to="https://groq.com"
                    className="flex items-center gap-1 text-blue-600 hover:text-purple-600 hover:underline transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                    Groq AI
                </Link>
            </p>
            
            <p className="flex items-center justify-center gap-1">
                Built by{' '}       
                <Link
                    to="/Team"
                    className="text-blue-600 hover:text-purple-600 hover:underline transition-colors"
                >
                    Team Innovation
                </Link>
            </p>
            
            <p className="flex items-center justify-center gap-1">
                See{' '}       
                <Link
                    to="/About"
                    className="text-blue-600 hover:text-purple-600 hover:underline transition-colors"
                >
                    Documentation
                </Link>
            </p>
        </footer>
    );
}

export default Footer;