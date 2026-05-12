// src/pages/Wishlist.jsx

import Navbar from '../components/Navbar'

import {
  useWishlist,
} from '../context/WishlistContext'

const Wishlist = () => {

  const {
    wishlistItems,
  } = useWishlist()

  return (

    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-16">

        <h1 className="text-4xl font-bold mb-10">
          Wishlist
        </h1>

        {wishlistItems.length === 0 ? (

          <p>
            No wishlist items
          </p>

        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {wishlistItems.map(
              (item) => (

                <div
                  key={item.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-md"
                >

                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-72 w-full object-cover"
                  />

                  <div className="p-5">

                    <h2 className="text-2xl font-bold">
                      {item.title}
                    </h2>

                    <p className="text-gray-600 mt-2">
                      {item.price}
                    </p>

                  </div>

                </div>

              )
            )}

          </div>

        )}

      </div>

    </div>

  )
}

export default Wishlist