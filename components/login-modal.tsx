"use client"

import { motion } from "framer-motion"
import { X, AlertCircle, CheckCircle } from 'lucide-react'
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

interface LoginModalProps {
  onClose: () => void
}

export default function LoginModal({ onClose }: LoginModalProps) {
  const [isLogin, setIsLogin] = useState(true)
  const [subdomain, setSubdomain] = useState("")
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // Load remembered credentials on component mount
  useEffect(() => {
    const rememberedCredentials = localStorage.getItem("vendai_credentials")
    if (rememberedCredentials) {
      try {
        const { subdomain: savedSubdomain, email: savedEmail } = JSON.parse(rememberedCredentials)
        setSubdomain(savedSubdomain || "")
        setEmail(savedEmail || "")
        setRememberMe(true)
      } catch (error) {
        console.error("Error loading remembered credentials:", error)
      }
    }
  }, [])

  const toggleForm = () => {
    setError("")
    setSuccess("")
    setIsLogin(!isLogin)
    // Clear form when switching between login/signup
    if (!isLogin) {
      setFullName("")
      setPassword("")
    }
  }

  const validateForm = () => {
    if (!subdomain.trim()) {
      setError("Please enter your company subdomain.")
      return false
    }

    if (!email.trim()) {
      setError("Please enter your email address.")
      return false
    }

    if (!password.trim()) {
      setError("Please enter your password.")
      return false
    }

    if (!isLogin && !fullName.trim()) {
      setError("Please enter your full name.")
      return false
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.")
      return false
    }

    return true
  }

  const handleRememberMe = (subdomain: string, email: string) => {
    if (rememberMe) {
      localStorage.setItem(
        "vendai_credentials",
        JSON.stringify({
          subdomain,
          email,
        }),
      )
    } else {
      localStorage.removeItem("vendai_credentials")
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    if (!validateForm()) return

    setIsLoading(true)

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    try {
      if (isLogin) {
        // Check for demo credentials
        if (
          subdomain.toLowerCase() === "demo" &&
          email.toLowerCase() === "demo@vendai.digital" &&
          password === "1234"
        ) {
          handleRememberMe(subdomain, email)
          setSuccess("Login successful! Redirecting to your dashboard...")

          // Redirect after showing success message
          setTimeout(() => {
            window.location.href = "https://demo.vendai.digital"
          }, 1500)
        } else {
          // Check if it's a valid subdomain format but wrong credentials
          if (subdomain.toLowerCase() === "demo") {
            setError("Invalid email or password for demo account.")
          } else {
            setError(
              `Unable to authenticate with ${subdomain}.vendai.digital. Please check your credentials or contact support.`,
            )
          }
        }
      } else {
        // Sign up flow
        if (!fullName.trim() || !email.trim() || !password.trim() || !subdomain.trim()) {
          setError("All fields are required for sign up.")
        } else {
          // For demo purposes, simulate successful signup
          setSuccess("Account created successfully! Please log in with your credentials.")
          setTimeout(() => {
            setIsLogin(true)
            setFullName("")
            setPassword("")
            setSuccess("")
          }, 2000)
        }
      }
    } catch (error) {
      setError("An unexpected error occurred. Please try again.")
    } finally {
      setIsLoading(false)
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
        className="bg-white p-8 max-w-md w-full rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-extralight tracking-tight">
            {isLogin ? "Login to " : "Sign up for "}
            <span className="font-normal">VendAI</span>
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black transition-colors p-1"
            disabled={isLoading}
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="subdomain" className="block text-sm font-medium text-gray-700 mb-1">
              Company Subdomain
            </label>
            <div className="flex rounded-md shadow-sm">
              <input
                type="text"
                id="subdomain"
                placeholder="yourcompany"
                value={subdomain}
                onChange={(e) => setSubdomain(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ""))}
                disabled={isLoading}
                className="flex-1 border border-gray-300 rounded-l-md py-3 px-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all placeholder:text-gray-400 disabled:bg-gray-50"
              />
              <div className="bg-gray-50 border border-gray-300 border-l-0 rounded-r-md px-3 py-3 text-gray-500 text-sm flex items-center">
                .vendai.digital
              </div>
            </div>
          </div>

          {!isLogin && (
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                disabled={isLoading}
                className="w-full border border-gray-300 rounded-md py-3 px-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all placeholder:text-gray-400 disabled:bg-gray-50"
              />
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              className="w-full border border-gray-300 rounded-md py-3 px-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all placeholder:text-gray-400 disabled:bg-gray-50"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              className="w-full border border-gray-300 rounded-md py-3 px-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all placeholder:text-gray-400 disabled:bg-gray-50"
            />
          </div>

          {isLogin && (
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  disabled={isLoading}
                  className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded disabled:opacity-50"
                />
                Remember me
              </label>
              <button
                type="button"
                className="text-sm text-gray-500 hover:text-black transition-colors"
                disabled={isLoading}
              >
                Forgot password?
              </button>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-md"
            >
              <AlertCircle className="h-4 w-4 text-red-500 flex-shrink-0" />
              <p className="text-sm text-red-700">{error}</p>
            </motion.div>
          )}

          {/* Success Message */}
          {success && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-md"
            >
              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
              <p className="text-sm text-green-700">{success}</p>
            </motion.div>
          )}

          <Button
            type="submit"
            disabled={isLoading}
            className="bg-black text-white hover:bg-gray-800 w-full py-4 text-sm tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                {isLogin ? "SIGNING IN..." : "CREATING ACCOUNT..."}
              </div>
            ) : isLogin ? (
              "LOGIN"
            ) : (
              "SIGN UP"
            )}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={toggleForm}
              disabled={isLoading}
              className="text-black hover:underline transition-colors disabled:opacity-50"
            >
              {isLogin ? "Sign up" : "Login"}
            </button>
          </p>
        </div>

        {/* Demo Credentials Helper */}
        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
          <p className="text-xs text-blue-700 font-medium mb-1">Demo Access:</p>
          <p className="text-xs text-blue-600">
            Subdomain: <code className="bg-blue-100 px-1 rounded">demo</code> | Email:{" "}
            <code className="bg-blue-100 px-1 rounded">demo@vendai.digital</code> | Password:{" "}
            <code className="bg-blue-100 px-1 rounded">1234</code>
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}
