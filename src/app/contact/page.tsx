import Image from "next/image";
import ShopImage from "@/Pictures/shophero.png";

export default function Contact() {
  return (
    <>
      {/* Header Section with Background Image */}
      <section className="relative">
        <Image
          src={ShopImage}
          alt="Background"
          className="w-full h-64 object-cover absolute top-0 left-0"
        />
        <div className="relative bg-opacity-50 py-8">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-black">
              <br />
              Contact
            </h1>
            <p className="text-black-300 mt-2">Home &gt; Contact</p>
          </div>
        </div>
      </section>

      <br />
      <br />
      <br />
      <br />

      {/* Get In Touch Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Get In Touch With Us
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mt-2 mb-10">
            For More Information About Our Product & Services, Please Feel Free To Drop Us
            An Email. Our Staff Always Be There To Help You Out. If you have Any Query you have feel free to contact us. Do Not Hesitate!
          </p>

          {/* Contact Form */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Side with Contact Information */}
            <div className="w-full lg:w-1/2 space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <span className="text-yellow-500 text-2xl">📍</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Address</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    236 5th SE Avenue, New York NY10000, United States
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <span className="text-yellow-500 text-2xl">📞</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Phone</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Mobile: +(84) 546-6789 <br />
                    Hotline: +(84) 456-6789
                  </p>
                </div>
              </div>

              {/* Working Time */}
              <div className="flex items-start gap-4">
                <span className="text-yellow-500 text-2xl">⏰</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Working Time</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Monday–Friday: 9:00 - 22:00 <br />
                    Saturday–Sunday: 9:00 - 21:00
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="w-full lg:w-1/2">
              <form action="#" className="space-y-6 bg-white p-6 rounded-lg shadow-md">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Abc"
                    className="block w-full mt-1 p-2 border rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Abc@def.com"
                    className="block w-full mt-1 p-2 border rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-900">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="This is optional"
                    className="block w-full mt-1 p-2 border rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Hi! I'd like to ask about"
                    className="block w-full mt-1 p-2 border rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-2 px-4 text-black bg-[#B88E2F] p-2 hover:bg-[#B88E2F]-600 rounded-md"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="bg-pink-100 dark:bg-gray-800 py-8">
        <div className="container mx-auto flex flex-wrap justify-around items-center gap-8">
          <div>
            <h3 className="text-black-500 text-lg">🏆 High Quality</h3>
            <p className="text-gray-500 dark:text-gray-400">Crafted from top materials</p>
          </div>
          <div>
            <h3 className="text-black-500 text-lg">🛡 Warranty Protection</h3>
            <p className="text-gray-500 dark:text-gray-400">Over 2 years</p>
          </div>
          <div>
            <h3 className="text-black-500 text-lg">🚚 Free Shipping</h3>
            <p className="text-gray-500 dark:text-gray-400">Order over $150</p>
          </div>
          <div>
            <h3 className="text-black-500 text-lg">🕒 24/7 Support</h3>
            <p className="text-gray-500 dark:text-gray-400">Dedicated support</p>
          </div>
        </div>
      </section>
    </>
  );
}
