export default function Card({ title }: Props) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300 cursor-pointer">
      <h3 className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">{title}</h3>
    </div>
  )
}
