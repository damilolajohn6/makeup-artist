function QuoteForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold mb-6">Get a quote</h2>

        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Full name"
              className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Message
            </label>
            <textarea
              placeholder="Details of services needed"
              className="w-full px-4 py-3 h-24 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
            ></textarea>
          </div>

          {/* Dates */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Dates
            </label>
            <input
              type="date"
              className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#A28E66] text-white font-semibold py-3 rounded-md hover:bg-[#584828] transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default QuoteForm;
