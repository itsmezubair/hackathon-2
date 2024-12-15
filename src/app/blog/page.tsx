import Image from "next/image";
import ShopImage from "@/Pictures/shophero.png";
import BlogPostImage1 from "@/Pictures/livingrooms.jpg";
import BlogPostImage2 from "@/Pictures/furniture.jpg";
import BlogPostImage3 from "@/Pictures/diningroom.jpg";

export default function Blog() {
  return (
    <>
      {/* Header Section with Background Image */}
      <section className="relative">
        <Image
          src={ShopImage}
          alt="Background"
          className="w-full h-64 object-cover absolute top-0 left-0"
          layout="fill"
        />
        <div className="relative bg-opacity-50 py-8">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-black">
              <br />
              Blog
            </h1>
            <p className="text-black-300 mt-2">Home &gt; Blog</p>
          </div>
        </div>
        <br />
        <br />
        <br />
      </section>

      {/* Blog Content */}
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Blog Post 1 */}
          <article className="bg-white p-6 rounded-lg shadow-md">
            <Image
              src={BlogPostImage1}
              alt="5 Tips to Style Your Living Room"
              className="w-full h-48 object-cover rounded-t-lg"
              width={500}
              height={300}
            />
            <h2 className="text-xl font-bold mt-4">
              5 Tips to Style Your Living Room
            </h2>
            <p className="text-gray-600 mt-2">
              Transform your living room into a cozy and stylish retreat with
              these simple tips.
            </p>
            <div className="flex items-center mt-4">
              <span className="text-gray-600 text-sm">Admin</span>
              <span className="text-gray-600 text-sm mx-2">|</span>
              <span className="text-gray-600 text-sm">Home</span>
            </div>
            <a
              href="/blog/post-1"
              className="text-blue-500 hover:underline mt-4 block"
            >
              Read More
            </a>
          </article>

          {/* Blog Post 2 */}
          <article className="bg-white p-6 rounded-lg shadow-md">
            <Image
              src={BlogPostImage2}
              alt="Top Furniture Trends of 2024"
              className="w-full h-48 object-cover rounded-t-lg"
              width={500}
              height={300}
            />
            <h2 className="text-xl font-bold mt-4">
              Top Furniture Trends of 2024
            </h2>
            <p className="text-gray-600 mt-2">
              Discover the latest trends in furniture design for your home in
              2024.
            </p>
            <div className="flex items-center mt-4">
              <span className="text-gray-600 text-sm">Admin</span>
              <span className="text-gray-600 text-sm mx-2">|</span>
              <span className="text-gray-600 text-sm">Trends</span>
            </div>
            <a
              href="/blog/post-2"
              className="text-blue-500 hover:underline mt-4 block"
            >
              Read More
            </a>
          </article>

          {/* Blog Post 3 */}
          <article className="bg-white p-6 rounded-lg shadow-md">
            <Image
              src={BlogPostImage3}
              alt="Choosing the Perfect Dining Table"
              className="w-full h-48 object-cover rounded-t-lg"
              width={500}
              height={300}
            />
            <h2 className="text-xl font-bold mt-4">
              Choosing the Perfect Dining Table
            </h2>
            <p className="text-gray-600 mt-2">
              Tips to help you find a dining table that fits your space and
              style.
            </p>
            <div className="flex items-center mt-4">
              <span className="text-gray-600 text-sm">Admin</span>
              <span className="text-gray-600 text-sm mx-2">|</span>
              <span className="text-gray-600 text-sm">Dining</span>
            </div>
            <a
              href="/blog/post-3"
              className="text-blue-500 hover:underline mt-4 block"
            >
              Read More
            </a>
          </article>
        </div>

        {/* Sidebar Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          <aside className="md:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-4">Search</h3>
              <input
                type="text"
                placeholder="Search..."
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-lg font-bold mb-4">Categories</h3>
              <ul>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Crafts
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Design
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Handmade
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Interior
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Wood
                  </a>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
              <ul>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Exploring new ways of decorating
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Handmade pieces that took time to make
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
