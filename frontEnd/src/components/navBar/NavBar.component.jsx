import { useContext } from "react";
import { Link } from "react-router-dom";
import { PostContext } from "../../context/post.context";

export default function NavigationBarComponent() {
  const { user } = useContext(PostContext);

  return (
    <nav className="bg-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <h1 className="text-white font-bold text-xl">Food Gram</h1>
            </Link>
          </div>
          <div className="flex">
            <ul className="flex items-center space-x-4">
              <li>
                <Link
                  to="/"
                  className="text-white hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
              </li>
              {user ? (
                <>
                  <li>
                    <Link
                      to="/private-area"
                      className="text-white hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Private Area
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/posts"
                      className="text-white hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Posts
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/posts/new"
                      className="text-white hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Create Posts
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/logout"
                      className="text-white hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Close Session
                    </Link>
                  </li>
                </>
              ) : (
                <li>
                  <Link
                    to="/login"
                    className="text-white hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
