import './App.css'
import "./fonts/Poppins-Bold.ttf"
import "./fonts/Poppins-Regular.ttf"

import NavBar from './Components/NavBar'
import Home from './Components/Home'
import WishList from './Components/WishList'
import LoginPage from './Components/LoginPage'
import ShoppingCart from './Components/ShoppingCart'
import CheckOutPage from './Components/CheckOutPage'
import ProductPage from './Components/ProductPage'
import ContactUs from './Components/ContactUs'
import NotFoundPage from './Components/NotFoundPage'
import Footer from './Components/Footer'
import ProductView from './Components/ProductView'

import { fetchAllProducts } from './services/fetchProducts'
import { useSelector } from 'react-redux'
import { useQuery } from '@tanstack/react-query'
import { Route, Routes } from 'react-router-dom'

function App() {
  const { isPending, data } = useQuery({
    queryKey: ['products'],
    queryFn: fetchAllProducts,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  })


  if (isPending) return <div>Loading...</div>
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/products" element={<ProductView showAll={true} />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
