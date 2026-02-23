import React from "react";

interface CardServiceProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

export default function CardService({
  Icon,
  title,
  description,
}: CardServiceProps) {
  return (
    <div className="bg-white/10 backdrop-blur-xl p-4 rounded-lg w-full h-28">
      <div className="flex flex-row justify-center items-center gap-4 w-full h-full">
        <Icon className="w-12 h-12 text-primary" />
        <div className="flex flex-col">
          <h2 className="font-semibold text-md">{title}</h2>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}
