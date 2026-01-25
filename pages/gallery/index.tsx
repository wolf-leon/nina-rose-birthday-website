import { motion } from "framer-motion";

import { title, subtitle } from "@/components/primitives";
import { SparklesIcon, CakeIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";

export default function GalleryPage() {
  const photoPlaceholders = [
    { emoji: "🎂", label: "Birthday Cake", color: "from-pink-400 to-pink-600" },
    {
      emoji: "🎈",
      label: "Party Time",
      color: "from-purple-400 to-purple-600",
    },
    { emoji: "🎁", label: "Opening Gifts", color: "from-blue-400 to-blue-600" },
    { emoji: "🎉", label: "Celebration", color: "from-green-400 to-green-600" },
    { emoji: "🧁", label: "Sweet Treats", color: "from-pink-400 to-red-600" },
    {
      emoji: "🎊",
      label: "Fun & Games",
      color: "from-yellow-400 to-orange-600",
    },
    {
      emoji: "🌟",
      label: "Special Moments",
      color: "from-purple-400 to-pink-600",
    },
    { emoji: "💖", label: "Love & Joy", color: "from-red-400 to-pink-600" },
    { emoji: "🎭", label: "Silly Faces", color: "from-blue-400 to-purple-600" },
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
          <h1 className={title({ size: "lg", color: "violet" })}>
            Photo Gallery 📸
          </h1>
          <div className={subtitle({ class: "mt-4" })}>
            Capturing Nina Rose&apos;s special moments! ✨
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1 }}
          className="w-full max-w-6xl"
          initial={{ opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 dark:from-pink-900/20 dark:via-purple-900/20 dark:to-blue-900/20 rounded-2xl p-6 md:p-8 border-2 border-pink-300 dark:border-pink-700 shadow-lg text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-3">
              <CakeIcon className="text-pink-500" size={32} />
              <SparklesIcon className="text-purple-500" size={32} />
            </div>
            <p className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300">
              Add your favorite photos of Nina Rose here! 📷
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
              Replace these placeholders with real birthday memories
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {photoPlaceholders.map((photo, index) => (
              <motion.div
                key={index}
                animate={{ opacity: 1, scale: 1 }}
                className="group cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className={`bg-gradient-to-br ${photo.color} rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden aspect-square flex flex-col items-center justify-center p-6 border-4 border-white dark:border-gray-800`}
                >
                  <div className="text-8xl mb-4 group-hover:scale-110 transition-transform">
                    {photo.emoji}
                  </div>
                  <div className="bg-white/90 dark:bg-gray-900/90 rounded-xl px-4 py-2">
                    <p className="text-lg font-bold text-gray-800 dark:text-gray-200">
                      {photo.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-4xl mt-8"
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-yellow-100 via-pink-100 to-purple-100 dark:from-yellow-900/20 dark:via-pink-900/20 dark:to-purple-900/20 rounded-2xl p-8 border-2 border-yellow-300 dark:border-yellow-700 shadow-lg text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              💡 Gallery Tips
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-4">
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  📸 Add Real Photos
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Replace placeholders with actual birthday photos in the public
                  folder
                </p>
              </div>
              <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-4">
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  🎨 Customize Layout
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Adjust grid layout and add captions for each photo
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </DefaultLayout>
  );
}
