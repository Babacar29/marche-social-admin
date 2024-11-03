import { Dialog, Transition, Listbox } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { RiContractUpDownLine } from 'react-icons/ri';
import { IoCheckmarkOutline } from 'react-icons/io5';

const people = [
  { name: 'All Captains' },
  { name: 'All Explorers' },
  { name: 'All Users' },
  { name: 'Jane Doe' },
];

export default function AnnouncementAdd({ isOpen, setIsOpen }) {
  const [selected, setSelected] = useState(people[0]);
  const [formData, setFormData] = useState({
    desccirption: '',
    date: '',
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-50' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium leading-6 text-gray-900'
                  >
                    Add Announcement
                  </Dialog.Title>
                  <div className='mt-2'>
                    <div className='my-4 space-y-4'>
                      <Listbox value={selected} onChange={setSelected}>
                        <div className='relative mt-1'>
                          <Listbox.Button className='relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
                            <span className='block truncate'>
                              {selected.name}
                            </span>
                            <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                              {/* <ChevronUpDownIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              /> */}
                              <RiContractUpDownLine
                                className='h-5 w-5 text-gray-400'
                                aria-hidden='true'
                              />
                            </span>
                          </Listbox.Button>
                          <Transition
                            as={Fragment}
                            leave='transition ease-in duration-100'
                            leaveFrom='opacity-100'
                            leaveTo='opacity-0'
                          >
                            <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white z-10 py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm'>
                              {people.map((person, personIdx) => (
                                <Listbox.Option
                                  key={personIdx}
                                  className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                      ? 'bg-amber-100 text-amber-900'
                                      : 'text-gray-900'
                                    }`
                                  }
                                  value={person}
                                >
                                  {({ selected }) => (
                                    <>
                                      <span
                                        className={`block truncate ${selected
                                            ? 'font-medium'
                                            : 'font-normal'
                                          }`}
                                      >
                                        {person.name}
                                      </span>
                                      {selected ? (
                                        <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600'>
                                          {/* <CheckIcon className="h-5 w-5" aria-hidden="true" /> */}
                                          <IoCheckmarkOutline
                                            className='h-5 w-5'
                                            aria-hidden='true'
                                          />
                                        </span>
                                      ) : null}
                                    </>
                                  )}
                                </Listbox.Option>
                              ))}
                            </Listbox.Options>
                          </Transition>
                        </div>
                      </Listbox>
                      <div class='relative z-0'>
                        <input
                          type='text'
                          id='floating_standard'
                          class='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                          placeholder=' '
                        />
                        <label
                          htmlFor='floating_standard'
                          class='absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                        >
                          title
                        </label>
                      </div>
                      <div class='relative z-0'>
                        <input
                          type='text'
                          id='floating_standard'
                          class='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                          placeholder=' '
                        />
                        <label
                          htmlFor='floating_standard'
                          class='absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                        >
                          Description
                        </label>
                      </div>
                      <div class='relative z-0'>
                        <input
                          type='date'
                          id='floating_standard'
                          class='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                          placeholder=' '
                        />
                        <label
                          htmlFor='floating_standard'
                          class='absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                        >
                          Date
                        </label>
                      </div>
                      {/* <div class="relative z-0">
                        <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="floating_standard" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                      </div> */}
                    </div>
                  </div>

                  <div className='mt-4 space-y-3'>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent bg-gray-250 w-full bg-opacity-25 px-4 py-2 text-sm font-medium text-gray-950 hover:bg-gray-250 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      onClick={closeModal}
                    >
                      Push
                    </button>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent bg-gray-500 w-full bg-opacity-25 px-4 py-2 text-sm font-medium text-gray-950 hover:bg-gray-250 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
