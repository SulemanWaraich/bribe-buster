import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <div className="bg-gray-900 text-white py-20 px-4 text-center h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Fight Corruption in Pakistan</h1>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Report bribes anonymously and visualize corruption hotspots
      </p>
      <div className="space-x-4">
        <Link 
          to="/report" 
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold"
        >
          Report a Bribe
        </Link>
        <Link 
          to="/map" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold"
        >
          View Heatmap
        </Link>
      </div>
    </div>
  );
}