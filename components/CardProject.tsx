export default function CardProject({
  title,
  img,
  onClick,
}: {
  title: string;
  img: string;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col justify-center items-center bg-white/30 dark:bg-gray-100/10 backdrop-blur-xl p-2 rounded-lg w-full h-full hover:scale-105 duration-300 cursor-pointer">
      <img src={img} alt={title} className="w-full h-full object-fit" />
      <p className="mt-1 font-medium text-sm">{title}</p>
    </div>
  );
}
