import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";
import Link from "next/link";

import { title, subtitle } from "@/components/primitives";
import {
  HeartFilledIcon,
  SparklesIcon,
  GiftIcon,
  CakeIcon,
} from "@/components/icons";
import DefaultLayout from "@/layouts/default";

export default function WishesPage() {
  const [newName, setNewName] = useState("");
  const [newMessage, setNewMessage] = useState("");

  const sendWhatsAppMessage = () => {
    if (newName.trim() && newMessage.trim()) {
      const whatsappMessage = `Hi Nina Rose,\n\n${newMessage.trim()}\n\n-${newName.trim()}`;
      const phoneNumber = "918552821291"; // WhatsApp number in international format
      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

      window.open(whatsappUrl, "_blank");

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
                Write a special message for Nina Rose&apos;s 2nd birthday!
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
                description={
                  <span className="text-orange-600 dark:text-orange-400 font-bold text-base">
                    Note: Don&apos;t write &apos;Hi Nina Rose&apos; - it will be
                    added automatically!
                  </span>
                }
                label="Your Birthday Wish"
                minRows={4}
                placeholder="e.g., Wishing you a wonderful birthday filled with joy and laughter!"
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
                onPress={sendWhatsAppMessage}
              >
                Send via WhatsApp 💌
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1 }}
          className="w-full max-w-4xl mt-8"
          initial={{ opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
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

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-4xl mt-12"
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <div className="bg-gradient-to-br from-blue-50 via-pink-50 to-purple-50 dark:from-blue-900/20 dark:via-pink-900/20 dark:to-purple-900/20 rounded-2xl p-8 border-2 border-blue-300 dark:border-blue-700 shadow-lg">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Explore More! 🎉
            </h3>
            <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-8">
              Check out other fun sections of Nina&apos;s birthday website!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button
                as={Link}
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-lg px-6 py-6 h-auto shadow-lg hover:shadow-xl transition-all"
                href="/about"
                size="lg"
                startContent={<SparklesIcon size={24} />}
              >
                <div className="text-left">
                  <div className="font-bold">About Nina</div>
                  <div className="text-sm opacity-90">
                    Learn more about Nina Rose
                  </div>
                </div>
              </Button>
              <Button
                as={Link}
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold text-lg px-6 py-6 h-auto shadow-lg hover:shadow-xl transition-all"
                href="/gallery"
                size="lg"
                startContent={<CakeIcon size={24} />}
              >
                <div className="text-left">
                  <div className="font-bold">Photo Gallery</div>
                  <div className="text-sm opacity-90">
                    See Nina&apos;s precious moments
                  </div>
                </div>
              </Button>
              <Button
                as={Link}
                className="bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold text-lg px-6 py-6 h-auto shadow-lg hover:shadow-xl transition-all"
                href="/games"
                size="lg"
                startContent={<HeartFilledIcon size={24} />}
              >
                <div className="text-left">
                  <div className="font-bold">Fun & Games</div>
                  <div className="text-sm opacity-90">
                    Play games and read stories
                  </div>
                </div>
              </Button>
              <Button
                as={Link}
                className="bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold text-lg px-6 py-6 h-auto shadow-lg hover:shadow-xl transition-all"
                href="/uncle-leon"
                size="lg"
                startContent={<GiftIcon size={24} />}
              >
                <div className="text-left">
                  <div className="font-bold">Uncle Lee&apos;s Message</div>
                  <div className="text-sm opacity-90">
                    A special note from Uncle Lee
                  </div>
                </div>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </DefaultLayout>
  );
}
