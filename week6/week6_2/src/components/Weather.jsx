import { useState, useEffect } from "react";

const CATEGORY_MAP = {
  TMP: "기온(TMP)",
  SKY: "하늘상태(SKY)",
  PTY: "강수형태(PTY)",
  POP: "강수확률(POP)",
  WSD: "풍속(WSD)",
  PCP: "1시간강수량(PCP)",
  UUU: "동서바람성분(UUU)",
  VVV: "남북바람성분(VVV)",
  VEC: "풍향(VEC)",
  WAV: "파고(WAV)",
};

function Weather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const API_KEY = "a9f1a5c4d403b84964aa403019bf8a3d60cbe80cf3b7d6a7ac3eacb54dd0c160";

    const url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${API_KEY}&pageNo=1&numOfRows=10&dataType=JSON&base_date=20260509&base_time=0500&nx=60&ny=127`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setWeather(data.response.body.items.item);
      });
  }, []);

  return (
    <div>
      <h1>날씨 정보</h1>
      {weather ? (
        weather.map((item, index) => (
          <div key={index}>
            <p>{CATEGORY_MAP[item.category] || item.category}: {item.fcstValue}</p>
          </div>
        ))
      ) : (
        <p>로딩 중...</p>
      )}
    </div>
  );
}

export default Weather;