import { useState } from "react";
import Header from "../layouts/partials/header";
import { Link } from "react-router-dom";
import ProductActionDrop from "../components/ProductActionDrop";
import ProductDateFilter from "../components/ProductDateFilter";
import ProductCancel from "../components/ProductCancel";
import { RxDownload } from "react-icons/rx";
import PendingSellersDrop from "../components/PendingSellersDrop";

export default function PendingSellers() {
  const [listingCancel, setListingCancel] = useState(false);
  return (
    <div>
      <Header header={"Pending Sellers"} />
      <div className="max-w-screen-2xl mx-auto">
        <div className="mx-4 sm:mx-9 pt-5">
          <div className="flex flex-wrap gap-4 justify-between bg-white py-2 px-4">
            <div className="max-w-xs w-full">
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
                  placeholder="Search Sellers..."
                  required
                />
              </div>
            </div>
            <div className="flex flex-col w-full sm:w-auto sm:flex-row sm:items-center gap-4">
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
              <ProductDateFilter />
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
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Phone Number
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Country
                    </th>
                    <th scope="col" className="px-6 py-3">
                      city
                    </th>
                    <th scope="col" className="px-6 py-3">
                      address
                    </th>
                    <th scope="col" className="px-6 py-3">
                      date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(7)].map((x, i) => (
                    <tr className="bg-white border-b hover:bg-gray-250/30">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <img className="w-10 h-10 rounded-full object-cover ring-2 border ring-gray-250" src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600" alt="pizza" />
                          <h1 className="">Sardar</h1>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        +97887646353
                      </td>
                      <td className="px-6 py-4">
                        France
                      </td>
                      <td className="px-6 py-4">
                        Paris
                      </td>
                      <td className="px-6 py-4">
                        Paris, France
                      </td>
                      <td className="px-6 py-4">
                        12/12/23
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 rounded-md bg-green-500 bg-opacity-10 text-green-500 font-medium">Active</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap space-x-2">
                        <PendingSellersDrop setIsOpen={setListingCancel} />
                      </td>
                    </tr>
                  ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <ProductCancel isOpen={listingCancel} setIsOpen={setListingCancel} />
    </div>
  )
}
