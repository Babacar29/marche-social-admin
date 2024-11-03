import { Link } from "react-router-dom";
import Header from "../layouts/partials/header";

export default function Payments() {
  return (
    <div>
      <Header header={"Manage Payments"} />
      <div className="max-w-screen-2xl mx-auto">
        <div className="mx-4 sm:mx-9 my-5">
          <div className="flex flex-wrap gap-4 justify-between bg-white py-2 px-4 rounded">
            <div>
              {/* <button className="rounded-md w-full sm:w-auto bg-gray-250 text-white px-6 py-2 text-lg font-medium capitalize">Add Event</button> */}
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
              <button className="bg-gray-250 px-5 py-2 text-white rounded-md font-medium">Export to CSV</button>

            </div>
          </div>
          <div className="my-5">
            <div className="relative overflow-x-auto drop-shadow-xl bg-white sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase border-b-2 bg-white">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      title
                    </th>
                    <th scope="col" className="px-6 py-3">
                      amount
                    </th>
                    <th scope="col" className="px-6 py-3">
                      commision
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Date & Time of Transaction
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Description of transaction
                    </th>
                    {/* <th scope="col" className="px-6 py-3">
                      action
                    </th> */}
                  </tr>
                </thead>
                <tbody>
                  {[...Array(5)].map(x => (
                    <tr className="bg-white border-b hover:bg-gray-250/30">
                      <td className="px-6 py-4 whitespace-nowrap">
                        Withdrawal: Wave
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        $ 15
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        $ 1.5
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        Jun 20, 2024 - 10:00
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        payment of refund
                      </td>
                      {/* <td className="px-6 py-4 whitespace-nowrap">
                        <span className="bg-gray-150 bg-opacity-10 text-gray-250 font-semibold text-sm py-1 px-3 rounded-md">View</span>
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
