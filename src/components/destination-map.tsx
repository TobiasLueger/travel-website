export function DestinationMap() {
  return (
    <section className="space-y-4">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold">Let's find your destination</h2>
        <p className="text-gray-600">Go explore the World</p>
      </div>
      <div className="relative h-[400px] bg-blue-50 rounded-xl">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=800')] bg-no-repeat bg-center bg-contain opacity-30" />
        
        <div className="absolute top-1/4 left-1/4 bg-white p-2 rounded-lg shadow-lg">
          <div className="text-sm font-semibold">Sky Dive</div>
          <div className="text-xs text-gray-500">⭐️ 4.8</div>
        </div>
        
        <div className="absolute bottom-1/3 right-1/3 bg-white p-2 rounded-lg shadow-lg">
          <div className="text-sm font-semibold">Ocean sea</div>
          <div className="text-xs text-gray-500">⭐️ 4.7</div>
        </div>
      </div>
    </section>
  )
}

