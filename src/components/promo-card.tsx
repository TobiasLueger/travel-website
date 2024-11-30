import Image from 'next/image'

export function PromoCard() {
  return (
    <div className="relative h-[300px] rounded-xl overflow-hidden">
      <Image
        src="/placeholder.svg?height=300&width=500"
        alt="Japan travel promotion"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 to-transparent" />
      <div className="absolute top-8 left-8 text-white">
        <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm mb-4">
          Deal
        </div>
        <h3 className="text-2xl font-bold mb-2">Book hotel 50% off</h3>
        <p className="text-sm opacity-90">
          More than 100 hotels are discount waiting for you
        </p>
      </div>
    </div>
  )
}

