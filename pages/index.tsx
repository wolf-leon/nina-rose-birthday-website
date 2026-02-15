import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { motion } from "framer-motion";

import { title, subtitle } from "@/components/primitives";
import {
  BalloonIcon,
  CakeIcon,
  GiftIcon,
  SparklesIcon,
} from "@/components/icons";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-8 py-8 md:py-12">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center gap-4 mb-6">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <BalloonIcon className="text-pink-500" size={48} />
            </motion.div>
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3,
              }}
            >
              <BalloonIcon className="text-purple-500" size={48} />
            </motion.div>
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6,
              }}
            >
              <BalloonIcon className="text-blue-500" size={48} />
            </motion.div>
          </div>

          <h1 className={title({ size: "lg" })}>
            <span className="text-6xl md:text-8xl">🎉</span>
          </h1>
          <h1 className={title({ size: "lg", class: "mt-4" })}>
            Happy Birthday{" "}
          </h1>
          <h1 className={title({ color: "pink", size: "lg" })}>Nina Rose!</h1>

          <motion.div
            animate={{ scale: 1 }}
            className="mt-6"
            initial={{ scale: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          >
            <div className="inline-block">
              <div className="text-7xl md:text-9xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-pulse">
                2
              </div>
              <p className="text-2xl md:text-3xl font-bold text-pink-500 mt-2">
                Years Old Today! 🎂
              </p>
            </div>
          </motion.div>

          <div className={subtitle({ class: "mt-6 text-xl" })}>
            Celebrating this special day! 🎈✨
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 rounded-full animate-pulse opacity-50 blur-2xl" />
            <div className="relative bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 dark:from-pink-800 dark:via-purple-800 dark:to-blue-800 rounded-full p-3 shadow-2xl border-4 border-white dark:border-gray-700">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center overflow-hidden border-4 border-pink-300 dark:border-pink-700">
                <img
                  alt="Nina Rose"
                  className="w-full h-full object-cover"
                  src="/picture-72.jpeg"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextElementSibling?.classList.remove(
                      "hidden",
                    );
                  }}
                />
                <div className="hidden flex-col items-center justify-center text-center p-6">
                  <div className="text-7xl mb-3">👧</div>
                  <p className="text-lg font-bold text-pink-600 dark:text-pink-400">
                    Nina Rose
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Add photo: /public/nina-photo.jpg
                  </p>
                </div>
              </div>
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              className="absolute -top-4 -right-4"
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <SparklesIcon className="text-yellow-400" size={48} />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              className="absolute -bottom-4 -left-4"
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <CakeIcon className="text-pink-500" size={48} />
            </motion.div>
          </div>
          <motion.p
            animate={{ opacity: 1 }}
            className="text-center mt-6 text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <br />
            <br />
            Our Birthday Star! ⭐
          </motion.p>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-5xl mt-16"
          initial={{ opacity: 0, scale: 0.95 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <div className="bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 dark:from-orange-900/20 dark:via-pink-900/20 dark:to-purple-900/20 rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-orange-300 dark:border-orange-700">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                ⭐ Don&apos;t Miss These! ⭐
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-semibold">
                Explore the best parts of Nina&apos;s birthday website!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link href="/about">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer border-2 border-green-200 dark:border-green-700 h-full">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="text-4xl">⭐</div>
                      <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">
                        About Nina
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-lg">
                      Learn all about Nina Rose, her favorite things, family,
                      and special milestones!
                    </p>
                  </div>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link href="/uncle-leon">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer border-2 border-orange-200 dark:border-orange-700 h-full">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="text-4xl">💌</div>
                      <h3 className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                        Leon&apos;s Special Message
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-lg">
                      A heartfelt birthday message from Uncle Leon filled with
                      love and promises!
                    </p>
                  </div>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link href="/games#funny-moments">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer border-2 border-pink-200 dark:border-pink-700 h-full">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="text-4xl">🍕</div>
                      <h3 className="text-2xl font-bold text-pink-600 dark:text-pink-400">
                        Tales of Nina
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-lg">
                      Hilarious stories about Nina&apos;s adventures with
                      tahini, pizza heists, and more!
                    </p>
                  </div>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link href="/games">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer border-2 border-purple-200 dark:border-purple-700 h-full">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="text-4xl">🎮</div>
                      <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                        Interactive Games
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-lg">
                      Play memory match, solve puzzles, and have fun with
                      Nina&apos;s birthday games!
                    </p>
                  </div>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link href="/gallery">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer border-2 border-blue-200 dark:border-blue-700 h-full">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="text-4xl">📸</div>
                      <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        Photo Gallery
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-lg">
                      Browse through precious moments and beautiful memories of
                      Nina Rose!
                    </p>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1 }}
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          transition={{ delay: 2.0, duration: 1 }}
        >
          <p className="text-3xl md:text-4xl font-bold mb-4">
            🌟 Let&apos;s Make This Day Special! 🌟
          </p>
          <Button
            as={Link}
            className="bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 text-white font-bold text-xl px-12 py-8 shadow-2xl hover:shadow-3xl transition-all animate-pulse"
            href="/wishes"
            size="lg"
            startContent={<GiftIcon size={28} />}
          >
            Leave a Birthday Wish 💝
          </Button>
        </motion.div>
      </section>
    </DefaultLayout>
  );
}
