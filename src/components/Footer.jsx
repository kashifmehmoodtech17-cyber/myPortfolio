import React from "react";
import { Github, Linkedin, Mail, Facebook, Twitter } from "lucide-react";
import footerImage from "../assets/hero.jpg";


const Footer = () => {
  const social = [
    { icon: <Github />, link: "https://github.com/kashifmehmoodtech17-cyber" },
    { icon: <Linkedin />, link: "https://www.linkedin.com/in/kashif-mehmood-a47594397" },
    { icon: <Mail />, link: "mailto:kashifmehmoodtech17@gmail.com" },
    { icon: <Facebook />, link: "https://www.facebook.com/share/1PSuS9FkCu/" },
    { icon: <Twitter />, link: "https://x.com/kamalikashi613" },
  ];

  return (
    <footer className="py-20 border-t border-gray-200 dark:border-gray-700 text-center">
      <div className="relative w-20 h-20 mx-auto mb-6">
        <div className="absolute inset-0 bg-cyan-500 rounded-full blur-xl opacity-30 animate-pulse" />
        <img
          src={footerImage}
          className="relative w-full h-full rounded-full object-cover border-2 border-cyan-500"
        />
      </div>
      <h3 className="text-xl font-bold mb-4">KASHIF MEHMOOD</h3>
      <div className="flex justify-center gap-8 mb-10 text-gray-900 dark:text-white">
        {social.map((s, i) => (
          <a
            key={i}
            href={s.link}
            target="_blank"
            className="hover:text-cyan-500 transition-colors text-2xl"
          >
            {s.icon}
          </a>
        ))}
      </div>
      <p className="text-slate-600 dark:text-gray-400 text-[10px] tracking-[0.5em] uppercase">
       Built to Impress
      </p>
    </footer>
  );
};

export default Footer;
