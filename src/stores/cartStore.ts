import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export interface Product {
  id: number
  name: string
  description: string
  image: string
  category: string
  price: number
}


export interface CartItem {
  product: Product
  quantity: number
}

export const useCartStore = defineStore('cart', () => {
  
  const products = ref<Product[]>([
    {
      id: 1,
      name: 'Grilled Salmon',
      description: 'Fresh Atlantic salmon with lemon butter sauce and seasonal vegetables',
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400',
      category: 'Main Course',
      price: 24.99,
    },
    {
      id: 2,
      name: 'Caesar Salad',
      description: 'Crisp romaine lettuce with parmesan, croutons, and classic Caesar dressing',
      image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400',
      category: 'Appetizer',
      price: 12.99,
    },
    {
      id: 3,
      name: 'Margherita Pizza',
      description: 'Traditional Italian pizza with fresh mozzarella, tomatoes, and basil',
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400',
      category: 'Main Course',
      price: 16.99,
    },
    {
      id: 4,
      name: 'Chocolate Lava Cake',
      description: 'Warm chocolate cake with a molten center, served with vanilla ice cream',
      image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400',
      category: 'Dessert',
      price: 9.99,
    },
    {
      id: 5,
      name: 'Truffle Pasta',
      description: 'Creamy fettuccine with black truffle shavings and parmesan cheese',
      image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400',
      category: 'Main Course',
      price: 22.99,
    },
    {
      id: 6,
      name: 'Mango Smoothie',
      description: 'Fresh mango blended with yogurt and a hint of honey',
      image: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=400',
      category: 'Beverage',
      price: 6.99,
    },
  ])

 
  const cart = ref<CartItem[]>([])

  
  const totalItems = computed(() => {
    return cart.value.reduce((total, item) => total + item.quantity, 0)
  })

  
  const totalPrice = computed(() => {
    return cart.value.reduce((total, item) => total + item.product.price * item.quantity, 0)
  })


  function addToCart(product: Product) {
    const existingItem = cart.value.find(item => item.product.id === product.id)
    if (existingItem) {
      existingItem.quantity++
    } else {
      cart.value.push({ product, quantity: 1 })
    }
  }

  
  function removeFromCart(productId: number) {
    const index = cart.value.findIndex(item => item.product.id === productId)
    if (index !== -1) {
      cart.value.splice(index, 1)
    }
  }

 
  function clearCart() {
    cart.value = []
  }

  return { products, cart, totalItems, totalPrice, addToCart, removeFromCart, clearCart }
})