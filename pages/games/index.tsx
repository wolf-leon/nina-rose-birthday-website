import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@heroui/button";

import { title, subtitle } from "@/components/primitives";
import { PartyIcon, SparklesIcon, BalloonIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";

export default function GamesPage() {
  const [balloonCount, setBalloonCount] = useState(0);
  const [confetti, setConfetti] = useState(false);

  const popBalloon = () => {
    setBalloonCount((prev) => prev + 1);
    if (balloonCount + 1 >= 10) {
      setConfetti(true);
      setTimeout(() => setConfetti(false), 3000);
    }
  };

  const colors = [
    "text-pink-500",
    "text-purple-500",
    "text-blue-500",
    "text-green-500",
    "text-yellow-500",
    "text-red-500",
  ];

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center gap-8 py-8 md:py-12">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={title({ size: "lg", color: "blue" })}>
            Fun & Games! 🎮
          </h1>
          <div className={subtitle({ class: "mt-4" })}>
            Let&apos;s play and have fun! 🎉
          </div>
        </motion.div>

        {confetti && (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
          >
            <div className="text-9xl animate-bounce">🎉</div>
          </motion.div>
        )}

        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-4xl"
          initial={{ opacity: 0, scale: 0.9 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 dark:from-pink-900/20 dark:via-purple-900/20 dark:to-blue-900/20 rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-pink-300 dark:border-pink-700">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Pop the Balloons! 🎈
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-2">
                Click the balloons to pop them!
              </p>
              <p className="text-2xl font-bold text-pink-600 dark:text-pink-400">
                Balloons Popped: {balloonCount} 🎉
              </p>
              {balloonCount >= 10 && (
                <motion.p
                  animate={{ scale: 1 }}
                  className="text-3xl font-bold text-green-600 dark:text-green-400 mt-4"
                  initial={{ scale: 0 }}
                >
                  🌟 Amazing! You&apos;re a balloon popping champion! 🌟
                </motion.p>
              )}
            </div>

            <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-6">
              {[...Array(15)].map((_, index) => (
                <motion.button
                  key={index}
                  className="focus:outline-none"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={popBalloon}
                >
                  <BalloonIcon
                    className={`${colors[index % colors.length]} hover:opacity-80 transition-opacity cursor-pointer`}
                    size={60}
                  />
                </motion.button>
              ))}
            </div>

            <div className="text-center">
              <Button
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-lg px-8 py-6"
                size="lg"
                startContent={<PartyIcon size={24} />}
                onPress={() => setBalloonCount(0)}
              >
                Reset Game
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-2xl p-8 border-2 border-yellow-300 dark:border-yellow-700 shadow-lg text-center">
            <div className="text-6xl mb-4">🎨</div>
            <h3 className="text-2xl font-bold text-yellow-700 dark:text-yellow-300 mb-3">
              Coloring Time
            </h3>
            <p className="text-lg text-yellow-600 dark:text-yellow-400">
              Grab your crayons and let&apos;s color together!
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-100 to-teal-100 dark:from-green-900/30 dark:to-teal-900/30 rounded-2xl p-8 border-2 border-green-300 dark:border-green-700 shadow-lg text-center">
            <div className="text-6xl mb-4">🎵</div>
            <h3 className="text-2xl font-bold text-green-700 dark:text-green-300 mb-3">
              Dance Party
            </h3>
            <p className="text-lg text-green-600 dark:text-green-400">
              Put on your favorite music and dance!
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-100 to-red-100 dark:from-pink-900/30 dark:to-red-900/30 rounded-2xl p-8 border-2 border-pink-300 dark:border-pink-700 shadow-lg text-center">
            <div className="text-6xl mb-4">🧩</div>
            <h3 className="text-2xl font-bold text-pink-700 dark:text-pink-300 mb-3">
              Puzzle Fun
            </h3>
            <p className="text-lg text-pink-600 dark:text-pink-400">
              Let&apos;s solve puzzles and build things!
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-2xl p-8 border-2 border-purple-300 dark:border-purple-700 shadow-lg text-center">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-3">
              Story Time
            </h3>
            <p className="text-lg text-purple-600 dark:text-purple-400">
              Read your favorite stories together!
            </p>
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1 }}
          className="w-full max-w-4xl"
          initial={{ opacity: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-blue-100 via-pink-100 to-purple-100 dark:from-blue-900/20 dark:via-pink-900/20 dark:to-purple-900/20 rounded-2xl p-8 border-2 border-blue-300 dark:border-blue-700 shadow-lg text-center">
            <SparklesIcon className="text-purple-500 mx-auto mb-4" size={48} />
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              More Games Coming Soon! 🎮
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              We&apos;re adding more fun activities for Nina Rose to enjoy!
            </p>
          </div>
        </motion.div>
      </section>
    </DefaultLayout>
  );
}
