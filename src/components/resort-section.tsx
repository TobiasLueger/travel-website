import Image from 'next/image'

const resorts = [
  {
    title: "Beautiful Resort at the Sea",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    title: "Beautiful Resort at the Lake",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    title: "Beautiful Resort at the Mountain",
    image: "/placeholder.svg?height=200&width=200"
  }
]

export function ResortSection() {
  return (
    <section className="text-center space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">Let's book best Resort</h2>
        <p className="text-gray-600">Discover a great place to adventure</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {resorts.map((resort, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="relative h-48 w-48 mx-auto mb-4 rounded-full overflow-hidden">
              <Image
                src={resort.image}
                alt={resort.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="font-semibold">{resort.title}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

