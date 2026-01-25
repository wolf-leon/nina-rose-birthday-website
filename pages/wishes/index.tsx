import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";

import { title, subtitle } from "@/components/primitives";
import { HeartFilledIcon, SparklesIcon, GiftIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";

export default function WishesPage() {
  const [wishes, setWishes] = useState([
    {
      name: "Grandma & Grandpa",
      message:
        "Happy 3rd Birthday, Nina Rose! You bring so much joy to our lives! 💖",
      emoji: "👵👴",
    },
    {
      name: "Aunt Sarah",
      message:
        "Wishing you the most magical birthday ever! Can't wait to celebrate with you! 🎉",
      emoji: "🎈",
    },
    {
      name: "Uncle Mike",
      message:
        "Happy Birthday to the sweetest 3-year-old! Have an amazing day! 🎂",
      emoji: "🎁",
    },
  ]);

  const [newName, setNewName] = useState("");
  const [newMessage, setNewMessage] = useState("");

  const addWish = () => {
    if (newName.trim() && newMessage.trim()) {
      const emojis = ["🎈", "🎉", "🎂", "🎁", "💖", "✨", "🌟", "🎊"];
      const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

      setWishes([
        ...wishes,
        { name: newName, message: newMessage, emoji: randomEmoji },
      ]);
      setNewName("");
      setNewMessage("");
    }
  };

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
            Birthday Wishes 💝
          </h1>
          <div className={subtitle({ class: "mt-4" })}>
            Leave a special message for Nina Rose! ✨
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-4xl"
          initial={{ opacity: 0, scale: 0.9 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 dark:from-pink-900/20 dark:via-purple-900/20 dark:to-blue-900/20 rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-pink-300 dark:border-pink-700">
            <div className="text-center mb-8">
              <GiftIcon className="text-pink-500 mx-auto mb-4" size={64} />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Share Your Birthday Wishes
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Write a special message for Nina Rose&apos;s 3rd birthday!
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <Input
                classNames={{
                  input: "text-lg",
                  inputWrapper:
                    "bg-white dark:bg-gray-800 border-2 border-pink-300 dark:border-pink-700",
                }}
                label="Your Name"
                placeholder="Enter your name"
                size="lg"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
              <Textarea
                classNames={{
                  input: "text-lg",
                  inputWrapper:
                    "bg-white dark:bg-gray-800 border-2 border-pink-300 dark:border-pink-700",
                }}
                label="Your Birthday Wish"
                minRows={4}
                placeholder="Write your birthday message here..."
                size="lg"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
            </div>

            <div className="text-center">
              <Button
                className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-bold text-lg px-12 py-6 shadow-lg"
                isDisabled={!newName.trim() || !newMessage.trim()}
                size="lg"
                startContent={<HeartFilledIcon size={24} />}
                onPress={addWish}
              >
                Send Birthday Wish 💌
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Birthday Messages 💖
          </h2>

          <div className="space-y-6">
            {wishes.map((wish, index) => (
              <motion.div
                key={index}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-r from-white to-pink-50 dark:from-gray-800 dark:to-pink-900/20 rounded-2xl p-6 shadow-lg border-2 border-pink-200 dark:border-pink-800"
                initial={{ opacity: 0, x: -20 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">{wish.emoji}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-pink-600 dark:text-pink-400 mb-2">
                      {wish.name}
                    </h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      {wish.message}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1 }}
          className="w-full max-w-4xl mt-8"
          initial={{ opacity: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-yellow-100 via-pink-100 to-purple-100 dark:from-yellow-900/20 dark:via-pink-900/20 dark:to-purple-900/20 rounded-2xl p-8 border-2 border-yellow-300 dark:border-yellow-700 shadow-lg text-center">
            <SparklesIcon className="text-purple-500 mx-auto mb-4" size={48} />
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              Thank You for Your Wishes! 🌟
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Every message makes Nina Rose&apos;s birthday even more special!
              💝
            </p>
          </div>
        </motion.div>
      </section>
    </DefaultLayout>
  );
}
