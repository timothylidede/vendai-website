"use client"

import { motion } from "framer-motion"
import { X } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/router"
import { Button } from "@/components/ui/button"

interface LoginModalProps {
  onClose: () => void
}

export default function LoginModal({ onClose }: LoginModalProps) {
  const router = useRouter()
  const [isLogin, setIsLogin] = useState(true)
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const toggleForm = () => {
    setError("")
    setIsLogin(!isLogin)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (isLogin) {
      // Only allow demo@vendai.digital / 1234
      if (email === "demo@vendai.digital" && password === "1234") {
        window.location.href = "https://demo.vendai.digital"
      } else {
        setError("Invalid email or password.")
      }
    } else {
      // Sign up flow (for now, just display a message)
      if (!fullName.trim() || !email.trim() || !password.trim()) {
        setError("All fields are required for sign up.")
      } else {
        // Here you’d normally call an API to create a new user.
        // For this demo, we’ll just switch back to login form.
        setError("Account created! Please log in.")
        setIsLogin(true)
        setFullName("")
        setPassword("")
      }
    }
  }

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
        className="bg-white p-8 max-w-md w-full rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-extralight tracking-tight">
            {isLogin ? "Login to " : "Sign up for "}
            <span className="font-normal">VendAI</span>
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black transition-colors">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {!isLogin && (
            <div>
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full border-b border-gray-300 py-3 px-2 focus:outline-none focus:border-black transition-colors placeholder:text-gray-400"
              />
            </div>
          )}

          <div>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border-b border-gray-300 py-3 px-2 focus:outline-none focus:border-black transition-colors placeholder:text-gray-400"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
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

          {error && <p className="text-sm text-red-600">{error}</p>}

          <Button type="submit" className="bg-black text-white hover:bg-gray-800 w-full py-4 text-sm tracking-widest">
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
