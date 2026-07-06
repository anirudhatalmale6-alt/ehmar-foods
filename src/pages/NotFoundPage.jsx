import { Link } from 'react-router-dom';
import { Home, ShoppingCart } from 'lucide-react';

/* NotFoundPage — 404 */

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-7xl font-bold text-primary/20 mb-2">404</p>
        <h1 className="text-2xl font-bold text-dark mb-3">Page Not Found</h1>
        <p className="text-gray-500 mb-8">
          Sorry, the page you are looking for does not exist or may have been
          moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="btn-primary no-underline">
            <Home className="w-5 h-5" /> Go Home
          </Link>
          <Link to="/shop" className="btn-secondary no-underline">
            <ShoppingCart className="w-5 h-5" /> Browse Shop
          </Link>
        </div>
      </div>
    </div>
  );
}
