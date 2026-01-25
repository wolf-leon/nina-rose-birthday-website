import { Head } from "./head";

import { Navbar } from "@/components/navbar";
import {
  BalloonIcon,
  CakeIcon,
  SparklesIcon,
  HeartFilledIcon,
} from "@/components/icons";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/10 dark:to-blue-900/10">
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-7xl px-4 sm:px-6 flex-grow pt-8 pb-12">
        {children}
      </main>
      <footer className="w-full border-t border-pink-200 dark:border-pink-800 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 dark:from-pink-900/20 dark:via-purple-900/20 dark:to-blue-900/20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <CakeIcon className="text-pink-500" size={28} />
              <div className="text-center md:text-left">
                <p className="font-bold text-lg bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                  Nina Rose&apos;s Birthday Celebration
                </p>
                <p className="text-sm text-default-600">
                  Making magical memories! ✨
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <BalloonIcon className="text-pink-400 animate-bounce" size={24} />
              <HeartFilledIcon
                className="text-red-400 animate-pulse"
                size={24}
              />
              <SparklesIcon
                className="text-purple-400 animate-pulse"
                size={24}
              />
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-pink-200 dark:border-pink-800 text-center">
            <p className="text-sm text-default-500">
              © 2026 Nina Rose&apos;s Birthday Website • Made with love 💖
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
