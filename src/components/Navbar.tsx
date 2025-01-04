import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-screen h-[121px] bg-white border-b border-slate-300 fixed top-0 z-50">
      <nav className="w-[1382px] h-[38px] flex items-center mx-auto mt-[30px]">
        <Image src="/assets/icons/logo.svg" alt="Logo" width={100} height={100} />
        <button
          className="text-[#000000] opacity-[54.0%] text-[14px] pl-[32px] pr-[16px]"
          arial-label="Kategori"
        >
          Kategori
        </button>
        <form
          role="search"
          className="w-[820px] h-[38px] flex border-slate-300 border mr-[49px] rounded-md p-1 focus-within:border-[#00aa5b]"
        >
          <Image
            src={"/assets/icons/search.svg"}
            height={24}
            width={24}
            alt="search"
          />
          <input
            className="w-full h-full ml-2 outline-none text-sm"
            type="text"
            placeholder="Cari Produk di Tokopedia"
          />
        </form>
        <Link
          href={"/cart"}
          className="hover:bg-[#f0f3f7] w-[40px] h-[40px] flex justify-center items-center rounded-lg"
          arial-label="Keranjang"
        >
          <Image src="/assets/icons/cart.svg" alt="Logo" width={24} height={24} />
        </Link>
        <Link
          href={"/login"}
          className="w-[74px] h-[32px] border rounded-lg border-[#00aa5b] text-[#00aa5b] flex justify-center items-center ml-[57px] mr-[12px]"
        >
          Masuk
        </Link>
        <Link
          href={"/login"}
          className="w-[74px] h-[32px] bg-[#00aa5b] rounded-lg text-white flex justify-center items-center"
        >
          Daftar
        </Link>
      </nav>
      <section className="flex justify-between mt-[17px] ml-[230px] text-[#000000] opacity-[54.0%] text-[14px]">
        <div className="space-x-[13px]">
          <Link href="/">Samsung Note 10</Link>
          <Link href="/products">Charger Mobil</Link>
          <Link href="/about">Samsung A20 </Link>
          <Link href="/contact">Pocco Phone 14</Link>
        </div>
        <div className="flex justify-center items-center mr-[230px]">
          <Link href={"/lokasi"}>
            <Image src={"/assets/icons/maps.svg"} width={20} height={20} alt="maps" />
          </Link>
          <p className="text-[#000000] opacity-[54.0%] text-[14px]">
            Dikirim ke Jakarta
          </p>
        </div>
      </section>
    </header>
  );
}
