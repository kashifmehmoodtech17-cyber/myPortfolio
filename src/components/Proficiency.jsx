
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiFigma,
  SiGit,
  SiJavascript,
  SiMysql,
} from 'react-icons/si'

const skills = [
  {
    category: 'Frontend Development',
    icon: '',
    color: 'from-blue-500 to-cyan-400',
    tools: [
      { name: 'React', percent: 90, icon: <SiReact /> },
      { name: 'Tailwind', percent: 85, icon: <SiTailwindcss /> },
      { name: 'javaScript', percent: 70, icon: <SiJavascript /> },
      { name: 'Framer Motion', percent: 75, icon: <SiFramer /> },
    ],
  },
  {
    category: 'Backend Development',
    icon: '',
    color: 'from-green-500 to-emerald-400',
    tools: [
      { name: 'Node.js', percent: 80, icon: <SiNodedotjs /> },
      { name: 'Python', percent: 50, icon: <SiPython /> },
    ],
  },
  {
    category: 'Database & Tools',
    icon: '',
    color: 'from-purple-500 to-pink-400',
    tools: [
      { name: 'MySQL', percent: 70, icon: <SiMysql /> },
      { name: 'PostgreSQL', percent: 65, icon: <SiPostgresql /> },
      { name: 'Git', percent: 85, icon: <SiGit /> },
      { name: 'Figma', percent: 80, icon: <SiFigma /> },
    ],
  },
]

/* Counter Hook */
const Counter = ({ value, start }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let startValue = 0
    const interval = setInterval(() => {
      startValue++
      setCount(startValue)
      if (startValue === value) clearInterval(interval)
    }, 20)
    return () => clearInterval(interval)
  }, [value, start])

  return <span>{count}%</span>
}

const Proficiency = () => {
  const [visible, setVisible] = useState(false)

  return (
    <section
      id="proficiency"
      className="py-24 bg-gray-50 dark:bg-black transition-colors duration-500"
      onMouseEnter={() => setVisible(true)}
    >
      <div className="max-w-6xl mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
             Proficiency
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
           
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="
                bg-white dark:bg-gray-900
                p-8 rounded-3xl shadow-xl
                border border-gray-100 dark:border-gray-800
                relative overflow-hidden
              "
            >
              {/* Accent */}
              <div
                className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${skill.color}`}
              />

              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">{skill.icon}</span>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {skill.category}
                </h3>
              </div>

              {/* TOOLS */}
              <div className="space-y-4">
                {skill.tools.map((tool, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-1">
                      <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                        <span className="text-lg">{tool.icon}</span>
                        <span className="text-sm font-semibold">{tool.name}</span>
                      </div>
                      <span className="text-sm font-bold text-blue-600">
                        <Counter value={tool.percent} start={visible} />
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tool.percent}%` }}
                        transition={{ duration: 1 }}
                        className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Proficiency
