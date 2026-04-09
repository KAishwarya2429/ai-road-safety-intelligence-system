import { useState } from "react";
import ChatBox from "../../../src/components/ChatBox";
import RiskCard from "../../../src/components/RiskCard";
import MapView from "../../../src/components/MapView";

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <h1>🚦 AI Road Safety Intelligence</h1>

      <ChatBox setData={setData} setLoading={setLoading} />

      {loading && (
        <div className="glass">
          <p>⏳ Analyzing road safety data...</p>
        </div>
      )}

      {data && (
        <>
          <div className="glass">
            <h2>🧠 AI Insights</h2>
            <p>{data.ai}</p>
          </div>

          <h2>📊 Risk Zones</h2>

          {data.zones.map((zone, i) => (
            <div key={i} style={{ marginBottom: "20px" }}>
              <RiskCard zone={zone} />
              <MapView zone={zone} />
            </div>
          ))}
        </>
      )}
    </div>
  );
}
