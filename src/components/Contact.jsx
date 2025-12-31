import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Facebook, Twitter } from "lucide-react";

const social = [
  { icon: <Github />, link: "https://github.com/" },
  { icon: <Linkedin />, link: "https://linkedin.com/" },
  { icon: <Mail />, link: "mailto:your-email@example.com" },
  { icon: <Facebook />, link: "https://facebook.com/" },
  { icon: <Twitter />, link: "https://twitter.com/" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 text-center px-6">
      <motion.div
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 50, opacity: 0 }}
      >
        <h3 className="text-cyan-500 font-mono mb-4 text-sm">What's Next?</h3>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Get In Touch
        </h2>
        <p className="max-w-md mx-auto text-gray-600 dark:text-gray-300 mb-10">
          I’m currently looking for new opportunities. My inbox is always open. 
          Whether you have a question or just want to say hi!
        </p>
        <a
          href="mailto:your-email@example.com"
          className="border border-cyan-500 text-cyan-500 px-10 py-4 rounded font-mono hover:bg-cyan-500/10 transition-all"
        >
          Say Hello
        </a>

        <div className="flex justify-center mt-10 gap-6">
          {social.map((s, i) => (
            <motion.a
              key={i}
              href={s.link}
              target="_blank"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-900 dark:text-white text-2xl hover:text-cyan-500 transition-colors"
            >
              {s.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
