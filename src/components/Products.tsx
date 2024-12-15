import Image from "next/image";
// import Bedroom from "../public/bedroom.png"
export default function Products() {
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
      image: "/Hero.png",
      description: 'Stylish cafe chair',
    },
    {
      name: 'Jane Smith',
      price: "Rp 2.500.000",
      age: 25,
      image: "/images.png",
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
      <div className="product">
        <h2 className="text-center p-2 font-bold text-[3rem]">Our Product</h2>
      </div>

      {/* Cards Container */}
      <div className="cardsContainer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {data.map((card, index) => (
          <div className="card" key={index} style={{ width: "85%" }}>
            <img
              src={card.image}
              className="card-img-top object-cover w-full h-64 rounded-lg"
              alt={card.name}
            />
            <div className="card-body p-4">
              <h5 className="card-title font-semibold">{card.name}</h5>
              <p className="card-text text-sm">{card.description}</p>
              <h5 className="card-title font-semibold">{card.price}</h5>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="flex items-center justify-center mb-12">
        <button className="productBtn text-[#B88E2F] p-2 border-2 border-[#B88E2F] rounded-full hover:bg-[#B88E2F] hover:text-white transition-all duration-300">
          Show More
        </button>
      </div>
    </>
  );
}
