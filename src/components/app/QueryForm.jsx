import { Send, Loader2, ChevronRight } from 'lucide-react';

function QueryForm({
    input,
    setInput,
    handleSubmit,
    inputRef,
    handleKeyDown,
    isLoading,
    error,
}) {
    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
                {/* Label input */}
                <label htmlFor="query" className="block text-sm font-medium text-white">
                    Ask Groq AI anything...
                </label>
                <div className="flex flex-col sm:flex-row gap-2">
                    {/* Input pertanyaan */}
                    <div className="flex-1 relative">
                        <input
                            ref={inputRef}
                            type="text"
                            id="query"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            disabled={isLoading}
                            className="w-full p-4 pr-12 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 bg-white bg-opacity-70 backdrop-blur-md border border-white border-opacity-30 text-gray-900 transition-all duration-200 hover:shadow-md focus:shadow-lg"
                            placeholder="Type your question here..."
                        />
                        {/* Tombol submit (ikon) */}
                        <button
                            type="submit"
                            disabled={isLoading || !input.trim()}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-blue-600 hover:text-blue-800 disabled:text-gray-400 transition-colors"
                        >
                            {isLoading ? (
                                <Loader2 className="w-5 h-5 animate-spin" />
                            ) : (
                                <ChevronRight className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                    {/* Tombol submit untuk mobile */}
                    <button
                        type="submit"
                        disabled={isLoading || !input.trim()}
                        className="sm:hidden flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 text-white rounded-xl transition-all duration-200 hover:shadow-md disabled:cursor-not-allowed"
                    >
                        {isLoading ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                            <Send className="w-5 h-5" />
                        )}
                        <span>Submit</span>
                    </button>
                </div>
                {/* Pesan error jika ada */}
                {error && (
                    <p className="mt-1 text-sm text-red-600 animate-pulse">
                        {error}
                    </p>
                )}
            </div>
        </form>
    );
}

export default QueryForm;