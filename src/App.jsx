import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import RootLayout from './layouts/RootLayout'
import Login from './pages/Login'
import Products from './pages/Products'
import ProductAdd from './pages/ProductAdd'
import Categories from './pages/Categories'
import Attributes from './pages/Attributes'
import Orders from './pages/Orders'
import Reviews from './pages/Reviews'
import Payments from './pages/Payments'
import Announcements from './pages/Announcements'
import Profile from './pages/Profile'
import Sellers from './pages/Sellers'
import SellerViewLayout from './layouts/SellerViewLayout'
import SellerProfile from './pages/SellerProfile'
import SellerProducts from './pages/SellerProducts'
import SellerOrders from './pages/SellerOrders'
import PendingSellers from './pages/PendingSellers'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />} >
          <Route index element={<Home />} />
          <Route path='sellers' element={<Sellers />} />
          <Route path='sellers/:id' element={<SellerViewLayout />} >
            <Route index element={<SellerProfile />} />
            <Route path='products' element={<SellerProducts />} />
            <Route path='orders' element={<SellerOrders />} />
          </Route>
          <Route path='pending-sellers' element={<PendingSellers />} />
          <Route path='products' element={<Products />} />
          <Route path='products/add' element={<ProductAdd />} />
          <Route path='categories' element={<Categories />} />
          <Route path='attributes' element={<Attributes />} />
          <Route path='orders' element={<Orders />} />
          <Route path='reviews' element={<Reviews />} />
          <Route path='payments' element={<Payments />} />
          <Route path='announcements' element={<Announcements />} />
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
