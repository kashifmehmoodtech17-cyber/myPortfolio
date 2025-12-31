import React from 'react'
import { motion } from 'framer-motion'
import aboutImage from "../assets/hero.jpg";

const AboutMe = () => {
    const skills = [
        'React.js',
        'Tailwind CSS',
        'UI/UX Design',
        'Framer Motion',
        'JavaScript',
    ]

    return (
        <section
            id="about"
            className="py-20 bg-white dark:bg-black transition-colors duration-500"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-16">

                    {/* LEFT SIDE (IMAGE + INFO) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="hidden md:flex flex-col items-center w-1/2"
                    >
                        {/* Image Frame */}
                        <div
                            className="
                                relative w-80 h-[450px]
                                rounded-3xl overflow-hidden
                                shadow-2xl border-8
                                bg-white dark:bg-gray-900
                                border-white dark:border-gray-800
                            "
                        >
                            <img
                                src={aboutImage}
                                alt="About Me"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* INFO BELOW IMAGE */}
                        <div className="mt-8 grid grid-cols-3 gap-4 w-full max-w-md">
                            <div className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800">
                                <p className="text-xl font-bold text-blue-600">😒</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    Experience
                                </p>
                            </div>

                            <div className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800">
                                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                                    Frontend Dev
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    React / UI
                                </p>
                            </div>

                            <div className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800">
                                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                                    Available
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    ❤️
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2 text-center md:text-left"
                    >
                        <h4 className="text-blue-600 font-bold uppercase tracking-widest text-[10px] md:text-sm mb-2">
                            My Journey
                        </h4>

                        {/* Responsive Heading Size */}
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 dark:text-white">
                            About Me
                        </h2>

                        {/* Responsive Paragraph Size */}
                        <p className="text-sm md:text-lg mb-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                            Hi, my name is Kashif Mehmood. I am a software engineering student currently in my 3rd semester at KUST University. I have a strong passion for building scalable and fast digital products using modern technologies. I enjoy learning new programming languages, exploring software development frameworks, and working on projects that solve real-world problems. My goal is to grow as a skilled software engineer and contribute to innovative technology solutions.
                        </p>

                        {/* SKILLS */}
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3">
                            {skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="
                                        px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[12px] md:text-sm font-medium
                                        bg-gray-50 dark:bg-gray-800
                                        text-gray-700 dark:text-gray-300
                                        border border-gray-200 dark:border-gray-700
                                    "
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default AboutMe