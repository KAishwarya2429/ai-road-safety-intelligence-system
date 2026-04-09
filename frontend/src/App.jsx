import { useState } from "react";
import axios from "axios";

export default function App() {
  const [input, setInput] = useState("");
  const [zones, setZones] = useState([]);
  const [ai, setAI] = useState("");
  const [loading, setLoading] = useState(false);

  const getColor = (risk) => {
    if (risk === "High") return "#ff4d4f";
    if (risk === "Medium") return "#faad14";
    return "#52c41a";
  };

  const handleSubmit = async () => {
    if (!input) return;

    setLoading(true);

    try {
      const res = await axios.post("http://127.0.0.1:5000/api/safety", {
        query: input,
      });

      setZones(res.data.zones);
      setAI(res.data.ai);
    } catch (error) {
      alert("Backend connection error");
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial",
        background: "#0f172a",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ textAlign: "center" }}>
        🚦 AI Road Safety Intelligence System
      </h1>

      <div style={{ textAlign: "center", margin: "20px" }}>
        <input
          placeholder="Ask about road safety..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            padding: "12px",
            width: "60%",
            borderRadius: "10px",
            border: "none",
          }}
        />

        <button
          onClick={handleSubmit}
          style={{
            marginLeft: "10px",
            padding: "12px 20px",
            borderRadius: "10px",
            background: "#2563eb",
            color: "white",
            border: "none",
          }}
        >
          Ask
        </button>
      </div>

      {loading && <h3>🚀 Analyzing road safety...</h3>}

      {ai && (
        <>
          <h2>🧠 AI Insight</h2>
          <p>{ai}</p>
        </>
      )}

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {zones.map((zone, i) => (
          <div
            key={i}
            style={{
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              background: "rgba(255,255,255,0.1)",
              borderRadius: "15px",
              padding: "15px",
              margin: "10px",
              width: "300px",
            }}
          >
            <h3>📍 {zone.area}</h3>

            <span
              style={{
                background: getColor(zone.risk),
                padding: "5px 10px",
                borderRadius: "10px",
              }}
            >
              {zone.risk}
            </span>

            <p>🧠 {zone.reason}</p>
            <p>💡 {zone.suggestion}</p>

            <iframe
              width="100%"
              height="200"
              src={`https://www.google.com/maps?q=${zone.area} Pune&output=embed`}
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}
