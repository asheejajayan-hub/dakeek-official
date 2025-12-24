import Link from "next/link";

interface ServiceCardProps {
  title: string;
  href: string;
  icon: React.ElementType<{ className?: string }>;
  features: string[];
  variant?: "default" | "emergency";
}

export default function ServiceCard({
  title,
  href,
  icon: Icon,
  features,
  variant = "default",
}: ServiceCardProps) {
  const isEmergency = variant === "emergency";

  return (
    <Link
      href={href}
      className={`service-card block p-10 h-[36vh] flex flex-col justify-between transition-[background-color,box-shadow,color] duration-500 ease-out cursor-pointer group border-b md:border-b-0 md:border-r border-[#E5E5E5] last:border-r-0 ${isEmergency
        ? "bg-[#111] text-white border-none shadow-2xl hover:bg-black"
        : "bg-white hover:bg-[#F9F9F7] text-[#111] hover:shadow-xl"
        }`}
    >
      <Icon
        className={`w-12 h-12 transition-[transform,color] duration-500 ease-out ${isEmergency
          ? "text-red-600 animate-pulse group-hover:scale-110"
          : "text-[#86868b] group-hover:text-[#A18262] group-hover:scale-110"
          }`}
      />
      <div>
        <h3
          className={`text-2xl mb-4 transition-[color,letter-spacing] duration-500 ease-out font-playfair italic ${isEmergency
            ? "text-white group-hover:tracking-widest"
            : "text-[#111] group-hover:text-[#A18262] group-hover:tracking-widest"
            }`}
        >
          {title}
        </h3>
        <ul
          className={`text-xs space-y-2 font-mono uppercase tracking-wide transition-opacity duration-500 ${isEmergency ? "text-white/60 group-hover:text-white/80" : "text-[#86868b] group-hover:text-[#555]"
            }`}
        >
          {features.map((feature, index) => (
            <li key={index} className="transition-transform duration-300" style={{ transitionDelay: `${index * 50}ms` }}>
              • {feature}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
