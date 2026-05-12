import { useState } from 'react'

import { Link } from 'react-router-dom'

import {
  Menu,
  X,
  ShoppingBag,
  Heart,
  Moon,
  Sun,
} from 'lucide-react'

import { motion } from 'framer-motion'

import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext.jsx'
import { useTheme } from '../context/ThemeContext'

const Navbar = () => {

  const [isOpen, setIsOpen] =
    useState(false)

  const { cartItems } = useCart()

  const { wishlistItems } =
    useWishlist()

  const { darkMode, setDarkMode } =
    useTheme()

  return (

    <nav className="bg-black text-white sticky top-0 z-50 shadow-lg">

      <div className="max-w-7xl mx-auto px-4">

        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold tracking-wide"
          >
            ShopVerse
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">

            <Link
              to="/"
              className="hover:text-gray-300 transition"
            >
              Home
            </Link>

            <Link
              to="/"
              className="hover:text-gray-300 transition"
            >
              Products
            </Link>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="relative"
            >

              <Heart className="hover:text-pink-400 transition" />

              <span className="absolute -top-3 -right-3 bg-pink-500 text-xs px-2 py-1 rounded-full">
                {wishlistItems.length}
              </span>

            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative"
            >

              <ShoppingBag className="hover:text-yellow-400 transition" />

              <span className="absolute -top-3 -right-3 bg-red-500 text-xs px-2 py-1 rounded-full">
                {cartItems.length}
              </span>

            </Link>

            {/* Dark Mode */}
            <button

              onClick={() =>
                setDarkMode(!darkMode)
              }

              className="hover:text-yellow-400 transition"
            >

              {darkMode ? (
                <Sun size={22} />
              ) : (
                <Moon size={22} />
              )}

            </button>

            {/* Login */}
            <Link to="/login">

              <button className="bg-white text-black px-5 py-2 rounded-xl font-semibold hover:bg-gray-200 transition">

                Login

              </button>

            </Link>

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">

            <button
              onClick={() =>
                setIsOpen(!isOpen)
              }
            >

              {isOpen ? (
                <X size={30} />
              ) : (
                <Menu size={30} />
              )}

            </button>

          </div>

        </div>

      </div>

      {/* Mobile Menu */}
      {isOpen && (

        <motion.div

          initial={{
            opacity: 0,
            y: -20,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.3,
          }}

          className="md:hidden bg-black px-6 pb-6 flex flex-col gap-5"
        >

          <Link
            to="/"
            onClick={() =>
              setIsOpen(false)
            }
          >
            Home
          </Link>

          <Link
            to="/"
            onClick={() =>
              setIsOpen(false)
            }
          >
            Products
          </Link>

          <Link
            to="/wishlist"
            className="flex items-center gap-3"
            onClick={() =>
              setIsOpen(false)
            }
          >

            <Heart />

            <span>
              Wishlist ({wishlistItems.length})
            </span>

          </Link>

          <Link
            to="/cart"
            className="flex items-center gap-3"
            onClick={() =>
              setIsOpen(false)
            }
          >

            <ShoppingBag />

            <span>
              Cart ({cartItems.length})
            </span>

          </Link>

          {/* Dark Mode */}
          <button

            onClick={() =>
              setDarkMode(!darkMode)
            }

            className="flex items-center gap-3"
          >

            {darkMode ? (
              <>
                <Sun />
                <span>
                  Light Mode
                </span>
              </>
            ) : (
              <>
                <Moon />
                <span>
                  Dark Mode
                </span>
              </>
            )}

          </button>

          {/* Login */}
          <Link
            to="/login"
            onClick={() =>
              setIsOpen(false)
            }
          >

            <button className="bg-white text-black px-5 py-3 rounded-xl font-semibold w-full">

              Login

            </button>

          </Link>

        </motion.div>

      )}

    </nav>

  )
}

export default Navbar