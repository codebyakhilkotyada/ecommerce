import {
  createContext,
  useContext,
  useState,
} from 'react'

const WishlistContext = createContext()

export const WishlistProvider = ({
  children,
}) => {

  const [wishlistItems, setWishlistItems] =
    useState([])

  const toggleWishlist = (product) => {

    const exists = wishlistItems.find(
      (item) => item.id === product.id
    )

    if (exists) {

      setWishlistItems(
        wishlistItems.filter(
          (item) => item.id !== product.id
        )
      )

    } else {

      setWishlistItems([
        ...wishlistItems,
        product,
      ])

    }

  }

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        toggleWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

export const useWishlist = () =>
  useContext(WishlistContext)