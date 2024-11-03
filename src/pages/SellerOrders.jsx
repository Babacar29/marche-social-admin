import React from 'react'
import OrderActionDrop from '../components/OrderActionDrop'
import OrderFilter from '../components/OrderFilter'
import { RxDownload } from 'react-icons/rx'

export default function SellerOrders() {
  return (
    <div>
      <div className="flex flex-wrap gap-4 justify-between bg-white py-2 px-4 drop-shadow">
        <div className='max-w-xs w-full'>
          <div className="relative w-full sm:w-auto">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full px-4 py-2 outline-none pl-10 text-sm text-gray-900 border border-gray-300 rounded-full focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search Mockups, Logos..."
              required
            />
          </div>
        </div>
        <div className="flex flex-col w-full sm:w-auto sm:flex-row sm:items-center gap-4 ">

          <OrderFilter />
          <button className='px-4 py-2 border text-sm rounded flex items-center gap-1 outline-none focus:ring-2'>
            <RxDownload />
            Download.csv
          </button>
        </div>
      </div>
      <div className="my-5">
        <div className="relative overflow-x-auto drop-shadow-xl bg-white sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase border-b-2 bg-white">
              <tr className="text-center">
                <th scope="col" className="px-6 py-3">
                  Product
                </th>
                <th scope="col" className="px-6 py-3">
                  size
                </th>
                <th scope="col" className="px-6 py-3">
                  qty
                </th>
                <th scope="col" className="px-6 py-3">
                  color
                </th>
                <th scope="col" className="px-6 py-3">
                  price
                </th>
                <th scope="col" className="px-6 py-3">
                  user
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {[...Array(5)].map(x => (
                <tr className="bg-white border-b hover:bg-gray-250/30 text-center">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <img className="w-10 h-10 rounded-full object-cover ring-2 border ring-gray-250" src="https://images.pexels.com/photos/15030874/pexels-photo-15030874/free-photo-of-grayscale-photo-of-a-man-closing-his-eyes.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="pizza" />
                      <h1 className="">Soft Comfy Shoes</h1>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    43
                  </td>
                  <td className="px-6 py-4">
                    1
                  </td>
                  <td className="px-6 py-4">
                    white
                  </td>
                  <td className="px-6 py-4">
                    AED 222
                  </td>
                  <td className="px-6 py-4">
                    John Doe
                  </td>
                  <td className="px-6 py-4">
                    12/12/23
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-md bg-green-500 text-green-500 font-medium bg-opacity-10">Completed</span>
                  </td>
                  <td className="px-6 py-4">
                    <OrderActionDrop />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
