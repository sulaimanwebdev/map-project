import { MapContainer, TileLayer, CircleMarker } from "react-leaflet";
import RoutineMachine from "./RoutineMachine";
import React,{useEffect, useState} from 'react';

function App() {

  const [position, setposition] = useState([])
  
  const getLocation = () => {
    if (!navigator.geolocation) {
      console.log('Geolocation is not supported by your browser');
    } else {
      console.log('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        // console.log(null);
        // console.log(position.coords.latitude);
        // console.log(position.coords.longitude);
        setposition([position.coords.latitude,position.coords.longitude])
      }, () => {
        // console.log('Unable to retrieve your location');
      });
    }
  }

  useEffect(() => {
    
    getLocation();
  }, [])
  
  return (
    <>
    <div className="grid grid-rows-2 h-full min-h-screen max-h-screen w-full overflow-hidden">
      <div className="w-full">
      <MapContainer  zoom={10} scrollWheelZoom={true}>
<TileLayer
attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>
<CircleMarker center={position}></CircleMarker>
      <RoutineMachine/>
    </MapContainer>
      </div>
      <div className="w-full grid grid-rows-[160px,1fr] ">
        <div className="flex text-white justify-between gap-[2px] w-full bg-[#474FFE] pt-5 px-3 pb-3 rounded-b-3xl">
        <div className="h-full">
             <div className="relative grid grid-cols-[21px,1fr]">
               <div className="transform translate-y-2">
              <div className="bg-[#64FC2F] rounded-full min-w-[13px] min-h-[13px] max-w-[13px] max-h-[13px]"></div>
              <div className="bg-[#64FC2F] my-[4px] transform- translate-x-[6px] w-[2px] h-[calc(100%-65px)]"></div>
              <div className="bg-[#64FC2F] rounded-full min-w-[13px] min-h-[13px] max-w-[13px] max-h-[13px]"></div>
               </div>
               <div>
                {/* POINT A */}
               <div className="text-[15px] font-[700]">Pick up (08/07)  (56 mi) away</div>
               <div className="text-[15px] font-[600]">Ft smith, ARKANSA</div>
 
                {/* POINT B*/}
                <div className="text-[15px] font-[700] mt-[15px]">Delivery (2,028 mi) trip miles</div>
                <div className="text-[15px] font-[600]">Halethorpe,MARYLAND</div>
               </div>
             </div>
          </div>
           <div>
                <div className="flex justify-between gap-4"><div className="text-[15px] font-[500] whitespace-nowrap">All miles</div><div className="text-[18px] font-[700] transform -translate-y-[2px]">2,345</div></div>
                <div className="flex justify-between mt-2"><div className="text-[15px] font-[500]">RPM</div><div className="text-[15px] font-[500]">$3.58/ mi</div></div>
                <div className="flex justify-between"><div className="text-[15px] font-[500]">RPM+</div><div className="text-[15px] font-[500]">$3.42/ mi</div></div>
                <div className="mt-3 flex items-center justify-between gap-2"><button><svg width="18" height="20" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 9H7.5C7.63261 9 7.75979 9.05268 7.85355 9.14645C7.94732 9.24021 8 9.36739 8 9.5C8 9.63261 7.94732 9.75979 7.85355 9.85355C7.75979 9.94732 7.63261 10 7.5 10H0.5C0.367392 10 0.240215 9.94732 0.146447 9.85355C0.0526785 9.75979 0 9.63261 0 9.5C0 9.36739 0.0526785 9.24021 0.146447 9.14645C0.240215 9.05268 0.367392 9 0.5 9ZM0 6.5L5 1.5L6.5 3L1.5 8H0V6.5ZM5.5 1L6.5 0L8 1.5L6.9995 2.5005L5.5 1Z" fill="#F9F9F9"/></svg></button><div className="text-[27px] font-[700]">$4,730</div></div>
           </div>
        </div>

        <div className="sidebar-scroll w-full overflow-y-auto">
        <div className="w-full pt-5">
             <div className="px-3 flex gap-3"><div className="text-[20px] font-[700] transform -translate-y-1">Transgroup Express LLC</div><div><span className="text-[15px] text-[#81878C] font-[500] mr-1">(Refrence</span><span className="text-[16px] font-[600]">#1234)</span></div></div>
             <div className="mt-5 w-full py-2.5 px-3 border-t border-b grid grid-cols-[115px,1fr]"><div className="text-[15px] text-[#60676D] font-[500]">Full/Partial</div><div className="text-[15px] text-[#474FFE] font-[600]">Full</div></div>
             <div className="w-full py-2.5 px-3  border-b grid grid-cols-[115px,1fr]"><div className="text-[15px] text-[#60676D] font-[500]">Weight</div><div className="text-[15px] text-[#474FFE] font-[600]">2,345 lbs</div></div>
             <div className="w-full py-2.5 px-3  border-b grid grid-cols-[115px,1fr]"><div className="text-[15px] text-[#60676D] font-[500]">Type</div><div className="text-[15px] text-[#474FFE] font-[600]">Van</div></div>
             <div className="w-full py-2.5 px-3  border-b grid grid-cols-[115px,1fr]"><div className="text-[15px] text-[#60676D] font-[500]">Length</div><div className="text-[15px] text-[#474FFE] font-[600]">53 ft</div></div>
            
            <div className="w-full mt-5 px-3 ">
            <div className="text-[15px] text-[#81878C] font-[600] mb-1.5">Comments</div>
            <div className="text-[15px] text-[#60676D] font-[600] mb-[60px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus proin tortor ut lectus nisi, nunc, semper neque.dipiscing elit.ctus proin tortor ut lectus nisi, nunc, semper nequsi, nunc, semper neque.dipiscing elit. Lectus proin tortor ut lectus nisi, nunc, semper nequ.</div>
            </div>
        </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;