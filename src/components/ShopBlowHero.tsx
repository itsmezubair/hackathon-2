import Image from "next/image";
import Filter from "@/Pictures/filter.png";

export default function BlowHero() {
    return (
        <>
            <div className="showBlowBar w-full h-16 bg-[#F9F1E7] flex justify-between items-center p-4 rounded-lg shadow-md">
                <div className="flex items-center space-x-4">
                    <Image src={Filter} width={30} alt="Filter icon" />
                    <p>Filter &nbsp; | Showing 1–16 of 32 results</p>
                </div>
                <div className="flex items-center space-x-4">
                    <p>Show</p>
                    <input className="w-10 h-10 bg-white text-white text-center rounded" type="text" placeholder="16" />
                    <p>Sort by</p>
                    <input className="w-32 h-10 bg-white text-white text-center rounded" type="text" placeholder="Default" />
                </div>
            </div>
        </>
    );
}
