import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import Link from "next/link";

import { title, subtitle } from "@/components/primitives";
import {
  SparklesIcon,
  GiftIcon,
  HeartFilledIcon,
  CakeIcon,
  SearchIcon,
} from "@/components/icons";
import DefaultLayout from "@/layouts/default";

export default function GalleryPage() {
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);
  const [filter, setFilter] = useState<"all" | "image" | "video">("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Array of all photos and videos
  const mediaItems = [
    { type: "image", src: "/picture-2.jpeg", caption: "with Aunt Patsha" },
    { type: "image", src: "/picture-3.jpeg", caption: "Peaceful Mood feeling" },
    { type: "image", src: "/picture-4.jpeg", caption: "Pout Game Strong" },
    {
      type: "image",
      src: "/picture-5.jpeg",
      caption: "Resting on my Couch sofa Dad",
    },
    { type: "image", src: "/picture-6.jpeg", caption: "Mommy cuddle time " },
    {
      type: "image",
      src: "/picture-7.jpeg",
      caption: "Grandpa holding my feet",
    },
    {
      type: "image",
      src: "/picture-8.jpeg",
      caption: "Sleeping on my Fav Aunt Patsha",
    },
    { type: "image", src: "/picture-9.jpeg", caption: "Mama smile!" },
    { type: "image", src: "/picture-10.jpeg", caption: "Selfie time" },
    { type: "image", src: "/picture-11.jpeg", caption: "My Godparents" },
    { type: "image", src: "/picture-12.jpeg", caption: "With my Madrin" },
    { type: "image", src: "/picture-13.jpeg", caption: "With my BFF Mia" },
    {
      type: "image",
      src: "/picture-14.jpeg",
      caption: "Dad sleeping before me!",
    },
    { type: "image", src: "/picture-15.jpeg", caption: "Milk time!" },
    { type: "image", src: "/picture-16.jpeg", caption: "Madrin!" },
    { type: "image", src: "/picture-17.jpeg", caption: "Miiiiiaaaaa!" },
    { type: "image", src: "/picture-18.jpeg", caption: "Hi Thats me!" },
    {
      type: "image",
      src: "/picture-19.jpeg",
      caption: "With my Fav - Padrin!",
    },
    { type: "image", src: "/picture-20.jpeg", caption: "With Aunt Kait!" },
    { type: "image", src: "/picture-21.jpeg", caption: "Big sister Noru!" },
    {
      type: "image",
      src: "/picture-22.jpeg",
      caption: "selfie time with Mia!",
    },
    { type: "image", src: "/picture-23.jpeg", caption: "Minnie Mouse" },
    { type: "image", src: "/picture-24.jpeg", caption: "Playtime" },
    { type: "image", src: "/picture-25.jpeg", caption: "Grandpa" },
    { type: "image", src: "/picture-26.jpeg", caption: "Girl time" },
    { type: "image", src: "/picture-27.jpeg", caption: "Smile" },
    { type: "image", src: "/picture-28.jpeg", caption: "Drift time" },
    { type: "image", src: "/picture-29.jpeg", caption: "Oh yeah!" },
    { type: "image", src: "/picture-30.jpeg", caption: "Mommy" },
    { type: "image", src: "/picture-31.jpeg", caption: "Play Shark dododo" },
    {
      type: "image",
      src: "/picture-32.jpeg",
      caption: "Dinner time with Norah",
    },
    { type: "image", src: "/picture-33.jpeg", caption: "Family Portrait 1" },
    { type: "image", src: "/picture-34.jpeg", caption: "Family Portrait 2" },
    { type: "image", src: "/picture-35.jpeg", caption: "Family Portrait 3" },
    { type: "image", src: "/picture-36.jpeg", caption: "Valentine selfie" },
    { type: "image", src: "/picture-37.jpeg", caption: "Play time" },
    { type: "image", src: "/picture-38.jpeg", caption: "Happy time" },
    { type: "image", src: "/picture-39.jpeg", caption: "Yesss!" },
    {
      type: "image",
      src: "/picture-40.jpeg",
      caption: "Pull me outttt please",
    },
    { type: "image", src: "/picture-41.jpeg", caption: "Cawfee time" },
    { type: "image", src: "/picture-42.jpeg", caption: "Cuddle time 1" },
    { type: "image", src: "/picture-43.jpeg", caption: "Cuddle time 2" },
    { type: "image", src: "/picture-44.jpeg", caption: "Cuddle time 3" },
    { type: "image", src: "/picture-45.jpeg", caption: "Food lover!" },
    {
      type: "image",
      src: "/picture-46.jpeg",
      caption: "Cuddling with Aunt Patsha",
    },
    { type: "image", src: "/picture-47.jpeg", caption: "Play time strong" },
    { type: "image", src: "/picture-48.jpeg", caption: "Mia, Me and Norah" },
    { type: "image", src: "/picture-49.jpeg", caption: "Another selfie" },
    { type: "image", src: "/picture-50.jpeg", caption: "Cutie patootie" },
    { type: "image", src: "/picture-51.jpeg", caption: "Me and Mommy" },
    { type: "image", src: "/picture-52.jpeg", caption: "My protector" },
    { type: "image", src: "/picture-53.jpeg", caption: "Me and Mommy again" },
    {
      type: "image",
      src: "/picture-54.jpeg",
      caption: "Met Mama for first time",
    },
    {
      type: "image",
      src: "/picture-55.jpeg",
      caption: "Mama waiting for me - I said cant wait to meet u and dad",
    },
    {
      type: "image",
      src: "/picture-56.jpeg",
      caption:
        "Yes,thats me all cute wrapped up in this beautiful world on my first day",
    },
    { type: "image", src: "/picture-57.jpeg", caption: "Nina look food!!!" },
    {
      type: "image",
      src: "/picture-58.jpeg",
      caption: "Nothing to See here!  Just Lazying around with Aunt Patsha",
    },
    {
      type: "image",
      src: "/picture-59.jpg",
      caption: "With my Favourite Uncle- Leon",
    },
    { type: "video", src: "/video-1.mp4", caption: "Nina's adorable giggles" },
    { type: "video", src: "/video-2.mp4", caption: "Quality Time!" },
    { type: "video", src: "/video-3.mp4", caption: "Stare Contest!" },
    { type: "video", src: "/video-4.mp4", caption: "Little explorer Nina" },
    { type: "video", src: "/video-5.mp4", caption: "Norah feeding Me!" },
    { type: "video", src: "/video-6.mp4", caption: "Precious Nina moments" },
    { type: "video", src: "/video-7.mp4", caption: "Padrins Birthday" },
    { type: "video", src: "/video-8.mp4", caption: "Trying to Crawl" },
    { type: "video", src: "/video-9.mp4", caption: "Lazy time!" },
    { type: "video", src: "/video-10.mp4", caption: "Milk time" },
    { type: "video", src: "/video-11.mp4", caption: "Playing with Dada" },
    { type: "video", src: "/video-12.mp4", caption: "Whats this mom" },
    { type: "video", src: "/video-13.mp4", caption: "Laughing time" },
    { type: "video", src: "/video-14.mp4", caption: "Well Spent Play time" },
    {
      type: "video",
      src: "/video-19.mp4",
      caption: "Giving Dad A Dental Checkup!",
    },
    { type: "video", src: "/video-20.mp4", caption: "Lets go!,Ringa Ringa!" },
    {
      type: "video",
      src: "/video-21.mp4",
      caption: "CID - Cute Investigation Department",
    },
    {
      type: "video",
      src: "/video-22.mp4",
      caption: "Streching after a Good Sleep",
    },
    { type: "video", src: "/video-24.mp4", caption: "Cartoon and Chill!" },
    {
      type: "video",
      src: "/video-25.mp4",
      caption: "Quality time with Grandpa!",
    },
  ];

  // Filter and search logic
  const filteredMedia = useMemo(() => {
    let filtered = mediaItems;

    // Apply type filter
    if (filter !== "all") {
      filtered = filtered.filter((item) => item.type === filter);
    }

    // Apply search filter
    if (searchQuery.trim()) {
      filtered = filtered.filter((item) =>
        item.caption.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    return filtered;
  }, [filter, searchQuery]);

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center gap-8 py-8 md:py-12 px-4">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={title({ size: "lg", color: "violet" })}>
            Nina&apos;s Gallery 📸
          </h1>
          <div className={subtitle({ class: "mt-4" })}>
            Capturing precious moments of Nina Rose! ✨
          </div>
        </motion.div>

        {/* Filter and Search Section */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-7xl"
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 dark:from-pink-900/20 dark:via-purple-900/20 dark:to-blue-900/20 rounded-2xl p-4 md:p-6 border-2 border-pink-200 dark:border-pink-700 shadow-lg">
            {/* Search Bar */}
            <div className="mb-4">
              <Input
                classNames={{
                  base: "max-w-full",
                  mainWrapper: "h-full",
                  input: "text-small",
                  inputWrapper:
                    "h-full font-normal text-default-500 bg-white dark:bg-default-500/20",
                }}
                placeholder="Search by caption... (e.g., Mommy, Grandpa, playtime)"
                size="lg"
                startContent={<SearchIcon size={18} />}
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
              <Button
                className={`font-bold ${
                  filter === "all"
                    ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                } shadow-md hover:shadow-lg transition-all`}
                size="md"
                onClick={() => setFilter("all")}
              >
                All ({mediaItems.length})
              </Button>
              <Button
                className={`font-bold ${
                  filter === "image"
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                } shadow-md hover:shadow-lg transition-all`}
                size="md"
                onClick={() => setFilter("image")}
              >
                📸 Photos ({mediaItems.filter((m) => m.type === "image").length}
                )
              </Button>
              <Button
                className={`font-bold ${
                  filter === "video"
                    ? "bg-gradient-to-r from-orange-500 to-red-500 text-white"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                } shadow-md hover:shadow-lg transition-all`}
                size="md"
                onClick={() => setFilter("video")}
              >
                🎥 Videos ({mediaItems.filter((m) => m.type === "video").length}
                )
              </Button>
            </div>

            {/* Results Count */}
            {(filter !== "all" || searchQuery.trim()) && (
              <div className="mt-4 text-center">
                <p className="text-sm md:text-base font-semibold text-gray-700 dark:text-gray-300">
                  Showing {filteredMedia.length} of {mediaItems.length} items
                  {searchQuery.trim() && ` matching "${searchQuery}"`}
                </p>
              </div>
            )}
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1 }}
          className="w-full max-w-7xl"
          initial={{ opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {filteredMedia.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-2">
                No results found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search or filter
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredMedia.map((media, index) => (
                <motion.div
                  key={index}
                  animate={{ opacity: 1, scale: 1 }}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: 0.05 * index, duration: 0.4 }}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => setSelectedMedia(media.src)}
                >
                  <div className="bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30 rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border-2 border-pink-200 dark:border-pink-800">
                    <div className="relative aspect-[9/16] overflow-hidden bg-gray-200 dark:bg-gray-800">
                      {media.type === "image" ? (
                        <img
                          alt={media.caption}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          src={media.src}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;

                            target.src =
                              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='355'%3E%3Crect fill='%23ddd' width='200' height='355'/%3E%3Ctext fill='%23999' x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='18'%3E📸%3C/text%3E%3C/svg%3E";
                          }}
                        />
                      ) : (
                        <div className="relative w-full h-full">
                          <video
                            className="w-full h-full object-cover"
                            src={media.src}
                            onError={(e) => {
                              const target = e.target as HTMLVideoElement;

                              target.style.display = "none";
                              const parent = target.parentElement;

                              if (parent) {
                                parent.innerHTML =
                                  '<div class="w-full h-full flex items-center justify-center text-6xl">🎥</div>';
                              }
                            }}
                          >
                            <track kind="captions" />
                          </video>
                          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                            <div className="text-white text-5xl">▶️</div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-3 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/50 dark:to-purple-900/50 min-h-[60px] flex items-center justify-center">
                      <p className="text-xs md:text-sm font-semibold text-gray-800 dark:text-gray-200 text-center line-clamp-3">
                        {media.caption}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {selectedMedia && (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            onClick={() => setSelectedMedia(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh]">
              {selectedMedia.endsWith(".mp4") ? (
                <video
                  autoPlay
                  controls
                  className="max-w-full max-h-[90vh] rounded-lg"
                  src={selectedMedia}
                >
                  <track kind="captions" />
                </video>
              ) : (
                <img
                  alt="Selected"
                  className="max-w-full max-h-[90vh] rounded-lg"
                  src={selectedMedia}
                />
              )}
              <button
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold"
                onClick={() => setSelectedMedia(null)}
              >
                ×
              </button>
            </div>
          </motion.div>
        )}

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-4xl mt-12"
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
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
                href="/wishes"
                size="lg"
                startContent={<HeartFilledIcon size={24} />}
              >
                <div className="text-left">
                  <div className="font-bold">Birthday Wishes</div>
                  <div className="text-sm opacity-90">
                    Send a special message
                  </div>
                </div>
              </Button>
              <Button
                as={Link}
                className="bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold text-lg px-6 py-6 h-auto shadow-lg hover:shadow-xl transition-all"
                href="/games"
                size="lg"
                startContent={<CakeIcon size={24} />}
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
