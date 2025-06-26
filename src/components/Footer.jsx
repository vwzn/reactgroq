import { Sparkles } from 'lucide-react'
import { Link } from 'react-router'

function Footer() {
    return (
        <footer className="mt-12 text-center text-sm text-white">
            <p className="flex items-center justify-center gap-1">
                Powered by{' '}
                <Link
                    to="https://groq.com"
                    className="flex items-center gap-1 text-blue-600 hover:text-purple-600 hover:underline transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Sparkles className="w-4 h-4" />
                    Groq AI
                </Link>
            </p>
            <p className="flex items-center justify-center gap-1 mt-3">
                Built by{' '}       
                <Link
                    to="/Team"
                    className="text-blue-600 hover:text-purple-600 hover:underline transition-colors"
                >
                    Team Innovation
                </Link>
            </p>
        </footer>
    );
}

export default Footer;