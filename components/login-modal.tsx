"use client"

import { motion } from "framer-motion"
import { X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

interface LoginModalProps {
  onClose: () => void
}

export default function LoginModal({ onClose }: LoginModalProps) {
  const [isLogin, setIsLogin] = useState(true)

  const toggleForm = () => setIsLogin(!isLogin)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="bg-white p-8 max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-extralight tracking-tight">
            {isLogin ? "Login to " : "Sign up for "}
            <span className="font-normal">VendAI</span>
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black transition-colors">
            <X size={24} />
          </button>
        </div>

        <form className="space-y-6">
          {!isLogin && (
            <div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border-b border-gray-300 py-3 px-2 focus:outline-none focus:border-black transition-colors placeholder:text-gray-400"
              />
            </div>
          )}

          <div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border-b border-gray-300 py-3 px-2 focus:outline-none focus:border-black transition-colors placeholder:text-gray-400"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full border-b border-gray-300 py-3 px-2 focus:outline-none focus:border-black transition-colors placeholder:text-gray-400"
            />
          </div>

          {isLogin && (
            <div className="text-right">
              <a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">
                Forgot password?
              </a>
            </div>
          )}

          <Button className="bg-black text-white hover:bg-gray-800 w-full py-6 text-sm tracking-widest">
            {isLogin ? "LOGIN" : "SIGN UP"}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button onClick={toggleForm} className="text-black hover:underline transition-colors">
              {isLogin ? "Sign up" : "Login"}
            </button>
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}
