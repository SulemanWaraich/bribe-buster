import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { BribeReport } from '../types';

L.Marker.prototype.options.icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const Heatmap = () => {
  const [reports, setReports] = useState<BribeReport[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = () => {
      try {
        const storedReports = JSON.parse(localStorage.getItem('bribeReports') || '[]');
        const validReports = storedReports.filter(
          (report: BribeReport) =>
            report.location &&
            typeof report.location.lat === 'number' &&
            typeof report.location.lng === 'number'
        );
        setReports(validReports);
      } catch (error) {
        console.error('Failed to load reports:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const getColor = (amount: number) => (amount > 5000 ? '#ff0000' : '#3388ff');
  const getRadius = (amount: number) => Math.min(20, Math.max(5, amount / 1000));

  const formatDate = (date?: Date | string) => {
    if (!date) return 'Date not available';
    return new Date(date).toLocaleString();
  };

  return (
    <div className="rounded-2xl shadow-lg border border-gray-200 overflow-hidden bg-white h-[500px]">
      {loading ? (
        <div className="h-full flex items-center justify-center animate-pulse">
          <p className="text-gray-500">Loading corruption data...</p>
        </div>
      ) : (
        <MapContainer
          center={[30.3753, 69.3451]} // Pakistan
          zoom={5}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; OpenStreetMap contributors'
          />
          {reports.map(
            (report) =>
              report.location && (
                <CircleMarker
                  key={report.reportId || Math.random().toString()}
                  center={[report.location.lat, report.location.lng]}
                  radius={getRadius(report.amount)}
                  pathOptions={{
                    color: getColor(report.amount),
                    fillColor: getColor(report.amount),
                    fillOpacity: 0.65,
                    weight: 2,
                  }}
                >
                  <Popup>
                    <div className="space-y-1 min-w-[200px]">
                      <h3 className="font-semibold text-base">{report.department}</h3>
                      <p className="text-red-600 font-medium">
                        {report.amount.toLocaleString()} PKR
                      </p>
                      <p className="text-sm text-gray-500">
                        {formatDate(report.timestamp)}
                      </p>
                      {report.reportId && (
                        <p className="text-xs text-gray-400">
                          Case ID: {report.reportId}
                        </p>
                      )}
                    </div>
                  </Popup>
                </CircleMarker>
              )
          )}
        </MapContainer>
      )}
    </div>
  );
};

export default Heatmap;
