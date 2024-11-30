import Image from 'next/image'

export function BestPackage() {
  return (
    <section className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Best Package for you</h2>
        <p className="text-gray-500">Check our special packages for travel</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-48">
            <Image
              src="/placeholder.svg?height=200&width=400"
              alt="Japanese pagoda"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 space-y-4">
            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
              Hot
            </div>
            <h3 className="text-xl font-semibold">Accompanied by a professional tour guide</h3>
            <p className="text-gray-600">Our professional tour guide will accompany you throughout your journey, providing insights and ensuring a smooth travel experience.</p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-pink-500">$699</span>
              <button className="px-4 py-2 border border-pink-500 text-pink-500 rounded-full hover:bg-pink-50">
                Book Now
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-48">
            <Image
              src="/placeholder.svg?height=200&width=400"
              alt="Mountain landscape"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 space-y-4">
            <div className="inline-block px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
              New
            </div>
            <h3 className="text-xl font-semibold">Explore hidden gems with local experts</h3>
            <p className="text-gray-600">Discover off-the-beaten-path locations and immerse yourself in local culture with our expert guides.</p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-pink-500">$799</span>
              <button className="px-4 py-2 border border-pink-500 text-pink-500 rounded-full hover:bg-pink-50">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

