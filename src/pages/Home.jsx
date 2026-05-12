// src/pages/Home.jsx

import { useState } from 'react'
import products from '../data/products'
import { Link } from 'react-router-dom'

import {
  Heart,
} from 'lucide-react'

import {
  motion,
} from 'framer-motion'

import Navbar from '../components/Navbar'
import HeroSlider from '../components/HeroSlider'

import { useWishlist } from '../context/WishlistContext'

const Home = () => {

  const [search, setSearch] =
    useState('')

  const [selectedCategory,
    setSelectedCategory] =
    useState('All')

  const {
    wishlistItems,
    toggleWishlist,
  } = useWishlist()

  const filteredProducts =
    products.filter((product) => {

      const matchesSearch =
        product.title
          .toLowerCase()
          .includes(search.toLowerCase())

      const matchesCategory =
        selectedCategory === 'All' ||
        product.category ===
          selectedCategory

      return (
        matchesSearch &&
        matchesCategory
      )

    })

  return (

    <div className="bg-gray-100 min-h-screen">

      <Navbar />

      <HeroSlider />

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-4 py-10">

        <div className="flex flex-col md:flex-row gap-5 justify-between">

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="bg-white px-5 py-3 rounded-xl shadow-md outline-none"
          />

          <select
            value={selectedCategory}
            onChange={(e) =>
              setSelectedCategory(
                e.target.value
              )
            }
            className="bg-white px-5 py-3 rounded-xl shadow-md outline-none"
          >

            <option>
              All
            </option>

            <option>
              Electronics
            </option>

            <option>
              Shoes
            </option>

          </select>

        </div>

      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-4 pb-20">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredProducts.map(
            (product) => (

              <motion.div

                whileHover={{
                  scale: 1.05,
                }}

                key={product.id}

                className="bg-white rounded-2xl overflow-hidden shadow-md"
              >

                <img
                  src={product.image}
                  alt={product.title}
                  className="h-72 w-full object-cover"
                />

                <div className="p-5">

                  <div className="flex justify-end">

                    <button
                      onClick={() =>
                        toggleWishlist(
                          product
                        )
                      }
                    >

                      <Heart

                        className={`${
                          wishlistItems.find(
                            (item) =>
                              item.id ===
                              product.id
                          )
                            ? 'fill-red-500 text-red-500'
                            : ''
                        }`}
                      />

                    </button>

                  </div>

                  <p className="text-gray-500 text-sm">
                    {product.category}
                  </p>

                  <h2 className="text-2xl font-bold mt-2">
                    {product.title}
                  </h2>

                  <p className="text-gray-600 mt-2">
                    {product.price}
                  </p>

                  <Link
                    to={`/product/${product.id}`}
                  >

                    <button className="mt-5 w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
                      View Product
                    </button>

                  </Link>

                </div>

              </motion.div>

            )
          )}

        </div>

      </section>

    </div>

  )
}

export default Home