import React from 'react';

function Header() {
    return (
        <header className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
                {/* Logo Groq AI */}
                <a
                    href="https://groq.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white bg-opacity-70 backdrop-blur-md rounded-xl shadow-sm flex items-center"
                    aria-label="Groq AI"
                >
                    <img
                        src="https://groq.com/wp-content/uploads/2024/03/PBG-mark1-color.svg"
                        alt="Powered by Groq for fast inference."
                        className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                        style={{ minWidth: 24, minHeight: 24 }}
                    />
                </a>
                {/* Judul aplikasi */}
                <h1 className="text-base sm:text-2xl md:text-3xl font-semibold sm:font-bold tracking-tight text-white bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600">
                    Groq<span className="font-light ml-3 text-gray-200">AI</span><span className="hidden sm:inline"> Playground</span>
                </h1>
            </div>
        </header>
    );
}

export default Header;