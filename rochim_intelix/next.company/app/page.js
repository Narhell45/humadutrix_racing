import Image from "next/image";

import DataImage from "@/public/data";

import HeroInfo from "@/cmponents/HeroInfo";

import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* title */}
      <div className="py-20">
        <h1 className="sm:text-6xl/tight text-5xl/tight sm:text-center text-left">
          Tingkatkan kualitas hidup anda <br/> Bersama kami
        </h1>
      </div>
      {/* title */}

      {/* Hero Image */}
      <div className="max-w-5xl mx-auto relative">
        <Image src={DataImage.Hero} alt="f" priority />

        <HeroInfo />
      </div>
      {/* Hero Image */}

      {/* Layanan */}
      <div className="grid lg:grid-cols-3 mt-32 gap-10 md:grid-cols-2 grid-cols-1">
        <div>
          <i className="ri-money-dollar-circle-fill ri-3x text-slate-700"></i>
          <p className="font-semibold text-2xl/normal mb-2">Memberikan Harga Terbaik</p>
          <p className="text-base/loose">
            lorem ipsum dolor vewes dablo pante miguadala la ddelmonte estafique laravesto
            del monte do fa filio mamipapi
          </p>
        </div>
        <div>
          <i className="ri-service-fill ri-3x text-slate-700"></i>
          <p className="font-semibold text-2xl/normal mb-2">Memberikan Harga Terbaik</p>
          <p className="text-base/loose">
            lorem ipsum dolor vewes dablo pante miguadala la ddelmonte estafique laravesto
            del monte do fa filio mamipapi
          </p>
        </div>
        <div>
          <i className="ri-star-s-fill ri-3x text-slate-700"></i>
          <p className="font-semibold text-2xl/normal mb-2">Memberikan Harga Terbaik</p>
          <p className="text-base/loose">
            lorem ipsum dolor vewes dablo pante miguadala la ddelmonte estafique laravesto
            del monte do fa filio mamipapi
          </p>
        </div>
      </div>
      {/* Layanan */}

      {/* Proyek */}
      <div className="mt-32">
        <h1 className="text-4xl/normal text-center font-semibold">Proyek Kami</h1>
        <p className="text-base/loose text-center"> 
          lorem ipsum dolor vewes dablo pante miguadala la ddelmonte estafique laravesto
          del monte do fa filio mamipapi
        </p>

        <div className="mt-20">
          <div>
            <Image src={DataImage.Proyek1} alt="Proyek Image" />
            <h1>Proyek Pertama</h1>
            <p>
              lorem ipsum dolor vewes dablo pante miguadala la ddelmonte estafique laravesto
              del monte do fa filio mamipapi
            </p>
            <div>
              <Link href={""}>Lihat Website</Link>
            </div>
          </div>
        </div>
      </div>
      {/* Proyek */}
    </>    
  );
}
