interface Props {
  title: string;
}

export default function Card({ title }: Props) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <h3 className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        {title}
      </h3>
    </div>
  );
}
