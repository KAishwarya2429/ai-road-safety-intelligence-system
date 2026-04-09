import { useState } from "react";
import { fetchSafetyData } from "../../client/src/services/api";

export default function ChatBox({ setData, setLoading }) {
  const [input, setInput] = useState("");

  const handleSubmit = async () => {
    if (!input) return;

    setLoading(true);
    const res = await fetchSafetyData(input);
    setData(res.data);
    setLoading(false);
  };

  return (
    <div className="glass" style={{ marginBottom: "20px" }}>
      <h2>Ask AI Road Assistant</h2>

      <div style={{ display: "flex", marginTop: "10px" }}>
        <input
          placeholder="e.g. Show accident-prone areas in Pune"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={handleSubmit}>Ask</button>
      </div>
    </div>
  );
}
