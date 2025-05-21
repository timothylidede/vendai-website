"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  ChevronDown,
  Mail,
  Linkedin,
  Twitter,
  BarChart3,
  Truck,
  Package,
  ShoppingCart,
  FileText,
  Globe,
  Store,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero")
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "modules", "pricing", "contact"]
      const scrollPosition = window.scrollY + 300

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const height = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <main className="min-h-screen bg-black text-white font-light">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <span className="text-2xl tracking-tighter font-extralight">
              vend<span className="font-normal">ai</span>
            </span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {[
              { id: "hero", label: "Home" },
              { id: "about", label: "About" },
              { id: "modules", label: "Modules" },
              { id: "pricing", label: "Pricing" },
              { id: "contact", label: "Contact" },
            ].map((section) => (
              <Link
                key={section.id}
                href={`#${section.id}`}
                className={`text-sm uppercase tracking-widest transition-all duration-300 ${
                  activeSection === section.id ? "text-white" : "text-white/50 hover:text-white/80"
                }`}
              >
                {section.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowLoginModal(true)}
              className="hidden md:flex px-5 py-2 border border-white/20 text-sm tracking-wider hover:bg-white/5 transition-all duration-300"
            >
              LOGIN
            </motion.button>

            <button onClick={toggleMenu} className="md:hidden text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[60px] left-0 right-0 bg-black border-b border-white/10 z-40 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {[
                { id: "hero", label: "Home" },
                { id: "about", label: "About" },
                { id: "modules", label: "Modules" },
                { id: "pricing", label: "Pricing" },
                { id: "contact", label: "Contact" },
              ].map((section) => (
                <Link
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm uppercase tracking-widest py-2 ${
                    activeSection === section.id ? "text-white" : "text-white/50"
                  }`}
                >
                  {section.label}
                </Link>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setShowLoginModal(true)
                  setIsMenuOpen(false)
                }}
                className="px-5 py-2 border border-white/20 text-sm tracking-wider hover:bg-white/5 transition-all duration-300 w-full mt-4"
              >
                LOGIN
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tighter mb-6">
              Customized <br />
              <span className="inline-block relative">
                distribution solutions
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 1 }}
                  className="h-[1px] bg-white/50 absolute bottom-2"
                />
              </span>
            </h1>
            <p className="text-lg md:text-xl font-extralight text-white/70 max-w-2xl mb-12 leading-relaxed">
              vendai provides customized cloud-based solutions for Kenyan FMCG distributors, automating inventory,
              sales, billing, and delivery routes to boost efficiency and sales.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="bg-white text-black hover:bg-white/90 rounded-none px-8 py-6 text-base"
                >
                  Request Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  onClick={() => document.getElementById("modules")?.scrollIntoView({ behavior: "smooth" })}
                  className="border-white/20 hover:bg-white/5 rounded-none px-8 py-6 text-base"
                >
                  Explore Modules
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute top-0 right-0 w-full h-full grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] z-0"
        >
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              className="border-t border-l border-white/10"
              style={{
                gridColumn: `${(i % 20) + 1} / span 1`,
                gridRow: `${Math.floor(i / 20) + 1} / span 1`,
              }}
            />
          ))}
        </motion.div>

        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 2,
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <p className="text-xs text-white/50 mb-2 tracking-widest">SCROLL</p>
          <ChevronDown className="h-4 w-4 text-white/50" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center py-20 relative">
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-extralight tracking-tighter mb-6">
              Tailored for Kenyan FMCG Distributors
            </h2>
            <p className="text-white/70 leading-relaxed">
              vendai is a customizable platform designed specifically for Kenyan FMCG distributors. Each distributor
              gets their own personalized version, accessible via their unique subdomain (e.g.,
              homecomforts.vendai.digital).
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-light mb-6">Why Choose vendai?</h3>
              <ul className="space-y-6">
                {[
                  {
                    title: "Customized for Your Business",
                    description:
                      "Each distributor gets a tailored version configured for their specific products, workflows, and markets.",
                  },
                  {
                    title: "Affordable Solution",
                    description:
                      "Starting at just $10/month, vendai is designed to be accessible for distributors of all sizes.",
                  },
                  {
                    title: "Mobile-First Approach",
                    description:
                      "Works seamlessly on mobile devices with offline capabilities for rural areas with limited connectivity.",
                  },
                  {
                    title: "Kenya-Specific Features",
                    description:
                      "Built with Kenyan tax compliance (GST) and export standards in mind, unlike generic global solutions.",
                  },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="h-6 w-6 rounded-full border border-white/30 flex-shrink-0 flex items-center justify-center mt-1">
                      <div className="h-2 w-2 bg-white rounded-full" />
                    </div>
                    <div>
                      <h4 className="text-lg font-light mb-1">{item.title}</h4>
                      <p className="text-white/60">{item.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[400px] md:h-[500px] border border-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="mb-8">
                  <div className="inline-block border border-white/20 rounded-full p-6 mb-4">
                    <BarChart3 className="h-10 w-10 text-white/80" />
                  </div>
                </div>
                <h3 className="text-2xl font-light mb-4">Proven Results</h3>
                <p className="text-white/70 mb-6">
                  Distributors using vendai have experienced up to 20% sales growth and 25% reduction in stockouts.
                </p>
                <div className="grid grid-cols-2 gap-8 w-full max-w-xs">
                  <div>
                    <p className="text-3xl font-light mb-1">20%</p>
                    <p className="text-white/50 text-sm">Sales Growth</p>
                  </div>
                  <div>
                    <p className="text-3xl font-light mb-1">25%</p>
                    <p className="text-white/50 text-sm">Fewer Stockouts</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03)_0%,_rgba(0,0,0,0)_50%)] z-0" />
      </section>

      {/* Modules Section */}
      <section id="modules" className="min-h-screen py-20 relative">
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-extralight tracking-tighter mb-6">Seven Powerful Modules</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Our comprehensive suite of modules works seamlessly together to streamline your distribution operations.
              Each module is customized for your specific products and business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Package className="h-8 w-8 mb-4 text-white/80" />,
                title: "Inventory Management",
                description:
                  "Track stock levels, batch numbers, and expiry dates. Receive alerts for low stock and automate reordering.",
              },
              {
                icon: <ShoppingCart className="h-8 w-8 mb-4 text-white/80" />,
                title: "Mobile Sales",
                description:
                  "Enable sales reps to take orders, view product catalogs, and receive intelligent upsell suggestions.",
              },
              {
                icon: <FileText className="h-8 w-8 mb-4 text-white/80" />,
                title: "Export Compliance & Billing",
                description:
                  "Generate GST-compliant invoices and export documents, track payments, and ensure regulatory compliance.",
              },
              {
                icon: <Truck className="h-8 w-8 mb-4 text-white/80" />,
                title: "Route Optimization",
                description:
                  "Plan efficient routes for sales reps and delivery teams using GPS to save time and reduce costs.",
              },
              {
                icon: <BarChart3 className="h-8 w-8 mb-4 text-white/80" />,
                title: "Analytics & Business Intelligence",
                description:
                  "Visualize sales data, identify top-selling products and best retailers, and predict future demand.",
              },
              {
                icon: <Store className="h-8 w-8 mb-4 text-white/80" />,
                title: "Retailer & Export Client Portal",
                description:
                  "Provide retailers and export clients with a web portal to place orders and track deliveries.",
              },
              {
                icon: <Globe className="h-8 w-8 mb-4 text-white/80" />,
                title: "E-commerce Integration",
                description:
                  "Sync inventory and orders with e-commerce platforms like Jumia to automate online sales channels.",
              },
            ].map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-white/10 p-8 hover:bg-white/5 transition-all duration-300 h-full"
              >
                {module.icon}
                <h3 className="text-xl font-light mb-3">{module.title}</h3>
                <p className="text-white/60">{module.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              All modules are accessible via your custom platform (e.g., yourcompany.vendai.digital) and our mobile
              apps, working together to streamline your operations.
            </p>
            <Button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-white text-black hover:bg-white/90 rounded-none px-8 py-6 text-base"
            >
              Schedule a Demo
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Customization Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-extralight tracking-tighter mb-6">
                Customized for Each Distributor
              </h2>
              <p className="text-white/70 mb-8 leading-relaxed">
                Each distributor gets their own version of vendai, tailored to their specific products, workflows, and
                markets. Whether you distribute tea, snacks, or beverages, your vendai platform will be configured to
                meet your unique needs.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Product Catalog",
                    description: "Configured for your specific products (e.g., tea grades, snack SKUs, beverage types)",
                  },
                  {
                    title: "Branded Experience",
                    description: "Your own subdomain (e.g., homecomforts.vendai.digital) with your company branding",
                  },
                  {
                    title: "Market Adaptation",
                    description: "Tailored for your specific markets (urban, rural, export) and distribution channels",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="h-10 w-10 rounded-full border border-white/30 flex-shrink-0 flex items-center justify-center mt-1">
                      <div className="h-1 w-6 bg-white/80" />
                    </div>
                    <div>
                      <h4 className="text-lg font-light mb-1">{item.title}</h4>
                      <p className="text-white/60">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <div className="relative border border-white/10 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-3 w-3 rounded-full bg-white/20" />
                  <div className="h-3 w-3 rounded-full bg-white/20" />
                  <div className="h-3 w-3 rounded-full bg-white/20" />
                </div>
                <div className="border-t border-white/10 pt-4">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <p className="text-sm text-white/50">homecomforts.vendai.digital</p>
                      <h3 className="text-xl font-light">Home Comforts Dashboard</h3>
                    </div>
                    <div className="text-white/50">
                      <p className="text-sm">Welcome, Sarah</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="border border-white/10 p-4">
                      <p className="text-sm text-white/50 mb-1">Today's Orders</p>
                      <p className="text-2xl font-light">42</p>
                    </div>
                    <div className="border border-white/10 p-4">
                      <p className="text-sm text-white/50 mb-1">Revenue</p>
                      <p className="text-2xl font-light">KSh 156,000</p>
                    </div>
                  </div>

                  <div className="border border-white/10 p-4 mb-6">
                    <p className="text-sm text-white/50 mb-2">Top Selling Products</p>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>Premium Black Tea 500g</span>
                        <span>324 units</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Green Tea 250g</span>
                        <span>186 units</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Herbal Infusion 100g</span>
                        <span>97 units</span>
                      </li>
                    </ul>
                  </div>

                  <div className="text-center text-white/50 text-sm">
                    <p>Customized dashboard for Home Comforts Investments Ltd.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 relative">
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-extralight tracking-tighter mb-6">Affordable Pricing</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Choose the plan that fits your business needs. All plans include customization for your specific products
              and markets.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Basic",
                price: "$10",
                description: "Perfect for small distributors just getting started",
                features: [
                  "Customized platform",
                  "Inventory management",
                  "Mobile sales module",
                  "Basic analytics",
                  "5 user accounts",
                  "Email support",
                ],
                cta: "Get Started",
                highlighted: false,
              },
              {
                name: "Pro",
                price: "$25",
                description: "Ideal for growing distributors with expanding operations",
                features: [
                  "Everything in Basic",
                  "Route optimization",
                  "Export compliance & billing",
                  "Retailer portal",
                  "Advanced analytics",
                  "20 user accounts",
                  "Priority support",
                ],
                cta: "Most Popular",
                highlighted: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "For large distributors with complex requirements",
                features: [
                  "Everything in Pro",
                  "E-commerce integration",
                  "Custom API access",
                  "White-label option",
                  "Unlimited users",
                  "Dedicated account manager",
                  "24/7 support",
                ],
                cta: "Contact Us",
                highlighted: false,
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`border ${
                  plan.highlighted ? "border-white" : "border-white/10"
                } p-8 flex flex-col h-full relative ${plan.highlighted ? "bg-white/5" : ""}`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 right-0 bg-white text-black text-xs px-3 py-1 transform translate-y-[-50%]">
                    RECOMMENDED
                  </div>
                )}
                <h3 className="text-2xl font-light mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-light">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-white/50">/month</span>}
                </div>
                <p className="text-white/70 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/80">
                      <div className="h-5 w-5 rounded-full border border-white/30 flex-shrink-0 flex items-center justify-center mt-0.5">
                        <div className="h-1.5 w-1.5 bg-white rounded-full" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className={`w-full py-3 text-center ${
                    plan.highlighted
                      ? "bg-white text-black hover:bg-white/90"
                      : "border border-white/20 hover:bg-white/5"
                  } transition-colors`}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-white/50">All plans include a 30-day free trial. No credit card required to start.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center py-20 relative">
        <div className="container mx-auto px-4 z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-extralight tracking-tighter mb-8">Get Started Today</h2>
              <p className="text-white/70 mb-10 leading-relaxed">
                Ready to transform your distribution business? Contact us to schedule a demo or start your 30-day free
                trial. Our team will help customize vendai for your specific products and markets.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-white/50" />
                  <a href="mailto:contact@vendai.digital" className="text-white/70 hover:text-white transition-colors">
                    contact@vendai.digital
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Linkedin className="h-5 w-5 text-white/50" />
                  <a
                    href="https://linkedin.com/company/vendai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    linkedin.com/company/vendai
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Twitter className="h-5 w-5 text-white/50" />
                  <a
                    href="https://x.com/vendai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    x.com/vendai
                  </a>
                </div>
              </div>

              <div className="border border-white/10 p-6">
                <h3 className="text-xl font-light mb-4">Success Story: Home Comforts</h3>
                <p className="text-white/70 mb-4">
                  "vendai has transformed our tea distribution business. We've seen a 20% increase in sales and 25%
                  fewer stockouts since implementation. The customized platform perfectly fits our unique product
                  catalog and export requirements."
                </p>
                <p className="text-white/50">- Sarah Kimani, Operations Manager, Home Comforts Investments Ltd.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="border border-white/10 p-8"
            >
              <h3 className="text-xl font-light mb-6">Request a Demo or Free Trial</h3>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-white/70">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent border border-white/20 p-3 focus:border-white/50 outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-white/70">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-transparent border border-white/20 p-3 focus:border-white/50 outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm text-white/70">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full bg-transparent border border-white/20 p-3 focus:border-white/50 outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="products" className="text-sm text-white/70">
                    Products You Distribute
                  </label>
                  <input
                    type="text"
                    id="products"
                    placeholder="e.g., Tea, Snacks, Beverages"
                    className="w-full bg-transparent border border-white/20 p-3 focus:border-white/50 outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-white/70">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your distribution business and needs"
                    className="w-full bg-transparent border border-white/20 p-3 focus:border-white/50 outline-none transition-colors"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="trial" className="h-4 w-4 accent-white" />
                  <label htmlFor="trial" className="text-sm text-white/70">
                    I'm interested in starting a 30-day free trial
                  </label>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  className="w-full bg-white text-black py-3 hover:bg-white/90 transition-colors"
                >
                  Submit Request
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-xl tracking-tighter font-extralight">
                vend<span className="font-normal">AI</span>
              </span>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="https://linkedin.com/company/vendai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/vendai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a href="mailto:contact@vendai.digital" className="text-white/50 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} vendai. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Login Modal */}
      <AnimatePresence>
        {showLoginModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowLoginModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-black border border-white/20 p-8 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-light">Distributor Login</h2>
                <button onClick={() => setShowLoginModal(false)} className="text-white/50 hover:text-white">
                  <X size={24} />
                </button>
              </div>

              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="subdomain" className="text-sm text-white/70">
                    Your Company Subdomain
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      id="subdomain"
                      placeholder="yourcompany"
                      className="w-full bg-transparent border border-white/20 p-3 focus:border-white/50 outline-none transition-colors"
                    />
                    <div className="bg-white/10 border border-white/20 p-3 border-l-0 text-white/50">
                      .vendai.digital
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="login-email" className="text-sm text-white/70">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="login-email"
                    className="w-full bg-transparent border border-white/20 p-3 focus:border-white/50 outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="login-password" className="text-sm text-white/70">
                    Password
                  </label>
                  <input
                    type="password"
                    id="login-password"
                    className="w-full bg-transparent border border-white/20 p-3 focus:border-white/50 outline-none transition-colors"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <label className="flex items-center gap-2 text-sm text-white/70">
                    <input type="checkbox" className="accent-white h-4 w-4" />
                    Remember me
                  </label>
                  <a href="#" className="text-sm text-white/70 hover:text-white">
                    Forgot password?
                  </a>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  className="w-full bg-white text-black py-3 hover:bg-white/90 transition-colors"
                >
                  Sign In
                </motion.button>
                <div className="text-center text-white/50 text-sm">
                  Don't have an account?{" "}
                  <a href="#contact" onClick={() => setShowLoginModal(false)} className="text-white hover:underline">
                    Contact us to get started
                  </a>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
