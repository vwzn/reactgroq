import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { requestToGroqAI } from '../utils/groq';
import Header from '../components/Header';
import QueryForm from '../components/QueryForm';
import ResponseSection from '../components/ResponseSection';
import Footer from '../components/Footer';
import Background from '../components/Background';
import './App.css';

function App() {
  // State management
  const [response, setResponse] = useState("");
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  // Refs
  const inputRef = useRef(null);
  const responseRef = useRef(null);

  // Auto-focus input field on initial render
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Reset copied status after 2 seconds
  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) {
      setError("Please enter a query");
      inputRef.current?.focus();
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const aiResponse = await requestToGroqAI(input);
      setResponse(aiResponse);
      setTimeout(() => {
        responseRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } catch (err) {
      setError(`Error: ${err.message}`);
      console.error("API request failed:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // Clear form handler
  const handleClear = () => {
    setInput("");
    setResponse("");
    setError(null);
    inputRef.current?.focus();
  };

  // Copy to clipboard handler
  const copyToClipboard = () => {
    if (!response) return;
    navigator.clipboard.writeText(response);
    setCopied(true);
  };

  // Keyboard shortcut handler
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Background />
      
      <motion.div 
        className="container mx-auto px-4 py-8 max-w-4xl absolute inset-0 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Header />
        </motion.div>

        <motion.div className="space-y-6" variants={containerVariants}>
          <motion.div variants={itemVariants}>
            <QueryForm
              input={input}
              setInput={setInput}
              handleSubmit={handleSubmit}
              inputRef={inputRef}
              handleKeyDown={handleKeyDown}
              isLoading={isLoading}
              error={error}
            />
          </motion.div>

          <AnimatePresence>
            {response && (
              <motion.div
                variants={itemVariants}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                ref={responseRef}
              >
                <ResponseSection
                  response={response}
                  copied={copied}
                  copyToClipboard={copyToClipboard}
                  handleClear={handleClear}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Footer />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default App;