import Navbar from '../components/Navbar'
import { useCart } from '../context/CartContext'
import { Trash2 } from 'lucide-react'

const Cart = () => {

  const { cartItems, removeFromCart } = useCart()

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-16">

        <h1 className="text-4xl font-bold mb-10">
          Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <p className="text-xl">
            Your cart is empty
          </p>
        ) : (
          <div className="space-y-6">

            {cartItems.map((item) => (

              <div
                key={item.id}
                className="bg-white p-5 rounded-2xl shadow-md flex flex-col md:flex-row items-center justify-between gap-5"
              >

                <div className="flex items-center gap-5">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-28 h-28 object-cover rounded-xl"
                  />

                  <div>

                    <h2 className="text-2xl font-bold">
                      {item.title}
                    </h2>

                    <p className="text-gray-600">
                      {item.price}
                    </p>

                    <p>
                      Quantity: {item.quantity}
                    </p>

                  </div>

                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white p-3 rounded-xl hover:bg-red-600 transition"
                >
                  <Trash2 />
                </button>

              </div>

            ))}

          </div>
        )}

      </div>

    </div>
  )
}

export default Cart