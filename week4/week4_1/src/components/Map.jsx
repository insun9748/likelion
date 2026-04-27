import React, { useEffect, useRef } from 'react';
import pinImage from '../assets/img/pin.png';
import '../assets/sass/map.scss';

export const Map = () =>{
    const container = useRef(null);

    const places = [
  { 
    name: "펠어커피초코 성신여대점", 
    address: "서울 성북구 동소문로17길 17 1층", 
    lat: 37.5932592702063, 
    lng: 127.014910770907
  },
  { 
    name: "초이양식", 
    address: "서울 성북구 동소문로20나길 24 2층 쵸이양식", 
    lat: 37.5922880194418, 
    lng: 127.018008412693 
  },
  { 
    name: "뿡어당", 
    address: "서울 성북구 보문로34길 94 1층 102호", 
    lat: 37.5912266879892, 
    lng: 127.020539358041 
  },
];


    useEffect(()=>{
        const { kakao } = window;

        if (!kakao){
            console.error("sdk 로드 X");
            return;
        }

        const position = new kakao.maps.LatLng(37.591310, 127.022131);
        const options = {
            center: position,
            level: 3,
        };

        const map = new kakao.maps.Map(container.current, options);

        places.forEach((place) => {
            const markerPosition = new kakao.maps.LatLng(place.lat, place.lng);
            const imageSize = new kakao.maps.Size(35, 42);
            const markerImage = new kakao.maps.MarkerImage(pinImage, imageSize);
            const marker = new kakao.maps.Marker({
                position: markerPosition,
                map: map,
                image: markerImage,
    });
});


    },[]);

return(
    <div style={{position:"relative", width:"100%", height:"100vh"}}>
        
        {/* 왼쪽 패널 */}
        <div className="panel">
            <h2>My Hot-place Map</h2>
            <h4>Saved Places</h4>
            {places.map((place, index) => (
                <div className="placeCard" key={index}>
                    <img src={pinImage} alt="pin" className="pinIcon"/>
                    <div>
                        <p className="placeName">{place.name}</p>
                        <p className="placeAddress">{place.address}</p>
                    </div>
                </div>
))}
        </div>

        {/* 지도 */}
        <div
            ref={container}
            style={{position:"absolute", top:0, left:0, width:"100%", height:"100vh",zIndex:1}}
        />
    </div>
);
};

export default Map;