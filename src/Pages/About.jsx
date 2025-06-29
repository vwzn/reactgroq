import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code, Code2, Terminal, Key, Package, Play } from 'lucide-react';

import { Image1, Image3 } from '../assets';
import Background from '../components/Background';
import AboutNavigation from '../components/about/AboutNavigation';
import StepSection from '../components/about/StepSection';
import StepCard from '../components/about/StepCard';
import DependenciesList from '../components/about/DependenciesList';

const About = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    return (
        <div className="relative min-h-screen" ref={containerRef}>
            <motion.div
                style={{ scale: backgroundScale }}
                className="fixed inset-0 w-full h-full"
            >
                <Background />
            </motion.div>

            <AboutNavigation />

            <div className="relative max-w-8xl mx-auto px-4 sm:px-28 py-12 z-10 pt-32">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="space-y-32 pb-32"
                >
                    {/* Introduction section */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                        className="min-h-[80vh] flex flex-col justify-center"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <Terminal className="text-blue-500 w-6 h-6" />
                            <h2 className="text-2xl font-semibold text-white">Apa itu Groq AI?</h2>
                        </div>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-gray-900/80 backdrop-blur-md p-6 rounded-xl border border-gray-700 shadow-xl"
                        >
                            <p className="text-gray-100 leading-relaxed">
                                Groq adalah platform AI super cepat yang menyediakan akses API ke model bahasa canggih seperti LLaMA 3.
                                Dengan Groq API, developer bisa mengintegrasikan kemampuan AI mutakhir ke aplikasi mereka dengan latensi rendah dan kecepatan tinggi.
                            </p>
                        </motion.div>
                    </motion.section>

                    {/* Step 1 */}
                    <StepSection
                        stepNumber={1}
                        title="Daftar di Groq"
                        description="Kunjungi website Groq dan buat akun developer untuk mendapatkan akses API."
                        image={Image1}
                    >
                        <StepCard
                            icon={<Terminal className="w-5 h-5" />}
                            title="console.groq.com"
                            content="Setelah login, Anda akan diarahkan ke dashboard developer untuk mengelola API key."
                            color="yellow"
                        />
                    </StepSection>

                    {/* Step 2 */}
                    <StepSection
                        stepNumber={2}
                        title="Buat API Key"
                        description="Di halaman API Keys, buat key baru dengan mengisi nama dan klik submit."
                        image={Image3}
                        reverse
                    >
                        <StepCard
                            icon={<Key className="w-5 h-5" />}
                            title="API Key Generator"
                            content="Simpan API key ini dengan aman karena hanya akan ditampilkan sekali."
                            color="yellow"
                        />
                    </StepSection>

                    {/* Step 3 */}
                    <StepSection
                        stepNumber={3}
                        title="Setup Environment"
                        description="Tambahkan API key ke file environment (.env) project Anda:"
                        code="VITE_GROQ=your_api_key_here"
                    >
                        <StepCard
                            icon={<Code2 className="w-5 h-5" />}
                            title="Konfigurasi"
                            content="Pastikan file .env ditambahkan ke .gitignore untuk keamanan."
                            color="blue"
                        />
                    </StepSection>

                    {/* Step 4 */}
                    <StepSection
                        stepNumber={4}
                        title="Instalasi Package"
                        description="Install package yang diperlukan menggunakan npm atau yarn:"
                        code="npm install groq-sdk"
                        reverse
                    >
                        <StepCard
                            icon={<Package className="w-5 h-5" />}
                            title="Dependencies"
                            content="Package utama yang dibutuhkan adalah groq-sdk untuk berkomunikasi dengan API."
                            color="purple"
                        />
                    </StepSection>

                    {/* Step 5 */}
                    <StepSection
                        stepNumber={5}
                        title="Buat Utility Function"
                        description="Buat file utils/groq.js untuk menangani request ke API:"
                        code={`import { Groq } from 'groq-sdk';\n\nconst groq = new Groq({\n  apiKey: import.meta.env.VITE_GROQ,\n  dangerouslyAllowBrowser: true\n});\n\nexport const requestToGroqAI = async (content) => {\n  const reply = await groq.chat.completions.create({\n    messages: [{ role: "user", content }],\n    model: "llama3-8b-8192"\n  });\n  return reply.choices[0]?.message?.content;\n};`}
                    >
                        <StepCard
                            icon={<Code className="w-5 h-5" />}
                            title="Penjelasan Kode"
                            color="pink"
                        >
                            <ul className="text-gray-200 space-y-2 text-sm">
                                <li>- <span className="text-blue-300">Groq()</span>: Inisialisasi client Groq</li>
                                <li>- <span className="text-blue-300">dangerouslyAllowBrowser</span>: Izinkan penggunaan di browser</li>
                                <li>- <span className="text-blue-300">chat.completions.create()</span>: Method untuk request ke AI</li>
                                <li>- <span className="text-blue-300">llama3-8b-8192</span>: Model yang digunakan</li>
                            </ul>
                        </StepCard>
                    </StepSection>

                    {/* Step 6 */}
                    <StepSection
                        stepNumber={6}
                        title="Jalankan Aplikasi"
                        description="Mulai development server dengan perintah:"
                        code="npm run dev"
                        reverse
                    >
                        <StepCard
                            icon={<Play className="w-5 h-5" />}
                            title="Development"
                            color="green"
                        >
                            <p className="text-gray-200">
                                Aplikasi akan berjalan di <span className="text-blue-300">http://localhost:5173/</span>
                            </p>
                            <p className="text-gray-300 text-sm mt-2">
                                Sekarang Anda bisa mulai mengintegrasikan Groq API ke dalam aplikasi React!
                            </p>
                        </StepCard>
                    </StepSection>

                    <DependenciesList />
                </motion.div>
            </div>
        </div>
    );
};

export default About;