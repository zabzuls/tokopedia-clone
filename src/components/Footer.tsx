// src/components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-white shadow mt-4">
        <div className="container mx-auto p-4 text-center text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Tokopedia Clone. All rights reserved.
        </div>
      </footer>
    );
  }
  