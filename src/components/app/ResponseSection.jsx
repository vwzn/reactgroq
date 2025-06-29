import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Copy, Check, Trash2 } from 'lucide-react';

function ResponseSection({
    response,
    copied,
    copyToClipboard,
    handleClear,
    responseRef,
}) {
    return (
        <section ref={responseRef} className="space-y-4 animate-fade-in">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-white">
                    AI Response
                </h2>
                <div className="flex gap-2">
                    <button
                        onClick={copyToClipboard}
                        disabled={!response}
                        className="p-2 bg-white bg-opacity-70 hover:bg-opacity-90 backdrop-blur-md rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                        aria-label="Copy to clipboard"
                    >
                        {copied ? (
                            <Check className="w-5 h-5 text-green-500" />
                        ) : (
                            <Copy className="w-5 h-5 text-white" />
                        )}
                    </button>
                    <button
                        onClick={handleClear}
                        className="p-2 bg-white bg-opacity-70 hover:bg-opacity-90 backdrop-blur-md rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                        aria-label="Clear response"
                    >
                        <Trash2 className="w-5 h-5 text-white" />
                    </button>
                </div>
            </div>
            <div className="rounded-xl overflow-hidden bg-white bg-opacity-70 backdrop-blur-md shadow-lg border border-white border-opacity-30 text-gray-800">
                <SyntaxHighlighter
                    language="markdown"
                    style={atomOneLight}
                    wrapLongLines={true}
                    showLineNumbers
                    showInlineLineNumbers
                    customStyle={{
                        margin: 0,
                        padding: '1.25rem',
                        fontSize: '0.9rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.5)',
                        backdropFilter: 'blur(10px)'
                    }}
                    lineNumberStyle={{
                        color: '#9ca3af',
                        minWidth: '2.5em'
                    }}
                >
                    {response}
                </SyntaxHighlighter>
            </div>
        </section>
    );
}

export default ResponseSection;