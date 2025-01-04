// src/components/ProductCard.tsx
import Image from "next/image";
type ProductCardProps = {
    image: string;
    name: string;
    price: number;
  };
  
  export default function ProductCard({ image, name, price }: ProductCardProps) {
    return (
      <div className="border rounded-lg shadow-sm hover:shadow-md transition p-4">
        <Image src={image} width={200} height={200} alt={name} className="w-full h-40 object-cover rounded-md" />
        <h3 className="mt-2 text-lg font-semibold">{name}</h3>
        <p className="text-green-600 font-bold mt-1">Rp {price.toLocaleString()}</p>
      </div>
    );
  }
  