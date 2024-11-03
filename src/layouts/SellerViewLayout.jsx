import React, { useState } from 'react'
import Header from './partials/header'
import { Link, Outlet, useParams } from 'react-router-dom'

export default function SellerViewLayout() {
  const [activeTab, setActiveTAb] = useState(1);
  const { id } = useParams();

  return (
    <div>
      <Header header={'student details'} link={'/students'} arrow={true} />
      <div className='max-w-screen-2xl mx-auto px-4 xl:px-8 space-y-4 pt-5'>
        <div className='bg-white px-5'>
          <div className='flex flex-wrap items-center gap-4 xl:gap-8 text-lg text-gray-450'>
            <Link to={`/sellers/${id}`}>
              <button
                className={`${!window.location.href.includes('products')
                  && !window.location.href.includes('orders')
                  && 'text-gray-150 border-b-2 border-gray-150 py-4'} hover:border-b-2 border-gray-150 hover:py-4 capitalize`} onClick={e => setActiveTAb(1)}>Seller profile</button>
            </Link>
            <Link to={`/sellers/${id}/products`}>
              <button className={`${window.location.href.includes('products') && 'text-gray-150 border-b-2 border-gray-150 py-4'} hover:border-b-2 border-gray-150 hover:py-4 capitalize`} onClick={e => setActiveTAb(2)}>Seller Products</button>
            </Link>
            <Link to={`/sellers/${id}/orders`}>
              <button className={`${window.location.href.includes('orders') && 'text-gray-150 border-b-2 border-gray-150 py-4'} hover:border-b-2 border-gray-150 hover:py-4 capitalize`} onClick={e => setActiveTAb(3)}>Seller Orders</button>
            </Link>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  )
}
