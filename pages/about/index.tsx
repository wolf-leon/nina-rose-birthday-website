import { motion } from "framer-motion";

import { title, subtitle } from "@/components/primitives";
import {
  SparklesIcon,
  CakeIcon,
  BalloonIcon,
  HeartFilledIcon,
} from "@/components/icons";
import DefaultLayout from "@/layouts/default";

export default function AboutPage() {
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
            Meet Nina Rose! 🌹
          </h1>
          <div className={subtitle({ class: "mt-4" })}>
            Our little star is turning 3! ✨
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 rounded-full animate-pulse opacity-50 blur-2xl" />
            <div className="relative bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 dark:from-pink-800 dark:via-purple-800 dark:to-blue-800 rounded-full p-3 shadow-2xl border-4 border-white dark:border-gray-700">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center overflow-hidden border-4 border-pink-300 dark:border-pink-700">
                <img
                  alt="Nina Rose"
                  className="w-full h-full object-cover"
                  src="/nina-photo.jpg"
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
          <div className="text-center mt-6 space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Nina Rose
            </h2>
            <p className="text-3xl md:text-4xl font-bold text-pink-600 dark:text-pink-400">
              Turning 3 Years Old! 🎉
            </p>
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/30 dark:to-pink-800/30 rounded-2xl p-8 border-2 border-pink-300 dark:border-pink-700 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <HeartFilledIcon className="text-pink-500" size={32} />
              <h3 className="text-2xl font-bold text-pink-700 dark:text-pink-300">
                Favorite Things
              </h3>
            </div>
            <ul className="space-y-3 text-lg text-pink-700 dark:text-pink-300">
              <li className="flex items-center gap-2">
                <span className="text-2xl">🧸</span>
                <span>Playing with toys</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-2xl">🎨</span>
                <span>Smiling</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-2xl">📚</span>
                <span>Story time</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-2xl">🎵</span>
                <span>Singing and dancing</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-2xl">🍰</span>
                <span>Big Foodie!</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-2xl p-8 border-2 border-purple-300 dark:border-purple-700 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <SparklesIcon className="text-purple-500" size={32} />
              <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-300">
                Special Talents
              </h3>
            </div>
            <ul className="space-y-3 text-lg text-purple-700 dark:text-purple-300">
              <li className="flex items-center gap-2">
                <span className="text-2xl">😊</span>
                <span>Making everyone smile</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-2xl">🤗</span>
                <span>Giving the best hugs</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-2xl">🌟</span>
                <span>Being super curious</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-2xl">💖</span>
                <span>Spreading joy everywhere</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-2xl">🎭</span>
                <span>Being silly and fun</span>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1 }}
          className="w-full max-w-4xl"
          initial={{ opacity: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-blue-50 via-pink-50 to-purple-50 dark:from-blue-900/20 dark:via-pink-900/20 dark:to-purple-900/20 rounded-2xl p-8 md:p-12 border-2 border-blue-300 dark:border-blue-700 shadow-lg">
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Nina&apos;s Loving Family 👨‍👩‍👧
            </h3>

            <div className="space-y-6">
              <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 border-2 border-pink-300 dark:border-pink-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">👨‍👩‍👧‍👧</div>
                  <h4 className="text-2xl font-bold text-pink-600 dark:text-pink-400">
                    Parents & Sister
                  </h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-2 border-pink-300 dark:border-pink-700 bg-gradient-to-br from-pink-100 to-pink-200 dark:from-pink-900/30 dark:to-pink-800/30 flex items-center justify-center">
                      <img
                        alt="Sherwin Cabral"
                        className="w-full h-full object-cover"
                        src="/family/sherwin.jpg"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          e.currentTarget.nextElementSibling?.classList.remove(
                            "hidden",
                          );
                        }}
                      />
                      <span className="hidden text-3xl">👨</span>
                    </div>
                    <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Sherwin Cabral
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Dad
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-2 border-pink-300 dark:border-pink-700 bg-gradient-to-br from-pink-100 to-pink-200 dark:from-pink-900/30 dark:to-pink-800/30 flex items-center justify-center">
                      <img
                        alt="Skeeter Cabral"
                        className="w-full h-full object-cover"
                        src="/family/skeeter.jpg"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          e.currentTarget.nextElementSibling?.classList.remove(
                            "hidden",
                          );
                        }}
                      />
                      <span className="hidden text-3xl">👩</span>
                    </div>
                    <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Skeeter Cabral
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Mom
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-2 border-pink-300 dark:border-pink-700 bg-gradient-to-br from-pink-100 to-pink-200 dark:from-pink-900/30 dark:to-pink-800/30 flex items-center justify-center">
                      <img
                        alt="Norah Anne"
                        className="w-full h-full object-cover"
                        src="/family/norah.jpg"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          e.currentTarget.nextElementSibling?.classList.remove(
                            "hidden",
                          );
                        }}
                      />
                      <span className="hidden text-3xl">👧</span>
                    </div>
                    <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Norah Anne
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Sister
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 border-2 border-purple-300 dark:border-purple-700">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-4xl">👵👴</div>
                    <h4 className="text-xl font-bold text-purple-600 dark:text-purple-400">
                      Avós paternos
                    </h4>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-2 rounded-full overflow-hidden border-2 border-purple-300 dark:border-purple-700 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 flex items-center justify-center">
                        <img
                          alt="Aleixo Dacosta"
                          className="w-full h-full object-cover"
                          src="/family/aleixo.jpg"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                            e.currentTarget.nextElementSibling?.classList.remove(
                              "hidden",
                            );
                          }}
                        />
                        <span className="hidden text-2xl">👴</span>
                      </div>
                      <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                        Aleixo Dacosta
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Grandpa
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-2 rounded-full overflow-hidden border-2 border-purple-300 dark:border-purple-700 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 flex items-center justify-center">
                        <img
                          alt="Joyce Dacosta"
                          className="w-full h-full object-cover"
                          src="/family/joyce.jpg"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                            e.currentTarget.nextElementSibling?.classList.remove(
                              "hidden",
                            );
                          }}
                        />
                        <span className="hidden text-2xl">👵</span>
                      </div>
                      <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                        Joyce Dacosta
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Grandma
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 border-2 border-indigo-300 dark:border-indigo-700">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-4xl">👴👵</div>
                    <h4 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                      Avós maternos
                    </h4>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-2 rounded-full overflow-hidden border-2 border-indigo-300 dark:border-indigo-700 bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-indigo-900/30 dark:to-indigo-800/30 flex items-center justify-center">
                        <img
                          alt="Peter Cabral"
                          className="w-full h-full object-cover"
                          src="/family/peter.jpg"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                            e.currentTarget.nextElementSibling?.classList.remove(
                              "hidden",
                            );
                          }}
                        />
                        <span className="hidden text-2xl">👴</span>
                      </div>
                      <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                        Peter Cabral
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Grandpa
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-2 rounded-full overflow-hidden border-2 border-indigo-300 dark:border-indigo-700 bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-indigo-900/30 dark:to-indigo-800/30 flex items-center justify-center">
                        <img
                          alt="Late Gina Cabral"
                          className="w-full h-full object-cover"
                          src="/family/gina.jpg"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                            e.currentTarget.nextElementSibling?.classList.remove(
                              "hidden",
                            );
                          }}
                        />
                        <span className="hidden text-2xl">👵</span>
                      </div>
                      <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                        Late Gina Cabral
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Grandma 🕊️
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">🙏✨</div>
                  <h4 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    Godparents
                  </h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-2 border-blue-300 dark:border-blue-700 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 flex items-center justify-center">
                      <img
                        alt="Francesca Cabral"
                        className="w-full h-full object-cover"
                        src="/family/francesca.jpg"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          e.currentTarget.nextElementSibling?.classList.remove(
                            "hidden",
                          );
                        }}
                      />
                      <span className="hidden text-3xl">👩</span>
                    </div>
                    <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Francesca Cabral
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Godmother
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-2 border-blue-300 dark:border-blue-700 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 flex items-center justify-center">
                      <img
                        alt="Roger Pereira"
                        className="w-full h-full object-cover"
                        src="/family/roger.jpg"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          e.currentTarget.nextElementSibling?.classList.remove(
                            "hidden",
                          );
                        }}
                      />
                      <span className="hidden text-3xl">👨</span>
                    </div>
                    <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Roger Pereira
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Godfather
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Surrounded by love from family and friends! 💖
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1 }}
          className="w-full max-w-4xl"
          initial={{ opacity: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-pink-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-pink-900/20 rounded-2xl p-8 md:p-12 border-2 border-yellow-300 dark:border-yellow-700 shadow-lg">
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500 bg-clip-text text-transparent">
              Nina&apos;s Amazing Milestones 🌟
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">🎂</span>
                  <h4 className="text-xl font-bold text-yellow-700 dark:text-yellow-300">
                    Age 1
                  </h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  First steps and first words!
                </p>
              </div>

              <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">🎈</span>
                  <h4 className="text-xl font-bold text-orange-700 dark:text-orange-300">
                    Age 2
                  </h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Running, jumping, and talking up a storm!
                </p>
              </div>

              <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">⭐</span>
                  <h4 className="text-xl font-bold text-pink-700 dark:text-pink-300">
                    Age 3
                  </h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Growing into an amazing little person!
                </p>
              </div>

              <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">🚀</span>
                  <h4 className="text-xl font-bold text-purple-700 dark:text-purple-300">
                    Future
                  </h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  So many adventures ahead!
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="flex justify-center gap-3 mb-4">
                <BalloonIcon
                  className="text-pink-500 animate-bounce"
                  size={40}
                />
                <CakeIcon className="text-purple-500" size={40} />
                <BalloonIcon
                  className="text-blue-500 animate-bounce"
                  size={40}
                />
              </div>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                Every day brings new discoveries and joy! 🎉✨
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </DefaultLayout>
  );
}
