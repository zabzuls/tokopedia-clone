// src/app/layout.tsx
import './globals.css';
// import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: "Tokopedia Clone",
  description: "Cloning website Tokopedia menggunakan Next.js, TypeScript, dan Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 font-sans">
        <Navbar />
        <main className="container mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
