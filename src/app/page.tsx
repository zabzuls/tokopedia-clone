import HeroSection from "../components/HeroSection";
import CategorySection from "../components/CategorySection";
import ProductCard from "../components/ProductCard";
import Carousel from "../components/Carousel";
import PromoBanner from "../components/PromoBanner";

export default function HomePage() {
  const sampleProducts = [
    { image: "/images/product1.jpg", name: "Produk 1", price: 100000 },
    { image: "/images/product2.jpg", name: "Produk 2", price: 200000 },
    { image: "/images/product3.jpg", name: "Produk 3", price: 150000 },
    { image: "/images/product4.jpg", name: "Produk 4", price: 250000 },
  ];

  return (
    <div>
      <Carousel />
      <div className="container mx-auto p-4">
        <PromoBanner
          message="Diskon hingga 50% untuk kategori elektronik!"
          link="/promo/elektronik"
        />
        <HeroSection />
        <CategorySection />
        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">Produk Terbaru</h2>
          <div className="grid grid-cols-4 gap-4">
            {sampleProducts.map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                name={product.name}
                price={product.price}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
