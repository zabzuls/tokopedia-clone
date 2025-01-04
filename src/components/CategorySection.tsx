// src/components/CategorySection.tsx
import Image from "next/image";
type CategoryProps = {
    name: string;
    icon: string;
  };
  
  const categories: CategoryProps[] = [
    { name: "Elektronik", icon: "/icons/electronics.svg" },
    { name: "Fashion", icon: "/icons/fashion.svg" },
    { name: "Kesehatan", icon: "/icons/health.svg" },
    { name: "Olahraga", icon: "/icons/sports.svg" },
  ];
  
  export default function CategorySection() {
    return (
      <div className="my-8">
        <h2 className="text-2xl font-bold mb-4">Kategori Populer</h2>
        <div className="grid grid-cols-4 gap-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex flex-col items-center bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition"
            >
              <Image src={category.icon} width={200} height={200} alt={category.name} className="w-12 h-12 mb-2" />
              <span className="text-gray-700">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
