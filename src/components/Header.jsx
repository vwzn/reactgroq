import { Sparkles } from 'lucide-react';

function Header() {
    return (
        <header className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-white bg-opacity-70 backdrop-blur-md rounded-xl shadow-sm">
                    <Sparkles className="w-6 h-6 text-blue-600" />
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-white bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    React JS + Groq AI
                </h1>
            </div>
        </header>
    );
}

export default Header;