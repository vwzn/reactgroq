import React from 'react'

const Background = () => {
    return (
        <>
            {/* Animated background elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-black">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-200 opacity-20 blur-3xl animate-float"></div>
                <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-purple-200 opacity-20 blur-3xl animate-float-delay"></div>
                <div className="absolute bottom-1/4 right-1/3 w-60 h-60 rounded-full bg-pink-200 opacity-20 blur-3xl animate-float-delay-2"></div>
            </div>
        </>
    )
}

export default Background
