import React from 'react'
import Navbar from '../Components/Navbar';
import { TileLayer, Marker, Popup, MapContainer, Tooltip } from "react-leaflet";
import { useNavigate } from 'react-router-dom';

function MapView() {
  const navigate =useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center">
        <Navbar />
        <div className="w-[100vw] h-[90vh] flex-auto bg-[#F2F5FB] mt-16 rounded-lg z-10">
            <MapContainer
              center={[12.987109, 80.229081]}
              zoom={13}
              scrollWheelZoom={false}
              className="markercluster-map"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[12.989283, 80.231484]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
                <Tooltip permanent>
                  <p>{"S22"}</p>
                </Tooltip>
              </Marker>
            </MapContainer>
          </div>
          <div className="w-[80%] z-[1001] fixed bottom-0 flex flex-row justify-between items-center mb-[2%] mt-[2%]">
          <button className="bg-[#323B4B] px-4 py-2 text-white font-semibold rounded-lg" onClick={()=>navigate('/select-dates')}>Back</button>
      </div>
    </div>
  )
}

export default MapView