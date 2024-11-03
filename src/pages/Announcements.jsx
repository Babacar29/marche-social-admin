import React, { useState } from 'react';
import Header from '../layouts/partials/header';
import AnnouncementAdd from '../components/AnnouncementAdd';

export default function Announcements() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Header header={'Manage Announcements'} />
      <div className='max-w-screen-2xl mx-auto'>
        <div className='mx-4 sm:mx-9 my-5'>
          <div className='flex flex-wrap gap-4 justify-between bg-white py-2 px-4 rounded'>
            <button
              className='rounded-md w-full sm:w-auto border px-6 py-2 text-sm capitalize'
              onClick={(e) => setIsOpen((pre) => !pre)}
            >
              Add Announcement
            </button>
            <div className='flex flex-col w-full sm:w-auto sm:flex-row sm:items-center gap-4'>
              <div className='relative w-full sm:w-auto'>
                <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                  <svg
                    className='w-4 h-4 text-gray-500 dark:text-gray-400'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 20 20'
                  >
                    <path
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                    />
                  </svg>
                </div>
                <input
                  type='search'
                  id='default-search'
                  className='block w-full px-4 py-2 outline-none pl-10 text-sm text-gray-900 border border-gray-300 rounded-full focus:ring-blue-500 focus:border-blue-500'
                  placeholder='Search Mockups, Logos...'
                  required
                />
              </div>
              {/* <Filterdropdown /> */}
            </div>
          </div>
          <div className='my-5'>
            <div className='relative overflow-x-auto drop-shadow-xl bg-white sm:rounded-lg'>
              <table className='w-full text-sm text-left text-gray-500'>
                <thead className='text-xs text-gray-700 uppercase border-b-2 bg-white'>
                  <tr>
                    <th scope='col' className='px-6 py-3'>
                      Announcement Target
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Description
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Date & Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(5)].map((x, index) => (
                    <tr
                      key={index}
                      className='bg-white border-b hover:bg-gray-250/30'
                    >
                      <td className='px-6 py-4 whitespace-nowrap'>
                        All Captains
                      </td>
                      <td className='px-6 py-4 max-w-xs truncate'>
                        Lorem ipsum dolor sit , sectetur adipiscing elit.
                        Phasellus lectus augue, in efficitur a, ornare eget
                        nibh. Lorem ipsum dolor sit , sectetur adipiscing elit.
                        Phasellus lectus augue, in efficitur a, ornare eget
                        nibh.
                      </td>
                      <td className='px-6 py-4'>02/03/23</td>
                    </tr>
                  ))}

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <AnnouncementAdd isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
