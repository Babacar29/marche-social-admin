import { useState } from "react";
import AttributeAdd from "../components/AttributeAdd";
import Header from "../layouts/partials/header";
import { Link } from "react-router-dom";
import { RxDownload } from "react-icons/rx";

export default function Attributes() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Header header={"Attributes"} />
      <div className="max-w-screen-2xl mx-auto">
        <div className="mx-4 my-5">
          <div className="flex flex-wrap gap-4 justify-between bg-white py-2 px-4">
            <div>
              <button className="rounded-md w-full sm:w-auto border px-6 py-2 text-sm font-medium outline-none" onClick={e => setIsOpen(pre => !pre)}>Add Attribute</button>
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
                  placeholder="Search attributes..."
                  required
                />
              </div>
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
                      Type
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b hover:bg-gray-250/30">
                    <td className="px-6 py-4">
                      Ships From
                    </td>
                    <td className="px-6 py-4">
                      Color
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-4">
                        <Link className="text-blue-600 font-medium">Edit</Link>
                        <Link className="text-red-600 font-medium">Delete</Link>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-white border-b hover:bg-gray-250/30">
                    <td className="px-6 py-4">
                      Shoe Size
                    </td>
                    <td className="px-6 py-4">
                      Image
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-4">
                        <Link className="text-blue-600 font-medium">Edit</Link>
                        <Link className="text-red-600 font-medium">Delete</Link>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-white border-b hover:bg-gray-250/30">
                    <td className="px-6 py-4">
                      Cup size
                    </td>
                    <td className="px-6 py-4">
                      Image
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-4">
                        <Link className="text-blue-600 font-medium">Edit</Link>
                        <Link className="text-red-600 font-medium">Delete</Link>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <AttributeAdd isOpen={isOpen} setIsOpen={setIsOpen} />
    </div >
  )
}