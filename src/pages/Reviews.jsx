import { useState } from "react";
import Header from "../layouts/partials/header";
import ReviewsAdd from "../components/ReviewsAdd";

export default function Reviews() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Header header={"Manage Reviews"} />
      <div className="max-w-screen-2xl mx-auto">
        <div className="mx-4 sm:mx-9 my-5">
          <div className="flex flex-wrap gap-4 justify-between bg-white py-2 px-4 rounded">
            <div>
              <button onClick={e => setIsOpen(!isOpen)} className="rounded-md w-full sm:w-auto border px-6 py-2 text-sm outline-none">Add Review</button>
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
                  className="block w-full px-4 py-2 outline-none pl-10 text-sm text-gray-900 border rounded-full focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search Reviews..."
                  required
                />
              </div>
              {/* <Filterdropdown /> */}
            </div>
          </div>
          <div className="my-10">
            <div className="relative overflow-x-auto drop-shadow-xl bg-white sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500">
                {/* <caption>
                  <h1 className="text-start p-4 text-xl font-medium text-black">Previous Notifications</h1>
                </caption> */}
                <thead className="text-xs text-gray-700 uppercase border-b-2 bg-white">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      user
                    </th>
                    <th scope="col" className="px-6 py-3">
                      order id
                    </th>
                    <th scope="col" className="px-6 py-3">
                      review
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Rating
                    </th>
                    <th scope="col" className="px-6 py-3">
                      date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(7)].map(x => (
                    <tr className="bg-white border-b hover:bg-gray-250/30">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <img src="https://images.pexels.com/photos/5935189/pexels-photo-5935189.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="pizza" className="w-10 h-10 ring-2 ring-gray-250 rounded-full object-cover" />
                          <h1 className="">Jane Doe</h1>
                        </div>
                      </td>
                      <td className="px-6 py-4 max-w-xs truncate">
                        Lorem ipsum dolor sit , sectetur adipiscing elit. Phasellus lectus augue,  in efficitur a, ornare eget nibh. Lorem ipsum dolor sit , sectetur adipiscing elit. Phasellus lectus augue,  in efficitur a, ornare eget nibh.
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        4.9
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        11/22/23
                      </td>
                      <td className="px-6 py-4 space-x-2">
                        {/* <a href="#" className="bg-gray-250 text-gray-250 bg-opacity-10 px-2 py-1 rounded-md font-semibold hover:underline">view</a> */}
                        <a href="#" className="bg-gray-250 text-gray-250 bg-opacity-10 px-2 py-1 rounded-md font-semibold hover:underline">Delete</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <ReviewsAdd isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}
