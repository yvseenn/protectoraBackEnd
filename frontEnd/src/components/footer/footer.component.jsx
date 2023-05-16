
const FooterComponent = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-gray-800">
      <div className="container mx-auto px-4 flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 lg:w-1/4 text-white px-4 mb-8">
          <h2 className="text-xl font-bold mb-4">About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 text-white px-4 mb-8">
          <h2 className="text-xl font-bold mb-4">Contact</h2>
          <p>Email: info@example.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 text-white px-4 mb-8">
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 text-white px-4 mb-8">
          <h2 className="text-xl font-bold mb-4">Newsletter</h2>
          <p>Subscribe to our newsletter for updates.</p>
          <form className="mt-2">
            <input
              className="w-full px-4 py-2 rounded-sm bg-gray-700 text-gray-200 focus:outline-none"
              type="email"
              placeholder="Enter your email"
            />
            <button
              className="mt-2 px-4 py-2 bg-gray-600 text-gray-200 rounded-sm hover:bg-gray-700"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
