import { motion } from "framer-motion";

import { title, subtitle } from "@/components/primitives";
import { HeartFilledIcon, SparklesIcon, BalloonIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";

export default function UncleLeonPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center gap-8 py-8 md:py-12">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={title({ size: "lg", color: "pink" })}>
            A Special Message
          </h1>
          <div className={subtitle({ class: "mt-4" })}>
            From Uncle Lee, with all my love ❤️
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-4xl"
          initial={{ opacity: 0, scale: 0.9 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 dark:from-pink-900/20 dark:via-purple-900/20 dark:to-blue-900/20 rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-pink-300 dark:border-pink-700">
            <div className="flex justify-center mb-6">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <HeartFilledIcon className="text-red-500" size={80} />
              </motion.div>
            </div>

            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Dear Nina Rose,
              </h2>
            </div>

            <div className="space-y-6 text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              <p className="text-center font-semibold text-2xl text-pink-600 dark:text-pink-400">
                Happy 2nd Birthday, my precious niece! 🎂✨
              </p>

              <p>
                Watching you grow over these past two years has been one of the
                greatest joys of my life. From the moment you came into this
                world, you&apos;ve filled our hearts with so much love,
                laughter, and happiness.
              </p>

              <p>
                You are such a special little girl with the brightest smile and
                the sweetest heart. Every time I see you, you remind me of all
                the wonderful things in life - your curiosity, your giggles,
                your endless energy, and the way you make everyone around you
                smile.
              </p>

              <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/30 dark:to-purple-900/30 rounded-2xl p-6 my-6 border-2 border-pink-200 dark:border-pink-700">
                <p className="text-center text-2xl font-bold text-purple-600 dark:text-purple-400 mb-4">
                  My Promise to You 💝
                </p>
                <p className="text-center text-xl">
                  No matter where life takes us, no matter how big you grow,
                  <span className="font-bold text-pink-600 dark:text-pink-400">
                    {" "}
                    I will always be here for you
                  </span>
                  . Uncle Lee will always be just a call away, ready to play,
                  ready to listen, and ready to support you in everything you
                  do.
                </p>
              </div>

              <p>
                As you turn two today, I want you to know that you are loved
                beyond measure. You have a whole family who adores you, and
                I&apos;m so proud to be your Uncle Lee. I can&apos;t wait to see
                all the amazing things you&apos;ll do as you grow up!
              </p>

              <p className="text-center font-bold text-2xl text-blue-600 dark:text-blue-400">
                Dream big, little one. The world is yours to explore! 🌟
              </p>

              <p className="text-center text-xl">
                May your birthday be filled with cake, presents, laughter, and
                all your favorite things. You deserve the most magical day ever!
              </p>
            </div>

            <div className="mt-8 text-center">
              <p className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-4">
                Love you so much, Nina Rose 💖
              </p>
              <p className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
                With all my love,
              </p>
              <p className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mt-2">
                Uncle Lee
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="bg-gradient-to-br from-pink-100 to-pink-200 dark:from-pink-900/30 dark:to-pink-800/30 rounded-2xl p-6 border-2 border-pink-300 dark:border-pink-700 shadow-lg text-center">
            <div className="text-5xl mb-3">🎈</div>
            <p className="text-lg font-bold text-pink-700 dark:text-pink-300">
              Always Your Cheerleader
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 rounded-2xl p-6 border-2 border-purple-300 dark:border-purple-700 shadow-lg text-center">
            <div className="text-5xl mb-3">🤗</div>
            <p className="text-lg font-bold text-purple-700 dark:text-purple-300">
              Always Here for Hugs
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-2xl p-6 border-2 border-blue-300 dark:border-blue-700 shadow-lg text-center">
            <div className="text-5xl mb-3">⭐</div>
            <p className="text-lg font-bold text-blue-700 dark:text-blue-300">
              Forever Proud of You
            </p>
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1 }}
          className="w-full max-w-4xl"
          initial={{ opacity: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-yellow-100 via-pink-100 to-purple-100 dark:from-yellow-900/20 dark:via-pink-900/20 dark:to-purple-900/20 rounded-2xl p-8 border-2 border-yellow-300 dark:border-yellow-700 shadow-lg text-center">
            <div className="flex justify-center gap-3 mb-4">
              <BalloonIcon className="text-pink-500 animate-bounce" size={40} />
              <SparklesIcon
                className="text-purple-500 animate-pulse"
                size={40}
              />
              <BalloonIcon className="text-blue-500 animate-bounce" size={40} />
            </div>
            <p className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-3">
              Happy Birthday, Sweet Girl! 🎉
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              May this year bring you endless joy, adventure, and wonderful
              memories! 🌈✨
            </p>
          </div>
        </motion.div>
      </section>
    </DefaultLayout>
  );
}
