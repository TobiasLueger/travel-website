import Link from 'next/link'

export function Navigation() {
  return (
    <nav className="border-b py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-pink-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-pink-500">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                <line x1="7" y1="7" x2="7.01" y2="7" />
              </svg>
            </div>
            <span className="font-semibold text-xl">Travel</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-gray-600 hover:text-gray-900">Discover</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">Special Deal</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">About Us</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">Services</Link>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-pink-500 hover:text-pink-600">Travel</button>
            <button className="text-pink-500 hover:text-pink-600">Discover</button>
            <button className="border border-pink-500 text-pink-500 px-4 py-2 rounded-full hover:bg-pink-50">Login</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

