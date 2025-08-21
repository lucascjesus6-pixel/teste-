type Props = {
  title: string
}

export default function Card({ title }: Props) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="text-lg font-semibold text-purple-700">{title}</h3>
    </div>
  )
}

