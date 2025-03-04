function Footer() {
  return (
    <footer
      className="relative text-white py-12 bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/chalo.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Sign-Up Section */}
        <div className="bg-gray-800 bg-opacity-80 p-6 rounded-md text-center md:text-left w-full md:w-2/3 lg:w-1/2">
          <h3 className="text-2xl font-bold mb-4">
            Sign up for our Newsletter
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#A28E66]"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#A28E66]"
            />
            <button
              type="submit"
              className="w-full bg-[#A28E66] hover:bg-[#3c3422] text-white font-semibold py-2 rounded-md transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div className="w-full md:w-1/3 text-center md:text-right">
          <h4 className="text-3xl font-semibold mb-4">Follow Us</h4>
          <ul className="space-y-2 text-lg">
            {["Instagram", "Facebook", "TikTok", "Twitter", "WhatsApp"].map(
              (platform) => (
                <li
                  key={platform}
                  className="hover:underline cursor-pointer transition duration-300 hover:text-[#A28E66]"
                >
                  {platform}
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="relative text-white text-center mt-10 px-6">
        <p className="text-sm font-semibold">
          &copy; {new Date().getFullYear()} All rights reserved. Danna Makeup
        </p>
      </div>
    </footer>
  );
}

export default Footer;
