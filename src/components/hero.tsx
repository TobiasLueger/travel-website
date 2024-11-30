'use client'

import { useState } from 'react'
import Image from 'next/image'

export function Hero() {
  const [selectedTab, setSelectedTab] = useState('hotel')

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-center py-12">
      <div className="space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Discover a beautiful<br />place with us
        </h1>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-lg p-6 space-y-4 max-w-[500px]">
            <div className="flex space-x-4 mb-4">
              {['Hotel', 'Flight', 'Packages'].map((tab) => (
                <button
                  key={tab}
                  className={`px-4 py-2 text-sm font-medium rounded-full ${
                    selectedTab.toLowerCase() === tab.toLowerCase()
                      ? 'bg-pink-100 text-pink-600'
                      : 'text-gray-500 hover:bg-gray-100'
                  }`}
                  onClick={() => setSelectedTab(tab.toLowerCase())}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="w-full pl-10 pr-12 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-pink-500 hover:bg-pink-600 text-white rounded-full p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Check in"
                    className="w-full pl-10 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Check out"
                    className="w-full pl-10 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full border-2 border-white bg-gray-200"
                />
              ))}
            </div>
            <p className="text-sm text-gray-600">
              More than <span className="font-semibold text-pink-500">100,000</span> people travel with us
            </p>
          </div>
        </div>
      </div>
      <div className="relative h-[500px] w-full">
        <Image
          src="/placeholder.svg?height=500&width=600"
          alt="Japanese pagoda illustration"
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>
    </div>
  )
}

