const stats = [
  { value: "1000+", label: "Hotels" },
  { value: "1001+", label: "Destination Travel" },
  { value: "9999+", label: "Trusted by Customer" }
]

export function Stats() {
  return (
    <div className="grid grid-cols-3 gap-8 py-8">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-2xl font-bold">{stat.value}</div>
          <div className="text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}

