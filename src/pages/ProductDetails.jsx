// src/pages/ProductDetails.jsx

import { useParams } from 'react-router-dom'
import products from '../data/products'
import Navbar from '../components/Navbar'

import {
  useCart,
} from '../context/CartContext'

import toast from 'react-hot-toast'


const ProductDetails = () => {

  const { id } = useParams()

  const { addToCart } =
    useCart()

  const product =
    products.find(
      (item) =>
        item.id === Number(id)
    )

  return (

    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-16">

        <div className="grid md:grid-cols-2 gap-10 bg-white rounded-2xl shadow-lg p-8">

          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[500px] object-cover rounded-2xl"
          />

          <div>

            <h1 className="text-5xl font-bold">
              {product.title}
            </h1>

            <p className="text-2xl text-gray-600 mt-5">
              {product.price}
            </p>

            <p className="mt-6 text-gray-700 leading-8">
              {product.description}
            </p>

            <button

              onClick={() => {

                addToCart(product)

                toast.success(
                  'Added To Cart'
                )

              }}

              className="mt-10 bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition"
            >
              Add To Cart
            </button>

          </div>

        </div>

      </div>

    </div>

  )
}

export default ProductDetails