export function Newsletter() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Subscribe Newsletter & get discount</h2>
      <div className="flex space-x-2">
        <input 
          type="email" 
          placeholder="Your E-mail address"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <button className="px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition duration-300">
          Submit
        </button>
      </div>
    </div>
  )
}

