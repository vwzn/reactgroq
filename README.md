# 🚀 ReactGroq - AI-Powered Chat Interface

![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-4.x-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-06B6D4?logo=tailwind-css&logoColor=white)
![Groq](https://img.shields.io/badge/Groq-API-00B4AB?logo=groq&logoColor=white)

A lightning-fast AI chat application built with modern web technologies. Experience conversational AI with stunning animations and responsive design.

![ReactGroq Screenshot](./public/screenshot.jpg) 

## ✨ Key Features

### 🚀 Performance Optimized
- **Vite-powered** build system for instant hot module replacement
- **SWC compiler** for fastest-in-class transpilation
- **Code splitting** for optimized loading

### 🎨 Beautiful UI/UX
- **Tailwind CSS** with custom design system
- **Framer Motion** for buttery-smooth animations
- **Dark/light mode** (coming soon!)
- **Fully responsive** across all devices

### 🤖 Advanced AI Integration
- **Groq Cloud** AI inference with ultra-low latency
- **Conversation history** management
- **Rate limiting** and error handling
- **Markdown support** in AI responses

### 🛠 Developer Experience
- **ESLint + Prettier** configured
- **Git hooks** via Husky
- **Component library** structure

## 🛠️ Getting Started

### 📋 Prerequisites

- Node.js 18+
- npm 9+ (or pnpm/yarn)
- Groq API key ([get one here](https://console.groq.com))

### ⚡ Quick Start

```bash
# Clone the repository
git clone https://github.com/vwzn/reactgroq.git
cd reactgroq

# Install dependencies
npm install  # or pnpm install / yarn

# Set up environment
cp .env.example .env
# Add your Groq API key to .env

# Start development server
npm run dev