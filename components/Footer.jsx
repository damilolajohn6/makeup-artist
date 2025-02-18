


function Footer() {
  return (
    <section
      className="relative text-white h-[400px] py-8"
      style={{ backgroundImage: "url('/assets/chalo.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>

      <div className="relative container mx-auto px-4 flex flex-col gap-8 md:flex-row items-center justify-center md:justify-between space-y-8 md:space-y-0">
        {/* Sign-Up Section */}
        <div className="bg-gray-800 bg-opacity-80 p-6 rounded-md text-center md:text-left w-[70%] md:w-2/3 lg:w-[70%]">
          <h3 className="text-2xl font-bold mb-4">
            Sign up for our Newsletter
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-accent focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-accent focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </form>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center justify-end md:items-end w-[30%] md:w-1/3">
          <h4 className="text-3xl font-semibold mb-4">Follow Us</h4>
          <ul className="space-y-2 text-lg">
            {["Instagram", "Facebook", "TikTok", "Twitter", "WhatsApp"].map(
              (platform) => (
                <li
                  key={platform}
                  className="hover:underline cursor-pointer hover:accent transition"
                >
                  {platform}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
      <div className="relative text-white mx-auto px-6 sm:px-10 text-center pt-12 flex items-center justify-center">
        <p className="text-sm font-semibold">
          &copy; {new Date().getFullYear()} All rights reserved. Danna Makeup
        </p>

      </div>
    </section>
  );
}

export default Footer;
