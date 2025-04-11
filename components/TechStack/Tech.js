import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaPython, FaNodeJs, FaJsSquare, FaGem } from "react-icons/fa";
import { SiRubyonrails } from "react-icons/si";

const techStack = [
  {
    name: "React",
    Icon: FaReact,
    color: "text-blue-400",
    experience: "6 years of dynamic UI wizardry",
    projects: ["Next.js Portfolio", "Real-Time Chat App", "Dashboard UI"],
    fun: "I use React to bring interfaces to life with component magic."
  },
  {
    name: "Python",
    Icon: FaPython,
    color: "text-yellow-300",
    experience: "8 years slinging scripts and AI logic",
    projects: ["AI Assistant", "Data Cruncher", "Backend APIs"],
    fun: "Python is my go-to for thinking fast and coding faster."
  },
  {
    name: "Node.js",
    Icon: FaNodeJs,
    color: "text-green-400",
    experience: "7 years of async backend hustle",
    projects: ["Socket Game Server", "REST APIs", "GraphQL Playground"],
    fun: "I love building realtime things with Node's raw energy."
  },
  {
    name: "JavaScript",
    Icon: FaJsSquare,
    color: "text-yellow-400",
    experience: "10+ years JS ninja moves",
    projects: ["Everything Web", "Games", "Animations Galore"],
    fun: "JS is the soul of the web, and I dance with it daily."
  },
  {
    name: "Ruby",
    Icon: FaGem,
    color: "text-pink-400",
    experience: "6 years of expressive backend zen",
    projects: ["Rails CRM", "Local Democracy Tools"],
    fun: "Elegant code that reads like poetry. Ruby is chef’s kiss."
  },
  {
    name: "Rails",
    Icon: SiRubyonrails,
    color: "text-red-400",
    experience: "6 years of fullstack flow",
    projects: ["Campaign Tools", "API Engines", "Turbo Streams"],
    fun: "I turbocharge MVPs with Rails rocket power."
  }
];

export default function TechGalaxy() {
  const [activeTech, setActiveTech] = useState(null);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden px-4 py-16">
      <h1 className="text-4xl font-extrabold text-center mb-12 animate-pulse text-white drop-shadow-lg">
        Explore My <span className="text-cyan-400">Tech Galaxy</span>
      </h1>

      <div className="flex flex-wrap gap-10 justify-center">
        {techStack.map((tech) => (
          <motion.div
            key={tech.name}
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTech(tech)}
            className={`p-6 rounded-full cursor-pointer hover:shadow-xl bg-gray-900 border-2 border-white/10 hover:border-cyan-400 transition ${tech.color}`}
          >
            <tech.Icon size={48} className="mx-auto" />
            <p className="text-center mt-2 text-sm font-bold">{tech.name}</p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeTech && (
          <motion.div
            key="detail-panel"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 80 }}
            className="fixed bottom-0 left-0 right-0 bg-gray-900/90 backdrop-blur-md p-8 border-t border-white/20"
          >
            <div className="max-w-3xl mx-auto text-center">
              <h2 className={`text-3xl font-bold mb-2 ${activeTech.color}`}>{activeTech.name}</h2>
              <p className="text-lg mb-4 font-light italic">{activeTech.experience}</p>
              <div className="flex flex-wrap justify-center gap-3 mb-4">
                {activeTech.projects.map((p, i) => (
                  <span
                    key={i}
                    className="bg-white/10 border border-white/20 px-4 py-1 rounded-full text-sm"
                  >
                    {p}
                  </span>
                ))}
              </div>
              <p className="text-sm opacity-80">{activeTech.fun}</p>
              <button
                onClick={() => setActiveTech(null)}
                className="mt-6 px-6 py-2 text-sm border border-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
