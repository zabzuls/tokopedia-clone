// src/components/PromoBanner.tsx
type PromoBannerProps = {
    message: string;
    link: string;
  };
  
  export default function PromoBanner({ message, link }: PromoBannerProps) {
    return (
      <div className="bg-yellow-400 text-black p-4 rounded-lg shadow-md flex justify-between items-center">
        <span className="font-semibold">{message}</span>
        <a
          href={link}
          className="text-green-600 font-bold hover:underline"
        >
          Lihat Selengkapnya
        </a>
      </div>
    );
  }
  