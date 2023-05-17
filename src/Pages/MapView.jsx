/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo, useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import { TileLayer, Marker, Popup, MapContainer, Tooltip   } from "react-leaflet";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getMarkers } from "../Mock_Backend/server";
// import { bounds } from "leaflet";
import * as L from "leaflet";

function MapView() {
  const { state } = useLocation();
  console.log(state.markers)
  const navigate = useNavigate();
  const backend = useSelector((state) => state.data.backend);
  const [data, setData] = useState();
  console.log(data);
  useEffect(() => {
    //Mock Backend
    const getData=async()=>{
    if (!backend) {
        const data = await getMarkers();
        console.log(data);
        setData(data);
      }
    }
    getData();
  }, []);

  const bounds = useMemo(() => {
    const b = L.latLngBounds();
    if (!state.markers.length >0) {
      [
        [13.000564, 80.228634],
        [13.03001, 80.252646],
      ].forEach((coords) => {
        b.extend(coords);
      });
      // setComparison(false);
    } else {
      console.log("first")
        state.markers.forEach((coords) => {
        console.log(coords)
        b.extend(coords);
      });
    }
    return b;
  }, [state.markers]);
  
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Navbar />
      <div className="w-[100vw] h-[90vh] flex-auto bg-[#F2F5FB] mt-16 rounded-lg z-10">
        <MapContainer
          bounds={bounds}
          zoom={13}
          scrollWheelZoom={false}
          className="markercluster-map"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {data?.map((item) => {
            return (
              <Marker
                position={[item.value.lat, item.value.long]}
                key={item.value.dPM1}
              >
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
                <Tooltip permanent>
                  <p>{item.device}</p>
                </Tooltip>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
      <div className="w-[80%] z-[1001] fixed bottom-0 flex flex-row justify-between items-center mb-[2%] mt-[2%]">
        <button
          className="bg-[#323B4B] px-4 py-2 text-white font-semibold rounded-lg"
          onClick={() => navigate("/select-dates")}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default MapView;
