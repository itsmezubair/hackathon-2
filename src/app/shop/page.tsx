import Image from "next/image";
import ShopImage from "@/Pictures/shophero.png";
import { IoIosArrowForward } from "react-icons/io";
import Products from "@/components/Products";
import BlowHero from "@/components/ShopBlowHero";

export default function ShopHero() {
  interface Card {
    name: string;
    age: number;
    description: string;
    image: string;
    price: string;
  }

  const data: Card[] = [
    {
      name: 'Syltherine',
      price: "Rp 2.500.000",
      age: 30,
      image: 'https://via.placeholder.com/100',
      description: 'Stylish cafe chair',
    },
    {
      name: 'Jane Smith',
      price: "Rp 2.500.000",
      age: 25,
      image: 'https://via.placeholder.com/100',
      description: 'A creative designer who loves creating stunning visuals.',
    },
    {
      name: 'Sam Wilson',
      price: "Rp 2.500.000",
      age: 28,
      image: 'https://via.placeholder.com/100',
      description: 'A software engineer specializing in backend systems.',
    },
    {
      name: 'Sam Wilson',
      price: "Rp 2.500.000",
      age: 28,
      image: 'https://via.placeholder.com/100',
      description: 'A software engineer specializing in backend systems.',
    },
    {
      name: 'Sam Wilson',
      price: "Rp 2.500.000",
      age: 28,
      image: 'https://via.placeholder.com/100',
      description: 'A software engineer specializing in backend systems.',
    },
    {
      name: 'Sam Wilson',
      price: "Rp 2.500.000",
      age: 28,
      image: 'https://via.placeholder.com/100',
      description: 'A software engineer specializing in backend systems.',
    },
    {
      name: 'Sam Wilson',
      price: "Rp 2.500.000",
      age: 28,
      image: 'https://via.placeholder.com/100',
      description: 'A software engineer specializing in backend systems.',
    },
    {
      name: 'Sam Wilson',
      price: "Rp 2.500.000",
      age: 28,
      image: 'https://via.placeholder.com/100',
      description: 'A software engineer specializing in backend systems.',
    },
    {
      name: 'Syltherine',
      price: "Rp 2.500.000",
      age: 30,
      image: 'https://via.placeholder.com/100',
      description: 'Stylish cafe chair',
    },
    {
      name: 'Jane Smith',
      price: "Rp 2.500.000",
      age: 25,
      image: 'https://via.placeholder.com/100',
      description: 'A creative designer who loves creating stunning visuals.',
    },
    {
      name: 'Sam Wilson',
      price: "Rp 2.500.000",
      age: 28,
      image: 'https://via.placeholder.com/100',
      description: 'A software engineer specializing in backend systems.',
    },
    {
      name: 'Sam Wilson',
      price: "Rp 2.500.000",
      age: 28,
      image: 'https://via.placeholder.com/100',
      description: 'A software engineer specializing in backend systems.',
    },
    {
      name: 'Sam Wilson',
      price: "Rp 2.500.000",
      age: 28,
      image: 'https://via.placeholder.com/100',
      description: 'A software engineer specializing in backend systems.',
    },
    {
      name: 'Sam Wilson',
      price: "Rp 2.500.000",
      age: 28,
      image: 'https://via.placeholder.com/100',
      description: 'A software engineer specializing in backend systems.',
    },
    {
      name: 'Sam Wilson',
      price: "Rp 2.500.000",
      age: 28,
      image: 'https://via.placeholder.com/100',
      description: 'A software engineer specializing in backend systems.',
    },
    {
      name: 'Sam Wilson',
      price: "Rp 2.500.000",
      age: 28,
      image: 'https://via.placeholder.com/100',
      description: 'A software engineer specializing in backend systems.',
    },
  ];

  return (
    <>
      {/* Header Section */}
      <section className="relative">
        <Image
          src={ShopImage}
          alt="Shop Background"
          className="w-full h-64 object-cover absolute top-0 left-0"
        />
        <div className="relative bg-opacity-50 py-8">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-black">
              <br />
              Shop
            </h1>
            <p className="text-gray-300 mt-2">Home &gt; Shop</p>
          </div>
        </div>
      </section>

      <br />
      <br />
      <br />

      {/* Hero Section Below the Header */}
      <BlowHero />

      {/* Cards Section */}
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.map((card, index) => (
          <div
            key={index}
            className="card bg-white shadow-lg rounded-lg overflow-hidden transition-all hover:shadow-xl"
          >
            <img
              src={card.image}
              alt={card.name}
              className="w-full h-56 object-cover"
            />
            <div className="card-body p-4">
              <h5 className="card-title text-xl font-semibold text-gray-800">
                {card.name}
              </h5>
              <p className="card-text text-gray-600 mt-2">{card.description}</p>
              <h5 className="text-lg font-bold text-gray-800 mt-4">{card.price}</h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
