import axios from 'axios'
import{Routes, Route} from 'react-router'
import {useState, useEffect} from 'react'
import { HomePage } from './pages/home/HomePage'
import { CheckoutPage } from './pages/checkout/CheckoutPage'
import { OrdersPage} from './pages/order/OrdersPage'
import { TrackingPage } from './pages/tracking/TrackingPage'
import { NotFoundPage } from "./pages/NotFoundPage"
import './App.css'

function App() {

  const [cart, setCart]= useState([])

  useEffect(()=>{
    const getAppData = async () => {
      const response = await axios.get('/api/cart-items?expand=product')
      setCart(response.data)
    }

    getAppData()
    
  })
  
  return (
    <Routes>
      <Route index element={<HomePage cart= { cart } />} />
      <Route path='checkout' element={<CheckoutPage cart= { cart } />}/>
      <Route path='orders' element={<OrdersPage cart= {cart} />}/>
      <Route path="tracking/:orderId/:productId" element={<TrackingPage cart={cart} />}/>
      <Route path='*' element={<NotFoundPage />}/>
    </Routes>
    
  )
}

export default App
