import { useRef } from "react";
import Header from "../layouts/partials/header";
import { Editor } from "@tinymce/tinymce-react";
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { IoCheckmark } from "react-icons/io5";
import { RiContractUpDownLine } from "react-icons/ri";
import { FaWrench } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";
import { MdInventory } from "react-icons/md";
import { BsFillGridFill } from "react-icons/bs";

const people = [
  { name: 'Simple product', code: 1 },
  { name: 'Variable product', code: 2 }
]

export default function ProductAdd() {
  const [selected, setSelected] = useState(people[0]);
  const [sidebarActive, setSidebarActive] = useState(1)
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  console.log(selected)
  return (
    <div>
      <Header header={"Add Product"} />
      <div className="max-w-screen-2xl mx-auto">
        <div className="mx-4 my-8 pt-8">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 lg:col-span-8">
              <div className="space-y-3.5">
                <div>
                  <h1 className="text-2xl">Add new product</h1>
                </div>
                <div>
                  <input
                    type="text"
                    className="px-4 py-1.5 w-full outline-none rounded-md placeholder:text-gray-600 font-medium focus:ring-2 focus:ring-gray-250 border"
                    placeholder="Product name"
                  />
                </div>
                <div>
                  <div className="px-4 py-1.5 bg-white border rounded-md flex justify-between items-center">
                    <h3 className="text-lg">Product description</h3>
                    {/* <button><IoMdArrowDropdown /></button> */}
                  </div>
                  <Editor
                    apiKey="qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc"
                    onInit={(evt, editor) => (editorRef.current = editor)}
                    initialValue="<p>This is the initial content of the editor.</p>"
                    init={{
                      selector: "textarea",
                      height: 500,
                      menubar: false,
                      plugins: [
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "image",
                        "charmap",
                        "preview",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "code",
                        "fullscreen",
                        "insertdatetime",
                        "media",
                        "table",
                        "code",
                        "help",
                        "wordcount",
                      ],
                      toolbar:
                        "undo redo | blocks | " +
                        "bold italic forecolor | alignleft aligncenter " +
                        "alignright alignjustify | bullist numlist outdent indent | " +
                        "removeformat | help | link image",
                      content_style:
                        "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                    }}
                  />

                  {/* <button onClick={log}>Log editor content</button> */}
                </div>
                <div className="bg-white px-4 py-2.5 border space-y-4">
                  <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-2 lg:col-span-3 border-r">
                      <div>
                        <ul className="text-sm font-medium text-gray-250 text-opacity-80">
                          <li className="border-b py-2 flex items-center gap-1.5 cursor-pointer hover:underline" onClick={e => setSidebarActive(1)}><FaWrench /> <span className="hidden md:block">General</span></li>
                          <li className="border-b py-2 flex items-center gap-1.5 cursor-pointer hover:underline" onClick={e => setSidebarActive(2)}><MdInventory /> <span className="hidden md:block">Inventory</span></li>
                          <li className="border-b py-2 flex items-center gap-1.5 cursor-pointer hover:underline" onClick={e => setSidebarActive(3)}><FaShippingFast /> <span className="hidden md:block">Shipping</span></li>
                          {
                            selected.code === 2 &&
                            <li className="border-b py-2 flex items-center gap-1.5 cursor-pointer hover:underline" onClick={e => setSidebarActive(4)}><BsFillGridFill /> <span className="hidden md:block">Variations</span></li>
                          }
                        </ul>
                      </div>
                    </div>
                    <div className="col-span-10 lg:col-span-9">
                      {selected.code === 1 &&
                        (
                          <>
                            {
                              sidebarActive === 1 &&
                              <div className="space-y-3">
                                <div className="">
                                  <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Regular price (AED)</label>
                                  <input type="number" id="first_name" class="bg-white border border-gray-300 text-gray-900 outline-none text-sm rounded-lg focus:ring-gray-150 focus:border-blue-500 block w-full px-2.5 py-1.5" placeholder="" required />
                                </div>
                                <div className="">
                                  <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sale price (AED)</label>
                                  <input type="number" id="first_name" class="bg-white border border-gray-300 text-gray-900 outline-none text-sm rounded-lg focus:ring-gray-150 focus:border-blue-500 block w-full px-2.5 py-1.5" placeholder="" required />
                                </div>
                              </div>
                            }
                            {sidebarActive === 2 &&
                              <div className="space-y-3">
                                <div className="">
                                  <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">SKU</label>
                                  <input type="number" id="first_name" class="bg-white border border-gray-300 text-gray-900 outline-none text-sm rounded-lg focus:ring-gray-150 focus:border-blue-500 block w-full px-2.5 py-1.5" placeholder="" required />
                                </div>
                                <div className="">
                                  <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
                                  <input type="number" id="first_name" class="bg-white border border-gray-300 text-gray-900 outline-none text-sm rounded-lg focus:ring-gray-150 focus:border-blue-500 block w-full px-2.5 py-1.5" placeholder="1" required />
                                </div>
                                <div className="flex gap-4">
                                  <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stock status</label>
                                  <div>
                                    <div class="flex items-center mb-4">
                                      <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 outline-none" />
                                      <label htmlFor="default-radio-1" class="ms-2 text-xs font-medium text-gray-600">In stock</label>
                                    </div>
                                    <div class="flex items-center mb-4">
                                      <input id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 outline-none" />
                                      <label htmlFor="default-radio-2" class="ms-2 text-xs font-medium text-gray-600">Out of stock</label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            }
                            {sidebarActive === 3 &&
                              <div className="space-y-3">
                                <div className="">
                                  <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Weight (kg)</label>
                                  <input type="number" id="first_name" class="bg-white border border-gray-300 text-gray-900 outline-none text-sm rounded-lg focus:ring-gray-150 focus:border-blue-500 block w-full px-2.5 py-1.5" placeholder="" required />
                                </div>
                                <div className="flex items-center gap-4">
                                  <label for="first_name" class="block mb-2 text-xs font-medium text-gray-900 dark:text-white">Dimensions (cm)</label>
                                  <div className="flex flex-wrap gap-1 ">
                                    <div>
                                      <input
                                        type="number"
                                        id="length"
                                        class="bg-white border border-gray-300 text-gray-900 outline-none text-sm rounded-lg focus:ring-gray-150 focus:border-blue-500 block w-full px-2.5 py-1.5"
                                        placeholder="Length"
                                        required />
                                    </div>
                                    <div>
                                      <input
                                        type="number"
                                        id="width"
                                        class="bg-white border border-gray-300 text-gray-900 outline-none text-sm rounded-lg focus:ring-gray-150 focus:border-blue-500 block w-full px-2.5 py-1.5"
                                        placeholder="Width"
                                        required />
                                    </div>
                                    <div>
                                      <input
                                        type="number"
                                        id="height"
                                        class="bg-white border border-gray-300 text-gray-900 outline-none text-sm rounded-lg focus:ring-gray-150 focus:border-blue-500 block w-full px-2.5 py-1.5"
                                        placeholder="Height"
                                        required />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            }
                          </>
                        )}
                      {
                        selected.code === 2 &&
                        (
                          <>
                            {
                              sidebarActive === 1 &&
                              <div className="space-y-3">
                                <div className="">
                                  <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Regular price (AED)</label>
                                  <input type="number" id="first_name" class="bg-white border border-gray-300 text-gray-900 outline-none text-sm rounded-lg focus:ring-gray-150 focus:border-blue-500 block w-full px-2.5 py-1.5" placeholder="" required />
                                </div>
                                <div className="">
                                  <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sale price (AED)</label>
                                  <input type="number" id="first_name" class="bg-white border border-gray-300 text-gray-900 outline-none text-sm rounded-lg focus:ring-gray-150 focus:border-blue-500 block w-full px-2.5 py-1.5" placeholder="" required />
                                </div>
                              </div>
                            }
                            {sidebarActive === 2 &&
                              <div className="space-y-3">
                                <div className="">
                                  <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">SKU</label>
                                  <input type="number" id="first_name" class="bg-white border border-gray-300 text-gray-900 outline-none text-sm rounded-lg focus:ring-gray-150 focus:border-blue-500 block w-full px-2.5 py-1.5" placeholder="" required />
                                </div>
                                <div className="">
                                  <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
                                  <input type="number" id="first_name" class="bg-white border border-gray-300 text-gray-900 outline-none text-sm rounded-lg focus:ring-gray-150 focus:border-blue-500 block w-full px-2.5 py-1.5" placeholder="1" required />
                                </div>
                                <div className="flex gap-4">
                                  <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stock status</label>
                                  <div>
                                    <div class="flex items-center mb-4">
                                      <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 outline-none" />
                                      <label htmlFor="default-radio-1" class="ms-2 text-xs font-medium text-gray-600">In stock</label>
                                    </div>
                                    <div class="flex items-center mb-4">
                                      <input id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 outline-none" />
                                      <label htmlFor="default-radio-2" class="ms-2 text-xs font-medium text-gray-600">Out of stock</label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            }
                            {sidebarActive === 3 &&
                              <div className="space-y-3">
                                <div className="">
                                  <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Weight (kg)</label>
                                  <input type="number" id="first_name" class="bg-white border border-gray-300 text-gray-900 outline-none text-sm rounded-lg focus:ring-gray-150 focus:border-blue-500 block w-full px-2.5 py-1.5" placeholder="" required />
                                </div>
                                <div className="flex items-center gap-4">
                                  <label for="first_name" class="block mb-2 text-xs font-medium text-gray-900 dark:text-white">Dimensions (cm)</label>
                                  <div className="flex flex-wrap gap-1 ">
                                    <div>
                                      <input
                                        type="number"
                                        id="length"
                                        class="bg-white border border-gray-300 text-gray-900 outline-none text-sm rounded-lg focus:ring-gray-150 focus:border-blue-500 block w-full px-2.5 py-1.5"
                                        placeholder="Length"
                                        required />
                                    </div>
                                    <div>
                                      <input
                                        type="number"
                                        id="width"
                                        class="bg-white border border-gray-300 text-gray-900 outline-none text-sm rounded-lg focus:ring-gray-150 focus:border-blue-500 block w-full px-2.5 py-1.5"
                                        placeholder="Width"
                                        required />
                                    </div>
                                    <div>
                                      <input
                                        type="number"
                                        id="height"
                                        class="bg-white border border-gray-300 text-gray-900 outline-none text-sm rounded-lg focus:ring-gray-150 focus:border-blue-500 block w-full px-2.5 py-1.5"
                                        placeholder="Height"
                                        required />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            }
                          </>
                        )
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4 space-y-4">
              <div className="bg-white border rounded px-3 py-1.5">
                <div className=" border-b py-2">
                  <h3 className="text-sm">Publish</h3>
                </div>
                <div className="py-5 max-w-[230px] mx-auto">
                  <button className="bg-gradient-to-br from-gray-150 to-gray-250 text-white rounded-md text-sm py-2.5 w-full font-semibold">Publish</button>
                </div>
              </div>

              <div className="bg-white border rounded px-3 py-2.5 space-y-3">
                <div className=" border-b py-2">
                  <h3 className="text-sm font-semibold">Product Image</h3>
                </div>
                <div>
                  <div class="flex items-center justify-center w-full">
                    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                      <div class="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg class="w-8 h-8 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                        </svg>
                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                      </div>
                      <input id="dropzone-file" type="file" class="hidden" />
                    </label>
                  </div>
                </div>
              </div>

              <div className="bg-white border rounded px-3 py-2.5 space-y-3">
                <div className=" border-b py-2">
                  <h3 className="text-sm font-semibold">Product Gallery</h3>
                </div>
                <div className="">
                  <button className="text-xs font-medium text-blue-700 text-opacity-60 underline">Add product gallery images</button>
                </div>
              </div>

              <div className="bg-white border rounded px-3 py-2.5 space-y-3">
                <div className=" border-b py-2">
                  <h3 className="text-sm font-semibold">Product Categories</h3>
                </div>
                <div className="">
                  <div className="h-56 overflow-y-auto border p-2.5 space-y-2.5">
                    <p>All Categories</p>
                    <div class="flex items-center">
                      <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 accent-white border-gray-300 rounded-md outline-none focus:outline-none" />
                      <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Bags</label>
                    </div>
                    <div class="flex items-center">
                      <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 accent-white border-gray-300 rounded-md outline-none focus:outline-none" />
                      <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Footwears</label>
                    </div>
                    <div class="flex items-center">
                      <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 accent-white border-gray-300 rounded-md outline-none focus:outline-none" />
                      <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">HandBags</label>
                    </div>
                    <div class="flex items-center">
                      <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 accent-white border-gray-300 rounded-md outline-none focus:outline-none" />
                      <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sportswears</label>
                    </div>
                    <div class="flex items-center">
                      <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 accent-white border-gray-300 rounded-md outline-none focus:outline-none" />
                      <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sportswears</label>
                    </div>
                    <div class="flex items-center">
                      <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 accent-white border-gray-300 rounded-md outline-none focus:outline-none" />
                      <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sportswears</label>
                    </div>
                    <div class="flex items-center">
                      <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 accent-white border-gray-300 rounded-md outline-none focus:outline-none" />
                      <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sportswears</label>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
