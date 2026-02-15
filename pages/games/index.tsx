import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@heroui/button";
import Link from "next/link";

import { title, subtitle } from "@/components/primitives";
import {
  PartyIcon,
  SparklesIcon,
  HeartFilledIcon,
  CakeIcon,
  GiftIcon,
} from "@/components/icons";
import DefaultLayout from "@/layouts/default";

export default function GamesPage() {
  const [memoryCards, setMemoryCards] = useState([
    { id: 1, emoji: "🎂", flipped: false, matched: false },
    { id: 2, emoji: "🎂", flipped: false, matched: false },
    { id: 3, emoji: "🎈", flipped: false, matched: false },
    { id: 4, emoji: "🎈", flipped: false, matched: false },
    { id: 5, emoji: "🎁", flipped: false, matched: false },
    { id: 6, emoji: "🎁", flipped: false, matched: false },
    { id: 7, emoji: "🌟", flipped: false, matched: false },
    { id: 8, emoji: "🌟", flipped: false, matched: false },
  ]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchCount, setMatchCount] = useState(0);
  const [confetti, setConfetti] = useState(false);
  const [puzzlePieces, setPuzzlePieces] = useState([1, 2, 3, 4, 5, 6]);
  const [puzzleSolved, setPuzzleSolved] = useState(false);
  const [currentStory, setCurrentStory] = useState(0);

  const handleCardClick = (index: number) => {
    if (
      flippedCards.length === 2 ||
      memoryCards[index].flipped ||
      memoryCards[index].matched
    ) {
      return;
    }

    const newCards = [...memoryCards];

    newCards[index].flipped = true;
    setMemoryCards(newCards);

    const newFlipped = [...flippedCards, index];

    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;

      if (memoryCards[first].emoji === memoryCards[second].emoji) {
        setTimeout(() => {
          const updatedCards = [...memoryCards];

          updatedCards[first].matched = true;
          updatedCards[second].matched = true;
          setMemoryCards(updatedCards);
          setFlippedCards([]);
          setMatchCount((prev) => prev + 1);
          if (matchCount + 1 === 4) {
            setConfetti(true);
            setTimeout(() => setConfetti(false), 3000);
          }
        }, 600);
      } else {
        setTimeout(() => {
          const updatedCards = [...memoryCards];

          updatedCards[first].flipped = false;
          updatedCards[second].flipped = false;
          setMemoryCards(updatedCards);
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  const resetMemoryGame = () => {
    const shuffled = [...memoryCards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, flipped: false, matched: false }));

    setMemoryCards(shuffled);
    setFlippedCards([]);
    setMatchCount(0);
  };

  const shufflePuzzle = () => {
    const shuffled = [...puzzlePieces].sort(() => Math.random() - 0.5);

    setPuzzlePieces(shuffled);
    setPuzzleSolved(false);
  };

  const checkPuzzle = () => {
    const isSolved = puzzlePieces.every((piece, index) => piece === index + 1);

    setPuzzleSolved(isSolved);
  };

  const stories = [
    {
      title: "Nina & the Tahini Incident",
      emoji: "🥫",
      text: 'Leon came over for a house party and brought chicken fingers with tahini sauce. Everyone was eating, everything was normal… until Leon noticed something strange. The sauce level was going down way too fast. Like, suspiciously fast. So Leon looked around to find the culprit — and there she was. Little Nina, not even eating the chicken anymore, just dipping her entire hand into the tahini and licking it off like it was a spa treatment. Leon said, "Oh my God, Nina, you finished all the sauce!" She looked at him with this completely serious face that said: "Not today, Uncle. When the sauce is this good, rules dont apply." At that moment Leon realized: he didnt bring chicken fingers… he brought tahini for Nina.',
    },
    {
      title: "Nina & the Great Pizza Heist",
      emoji: "🍕",
      text: "One day, Pizza was Ordered and kept it on the kitchen counter. Now, Nina has a special talent — she can climb anything. Chairs, sofas, drawers… basically she's a tiny Spider-Man. So while all were busy talking, this little cutie quietly climbed the kitchen drawers like a professional burglar, reached the counter, and started eating the pizza. No asking. No waiting. No permission. Just straight to business. By the time we noticed, she already had a slice in her hand like: \"Relax guys, I've secured the food. You may proceed with the party.\" At this point, we've stopped worrying about Nina getting hurt. We're more worried about our food security. 🍕😄",
    },
    {
      title: "Nina, Norah & the Art of Being Innocent",
      emoji: "😇",
      text: "Nina is extremely naughty, especially with her sister Norah. She'll take Norah's toys, push her gently, or start some tiny drama… and the moment you look at her? She switches personalities. Suddenly she's standing there with big innocent eyes, hands behind her back, like: \"I was just existing. I have no idea why Norah is crying.\" Norah is in full complaint mode, and Nina is acting like she just walked into the scene by accident. At this point Nina isn't naughty — she's just highly skilled in crime and even better at acting innocent. Future career options: lawyer, politician, or professional troublemaker. 😄",
    },
    {
      title: "Nina & the Royal Blanket",
      emoji: "🛏️",
      text: "Nina has a favourite blanket. And by favourite, this blanket has more importance than people. She wakes up, first thing: wants her milk. If her favourite cartoon or Frozen is on, she disappears into the bedroom and comes back dragging this massive blanket that's literally three times her size. She's pulling it on the floor like she's moving furniture during a house shift. Then she climbs onto the sofa, wraps herself in it, snuggles in, and sits there like: \"Okay. Now I am emotionally prepared to watch cartoons.\" At this point, it's not a blanket anymore. It's her emotional support system, security guard, and best friend — all in one. Honestly, I don't know if Nina owns the blanket… or the blanket owns Nina. 😄",
    },
  ];

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
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
                Memory Match Game!
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-2">
                Find the matching pairs!
              </p>
              <p className="text-2xl font-bold text-pink-600 dark:text-pink-400">
                Matches Found: {matchCount} / 4 🎉
              </p>
              {matchCount === 4 && (
                <motion.p
                  animate={{ scale: 1 }}
                  className="text-3xl font-bold text-green-600 dark:text-green-400 mt-4"
                  initial={{ scale: 0 }}
                >
                  🌟 Amazing! You found all the matches! 🌟
                </motion.p>
              )}
            </div>

            <div className="grid grid-cols-4 gap-4 mb-6 max-w-lg mx-auto">
              {memoryCards.map((card, index) => (
                <motion.div
                  key={card.id}
                  className={`aspect-square rounded-xl cursor-pointer shadow-lg ${
                    card.flipped || card.matched
                      ? "bg-gradient-to-br from-pink-400 to-purple-400"
                      : "bg-gradient-to-br from-blue-400 to-green-400"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleCardClick(index)}
                >
                  <div className="w-full h-full flex items-center justify-center text-5xl">
                    {card.flipped || card.matched ? card.emoji : "?"}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Button
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-lg px-8 py-6"
                size="lg"
                startContent={<PartyIcon size={24} />}
                onPress={resetMemoryGame}
              >
                New Game
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-4xl"
          initial={{ opacity: 0, scale: 0.9 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 dark:from-pink-900/20 dark:via-purple-900/20 dark:to-blue-900/20 rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-pink-300 dark:border-pink-700">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Puzzle Fun! 🧩
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-2">
                Arrange the numbers in order from 1 to 6!
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6 max-w-md mx-auto">
              {puzzlePieces.map((piece, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-pink-400 to-purple-400 text-white text-4xl font-bold rounded-xl p-8 text-center shadow-lg cursor-pointer hover:scale-105 transition-transform"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    if (index < puzzlePieces.length - 1) {
                      const newPieces = [...puzzlePieces];

                      [newPieces[index], newPieces[index + 1]] = [
                        newPieces[index + 1],
                        newPieces[index],
                      ];
                      setPuzzlePieces(newPieces);
                    }
                  }}
                >
                  {piece}
                </motion.div>
              ))}
            </div>

            <div className="text-center space-y-4">
              {puzzleSolved && (
                <motion.p
                  animate={{ scale: 1 }}
                  className="text-3xl font-bold text-green-600 dark:text-green-400"
                  initial={{ scale: 0 }}
                >
                  🌟 Amazing! You solved the puzzle! 🌟
                </motion.p>
              )}
              <div className="flex gap-4 justify-center flex-wrap">
                <Button
                  className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-lg px-8 py-6"
                  size="lg"
                  onPress={shufflePuzzle}
                >
                  Shuffle Puzzle
                </Button>
                <Button
                  className="bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold text-lg px-8 py-6"
                  size="lg"
                  onPress={checkPuzzle}
                >
                  Check Solution
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-4xl"
          id="funny-moments"
          initial={{ opacity: 0, scale: 0.9 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-blue-900/20 rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-purple-300 dark:border-purple-700">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                Tales of Nina 📖
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
                Stories and adventures of our little star!
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-6">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">
                  {stories[currentStory].emoji}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-purple-700 dark:text-purple-300 mb-4">
                  {stories[currentStory].title}
                </h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                {stories[currentStory].text}
              </p>
            </div>

            <div className="flex gap-4 justify-center items-center flex-wrap">
              <Button
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg px-8 py-6"
                size="lg"
                onPress={prevStory}
              >
                ← Previous Story
              </Button>
              <div className="text-lg font-bold text-purple-700 dark:text-purple-300">
                {currentStory + 1} / {stories.length}
              </div>
              <Button
                className="bg-gradient-to-r from-pink-500 to-blue-500 text-white font-bold text-lg px-8 py-6"
                size="lg"
                onPress={nextStory}
              >
                Next Story →
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-4xl mt-12"
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 1.2, duration: 0.6 }}
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
                href="/wishes"
                size="lg"
                startContent={<HeartFilledIcon size={24} />}
              >
                <div className="text-left">
                  <div className="font-bold">Birthday Wishes</div>
                  <div className="text-sm opacity-90">
                    Leave a special message
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
