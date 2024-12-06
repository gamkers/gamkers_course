import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Copy, Check } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';

export function PrelaunchOffer() {
  const [copied, setCopied] = useState(false);
  const couponCode = "EARLYACCESS";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black via-purple-900/10 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <Sparkles className="w-12 h-12 text-purple-400" />
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                Limited Time Prelaunch Offer
              </span>
            </h2>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
              <div className="text-2xl md:text-3xl font-bold">
                <span className="text-purple-400">₹499</span>
                <span className="text-gray-400 mx-2">|</span>
                <span className="line-through text-gray-500">₹1000</span>
              </div>
              <div className="bg-purple-500/20 px-4 py-2 rounded-full">
                <span className="text-purple-400 font-semibold">Save ₹501 Today!</span>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-gray-400 mb-4">Use coupon code to get 50% off:</p>
              <div className="flex justify-center items-center space-x-4">
                <div className="bg-purple-900/30 px-6 py-3 rounded-lg border border-purple-500/30">
                  <span className="font-mono text-xl text-purple-400">{couponCode}</span>
                </div>
                <button
                  onClick={copyToClipboard}
                  className="p-2 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 transition-colors"
                  title="Copy coupon code"
                >
                  {copied ? (
                    <Check className="w-6 h-6 text-green-400" />
                  ) : (
                    <Copy className="w-6 h-6 text-purple-400" />
                  )}
                </button>
              </div>
            </div>

            <div className="mb-8">
              <CountdownTimer />
            </div>

            <div className="flex flex-col items-center space-y-4">
              <motion.a
                href="https://tagmango.app/b7776260c6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium text-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-purple-500/25"
              >
                Claim Your Discount Now!
              </motion.a>
              <p className="text-sm text-gray-400">
                *Apply the coupon code during checkout to get 50% off
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}