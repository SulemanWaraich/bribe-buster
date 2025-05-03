import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons
const DefaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

const HeatMap = () => {
  // Static mock data for UI demonstration
  const mockReports = [
    { lat: 24.8607, lng: 67.0011, amount: 5000, department: 'Traffic Police' }, // Karachi
    { lat: 31.5204, lng: 74.3587, amount: 3000, department: 'Tax Office' }, // Lahore
    { lat: 33.6844, lng: 73.0479, amount: 7000, department: 'Electricity Dept' } // Islamabad
  ];

  return (
    <div className="h-[500px] w-full rounded-lg overflow-hidden border border-gray-300">
      <MapContainer 
        center={[30.3753, 69.3451]} // Pakistan coordinates
        zoom={6} 
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {mockReports.map((report, index) => (
          <Marker key={index} position={[report.lat, report.lng]}>
            <Popup className="font-sans">
              <div className="space-y-1">
                <h3 className="font-bold">{report.department}</h3>
                <p>Avg. Bribe: {report.amount.toLocaleString()} PKR</p>
                <p className="text-sm text-gray-600">Click to view details</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default HeatMap;