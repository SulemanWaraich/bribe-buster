// src/pages/MapPage.tsx
import Heatmap from '../components/HeatMap';
import Leaderboard from '../components/Leaderboard';
import { useBribeContext } from '../context/BribeContext';

export default function MapPage() {
  const { reports } = useBribeContext();

  return (
    <div className="min-h-screen bg-gray-900 py-10 px-4 lg:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h1 className="text-4xl font-extrabold text-white">Corruption Heatmap</h1>
            <p className="text-base text-white mt-1">
              Explore geographic distribution of reported bribes.
            </p>
          </div>
          <Heatmap />
        </div>

        <div className="space-y-6">
          <h1 className='text-3xl text-white font-extrabold text-center'>Departments with Highest Reported Bribes</h1>
          <Leaderboard reports={reports} />
          
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">How to Use</h3>
            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
              <li><span className="text-red-500 font-bold">Red markers</span> = High bribe amounts</li>
              <li>Click markers for details</li>
              <li>Data updates automatically</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}