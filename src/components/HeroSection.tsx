// src/components/HeroSection.tsx
export default function HeroSection() {
    return (
      <section className="bg-green-500 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Belanja Mudah di Tokopedia Clone</h1>
          <p className="mt-4 text-lg">
            Temukan produk terbaik untuk kebutuhan Anda dengan harga terjangkau.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-green-500 font-bold rounded-lg shadow hover:shadow-md">
            Mulai Belanja
          </button>
        </div>
      </section>
    );
  }
  