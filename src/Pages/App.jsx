import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { requestToGroqAI } from '../utils/groq';
import Header from '../components/app/Header';
import QueryForm from '../components/app/QueryForm';
import ResponseSection from '../components/app/ResponseSection';
import Footer from '../components/app/Footer';
import Background from '../components/Background';
import './App.css';

function App() {
  // Initialize state from localStorage
  const [response, setResponse] = useState("");
  const [input, setInput] = useState("");
  const [apiKey, setApiKey] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('groqApiKey') || "";
    }
    return "";
  });

  const validateApiKey = (key) => {
    return key && key.length > 30 && key.startsWith('gsk_');
  };
  
  const [isApiKeyValid, setIsApiKeyValid] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedKey = localStorage.getItem('groqApiKey');
      return !!savedKey && validateApiKey(savedKey);
    }
    return false;
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  // Refs
  const inputRef = useRef(null);
  const apiKeyRef = useRef(null);
  const responseRef = useRef(null);

  // Auto-focus appropriate field
  useEffect(() => {
    if (isApiKeyValid) {
      inputRef.current?.focus();
    } else {
      apiKeyRef.current?.focus();
    }
  }, [isApiKeyValid]);

  // Sync API key to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (apiKey && validateApiKey(apiKey)) {
        localStorage.setItem('groqApiKey', apiKey);
      } else {
        localStorage.removeItem('groqApiKey');
      }
    }
  }, [apiKey]);

  // Reset copied status after 2 seconds
  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);



  const handleApiKeySubmit = (e) => {
    e.preventDefault();
    if (validateApiKey(apiKey)) {
      setIsApiKeyValid(true);
    } else {
      setError("Please enter a valid API key (starts with gsk_)");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) {
      setError("Please enter a query");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const aiResponse = await requestToGroqAI(input, apiKey);
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

  const handleClear = () => {
    setInput("");
    setResponse("");
    setError(null);
    inputRef.current?.focus();
  };

  const handleResetApiKey = () => {
    setApiKey("");
    setIsApiKeyValid(false);
    setResponse("");
    setError(null);
  };

  const copyToClipboard = () => {
    if (!response) return;
    navigator.clipboard.writeText(response);
    setCopied(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!isApiKeyValid) {
        handleApiKeySubmit(e);
      } else {
        handleSubmit(e);
      }
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

        {!isApiKeyValid ? (
          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg"
            variants={itemVariants}
          >
            <h2 className="text-xl font-semibold mb-4 text-white">Enter Your Groq API Key</h2>
            <form onSubmit={handleApiKeySubmit} className="space-y-4">
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                ref={apiKeyRef}
                className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white/50 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="gsk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                onKeyDown={handleKeyDown}
              />
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md transition duration-200"
              >
                Save API Key
              </button>
            </form>
            {error && <p className="mt-2 text-red-400">{error}</p>}
            <p className="mt-4 text-sm text-white/70">
              Your API key is stored locally in your browser and never sent to our servers.
            </p>
          </motion.div>
        ) : (
          <>
            <motion.div className="flex justify-between items-center mb-4" variants={itemVariants}>
              <span className="text-sm text-white/70">
                Using API key: {apiKey.substring(0, 5)}...{apiKey.substring(apiKey.length - 4)}
              </span>
              <button
                onClick={handleResetApiKey}
                className="text-sm text-purple-300 hover:text-purple-100"
              >
                Change API Key
              </button>
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
          </>
        )}

        <motion.div variants={itemVariants}>
          <Footer />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default App;